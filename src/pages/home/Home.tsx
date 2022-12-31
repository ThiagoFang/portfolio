import { InitialLoading } from "../../components/common/InitialLoading";
import { AboutMe } from "../../components/Home/AboutMe";
import { Banner } from "../../components/Home/Banner";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <InitialLoading />
      <Banner />
      <AboutMe />
    </C.Container>
  );
};
