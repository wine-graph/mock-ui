// Import WineCore interface from Wine.ts schema file
// Import WineCore interface from Wine.ts schema file
import type {WineCore} from './Wine';

// Re-export WineCore for backward compatibility
export type { WineCore };

// Export a class that implements the WineCore interface
// This allows importing WineCore as a value
export class WineCoreImpl implements WineCore {
  id: string = '';
  name: string = '';
  vintage: number = 0;
  size: number = 0;
  producer: string = '';
  color: string = '';
  closure: string = '';
  shape: string = '';
  type: string = '';
  description: string = '';
  alcohol: number = 0;
  acid: number = 0;
  pH: number = 0;
  bottleAging: number = 0;
  subarea: string = '';
}
