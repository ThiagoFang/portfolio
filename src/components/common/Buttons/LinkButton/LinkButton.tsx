import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface IProps {
  title: string;
  icon: string;
  isLink: boolean;
  id?: string;
  to: string;
}

export const LinkButton = ({ title, icon, isLink, id, to }: IProps) => {
  const navigate = useNavigate();

  const goTo = () => {
    if (window.scrollY >= 200) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => navigate(to), 500);
      return;
    }
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
