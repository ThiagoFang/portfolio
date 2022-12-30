import styled from "styled-components";

const ArrowArea = styled.a`
  position: absolute;
  bottom: 4rem;
  cursor: pointer;

  span:nth-child(2) {
    animation-delay: -0.2s;
  }
  span:nth-child(3) {
    animation-delay: -0.4s;
  }
`;

const Arrow = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-bottom: 3px solid var(--main-subcolor);
  border-right: 3px solid var(--main-subcolor);
  transform: rotate(45deg);
  margin: -5px;
  animation: scroll 2.5s infinite;

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(10px, 10px);
    }
  }
`;

interface IProps {
  to: string;
}

export const ArrowDown = ({ to }: IProps) => {
  return (
    <ArrowArea href={to}>
      <Arrow />
      <Arrow />
      <Arrow />
    </ArrowArea>
  );
};
