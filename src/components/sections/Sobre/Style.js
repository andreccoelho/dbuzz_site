import styled from "styled-components";

const Secao = styled.section`
  padding: 120px 24px;
  background: var(--bg);

  @media (max-width: 900px) {
    padding: 80px 18px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Cabecalho = styled.header`
  max-width: 820px;
  margin: 0 auto 72px;

  @media (max-width: 900px) {
    margin-bottom: 48px;
  }
`;

const Kicker = styled.span`
  display: inline-block;
  font-family: var(--fonte-mono);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--azul2);
  margin-bottom: 16px;
`;

const Titulo = styled.h2`
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
`;

const Lead = styled.p`
  font-size: 1.15rem;
  line-height: 1.55;
  color: var(--texto);
  font-weight: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 64px;
  margin-bottom: 80px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 56px;
  }
`;

const ColunaTexto = styled.div``;

const ColunaInstitucional = styled.aside``;

const Paragrafo = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sub);
  margin-bottom: 1.4em;
  max-width: 60ch;

  /* Drop-cap discreto no primeiro paragrafo — toque editorial anti-IA */
  &:first-of-type::first-letter {
    font-family: var(--fonte-titulo);
    font-weight: 800;
    font-size: 3.4rem;
    line-height: 1;
    color: var(--azul);
    float: left;
    margin: 4px 10px -2px 0;
    letter-spacing: -0.04em;
  }
`;

const MissaoVisao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 36px;
  padding-top: 32px;
  border-top: 1px solid var(--borda);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MV = styled.div`
  h3 {
    font-family: var(--fonte-titulo);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--azul);
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--sub);
    margin: 0;
  }
`;

const BlocoDados = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid var(--borda);
  box-shadow: 0 4px 16px rgba(14, 37, 84, 0.04);
  position: sticky;
  top: 96px;

  @media (max-width: 1000px) {
    position: static;
  }
`;

const ItemDado = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid var(--borda);

  &:last-child { border-bottom: none; padding-bottom: 0; }
  &:nth-child(2) { padding-top: 16px; }

  > svg {
    color: var(--azul2);
    margin-top: 4px;
  }

  .num-mark {
    font-family: var(--fonte-mono);
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--amarelo-escuro);
    background: rgba(245, 196, 0, 0.12);
    padding: 3px 6px;
    border-radius: 4px;
    margin-top: 2px;
    height: fit-content;
    text-align: center;
  }

  small {
    display: block;
    margin-top: 4px;
    font-family: var(--fonte-mono);
    font-size: 0.78rem;
    color: var(--sub);
  }

  a {
    color: var(--azul2);
    border-bottom: 1px dotted currentColor;

    &:hover { color: var(--azul); }
  }
`;

const Rotulo = styled.div`
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--sub);
  margin-bottom: 4px;
`;

const Valor = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--texto);

  &.num {
    font-family: var(--fonte-mono);
    font-weight: 500;
    letter-spacing: 0.01em;
  }
`;

const Valores = styled.div`
  border-top: 1px solid var(--borda);
  padding-top: 48px;

  > span,
  > div:first-child {
    margin-bottom: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
  }
`;

const ValorPil = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid var(--borda);
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--texto);
  transition: border-color 160ms ease, transform 160ms ease;

  span {
    flex-shrink: 0;
    font-family: var(--fonte-mono);
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--azul2);
    background: rgba(27, 79, 216, 0.08);
    padding: 4px 7px;
    border-radius: 4px;
  }

  &:hover {
    border-color: var(--azul2);
    transform: translateY(-1px);
  }
`;

export {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, ColunaTexto,
  ColunaInstitucional, Paragrafo, BlocoDados, ItemDado, Rotulo, Valor,
  MissaoVisao, MV, Valores, ValorPil,
};
