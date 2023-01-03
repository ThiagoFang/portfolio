import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface IProps {
  title: string;
  icon: string;
  isLink: boolean;
  id?: string;
  to: string;
}

export const FilledButton = ({ icon, isLink, title, to, id }: IProps) => {
  const navigate = useNavigate();

  const goTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(to), 200);
  };

  const handleNavigateTo = () => {
    if (isLink) {
      window.open(`${to}`, "_blank");
      return;
    }
    goTo();
  };

  return (
    <C.Container id={id} onClick={handleNavigateTo}>
      <span>{title}</span>
      <i className={`${icon} icon`}></i>
    </C.Container>
  );
};
