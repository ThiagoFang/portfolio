type Techs = "html" | "css" | "javascript" | "typescript" | "react" | "node";

interface IProject {
  title: string;
  description: string;
  shortName: string;
  image: string;
  links: {
    github: string;
    external?: string;
  };
  techs: Techs[];
}

type Projects = IProject[];

export const projects: Projects = [
  {
    title: "Halloween Responsive Website",
    description: "Um site de halloween 100% responsivo e com mobile first",
    shortName: "halloweenWebsite",
    image: "https://i.postimg.cc/2SSNLk7F/teste.png",
    links: {
      github: "",
      external: "https://thiagofang.github.io/responsive-halloween-website/",
    },
    techs: ["html", "css", "javascript"],
  },
];
