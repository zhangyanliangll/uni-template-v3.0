
export interface Route extends Record<string, any> {
  path: string;
  meta?: {
    ignoreAuth?: boolean;
    tabBar: boolean;
  };
  style: {
    navigationBarTitleText: string;
    [key: string]: string | boolean;
  };
}

export interface SubPackages {
  root: string;
  pages: Route[];
}
