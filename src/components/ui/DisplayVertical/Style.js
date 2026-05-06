import styled, { keyframes, css } from "styled-components";

const tons = {
  azul: { bg1: "#0E2554", bg2: "#1B4FD8", accent: "#F5C400", selo: "#F5C400", seloTexto: "#0E2554" },
  verde: { bg1: "#064E3B", bg2: "#00966A", accent: "#A7F3D0", selo: "#A7F3D0", seloTexto: "#064E3B" },
  laranja: { bg1: "#3A1000", bg2: "#B85600", accent: "#FCD34D", selo: "#FCD34D", seloTexto: "#3A1000" },
};

const Moldura = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 9 / 16;
  margin: 0 auto;
  padding: 14px 8px 18px;
  background: linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%);
  border-radius: 22px;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.08) inset,
    0 -2px 0 rgba(255, 255, 255, 0.04) inset,
    0 24px 60px rgba(0, 0, 0, 0.45),
    0 4px 12px rgba(0, 0, 0, 0.25);

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 4px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 2px;
  }
`;

const Tela = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ $tom }) => {
    const t = tons[$tom] || tons.azul;
    return css`
      background: linear-gradient(180deg, ${t.bg1} 0%, ${t.bg2} 100%);
      color: #fff;
    `;
  }}
`;

const BarraStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px 6px;
  font-family: var(--fonte-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.7);

  .hora {
    font-weight: 500;
  }
`;

const pulsa = keyframes`
  0%, 100% { transform: scaleY(0.4); }
  50%      { transform: scaleY(1); }
`;

const EquilibradoBuzz = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  height: 10px;

  span {
    display: block;
    width: 2px;
    background: var(--amarelo);
    border-radius: 1px;
    transform-origin: bottom;
    animation: ${pulsa} 1.2s ease-in-out infinite;
  }
  span:nth-child(1) { height: 100%; animation-delay: 0s; }
  span:nth-child(2) { height: 70%;  animation-delay: 0.15s; }
  span:nth-child(3) { height: 100%; animation-delay: 0.3s; }
  span:nth-child(4) { height: 60%;  animation-delay: 0.45s; }
  span:nth-child(5) { height: 90%;  animation-delay: 0.6s; }
`;

const Selo = styled.div`
  align-self: flex-start;
  margin: 8px 14px 0;
  padding: 4px 10px;
  font-family: var(--fonte-corpo);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 4px;
  ${({ $tom }) => {
    const t = tons[$tom] || tons.azul;
    return css`
      background: ${t.selo};
      color: ${t.seloTexto};
    `;
  }}
`;

const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 18px 10px;
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.15;
  letter-spacing: -0.02em;

  /* Numeros e dados em destaque */
  strong {
    display: block;
    font-size: 2.5rem;
    line-height: 1;
    color: var(--amarelo);
    font-variant-numeric: tabular-nums;
    margin-bottom: 6px;
  }

  small {
    display: block;
    margin-top: 10px;
    font-family: var(--fonte-corpo);
    font-weight: 400;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.78);
    letter-spacing: 0;
  }
`;

const Pe = styled.div`
  padding: 8px 14px 14px;
  font-family: var(--fonte-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.55);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
`;

export { Moldura, Tela, BarraStatus, EquilibradoBuzz, Conteudo, Selo, Pe };
