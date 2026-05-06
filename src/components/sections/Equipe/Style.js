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
  border-radius: ${theme.raio.lg};
  padding: 1.45rem;
  border: 1px solid ${theme.cores.borda};
  text-align: center;
`;

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.cores.azul}, ${theme.cores.azul2});
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
  color: ${theme.cores.azul};
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
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid ${theme.cores.borda};
  text-align: center;
`;

export const IgTitle = styled.h3`
  font-family: ${theme.fontes.titulo};
  font-size: 1.08rem;
  font-weight: 700;
  color: ${theme.cores.azul};
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

const igGrad = [
  "linear-gradient(135deg, #E8F5F2, #A8DDD4)",
  "linear-gradient(135deg, #EEF2FF, #B8C8FF)",
  "linear-gradient(135deg, #FFF8E1, #FFD870)",
  "linear-gradient(135deg, #F3E8FF, #C8A8FF)",
  "linear-gradient(135deg, #FFE8E8, #FFB0B0)",
  "linear-gradient(135deg, #E8F5E9, #A8E6B0)",
];

export const IgPlaceholder = styled.div`
  aspect-ratio: 1;
  border-radius: ${theme.raio.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;

  &:nth-child(1) {
    background: ${igGrad[0]};
  }
  &:nth-child(2) {
    background: ${igGrad[1]};
  }
  &:nth-child(3) {
    background: ${igGrad[2]};
  }
  &:nth-child(4) {
    background: ${igGrad[3]};
  }
  &:nth-child(5) {
    background: ${igGrad[4]};
  }
  &:nth-child(6) {
    background: ${igGrad[5]};
  }
`;

export const IgBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.cores.azul};
  color: #fff;
  padding: 0.68rem 1.4rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.88rem;
  transition: opacity 0.2s, transform 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;
