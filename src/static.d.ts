declare module "*.html" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.png" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.jpg" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.svg" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.ico" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.gif" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.ttf" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.woff" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.woff2" {
    const Contents: string;
    export default Contents;
  }
  declare module "*.txt" {
    const Contents: string;
    export default Contents;
  }
  
  declare module "*.script.js" {
    const Contents: string;
    export default Contents;
  }
  
  // Workaround related to: https://github.com/vercel/next.js/issues/29788
  declare type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
  };
  