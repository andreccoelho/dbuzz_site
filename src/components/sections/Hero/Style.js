import styled, { keyframes } from "styled-components";

const Secao = styled.section`
  position: relative;
  background: #000;
  color: #fff;
  padding: 120px 24px 88px;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 96px 18px 64px;
  }
`;

const GridDecorativo = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: -1px -1px;
  mask-image: radial-gradient(ellipse 80% 70% at 30% 40%, #000 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 30% 40%, #000 30%, transparent 80%);
`;

const Grid = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 64px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Coluna = styled.div`
  max-width: 640px;
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--fonte-corpo);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 24px;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: var(--amarelo);
    border-radius: 50%;
  }
`;

const Titulo = styled.h1`
  color: #fff;
  font-size: clamp(2.25rem, 4.4vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin-bottom: 24px;
`;

const AcentoAmarelo = styled.span`
  position: relative;
  display: inline-block;
  color: var(--amarelo);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 8px;
    background: rgba(254, 199, 8, 0.18);
    z-index: -1;
    border-radius: 2px;
  }
`;

const Texto = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  max-width: 580px;
  margin-bottom: 28px;
`;

const Frentes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Frente = styled.li`
  position: relative;
  padding: 14px 16px 14px 30px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;

  span {
    position: absolute;
    left: 12px;
    top: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fec708;
    box-shadow: 0 0 0 4px rgba(254, 199, 8, 0.13);
  }

  em {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.62);
    margin-top: 2px;
  }
`;

const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 14px;
`;

const BotaoPrimario = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 700;
  color: #000;
  background: var(--amarelo);
  border-radius: 3px;
  transition: background 160ms ease, color 160ms ease;

  &:hover {
    background: #000;
    color: var(--amarelo);
  }
`;

const BotaoSecundario = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 3px;
  transition: background 160ms ease, border-color 160ms ease;

  &:hover {
    background: var(--amarelo);
    color: #000;
    border-color: var(--amarelo);
  }
`;

const LinksSecundarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin: 0 0 48px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
    padding-bottom: 1px;
    transition: color 160ms ease, border-color 160ms ease;

    &:hover {
      color: var(--amarelo);
      border-color: var(--amarelo);
    }
  }
`;

const Metricas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Metrica = styled.div`
  padding: 22px 18px 6px 0;
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child { border-right: none; }

  strong {
    display: block;
    font-family: var(--fonte-titulo);
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
    color: var(--amarelo);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.62);
  }

  @media (max-width: 700px) {
    padding: 18px 14px 6px 0;
    &:nth-child(2) { border-right: none; }

    strong { font-size: 1.6rem; }
  }
`;

const flutua = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

const Mockups = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;

  > div:nth-child(1) {
    position: absolute;
    left: 0;
    top: 30px;
    transform: rotate(-6deg);
    z-index: 1;
    max-width: 220px;
    animation: ${flutua} 6s ease-in-out infinite;
    animation-delay: 0s;
  }
  > div:nth-child(2) {
    position: relative;
    z-index: 3;
    max-width: 280px;
    animation: ${flutua} 6s ease-in-out infinite;
    animation-delay: 0.6s;
  }
  > div:nth-child(3) {
    position: absolute;
    right: 0;
    top: 60px;
    transform: rotate(6deg);
    z-index: 2;
    max-width: 220px;
    animation: ${flutua} 6s ease-in-out infinite;
    animation-delay: 1.2s;
  }

  @media (max-width: 1100px) {
    min-height: 540px;
    margin-top: 16px;

    > div:nth-child(1) { left: 4%; }
    > div:nth-child(3) { right: 4%; }
  }

  @media (max-width: 700px) {
    min-height: 460px;
    > div:nth-child(1) { left: 2%; max-width: 160px; top: 36px; }
    > div:nth-child(2) { max-width: 220px; }
    > div:nth-child(3) { right: 2%; max-width: 160px; top: 60px; }
  }
`;

export {
  Secao, Grid, GridDecorativo, Coluna, Kicker, Titulo, AcentoAmarelo, Texto,
  Frentes, Frente, Acoes, BotaoPrimario, BotaoSecundario, LinksSecundarios,
  Metricas, Metrica, Mockups,
};
