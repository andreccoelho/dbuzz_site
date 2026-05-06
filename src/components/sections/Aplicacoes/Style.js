import styled, { keyframes, css } from "styled-components";
import { theme } from "../../../styles/theme";

const fade = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
`;

export const Wrapper = styled.section`
  background: ${theme.cores.bg};
  padding: 5rem 5vw;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3.5rem 5vw;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${theme.cores.azul2};
  margin-bottom: 0.6rem;
`;

export const Title = styled.h2`
  font-family: ${theme.fontes.titulo};
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: ${theme.cores.azul};
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.85rem;
`;

export const Sub = styled.p`
  font-size: 1rem;
  color: ${theme.cores.sub};
  line-height: 1.72;
  max-width: 590px;
  margin-bottom: 2rem;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;
`;

export const Tab = styled.button`
  padding: 0.5rem 1.1rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.corpo};
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  border: 1px solid ${theme.cores.borda};
  color: ${theme.cores.sub};
  transition: all 0.2s;

  ${({ $on }) =>
    $on &&
    css`
      background: ${theme.cores.azul};
      color: #fff;
      border-color: ${theme.cores.azul};
    `}

  &:hover {
    background: ${theme.cores.azul};
    color: #fff;
    border-color: ${theme.cores.azul};
  }
`;

export const Pane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  animation: ${fade} 0.35s ease-out;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Texto = styled.div``;

export const TagPill = styled.span`
  display: inline-block;
  font-size: 0.71rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.68rem;
  border-radius: 100px;
  margin-bottom: 0.65rem;

  ${({ $tipo }) =>
    $tipo === "priv"
      ? css`
          background: rgba(0, 150, 106, 0.1);
          color: ${theme.cores.verde};
        `
      : css`
          background: rgba(27, 79, 216, 0.08);
          color: ${theme.cores.azul2};
        `}
`;

export const PaneTitle = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.45rem;
  font-weight: 800;
  color: ${theme.cores.azul};
  margin-bottom: 0.7rem;
`;

export const PaneDesc = styled.p`
  font-size: 0.94rem;
  color: ${theme.cores.sub};
  line-height: 1.72;
  margin-bottom: 0.9rem;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  gap: 0.55rem;
  font-size: 0.9rem;
  color: ${theme.cores.sub};
  line-height: 1.6;

  &::before {
    content: "✓";
    color: ${theme.cores.verde};
    font-weight: 700;
    flex-shrink: 0;
  }
`;

const visuais = {
  v1: "linear-gradient(135deg, #E8F5F2, #B8EAE0)",
  v2: "linear-gradient(135deg, #EEF2FF, #C5D4FF)",
  v3: "linear-gradient(135deg, #F3E8FF, #D8C0FF)",
  v4: "linear-gradient(135deg, #FFF8E1, #FFE082)",
  v5: "linear-gradient(135deg, #FFF0F0, #FFD0D0)",
  v6: "linear-gradient(135deg, #E8EEF8, #C0D0F0)",
};

export const Visual = styled.div`
  border-radius: 14px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: ${({ $variante }) => visuais[$variante] || visuais.v1};
`;
