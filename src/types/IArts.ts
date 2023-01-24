export interface IArts {
  arts: IArt[];
}

export interface IArt {
  title: string;
  links: {
    behance: string;
    instagram?: string;
  };
  img: string;
}
