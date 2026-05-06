import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

const barAnim = keyframes`
  0%, 100% { transform: scaleY(0.25); }
  50%      { transform: scaleY(1); }
`;

export const Wrapper = styled.section`
  background: linear-gradient(135deg, #3a1000 0%, #6b2200 55%, #8b3200 100%);
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
  color: #ffb366;
  margin-bottom: 0.6rem;
`;

export const Title = styled.h2`
  font-family: ${theme.fontes.titulo};
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.85rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const Sub = styled.p`
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.97rem;
  line-height: 1.74;
  margin-bottom: 1.3rem;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
  margin-bottom: 1.3rem;
`;

export const Stat = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 9px;
  padding: 1.1rem;
`;

export const StatN = styled.div`
  font-family: ${theme.fontes.titulo};
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffb366;
  line-height: 1;
`;

export const StatL = styled.div`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 0.2rem;
`;

export const ProgTitulo = styled.h4`
  font-family: ${theme.fontes.titulo};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProgLista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
`;

export const ProgItem = styled.li`
  display: flex;
  gap: 0.55rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.5;

  &::before {
    content: "▶";
    color: #ffb366;
    font-size: 0.65rem;
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 14px;
  padding: 1.8rem;
`;

export const Screen = styled.div`
  background: #000;
  border-radius: ${theme.raio.md};
  aspect-ratio: 9 / 16;
  max-width: 190px;
  margin: 0 auto 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border: 2px solid rgba(255, 255, 255, 0.14);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(245, 196, 0, 0.05) 0%,
      transparent 50%,
      rgba(184, 86, 0, 0.1) 100%
    );
  }
`;

export const Bars = styled.div`
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 38px;
  position: relative;
  z-index: 1;
`;

export const Bar = styled.span`
  display: inline-block;
  width: 4px;
  background: ${theme.cores.amarelo};
  border-radius: 2px;
  height: 100%;
  transform-origin: bottom;
  animation: ${barAnim} 1.3s ease-in-out infinite;
  animation-delay: ${({ $i }) => {
    const delays = [0, 0.18, 0.36, 0.54, 0.36, 0.18, 0.36];
    return `${delays[$i] || 0}s`;
  }};
`;

export const ScreenLbl = styled.div`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.73rem;
  position: relative;
  z-index: 1;
  text-align: center;
  line-height: 1.4;

  strong {
    color: ${theme.cores.amarelo};
    display: block;
    font-size: 0.88rem;
    font-family: ${theme.fontes.titulo};
    margin-bottom: 0.15rem;
  }
`;

export const Anunc = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border-radius: ${theme.raio.md};
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
  margin-top: 1.3rem;
`;

export const AnuncTitle = styled.h4`
  color: #fff;
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.93rem;
  margin-bottom: 0.35rem;
`;

export const AnuncDesc = styled.p`
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.86rem;
  line-height: 1.56;
  margin-bottom: 0.9rem;
`;

export const AnuncBtn = styled.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.24);
  padding: 0.65rem 1.3rem;
  border-radius: ${theme.raio.sm};
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.86rem;
  transition: background 0.2s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Sep = styled.div`
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.65;
  font-style: italic;

  strong {
    color: rgba(255, 255, 255, 0.85);
    font-style: normal;
  }
`;
