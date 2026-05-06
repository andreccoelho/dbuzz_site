import React from "react";
import * as S from "./Style";

const PROGRAMACAO = [
  "Noticiário leve, hiperlocal e curado",
  "Vinhetas culturais e cobertura de eventos",
  "Quadros patrocinados de variedades",
  "Espaço comercial para anunciantes parceiros",
  "Rodízio de comunicação institucional D.Buzz",
];

const TvDbuzz = () => (
  <S.Wrapper id="tv-dbuzz">
    <S.Container>
      <S.Label>TV D.Buzz</S.Label>
      <S.Title>A rede comercial privada da D.Buzz Corporate</S.Title>

      <S.Grid>
        <div>
          <S.Sub>
            A TV D.Buzz é a rede comercial privada que opera em pontos
            estratégicos da Baixada Fluminense através de Displays de LED
            verticais indoor. Conteúdo de variedade e oportunidades comerciais
            para anunciantes locais que querem alcançar público em ambientes
            de alta circulação — tudo coordenado pelo DBuzz Control Signage.
          </S.Sub>

          <S.Stats>
            <S.Stat>
              <S.StatN>50+</S.StatN>
              <S.StatL>Displays de LED ativos</S.StatL>
            </S.Stat>
            <S.Stat>
              <S.StatN>2</S.StatN>
              <S.StatL>Mercados em operação</S.StatL>
            </S.Stat>
          </S.Stats>

          <S.ProgTitulo>O que entra na grade</S.ProgTitulo>
          <S.ProgLista>
            {PROGRAMACAO.map((p, i) => (
              <S.ProgItem key={i}>{p}</S.ProgItem>
            ))}
          </S.ProgLista>
        </div>

        <S.Card>
          <S.Screen aria-hidden="true">
            <S.Bars>
              {Array.from({ length: 7 }).map((_, i) => (
                <S.Bar key={i} $i={i} />
              ))}
            </S.Bars>
            <S.ScreenLbl>
              <strong>TV D.Buzz</strong>
              Display vertical 9:16
            </S.ScreenLbl>
          </S.Screen>

          <S.Anunc>
            <S.AnuncTitle>Anuncie na TV D.Buzz</S.AnuncTitle>
            <S.AnuncDesc>
              Pacotes comerciais, planos de mídia e propostas customizadas para
              quem quer alcançar público qualificado nos pontos cobertos pela
              rede.
            </S.AnuncDesc>
            <S.AnuncBtn href="mailto:dbuzzcorporate@gmail.com?subject=Quero%20anunciar%20na%20TV%20D.Buzz">
              Solicitar mídia kit →
            </S.AnuncBtn>
          </S.Anunc>
        </S.Card>
      </S.Grid>

      <S.Sep>
        <strong>Importante.</strong> A TV D.Buzz é uma operação comercial
        privada e <strong>não integra</strong> a modalidade de Comunicação
        Pública Presencial. Contratos com órgãos públicos não envolvem
        veiculação de publicidade comercial nem inserção de conteúdo da rede
        TV D.Buzz.
      </S.Sep>
    </S.Container>
  </S.Wrapper>
);

export default TvDbuzz;
