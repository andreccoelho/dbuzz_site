import styled, { css } from "styled-components";

const tons = {
  verde: {
    grad1: "#064E3B",
    grad2: "#00966A",
    accent: "#00966A",
    pastel: "#A7F3D0",
  },
  azul: {
    grad1: "#0E2554",
    grad2: "#1B4FD8",
    accent: "#1B4FD8",
    pastel: "#BFDBFE",
  },
  laranja: {
    grad1: "#6B2200",
    grad2: "#B85600",
    accent: "#B85600",
    pastel: "#FED7AA",
  },
};

const Secao = styled.section`
  padding: 120px 24px;
  background: #fff;

  @media (max-width: 900px) {
    padding: 80px 18px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Cabecalho = styled.header`
  max-width: 720px;
  margin: 0 auto 72px;
  text-align: center;

  @media (max-width: 900px) {
    margin-bottom: 48px;
    text-align: left;
  }
`;

const Kicker = styled.span`
  display: inline-block;
  font-family: var(--fonte-mono);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--azul2);
  margin-bottom: 16px;
`;

const Titulo = styled.h2`
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
`;

const Lead = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--sub);
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--borda);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(14, 37, 84, 0.12);
    ${({ $cor }) =>
      css`
        border-color: ${tons[$cor].accent};
      `}
  }
`;

const CardTopo = styled.div`
  position: relative;
  padding: 32px 28px 28px;
  color: #fff;
  ${({ $cor }) => {
    const t = tons[$cor];
    return css`
      background: linear-gradient(135deg, ${t.grad1} 0%, ${t.grad2} 100%);
    `;
  }}

  /* textura sutil de pontos — anti-IA, evita gradiente "limpo demais" */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 18px 18px;
    pointer-events: none;
  }

  > * { position: relative; z-index: 1; }

  .kicker-frente {
    display: inline-block;
    font-family: var(--fonte-mono);
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.65);
    margin-bottom: 10px;
  }

  h3 {
    font-family: var(--fonte-titulo);
    font-size: 1.65rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    margin: 0 0 6px;
  }
`;

const IconeBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  margin-bottom: 18px;
`;

const Subtitulo = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 0.92rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
  margin: 0;
`;

const CardCorpo = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;

  > p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--sub);
    margin: 0 0 22px;
  }

  .nota-juridica {
    display: block;
    margin-bottom: 22px;
    padding: 12px 14px;
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--azul);
    background: rgba(245, 196, 0, 0.1);
    border-left: 3px solid var(--amarelo);
    border-radius: 4px;
  }
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const ItemLista = styled.li`
  position: relative;
  padding-left: 24px;
  font-size: 0.92rem;
  line-height: 1.45;
  color: var(--texto);

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    top: 0;
    font-family: var(--fonte-mono);
    font-weight: 500;
    ${({ $cor }) => css`
      color: ${tons[$cor].accent};
    `}
  }
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding: 12px 0;
  font-family: var(--fonte-corpo);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-bottom: 1px solid currentColor;
  align-self: flex-start;
  transition: gap 200ms ease;

  ${({ $cor }) =>
    css`
      color: ${tons[$cor].accent};
    `}

  &:hover { gap: 14px; }
`;

export {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, Card, CardTopo,
  IconeBox, Subtitulo, CardCorpo, Lista, ItemLista, CardLink,
};
