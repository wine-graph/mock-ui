// WineCore interface definition
export interface WineCore {
  id: string;
  name: string;
  vintage: number;
  size: number;
  producer: string;
  color: string;
  closure: string;
  shape: string;
  type: string;
  description: string;
  alcohol: number;
  acid: number;
  pH: number;
  bottleAging: number;
  subarea: string;
}

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
