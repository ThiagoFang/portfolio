import { FilledButton } from "../../components/common/Buttons/FilledButton";
import { NoBGButton } from "../../components/common/Buttons/NoBGButton";
import { InputBox } from "../../components/common/InputBox";
import { SectionTitle } from "../../components/common/SectionTitle";
import * as C from "./styles";

export const Contact = () => {
  return (
    <C.Container>
      <SectionTitle
        grossFont="CONTACT"
        normalFont=""
        subtitle="Contato"
        id="contactTitle"
      />
      <C.Form>
        <InputBox name="Seu nome">
          <C.BasicInput />
        </InputBox>

        <InputBox name="E-Mail">
          <C.BasicInput />
        </InputBox>

        <InputBox id="contactTextArea" name="Mensagem">
          <C.TextArea className="" />
        </InputBox>

        <C.ButtonsArea id="buttonsArea">
          <FilledButton
            icon="ri-arrow-right-s-fill"
            title="Enviar"
            isLink={false}
            to=""
          />
          <NoBGButton
            icon="ri-arrow-right-up-line"
            isLink={false}
            title="Ou Entre em contato via whatsapp"
            to=""
          />
        </C.ButtonsArea>
      </C.Form>
    </C.Container>
  );
};
