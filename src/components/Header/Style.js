import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(14, 37, 84, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(245, 196, 0, 0);
  transition: background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(14, 37, 84, 0.97);
      border-bottom-color: rgba(245, 196, 0, 0.2);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
    `}
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 900px) {
    padding: 12px 18px;
    gap: 12px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 38px;
    width: auto;
    object-fit: contain;
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
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--azul);
    border-bottom: 1px solid rgba(245, 196, 0, 0.18);
    padding: 12px 0 18px;
    transform: translateY(${({ $aberto }) => ($aberto ? "0" : "-110%")});
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
    color: rgba(255, 255, 255, 0.82);
    border-radius: 6px;
    transition: color 160ms ease, background 160ms ease;

    &:hover {
      color: var(--amarelo);
      background: rgba(245, 196, 0, 0.08);
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
  font-family: var(--fonte-corpo);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: var(--azul);
  background: var(--amarelo);
  border-radius: 6px;
  flex-shrink: 0;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: #ffd322;
    transform: translateY(-1px);
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
  border-radius: 6px;

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
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(6, 16, 42, 0.6);
    z-index: -1;
  }
`;

export { Nav, Container, LogoLink, MenuLista, ItemMenu, BotaoCta, MenuMobile, Backdrop };
