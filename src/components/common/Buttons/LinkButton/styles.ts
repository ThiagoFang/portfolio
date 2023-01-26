import styled from "styled-components";

export const Containter = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: var(--secondary-background);
  border: 0.5px solid var(--main-color);
  padding: 0.8rem 3.2rem;
  color: var(--main-subcolor);
  border-radius: 0.4rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: box-shadow 0.1s;
  overflow: hidden;
  gap: 0.4rem;

  &:hover {
    box-shadow: 0 0 4px var(--main-color);
    animation: glow 5s linear infinite;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: var(--main-color);
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
  }

  &:hover::before {
    width: 200%;
  }

  &:hover span {
    color: var(--text-secondary);
  }

  &:hover .icon {
    color: var(--text-secondary);
  }

  @keyframes glow {
    0%,
    20% {
      box-shadow: 0 0 4px var(--main-color);
    }

    25%,
    50% {
      box-shadow: 0 0 8px var(--main-color);
    }
    52%,
    54% {
      box-shadow: 0 0 2px var(--main-color);
    }
    55%,
    60% {
      box-shadow: 0 0 10px var(--main-color);
    }
    62%,
    65% {
      box-shadow: 0 0 6px var(--main-color);
    }
    70%,
    95% {
      box-shadow: 0 0 4px var(--main-color);
    }
    95%,
    100% {
      box-shadow: 0 0 2px var(--main-color);
    }
  }

  @media screen and (max-height: 768px) {
    padding: 0.8rem 2.4rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  font-size: 2.4rem;

  .icon {
    color: #fff;
    transition: 0.25s ease-in-out;
  }

  @media screen and (max-height: 768px) {
    font-size: var(--h2-font-size);
  }
`;

export const Text = styled.span`
  z-index: 1;
  font-size: var(--h2-font-size);
  font-weight: 600;
  transition: 0.25s ease-in-out;

  @media screen and (max-height: 768px) {
    font-size: var(--h3-font-size);
  }
`;
