import { AnimatedGradient } from "../../components/common/Backgrounds/AnimatedGradient";
import * as C from "./styles";

export const Projects = () => {
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div></div>
    </C.Container>
  );
};
