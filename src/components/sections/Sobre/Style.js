import styled from "styled-components";

const Secao = styled.section`
  padding: 100px 24px;
  background: var(--bg);

  @media (max-width: 900px) {
    padding: 72px 20px;
  }

  @media (max-width: 640px) {
    padding: 56px 16px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Cabecalho = styled.header`
  max-width: 820px;
  margin: 0 auto 64px;

  @media (max-width: 900px) {
    margin-bottom: 48px;
    text-align: left;
  }

  @media (max-width: 640px) {
    margin-bottom: 36px;
  }
`;

const Kicker = styled.span`
  display: inline-block;
  font-family: var(--fonte-corpo);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #9a6f00;
  margin-bottom: 14px;
`;

const Titulo = styled.h2`
  font-size: clamp(1.75rem, 4vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin-bottom: 18px;
`;

const Lead = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--sub);
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 56px;
  margin-bottom: 72px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 36px;
    margin-bottom: 48px;
  }
`;

const ColunaTexto = styled.div`
  max-width: 820px;
  margin: 0 auto 72px;

  @media (max-width: 900px) {
    margin-bottom: 48px;
  }
`;

const ColunaInstitucional = styled.aside``;

const Paragrafo = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sub);
  margin-bottom: 1.4em;
  max-width: 60ch;

  &:first-of-type::first-letter {
    font-family: var(--fonte-titulo);
    font-weight: 800;
    font-size: 3.4rem;
    line-height: 1;
    color: var(--preto);
    float: left;
    margin: 4px 10px -2px 0;
    letter-spacing: -0.04em;
  }

  @media (max-width: 640px) {
    font-size: 0.94rem;
    max-width: 100%;
  }
`;

const MissaoVisao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid var(--borda);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const MV = styled.div`
  h3 {
    font-family: var(--fonte-titulo);
    font-size: 1rem;
    font-weight: 700;
    color: var(--texto);
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--sub);
    margin: 0;
  }
`;

const BlocoDados = styled.div`
  background: #fff;
  padding: 28px;
  border-radius: 4px;
  border: 1px solid var(--borda);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 96px;

  @media (max-width: 1000px) {
    position: static;
    padding: 24px;
  }
`;

const ItemDado = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid var(--borda);

  &:last-child { border-bottom: none; padding-bottom: 0; }
  &:nth-child(2) { padding-top: 14px; }

  > svg {
    color: var(--cinza-500);
    margin-top: 4px;
  }

  .num-mark {
    font-family: var(--fonte-corpo);
    font-size: 0.68rem;
    font-weight: 600;
    color: #000;
    background: rgba(254, 199, 8, 0.15);
    padding: 3px 5px;
    border-radius: 2px;
    margin-top: 2px;
    height: fit-content;
    text-align: center;
  }

  small {
    display: block;
    margin-top: 4px;
    font-family: var(--fonte-corpo);
    font-size: 0.76rem;
    color: var(--sub);
  }

  a {
    color: var(--texto);
    border-bottom: 1px dotted currentColor;

    &:hover { color: var(--amarelo); }
  }
`;

const Rotulo = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--sub);
  margin-bottom: 3px;
`;

const Valor = styled.div`
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1.45;
  color: var(--texto);

  &.num {
    font-family: var(--fonte-corpo);
    font-weight: 500;
    letter-spacing: 0.01em;
  }
`;

const Valores = styled.div`
  border-top: 1px solid var(--borda);
  padding-top: 48px;

  > span,
  > div:first-child {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 10px;
  }

  @media (max-width: 640px) {
    padding-top: 36px;

    ul {
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
  }
`;

const ValorPil = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid var(--borda);
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--texto);
  min-height: 48px;
  transition: border-color 160ms ease;

  span {
    flex-shrink: 0;
    font-family: var(--fonte-corpo);
    font-size: 0.68rem;
    font-weight: 600;
    color: #000;
    background: rgba(0, 0, 0, 0.06);
    padding: 3px 6px;
    border-radius: 2px;
  }

  &:hover {
    border-color: var(--amarelo);
  }
`;

export {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, ColunaTexto,
  ColunaInstitucional, Paragrafo, BlocoDados, ItemDado, Rotulo, Valor,
  MissaoVisao, MV, Valores, ValorPil,
};
