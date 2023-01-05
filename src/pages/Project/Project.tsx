import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Project = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params.project);
  }, []);

  return (
    <C.Container>
      <div>Teste</div>
    </C.Container>
  );
};
