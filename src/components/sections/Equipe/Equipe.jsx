import React from "react";
import * as S from "./Style";

const EQUIPE = [
  {
    avatar: "👤",
    nome: "Direção e estratégia",
    cargo: "Liderança comercial e institucional",
    desc: "Definição de portfólio, parcerias e conformidade contratual nas três frentes de atuação.",
  },
  {
    avatar: "🎨",
    nome: "Curadoria editorial",
    cargo: "Conteúdo institucional customizado",
    desc: "Trilha de produção, calendário e moderação para Setor Privado, Setor Público e TV D.Buzz.",
  },
  {
    avatar: "🛠️",
    nome: "Operação técnica",
    cargo: "Infraestrutura e suporte",
    desc: "Instalação, manutenção preventiva e corretiva, monitoramento do parque de Displays de LED.",
  },
  {
    avatar: "💼",
    nome: "Comercial e contas",
    cargo: "Anunciantes e órgãos contratantes",
    desc: "Atendimento a anunciantes da TV D.Buzz e ponto focal para clientes Setor Privado e Setor Público.",
  },
];

const Equipe = () => (
  <S.Wrapper id="equipe">
    <S.Container>
      <S.Label>Equipe</S.Label>
      <S.Title>Quem sustenta a operação</S.Title>
      <S.Sub>
        Estrutura enxuta, papéis claros e separação operacional entre as três
        frentes — para garantir entrega coordenada e conformidade jurídica.
      </S.Sub>

      <S.Grid>
        {EQUIPE.map((m, i) => (
          <S.Card key={i}>
            <S.Avatar aria-hidden="true">{m.avatar}</S.Avatar>
            <S.Nome>{m.nome}</S.Nome>
            <S.Cargo>{m.cargo}</S.Cargo>
            <S.Desc>{m.desc}</S.Desc>
          </S.Card>
        ))}
      </S.Grid>

      <S.IgBox>
        <S.IgTitle>Acompanhe no Instagram</S.IgTitle>
        <S.IgDesc>
          Bastidores da operação, novos pontos da TV D.Buzz e recortes de
          campanhas em @dbuzz.corporate.
        </S.IgDesc>

        <S.IgGrid>
          {Array.from({ length: 6 }).map((_, i) => (
            <S.IgPlaceholder key={i} aria-hidden="true">
              {["📺", "🏛️", "🎓", "🩺", "🛍️", "🏢"][i]}
            </S.IgPlaceholder>
          ))}
        </S.IgGrid>

        <S.IgBtn
          href="https://instagram.com/dbuzz.corporate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguir @dbuzz.corporate →
        </S.IgBtn>
      </S.IgBox>
    </S.Container>
  </S.Wrapper>
);

export default Equipe;
