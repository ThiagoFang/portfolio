import * as C from "./styles";

export const Footer = () => {
  const handleOpenGit = () => {
    window.open("https://github.com/ThiagoFang");
  };

  return (
    <C.Footer>
      <p onClick={handleOpenGit}>2023 by Thiago Fang</p>
    </C.Footer>
  );
};
