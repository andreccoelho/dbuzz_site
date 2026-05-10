import styled, { keyframes, css } from "styled-components";
import { theme } from "../../../styles/theme";

const fade = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
`;

export const Wrapper = styled.section`
  background: ${theme.cores.bg};
  padding: 5rem clamp(16px, 5vw, 5rem);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3.5rem 16px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9a6f00;
  margin-bottom: 0.6rem;
`;

export const Title = styled.h2`
  font-family: ${theme.fontes.titulo};
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: ${theme.cores.texto};
  letter-spacing: -0.025em;
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.35rem;  justify-content: center;
  }
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
      background: #000;
      color: #fff;
      border-color: #000;
    `}

  &:hover {
    background: #000;
    color: #fff;
    border-color: #000;
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
  border-radius: 2px;
  margin-bottom: 0.65rem;

  ${({ $tipo }) =>
    $tipo === "priv"
      ? css`
          background: #000;
          color: #fff;
        `
      : css`
          background: #000;
          color: #fec708;
        `}
`;

export const PaneTitle = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.45rem;
  font-weight: 800;
  color: ${theme.cores.texto};
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
    color: #9a6f00;
    font-weight: 700;
    flex-shrink: 0;
  }
`;

export const Visual = styled.div`
  border-radius: 6px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  background: var(--cinza-100);
  border: 1px solid var(--cinza-200);

  @media (max-width: ${theme.breakpoints.mobile}) {
    min-height: 160px;
    font-size: 3rem;
  }
`;
