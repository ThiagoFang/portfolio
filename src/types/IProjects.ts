export type Techs =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "node";

interface IDescriptions {
  short: string;
  about: string;
  experience: string;
}
export interface IProject {
  title: string;
  description: {
    pt: IDescriptions;
    en: IDescriptions;
  };
  shortName: string;
  image: string;
  links: {
    github: string;
    external?: string;
  };
  techs: Techs[];
}

export type Projects = IProject[];
