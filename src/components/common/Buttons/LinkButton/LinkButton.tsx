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

export const LinkButton = ({
  title,
  icon,
  isLink,
  id,
  to,
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
    <C.Containter onClick={handleNavigateTo} id={id ? id : ""}>
      <C.Icon>
        <i className={`${icon} icon`}></i>
      </C.Icon>
      <C.Text>{title}</C.Text>
    </C.Containter>
  );
};
