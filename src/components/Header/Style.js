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
  height: 90px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    height: 70px;
    padding: 0 18px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 76px;
    width: auto;
    object-fit: contain;

    @media (max-width: 900px) {
      height: 68px;
    }
  }
`;

const MenuLista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;

  position: fixed;
  top: 96px;
  right: max(24px, calc((100vw - 1280px) / 2 + 24px));
  left: auto;
  width: 272px;
  z-index: 99;
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transform-origin: top right;
  opacity: ${({ $aberto }) => ($aberto ? "1" : "0")};
  transform: ${({ $aberto }) => ($aberto ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.97)")};
  pointer-events: ${({ $aberto }) => ($aberto ? "auto" : "none")};
  transition: opacity 160ms ease, transform 160ms ease;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.65);

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 18px;
    width: 9px;
    height: 9px;
    background: #0d0d0d;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
  }

  @media (max-width: 900px) {
    top: 70px;
    left: 0;
    right: 0;
    width: auto;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.32);
    opacity: 1;
    pointer-events: auto;
    transform: translateY(${({ $aberto }) => ($aberto ? "0" : "-200%")});
    transition: transform 240ms ease;

    &::before { display: none; }
  }
`;

const ItemMenu = styled.li`
  a {
    display: block;
    padding: 14px 24px;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.65);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    text-align: right;
    transition: color 160ms ease, background 160ms ease;

    &:hover {
      color: var(--amarelo);
      background: rgba(254, 199, 8, 0.08);
    }
  }

  @media (max-width: 900px) {
    a { text-align: left; }
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
  margin-left: auto;
  transition: background 160ms ease, color 160ms ease;

  &:hover {
    background: #000;
    color: var(--amarelo);
  }

  @media (max-width: 900px) {
    font-size: 0.82rem;
    padding: 8px 14px;
  }
`;

const MenuMobile = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: var(--branco);
  border-radius: 2px;

  &:hover { background: rgba(255, 255, 255, 0.08); }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 98;

  @media (max-width: 900px) {
    top: 70px;
  }
`;

const EmBreveSecao = styled.div`
  padding: 20px 24px 8px;
  margin-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;

const EmBreveTitulo = styled.span`
  display: block;
  font-family: var(--fonte-corpo);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.28);
  margin-bottom: 12px;
`;

const EmBreveLink = styled.a`
  display: inline-flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;
  padding: 10px 16px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--amarelo);
  background: rgba(254, 199, 8, 0.07);
  border: 1px solid rgba(254, 199, 8, 0.2);
  border-radius: 3px;
  transition: background 160ms ease, border-color 160ms ease;

  &:hover {
    background: rgba(254, 199, 8, 0.14);
    border-color: rgba(254, 199, 8, 0.4);
  }

  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

export {
  Nav, Container, LogoLink, MenuLista, ItemMenu, BotaoCta, MenuMobile, Backdrop,
  EmBreveSecao, EmBreveTitulo, EmBreveLink,
};
