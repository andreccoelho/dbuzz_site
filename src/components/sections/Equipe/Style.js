import styled from "styled-components";
import { theme } from "../../../styles/theme";

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
  margin-bottom: 2.8rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1.45rem;
  border: 1px solid ${theme.cores.borda};
  text-align: center;
`;

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  margin: 0 auto 0.9rem;
`;

export const Nome = styled.h4`
  font-family: ${theme.fontes.titulo};
  font-size: 0.93rem;
  font-weight: 700;
  color: ${theme.cores.texto};
  margin-bottom: 0.2rem;
`;

export const Cargo = styled.div`
  font-size: 0.8rem;
  color: ${theme.cores.sub};
  font-weight: 500;
  margin-bottom: 0.45rem;
`;

export const Desc = styled.p`
  font-size: 0.82rem;
  color: ${theme.cores.sub};
  line-height: 1.52;
`;

export const IgBox = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 2rem;
  border: 1px solid ${theme.cores.borda};
  text-align: center;
`;

export const IgTitle = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.08rem;
  font-weight: 700;
  color: ${theme.cores.texto};
  margin-bottom: 0.35rem;
`;

export const IgDesc = styled.p`
  font-size: 0.88rem;
  color: ${theme.cores.sub};
  line-height: 1.6;
  margin-bottom: 1.4rem;
`;

export const IgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.45rem;
  max-width: 480px;
  margin: 0 auto 1.4rem;
`;

export const IgPlaceholder = styled.div`
  aspect-ratio: 1;
  border-radius: ${theme.raio.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: var(--cinza-100);
  border: 1px solid var(--cinza-200);
`;

export const IgBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.cores.amarelo};
  color: #000;
  padding: 0.68rem 1.4rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.88rem;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;

  &:hover {
    background: #000;
    color: var(--amarelo);
  }
`;
