import { InitialLoading } from "../../components/common/InitialLoading";
import { Banner } from "../../components/Home/Banner";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <InitialLoading />
      <Banner />
    </C.Container>
  );
};
