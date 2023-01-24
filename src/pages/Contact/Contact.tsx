import { FilledButton } from "../../components/common/Buttons/FilledButton";
import { NoBGButton } from "../../components/common/Buttons/NoBGButton";
import { InputBox } from "../../components/common/InputBox";
import { SectionTitle } from "../../components/common/SectionTitle";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../helpers/ContactSchema";

import { IContactForm } from "../../types/IContactForm";
import { SubmitHandler } from "react-hook-form/dist/types";

import * as C from "./styles";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({ resolver: yupResolver(ContactSchema) });

  const submitForm: SubmitHandler<IContactForm> = (data) => {
    alert("Função não disponivel");
  };

  const handleNavigateWhatsApp = () => {
    window.open("https://wa.me/5511963501700");
  };

  return (
    <C.Container>
      <SectionTitle
        grossFont="CONTACT"
        normalFont=""
        subtitle="Contato"
        id="contactTitle"
      />
      <C.Form onSubmit={handleSubmit(submitForm)}>
        <InputBox title="Seu nome" error={errors.name?.message}>
          <C.BasicInput
            className={errors.name ? "error" : ""}
            {...register("name")}
          />
        </InputBox>

        <InputBox title="E-Mail" error={errors.email?.message}>
          <C.BasicInput
            className={errors.email ? "error" : ""}
            {...register("email")}
          />
        </InputBox>

        <InputBox
          id="contactTextArea"
          error={errors.message?.message}
          title="Mensagem"
        >
          <C.TextArea
            className={errors.message ? "error" : ""}
            {...register("message")}
          />
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
            action={handleNavigateWhatsApp}
          />
        </C.ButtonsArea>
      </C.Form>
    </C.Container>
  );
};
