import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  padding-top: 12rem;

  #projects {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 30rem);
`;
