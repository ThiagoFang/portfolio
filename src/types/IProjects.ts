export type Techs =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "node";

export interface IProject {
  title: string;
  description: {
    short: string;
    about: string;
    experience: string;
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
