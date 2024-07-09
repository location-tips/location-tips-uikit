interface CSSModule {
  /**
   * Returns the specific selector from imported stylesheet as string.
   */
  [key: string]: string;
}

declare module '*.module.css' {
  /**
   * A CSS module.
   */
  const styles: CSSModule;
  export default styles;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
