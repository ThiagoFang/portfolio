import { useNavigate } from "react-router-dom";
import * as C from "./styles";

interface IProps {
  icon: string;
  isLink: boolean;
  id?: string;
  to: string;
}

export const ExpandableButton = ({ icon, isLink, to, id }: IProps) => {
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
    <C.Container id={id} onClick={handleNavigateTo}>
      <i className={`${icon} icon`}></i>
    </C.Container>
  );
};
