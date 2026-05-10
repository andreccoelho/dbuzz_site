import styled, { keyframes } from "styled-components";

const entradaSobe = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeEntrada = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const flutua = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(7px); }
`;


const Secao = styled.section`
  position: relative;
  background: #000;
  color: #fff;
  padding: 120px 24px 100px;
  overflow: hidden;

  @media (max-width: 900px) { padding: 100px 20px 80px; }
  @media (max-width: 640px) { padding: 88px 16px 64px; }
`;

const GridDecorativo = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
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
    gap: 48px;
  }
`;

const Coluna = styled.div`
  max-width: 640px;

  @media (max-width: 1100px) { max-width: 100%; }
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--fonte-corpo);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.78);
  margin-bottom: 20px;
  animation: ${entradaSobe} 0.55s cubic-bezier(0.22,1,0.36,1) both;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: var(--amarelo);
    border-radius: 50%;
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
  }
`;

const Titulo = styled.h1`
  color: #fff;
  font-size: clamp(1.85rem, 4.4vw, 3.75rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 80ms;

  @media (max-width: 640px) { margin-bottom: 16px; font-size: 38px; text-align: center; }
`;

const AcentoAmarelo = styled.span`
  position: relative;
  display: inline-block;
  color: var(--amarelo);

  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: 4px;
    height: 8px;
    background: rgba(254,199,8,0.18);
    z-index: -1;
    border-radius: 2px;
  }
`;

const Texto = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.78);
  max-width: 580px;
  margin-bottom: 24px;
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 160ms;

  @media (max-width: 640px) {
    font-size: 0.94rem;
    margin-bottom: 20px;
  }
`;

const Frentes = styled.div`
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 240ms;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 24px;
    
  }
`;

const Frente = styled.a`
  position: relative;
  display: block;
  padding: 12px 14px 12px 28px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 3px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
  text-decoration: none;
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;

  &:hover {
    background: rgba(255,255,255,0.07);
    transform: translateY(-2px);
  }

  span {
    position: absolute;
    left: 10px;
    top: 17px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fec708;
    box-shadow: 0 0 0 3px rgba(254,199,8,0.13);
  }

  em {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 0.76rem;
    color: rgba(255,255,255,0.55);
    margin-top: 2px;
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    padding: 10px 14px 10px 28px;

    em { display: none; }
  }
`;

const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 320ms;

  @media (max-width: 480px) { flex-direction: column; }
`;

const BotaoPrimario = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 700;
  color: #000;
  background: var(--amarelo);
  border-radius: 3px;
  min-height: 48px;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(254,199,8,0.30);
  }

  &:active { transform: translateY(0); }

  @media (max-width: 480px) { width: 100%; }
`;

const BotaoSecundario = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 3px;
  min-height: 48px;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;

  &:hover {
    background: rgba(255,255,255,0.11);
    border-color: rgba(255,255,255,0.32);
    transform: translateY(-2px);
  }

  &:active { transform: translateY(0); }

  @media (max-width: 480px) { width: 100%; }
`;

const LinksSecundarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 14px;
  margin: 0 0 40px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 400ms;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.8);
    border-bottom: 1px dotted rgba(255,255,255,0.3);
    padding-bottom: 1px;
    transition: color 160ms ease, border-color 160ms ease;

    &:hover {
      color: var(--amarelo);
      border-color: var(--amarelo);
    }
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 32px;
    font-size: 0.72rem;
  }
`;

const Metricas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.12);
  animation: ${entradaSobe} 0.6s cubic-bezier(0.22,1,0.36,1) both 480ms;

  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

const Metrica = styled.div`
  padding: 20px 14px 6px 0;
  border-right: 1px solid rgba(255,255,255,0.08);

  &:last-child { border-right: none; }

  strong {
    display: block;
    font-family: var(--fonte-titulo);
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1;
    color: var(--amarelo);
    letter-spacing: -0.03em;
    margin-bottom: 6px;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    font-size: 0.72rem;
    line-height: 1.45;
    color: rgba(255,255,255,0.55);
  }

  @media (max-width: 640px) {
    padding: 16px 10px 12px 0;

    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-top: 1px solid rgba(255,255,255,.08); }
    &:nth-child(4) { border-top: 1px solid rgba(255,255,255,.08); }

    strong { font-size: 1.45rem; }
    span   { font-size: 0.68rem; }
  }
`;

const Mockups = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
  animation: ${fadeEntrada} 0.8s ease both 200ms;
  transition: transform 0.18s ease-out;
  transform: perspective(1200px)
    rotateY(${({ $px }) => $px ?? 0}deg)
    rotateX(${({ $py }) => $py ?? 0}deg);

  > div:nth-child(1) {
    position: absolute;
    left: 0;
    top: 30px;
    transform: rotate(-6deg);
    z-index: 1;
    max-width: 220px;
    animation: ${flutua} 6s ease-in-out infinite;
  }
  > div:nth-child(2) {
    position: relative;
    z-index: 3;
    max-width: 280px;
    animation: ${flutua} 6s ease-in-out 0.6s infinite;
  }
  > div:nth-child(3) {
    position: absolute;
    right: 0;
    top: 60px;
    transform: rotate(6deg);
    z-index: 2;
    max-width: 220px;
    animation: ${flutua} 6s ease-in-out 1.2s infinite;
  }

  @media (max-width: 1100px) {
    min-height: 420px;
    > div:nth-child(1) { left: 4%; }
    > div:nth-child(3) { right: 4%; }
  }

  @media (max-width: 640px) {
    min-height: 290px;

    > div:nth-child(1) {
      left: 6%;
      top: 15px;
      max-width: 132px;
      opacity: 0.55;
      transform: rotate(-7deg) scale(0.88);
    }
    > div:nth-child(2) { max-width: 172px; }
    > div:nth-child(3) {
      right: 6%;
      top: 25px;
      max-width: 132px;
      opacity: 0.55;
      transform: rotate(7deg) scale(0.88);
    }
  }
`;

const PhoneDots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 640px) { margin-top: 16px; }
`;

const PhoneDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $ativo }) => $ativo ? "var(--amarelo)" : "rgba(255,255,255,0.25)"};
  border: none;
  cursor: pointer;
  transition: background 200ms, transform 200ms;
  padding: 0;
  flex-shrink: 0;

  &:hover { background: rgba(254,199,8,0.7); transform: scale(1.25); }
  ${({ $ativo }) => $ativo && "transform: scale(1.25);"}
`;

const ScrollSeta = styled.a`
  position: absolute;
  bottom: 28px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  color: rgba(255,255,255,0.45);
  animation: ${bounce} 2.2s ease-in-out infinite 1.2s;
  transition: color 200ms, border-color 200ms, background 200ms;

  &:hover {
    color: var(--amarelo);
    border-color: rgba(254,199,8,0.5);
    background: rgba(254,199,8,0.08);
  }

  @media (max-width: 640px) { display: none; }
`;

export {
  Secao, Grid, GridDecorativo, Coluna, Kicker, Titulo, AcentoAmarelo, Texto,
  Frentes, Frente, Acoes, BotaoPrimario, BotaoSecundario, LinksSecundarios,
  Metricas, Metrica, Mockups, ScrollSeta, PhoneDots, PhoneDot,
};
