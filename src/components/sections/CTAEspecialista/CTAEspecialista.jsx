import { ArrowRight } from "lucide-react";
import { scrollTo } from "../../../utils/scroll";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.section`
  background: #0a0a0a;
  padding: 108px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 30%, transparent 80%);
    pointer-events: none;
  }

  @media (max-width: 640px) { padding: 80px 16px; }
`;

const Inner = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  animation: ${fadeUp} 0.6s cubic-bezier(0.22,1,0.36,1) both;
`;

const Kicker = styled.span`
  display: inline-block;
  font-family: var(--fonte-corpo);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--amarelo);
  margin-bottom: 20px;
`;

const Titulo = styled.h2`
  font-family: var(--fonte-titulo);
  font-size: clamp(1.9rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin: 0 0 18px;
`;

const Sub = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.6);
  max-width: 560px;
  margin: 0 auto 36px;

  @media (max-width: 640px) { font-size: 0.94rem; margin-bottom: 28px; }
`;

const Acoes = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) { flex-direction: column; align-items: center; }
`;

const BtnPrimario = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 28px;
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  background: var(--amarelo);
  border-radius: 3px;
  min-height: 52px;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }

  &:active { transform: translateY(0); }
`;

const BtnSecundario = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 28px;
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 3px;
  min-height: 52px;
  transition: background 160ms ease, border-color 160ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.34);
  }
`;

const CTAEspecialista = () => (
  <Wrap>
    <Inner>
      <Kicker>Próximo passo</Kicker>

      <Titulo>Vamos montar a solução certa para o seu caso</Titulo>

      <Sub>
        Conte o ambiente, o objetivo e o ponto de partida. A D.Buzz estrutura a proposta
        técnica e comercial sob medida, sem compromisso.
      </Sub>
    </Inner>
  </Wrap>
);

export default CTAEspecialista;
