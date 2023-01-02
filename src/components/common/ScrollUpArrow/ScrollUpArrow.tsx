import { useEffect, useState } from "react";
import * as C from "./styles";

export const ScrollUpArrow = () => {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStatus(true);
        return;
      }
      setStatus(false);
    });
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <C.Container onClick={handleScrollUp} className={status ? "active" : ""}>
      <C.ArrowIcon className="ri-arrow-up-s-line"></C.ArrowIcon>
    </C.Container>
  );
};
