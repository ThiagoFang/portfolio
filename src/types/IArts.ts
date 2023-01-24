export type IArts = IArt[];
export interface IArt {
  title: string;
  links: {
    behance: string;
    instagram?: string;
  };
  img: string;
}
