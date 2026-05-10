import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const METRICAS = [
  { num: 50,  pre: "",  suf: "+",        label: "Displays de LED verticais indoor em operação" },
  { num: 15,  pre: "",  suf: " minutos", label: "Looping médio de programação da TV D.Buzz" },
  { num: 72,  pre: "",  suf: "h",        label: "Prazo de recomposição operacional crítica" },
  { num: 2,   pre: "",  suf: "",         label: "Mercados — setor privado e setor público" },
];

function useContador(alvo, ativo, dur = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!ativo) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * alvo));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [ativo]);
  return val;
}

const MetricaItem = ({ num, pre, suf, label, ativo }) => {
  const val = useContador(num, ativo);
  return (
    <Metrica>
      <strong>{pre}{val}{suf}</strong>
      <span>{label}</span>
    </Metrica>
  );
};

/* ── Styled components ── */

const Wrap = styled.section`
  background: #000;
  border-top: 3px solid var(--amarelo);
  padding: 96px 24px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "\\201C";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--fonte-titulo);
    font-size: 28rem;
    font-weight: 900;
    color: var(--amarelo);
    opacity: 0.04;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 900px) { padding: 80px 20px 64px; }
  @media (max-width: 640px) { padding: 64px 16px 52px; }
`;

const Inner = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
`;

const Frase = styled.blockquote`
  font-family: var(--fonte-titulo);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 28px;

  em {
    font-style: normal;
    color: var(--amarelo);
  }
`;

const Divisor = styled.div`
  width: 44px;
  height: 3px;
  background: var(--amarelo);
  margin: 0 auto 22px;
  border-radius: 2px;
`;

const Apoio = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  max-width: 560px;
  margin: 0 auto;

  @media (max-width: 640px) { font-size: 0.95rem; }
`;

const MetricasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 52px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

const Metrica = styled.div`
  padding: 24px 14px 8px 0;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  text-align: left;

  &:last-child { border-right: none; }

  strong {
    display: block;
    font-family: var(--fonte-titulo);
    font-size: 1.75rem;
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
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 640px) {
    text-align: center;
    padding: 20px 10px 14px 0;

    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-top: 1px solid rgba(255,255,255,.08); }
    &:nth-child(4) { border-top: 1px solid rgba(255,255,255,.08); }

    strong { font-size: 1.5rem; }
    span   { font-size: 0.68rem; }
  }
`;

const Gancho = () => {
  const [ativo, setAtivo] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAtivo(true); },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Wrap>
      <Inner>
        <Frase>
          Tempo de Espera também é<br />
          tempo de <em>atenção.</em>
        </Frase>

        <Divisor aria-hidden="true" />

        <Apoio>
          Cada minuto no ambiente pode fortalecer a percepção da sua marca.
        </Apoio>

        <MetricasGrid ref={ref}>
          {METRICAS.map((m, i) => (
            <MetricaItem key={i} {...m} ativo={ativo} />
          ))}
        </MetricasGrid>
      </Inner>
    </Wrap>
  );
};

export default Gancho;
