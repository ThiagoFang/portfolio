import { Techs } from "../types/IProjects";

export const techRedirect = (tech: Techs) => {
  switch (tech) {
    case "css":
      window.open("https://developer.mozilla.org/pt-BR/docs/Web/CSS", "_blank");
      break;
    case "html":
      window.open(
        "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        "_blank"
      );
      break;
    case "javascript":
      window.open(
        "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        "_blank"
      );
      break;
    case "node":
      window.open("https://nodejs.org/en/", "_blank");
      break;
    case "react":
      window.open("https://reactjs.org/", "_blank");
      break;
    case "typescript":
      window.open("https://www.typescriptlang.org/", "_blank");
      break;
  }
};
