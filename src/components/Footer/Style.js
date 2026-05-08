import styled from "styled-components";
import { Link } from "react-router-dom";

const Rodape = styled.footer`
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 72px 24px 24px;

  @media (max-width: 900px) {
    padding: 56px 18px 24px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr);
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ColunaLogo = styled.div`
  max-width: 320px;
`;

const Logo = styled.div`
  margin-bottom: 18px;
  img {
    height: 52px;
    width: auto;
  }
`;

const TextoMarca = styled.p`
  font-size: 0.92rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
`;

const Colunas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
`;

const Coluna = styled.div``;

const Titulo = styled.h4`
  font-family: var(--fonte-corpo);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--amarelo);
  margin: 0 0 18px;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-bottom: 12px;
    font-size: 0.88rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.65);

    svg {
      flex-shrink: 0;
      margin-top: 4px;
      color: rgba(255, 255, 255, 0.45);
    }
  }

  a {
    color: rgba(255, 255, 255, 0.78);
    transition: color 160ms ease;

    &:hover { color: var(--amarelo); }
  }
`;

const Linha = styled.div`
  max-width: 1280px;
  margin: 56px auto 24px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
`;

const Inferior = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 28px;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);

  .num {
    font-family: var(--fonte-mono);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const LinkPrivacidade = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  padding-bottom: 1px;
  transition: color 160ms ease, border-color 160ms ease;

  &:hover {
    color: var(--amarelo);
    border-color: var(--amarelo);
  }
`;

const BotaoTopo = styled.a`
  margin-left: auto;
  padding: 6px 12px;
  font-family: var(--fonte-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--amarelo);
  border: 1px solid rgba(245, 196, 0, 0.3);
  border-radius: 4px;
  transition: background 160ms ease;

  &:hover {
    background: rgba(245, 196, 0, 0.1);
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export {
  Rodape, Container, ColunaLogo, Logo, TextoMarca, Colunas, Coluna, Titulo,
  Lista, Linha, Inferior, LinkPrivacidade, BotaoTopo,
};
