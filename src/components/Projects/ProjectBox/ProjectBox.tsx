import * as C from "./styles";

export const ProjectBox = () => {
  return (
    <C.Box img="/img/teste.png">
      <C.BlurArea>
        <C.Title>Halloween Responsive WebSite</C.Title>
        <C.SubTitle>
          Um site de halloween 100% responsivo e com mobile first
        </C.SubTitle>
      </C.BlurArea>
    </C.Box>
  );
};
