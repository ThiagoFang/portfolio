import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  inset: 0;
  height: 9vh;
  z-index: 4;
  background: linear-gradient(to left, rgba(18, 18, 20, 0.8), transparent);
  backdrop-filter: blur(1.5rem);
  box-shadow: 2px 2px 1.6rem rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 1024px) {
    padding: 0 4.8rem;
  }
`;

export const NavArea = styled.nav`
  display: flex;
  height: 100%;
  gap: 3.2rem;

  .logo {
    width: 4.5rem;
    align-self: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  height: 100%;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text-light);
  font-size: var(--normal-font-size);

  &:before {
    content: " ";
    position: absolute;
    background: linear-gradient(
      to left,
      transparent,
      var(--main-color),
      transparent
    );
    transform: translateX(-105%);
    opacity: 0;
    width: 8rem;
    height: 1px;
    bottom: 0.5rem;
    transition: opacity 0.8s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    animation: infinteSlide 2s linear infinite;
  }

  &:hover {
    color: var(--text-color);
  }

  &.selected {
    color: var(--text-color);
  }

  @keyframes infinteSlide {
    0% {
      transform: translateX(-105%);
    }

    100% {
      transform: translateX(105%);
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: var(--small-font-size);
  }
`;

export const IconsArea = styled.div`
  display: flex;
  height: max-content;
  gap: 3.2rem;

  .icon {
    color: var(--main-subcolor);
    font-size: var(--h1-font-size);
    cursor: pointer;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: var(--main-color);
    }

    @media screen and (max-width: 1024px) {
      font-size: var(--h2-font-size);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.i`
  color: var(--main-color);
  font-size: var(--h1-font-size);
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
