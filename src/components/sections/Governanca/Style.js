import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.section`
  background: #fff;
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
  max-width: 640px;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const SubTitulo = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.05rem;
  font-weight: 700;
  color: ${theme.cores.texto};
  margin-bottom: 0.6rem;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 0.9rem;
  padding: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.7rem 0.95rem;
  border-radius: ${theme.raio.sm};
  background: ${theme.cores.bg};
  border: 1px solid ${theme.cores.borda};
  font-size: 0.88rem;
  color: ${theme.cores.texto};
  font-weight: 500;
  line-height: 1.4;

  &::before {
    content: "📋";
    font-size: 0.95rem;
    flex-shrink: 0;
  }
`;

export const CmsBox = styled.div`
  background: #000;
  border-radius: 6px;
  padding: 1.9rem;
  color: #fff;
`;

export const CmsLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.6rem;
`;

export const CmsTitulo = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.18rem;
  font-weight: 700;
  color: ${theme.cores.amarelo};
  margin-bottom: 0.9rem;
`;

export const CmsDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.66;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 0.9rem;
`;

export const CmsFeats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

export const CmsFeat = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0.62rem 0.88rem;
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.78);

  &::before {
    content: "●";
    color: ${theme.cores.amarelo};
    font-size: 0.58rem;
    flex-shrink: 0;
  }
`;

export const CmsBtn = styled.a`
  display: inline-block;
  background: ${theme.cores.amarelo};
  color: #000;
  padding: 0.62rem 1.25rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.86rem;
  margin-top: 1.2rem;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #000;
  }
`;
