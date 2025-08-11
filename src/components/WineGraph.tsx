import React, { useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { mockProducers } from '../types/Producer';
import { mockWines } from '../types/Wine';
import { mockAreas, mockRegions } from '../types/WineDomain';

export type Node = { id: string; name: string; type: 'producer' | 'wine' | 'grape' | 'region' };
export type Link = { source: string; target: string };
export type GraphData = { nodes: Node[]; links: Link[] };

// Build graph data from mocks (memoized inside component)
function buildGraphData(): GraphData {
  const nodesMap = new Map<string, Node>();
  const links: Link[] = [];

  // Indexes for regions/areas and grapes for optional linking or name mapping
  const regionById = new Map(mockRegions.map(r => [r.id, r] as const));
  const areaById = new Map(mockAreas.map(a => [a.id, a] as const));
  // const grapeByName = new Map(mockGrapes.map(g => [g.name, g] as const));

  // Producers
  mockProducers.forEach(p => {
    const id = p.name; // use name as unique key per requirements
    if (!nodesMap.has(id)) nodesMap.set(id, { id, name: p.name, type: 'producer' });

    // Optional: try adding area/region for producer for later links if desired
    const area = areaById.get(p.areaId);
    if (area) {
      const areaName = area.name;
      if (!nodesMap.has(areaName)) nodesMap.set(areaName, { id: areaName, name: areaName, type: 'region' });
      const region = regionById.get(area.regionId);
      if (region) {
        const regionName = region.name;
        if (!nodesMap.has(regionName)) nodesMap.set(regionName, { id: regionName, name: regionName, type: 'region' });
        // Optional Area -> Region link
        links.push({ source: areaName, target: regionName });
      }
    }
  });

  // Wines + links to producer/grapes/area/region
  mockWines.forEach(w => {
    const wineNodeId = w.id; // stable key for wine
    const wineName = `${w.vintage ?? ''} ${w.name}`.trim();
    if (!nodesMap.has(wineNodeId)) nodesMap.set(wineNodeId, { id: wineNodeId, name: wineName, type: 'wine' });

    // Producer link (producer is stored as string name in mockWines)
    const producerNodeId = w.producer;
    if (!nodesMap.has(producerNodeId)) {
      nodesMap.set(producerNodeId, { id: producerNodeId, name: producerNodeId, type: 'producer' });
    }
    links.push({ source: producerNodeId, target: wineNodeId });

    // Grapes
    (w.wineComponents ?? []).forEach(gc => {
      const grapeId = gc.grapeName ?? gc.grapeId; // prefer human-friendly name
      if (grapeId) {
        const grapeName = typeof grapeId === 'string' ? grapeId : String(grapeId);
        if (!nodesMap.has(grapeName)) nodesMap.set(grapeName, { id: grapeName, name: grapeName, type: 'grape' });
        links.push({ source: wineNodeId, target: grapeName });
      }
    });

    // Area/Subarea best-effort mapping
    if (w.subarea) {
      const areaName = w.subarea;
      if (!nodesMap.has(areaName)) nodesMap.set(areaName, { id: areaName, name: areaName, type: 'region' });
      links.push({ source: wineNodeId, target: areaName });
    } else {
      // Try inferring from producer area
      const producer = mockProducers.find(p => p.name === w.producer);
      if (producer) {
        const area = areaById.get(producer.areaId);
        if (area) {
          const areaName = area.name;
          if (!nodesMap.has(areaName)) nodesMap.set(areaName, { id: areaName, name: areaName, type: 'region' });
          links.push({ source: wineNodeId, target: areaName });
        }
      }
    }
  });

  return { nodes: Array.from(nodesMap.values()), links };
}

const WineGraph: React.FC = () => {
  const graphRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const height = 420;

  const data: GraphData = useMemo(() => buildGraphData(), []);

  // Observe container size and update width
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        setWidth(Math.max(0, Math.floor(e.contentRect.width)));
      }
    });
    ro.observe(el);
    // Initialize immediately
    setWidth(Math.max(0, el.clientWidth));
    return () => ro.disconnect();
  }, []);

  // Fit the graph when width changes (initial mount and resizes)
  useEffect(() => {
    if (!graphRef.current) return;
    const fit = () => {
      if (graphRef.current) {
        try {
          graphRef.current.zoomToFit(0, 40); // instant fit with padding
        } catch {}
      }
    };

    // Call once after mount/width set
    const t = setTimeout(fit, 0);

    return () => {
      clearTimeout(t);
    };
  }, [width, data]);

  return (
    <div ref={containerRef} style={{ width: '100%', height }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        width={width}
        height={height}
        nodeAutoColorBy="type"
        cooldownTicks={120}
        onEngineStop={() => {
          if (graphRef.current && typeof graphRef.current.zoomToFit === 'function') {
            try { graphRef.current.zoomToFit(0, 40); } catch {}
          }
        }}
        // Disable interactions: view-only, fit-to-container
        enableZoomInteraction={false}
        enablePanInteraction={false}
        enableNodeDrag={false}
        // @ts-ignore: the library passes Node-like objects at runtime
        nodeLabel={(n: Node) => n.name}
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, _globalScale: number) => {
          const radius = node.type === 'producer' ? 12 : node.type === 'wine' ? 8 : 5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = node.color || '#888';
          ctx.fill();
        }}
        linkColor={() => 'rgba(100,100,100,0.6)'}
      />
    </div>
  );
};

export default WineGraph;
