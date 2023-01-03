import { InitialLoading } from "../../components/common/InitialLoading";
import { AboutMe } from "../../components/Home/AboutMe";
import { Banner } from "../../components/Home/Banner";
import { HireMe } from "../../components/Home/HireMe";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <InitialLoading />
      <Banner />
      <HireMe />
      <AboutMe />
    </C.Container>
  );
};
