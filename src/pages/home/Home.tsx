import { InitialLoading } from "../../components/common/InitialLoading";
import { AboutMe } from "../../components/Home/AboutMe";
import { Banner } from "../../components/Home/Banner";
import { HireMe } from "../../components/Home/HireMe";
import { motion } from "framer-motion";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <InitialLoading />
      <Banner />
      <HireMe />
      <AboutMe />
    </C.Container>
  );
};
