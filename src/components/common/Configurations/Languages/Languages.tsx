import * as C from "./styles";

export const Languages = () => {
  return (
    <C.Container>
      <C.TitleArea>
        <C.Title>Linguagem</C.Title>
        <C.SubTitle>Aqui você pode mudar o idioma principal do site</C.SubTitle>
      </C.TitleArea>
      <C.Section>
        <C.SelectArea>
          <C.SelectBox className="selected">
            <C.FlagIcon src="/svg/brazil.svg " alt="Bandeira do Brasil" />
            <C.CountryName>Português</C.CountryName>
          </C.SelectBox>
          <C.SelectBox>
            <C.FlagIcon src="/svg/usa.svg " alt="Bandeira do Brasil" />
            <C.CountryName>Inglês</C.CountryName>
          </C.SelectBox>
        </C.SelectArea>
      </C.Section>
    </C.Container>
  );
};
