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
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.72;
  max-width: 720px;
  margin-bottom: 1rem;
`;

export const NomeObj = styled.div`
  background: rgba(254, 199, 8, 0.1);
  border: 1px solid rgba(254, 199, 8, 0.28);
  border-radius: ${theme.raio.md};
  padding: 1.2rem 1.4rem;
  margin: 1.4rem 0;
  font-size: 0.94rem;
  color: ${theme.cores.amarelo};
  line-height: 1.65;
  font-style: italic;

  strong {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.65;
    margin-bottom: 0.3rem;
    font-style: normal;
  }
`;

export const CompG = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  margin: 1.4rem 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Comp = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: ${theme.raio.md};
  padding: 1.3rem;
`;

export const CompTag = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;

  ${({ $tipo }) =>
    $tipo === "p"
      ? css`
          color: ${theme.cores.amarelo};
        `
      : $tipo === "s"
      ? css`
          color: rgba(255, 255, 255, 0.48);
        `
      : css`
          color: rgba(255, 255, 255, 0.32);
        `}
`;

export const CompTitle = styled.h4`
  color: #fff;
  font-family: ${theme.fontes.titulo};
  font-size: 0.93rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
`;

export const CompDesc = styled.p`
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.86rem;
  line-height: 1.56;
`;

export const Cautela = styled.div`
  background: rgba(254, 199, 8, 0.08);
  border: 1px solid rgba(254, 199, 8, 0.2);
  border-radius: ${theme.raio.md};
  padding: 1.2rem 1.4rem;
  margin: 1.4rem 0;
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.72;

  strong {
    color: ${theme.cores.amarelo};
  }
`;

export const KitTitulo = styled.h4`
  color: #fff;
  font-family: ${theme.fontes.titulo};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;
`;

export const KitG = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
  margin: 1.1rem 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const KitItem = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.62);
  padding: 0.45rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.raio.sm};
  align-items: flex-start;
  line-height: 1.5;

  &::before {
    content: "→";
    color: ${theme.cores.amarelo};
    font-weight: 700;
    flex-shrink: 0;
  }
`;

export const PubBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${theme.cores.amarelo};
  color: #000;
  padding: 0.82rem 1.8rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.93rem;
  margin-top: 1.4rem;
  min-height: 48px;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #000;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
