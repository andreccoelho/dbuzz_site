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
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: stretch;
  margin-bottom: 48px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;

    > div:first-child {
      display: block;
    }
  }
`;

const PilarBox = styled.aside`
  background: var(--bg);
  border: 1px solid var(--borda);
  border-radius: 4px;
  padding: 28px;

  h4 {
    font-family: var(--fonte-titulo);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #9a6f00;
    margin: 0 0 16px;
  }

  p {
    margin-bottom: 14px;
  }
`;

const ColunaInstitucional = styled.aside``;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.4em;
  display: flex;
  flex-direction: column;
  gap: 7px;

  li {
    position: relative;
    padding-left: 18px;
    font-size: 0.95rem;
    line-height: 1.55;
    color: var(--sub);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--amarelo);
    }
  }
`;

const Paragrafo = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--sub);
  margin-bottom: 0;
  max-width: 60ch;

  @media (max-width: 640px) {
    font-size: 0.94rem;
    max-width: 100%;
  }
`;

const MissaoVisao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
  padding-top: 24px;
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

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    align-items: start;
  }

  @media (max-width: 900px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    padding-top: 36px;
    .grid { grid-template-columns: 1fr; }
  }
`;

const ValorCard = styled.div`
  background: #fff;
  border: 1px solid ${({ $aberto }) => $aberto ? "var(--amarelo)" : "var(--borda)"};
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  box-shadow: ${({ $aberto }) => $aberto ? "0 2px 10px rgba(254,199,8,0.12)" : "none"};

  &:hover {
    border-color: ${({ $aberto }) => $aberto ? "var(--amarelo)" : "rgba(0,0,0,0.18)"};
  }

  .icone {
    flex-shrink: 0;
    color: var(--sub);
    transition: transform 220ms ease;
    transform: ${({ $aberto }) => $aberto ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const ValorTopo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;

  .num {
    flex-shrink: 0;
    font-family: var(--fonte-corpo);
    font-size: 0.65rem;
    font-weight: 600;
    color: #000;
    background: rgba(0, 0, 0, 0.06);
    padding: 3px 6px;
    border-radius: 2px;
  }

  strong {
    flex: 1;
    font-size: 0.81rem;
    font-weight: 600;
    color: var(--texto);
    line-height: 1.35;
  }
`;

const ValorTexto = styled.div`
  max-height: ${({ $aberto }) => $aberto ? "160px" : "0"};
  overflow: hidden;
  transition: max-height 260ms ease, padding 260ms ease;
  font-size: 0.84rem;
  line-height: 1.62;
  color: var(--sub);
  padding: ${({ $aberto }) => $aberto ? "0 14px 14px 14px" : "0 14px"};
`;

const ValorPil = styled.li``;

export {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, ColunaTexto,
  ColunaInstitucional, Paragrafo, Lista, BlocoDados, ItemDado, Rotulo, Valor,
  MissaoVisao, MV, Valores, ValorCard, ValorTopo, ValorTexto, ValorPil, PilarBox,
};
