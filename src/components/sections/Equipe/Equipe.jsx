import React from "react";
import {
  Target, Palette, Wrench, Briefcase,
  Tv2, Landmark, GraduationCap, Stethoscope, ShoppingBag, Building2,
} from "lucide-react";
import * as S from "./Style";

const EQUIPE = [
  {
    Avatar: Target,
    nome: "Direção e estratégia",
    cargo: "Liderança comercial e institucional",
    desc: "Definição de portfólio, parcerias e conformidade contratual nas três frentes de atuação.",
  },
  {
    Avatar: Palette,
    nome: "Curadoria editorial",
    cargo: "Conteúdo institucional customizado",
    desc: "Trilha de produção, calendário e moderação para Setor Privado, Setor Público e TV D.Buzz.",
  },
  {
    Avatar: Wrench,
    nome: "Operação técnica",
    cargo: "Infraestrutura e suporte",
    desc: "Instalação, manutenção preventiva e corretiva, monitoramento do parque de Telas.",
  },
  {
    Avatar: Briefcase,
    nome: "Comercial e contas",
    cargo: "Anunciantes e órgãos contratantes",
    desc: "Atendimento a anunciantes da TV D.Buzz e ponto focal para clientes Setor Privado e Setor Público.",
  },
];

const IG_ICONS = [Tv2, Landmark, GraduationCap, Stethoscope, ShoppingBag, Building2];

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
        {EQUIPE.map((m, i) => {
          const AvatarIcon = m.Avatar;
          return (
            <S.Card key={i}>
              <S.Avatar aria-hidden="true">
                <AvatarIcon size={28} />
              </S.Avatar>
              <S.Nome>{m.nome}</S.Nome>
              <S.Cargo>{m.cargo}</S.Cargo>
              <S.Desc>{m.desc}</S.Desc>
            </S.Card>
          );
        })}
      </S.Grid>

      <S.IgBox>
        <S.IgTitle>Acompanhe no Instagram</S.IgTitle>
        <S.IgDesc>
          Bastidores da operação, novos pontos da TV D.Buzz e recortes de
          campanhas em @dbuzz.corporate.
        </S.IgDesc>

        <S.IgGrid>
          {IG_ICONS.map((IgIcon, i) => (
            <S.IgPlaceholder key={i} aria-hidden="true">
              <IgIcon size={22} />
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
