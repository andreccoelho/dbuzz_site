import styled from "styled-components";

const Secao = styled.section`
  padding: 100px 24px;
  background: #fff;

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
  max-width: 720px;
  margin: 0 auto 64px;
  text-align: center;

  @media (max-width: 900px) {
    margin-bottom: 40px;
    text-align: left;
  }
`;

const Kicker = styled.span`
  display: inline-block;
  font-family: var(--fonte-corpo);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--amarelo);
  margin-bottom: 14px;
`;

const Titulo = styled.h2`
  font-size: clamp(1.65rem, 3.5vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 14px;
`;

const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--sub);
  margin: 0;

  @media (max-width: 640px) {
    font-size: 0.94rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--borda);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

const CardTopo = styled.div`
  position: relative;
  padding: 28px 24px 24px;
  color: #fff;
  background: #000;
  border-bottom: 3px solid #fec708;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 18px 18px;
    pointer-events: none;
  }

  > * { position: relative; z-index: 1; }

  .kicker-frente {
    display: inline-block;
    font-family: var(--fonte-corpo);
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 8px;
  }

  h3 {
    font-family: var(--fonte-titulo);
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
    margin: 0 0 6px;
  }
`;

const IconeBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  color: #fff;
  margin-bottom: 16px;
`;

const Subtitulo = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.4;
  margin: 0;
`;

const CardCorpo = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;

  > p {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--sub);
    margin: 0 0 20px;
  }

  .nota-juridica {
    display: block;
    margin-bottom: 20px;
    padding: 10px 12px;
    font-size: 0.78rem;
    line-height: 1.5;
    color: var(--texto);
    background: rgba(254, 199, 8, 0.1);
    border-left: 3px solid var(--amarelo);
    border-radius: 2px;
  }
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1;
`;

const ItemLista = styled.li`
  position: relative;
  padding-left: 22px;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--texto);

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    top: 0;
    font-family: var(--fonte-corpo);
    font-weight: 500;
    color: var(--amarelo);
  }
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding: 12px 0;
  font-family: var(--fonte-corpo);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--amarelo);
  border-bottom: 1px solid currentColor;
  align-self: flex-start;
  transition: gap 200ms ease;

  &:hover { gap: 14px; }
`;

export {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, Card, CardTopo,
  IconeBox, Subtitulo, CardCorpo, Lista, ItemLista, CardLink,
};
