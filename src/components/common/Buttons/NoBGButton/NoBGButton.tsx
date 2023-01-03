import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface IProps {
  title: string;
  icon: string;
  isLink: boolean;
  id?: string;
  to: string;
  scrollTop?: string;
}

export const NoBGButton = ({
  icon,
  isLink,
  title,
  to,
  id,
  scrollTop,
}: IProps) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(to);
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
      {title}
      <i className={`${icon} icon`}></i>
    </C.Container>
  );
};
