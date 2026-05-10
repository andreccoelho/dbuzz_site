import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 400ms ease, backdrop-filter 400ms ease, -webkit-backdrop-filter 400ms ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    `}
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 76px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 900px) {
    height: 70px;
    padding: 0 18px;
    gap: 12px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 48px;
    width: auto;
    object-fit: contain;

    @media (max-width: 900px) {
      height: 52px;
    }
  }
`;

const MenuLista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;

  @media (max-width: 900px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: rgba(0, 0, 0, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 12px 0 18px;
    transform: translateY(${({ $aberto }) => ($aberto ? "0" : "-200%")});
    transition: transform 240ms ease;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
  }
`;

const ItemMenu = styled.li`
  a {
    display: inline-block;
    padding: 8px 14px;
    font-size: 0.92rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.65);
    border-radius: 2px;
    transition: color 160ms ease, background 160ms ease;

    &:hover {
      color: var(--amarelo);
      background: rgba(254, 199, 8, 0.08);
    }
  }

  @media (max-width: 900px) {
    a {
      display: block;
      padding: 14px 24px;
      font-size: 1rem;
      border-radius: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
  }
`;

const BotaoCta = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  font-family: var(--fonte-titulo);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #000;
  background: var(--amarelo);
  border-radius: 3px;
  flex-shrink: 0;
  transition: background 160ms ease, color 160ms ease;

  &:hover {
    background: #000;
    color: var(--amarelo);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuMobile = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--branco);
  border-radius: 2px;

  &:hover { background: rgba(255, 255, 255, 0.08); }

  @media (max-width: 900px) {
    display: inline-flex;
    margin-left: auto;
  }
`;

const Backdrop = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

export { Nav, Container, LogoLink, MenuLista, ItemMenu, BotaoCta, MenuMobile, Backdrop };
