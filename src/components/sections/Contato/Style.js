import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.section`
  background: #000;
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
  color: ${theme.cores.amarelo};
  margin-bottom: 0.6rem;
`;

export const Title = styled.h2`
  font-family: ${theme.fontes.titulo};
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin-bottom: 0.85rem;
`;

export const Sub = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.72;
  max-width: 640px;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  margin: 1.8rem 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 4px;
  padding: 1.7rem;
`;

export const Icon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h4`
  color: ${theme.cores.amarelo};
  font-family: ${theme.fontes.titulo};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.45rem;
`;

export const CardDesc = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.88rem;
  line-height: 1.62;
  margin-bottom: 0.9rem;
`;

export const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.72rem 1.2rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.84rem;
  min-height: 44px;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  width: 100%;

  ${({ $tipo }) =>
    $tipo === "ghost"
      ? css`
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          &:hover {
            background: var(--amarelo);
            color: #000;
            border-color: var(--amarelo);
          }
        `
      : css`
          background: ${theme.cores.amarelo};
          color: #000;
          &:hover {
            background: #fff;
            color: #000;
          }
        `}
`;

export const Dados = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const DadoItem = styled.div`
  min-width: 180px;
  flex: 1;
`;

export const DadoLabel = styled.label`
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
  display: block;
  margin-bottom: 0.18rem;
`;

export const DadoValor = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
  display: block;
`;
