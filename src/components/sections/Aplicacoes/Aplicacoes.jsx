import React, { useState } from "react";
import { Stethoscope, GraduationCap, Landmark, Building2, ShoppingBag } from "lucide-react";
import * as S from "./Style";

const APLICACOES = [
  {
    id: "saude",
    label: "Saúde Digital",
    tag: "Privado",
    tagTipo: "priv",
    titulo: "Saúde Digital",
    descricao:
      "Comunicação presencial gerenciada para clínicas, consultórios e centros médicos. Conteúdo educativo, orientações ao paciente, campanhas sazonais e promoções de serviços — tudo coordenado a partir do DBuzz Control Signage.",
    itens: [
      "Tempo médio de espera reduzido com conteúdo informativo",
      "Comunicação institucional do consultório/clínica",
      "Orientações sobre procedimentos e cuidados",
      "Campanhas educativas e de vacinação",
    ],
    visual: "v1",
    Icone: Stethoscope,
  },
  {
    id: "escola",
    label: "Escola Digital",
    tag: "Privado",
    tagTipo: "priv",
    titulo: "Escola Digital",
    descricao:
      "Murais digitais para escolas privadas. Calendário acadêmico, comunicados aos pais, eventos, conquistas dos alunos e reforço de identidade institucional em pontos de alta circulação.",
    itens: [
      "Comunicados oficiais sempre atualizados",
      "Destaque para conquistas e eventos",
      "Reforço da identidade da escola",
      "Redução de ruído na comunicação com famílias",
    ],
    visual: "v2",
    Icone: GraduationCap,
  },
  {
    id: "universidade",
    label: "Universidade",
    tag: "Privado",
    tagTipo: "priv",
    titulo: "Universidade Digital",
    descricao:
      "Para Instituições de Ensino Superior privadas: avisos acadêmicos, programação cultural, oportunidades de pesquisa e estágio, e comunicação visual de campanhas institucionais distribuída em múltiplos pontos do campus.",
    itens: [
      "Distribuição de avisos em múltiplos campi",
      "Apoio à comunicação de cursos e pós-graduações",
      "Divulgação de eventos acadêmicos e culturais",
      "Integração com calendário institucional",
    ],
    visual: "v3",
    Icone: Landmark,
  },
  {
    id: "empresas",
    label: "Empresas",
    tag: "Privado",
    tagTipo: "priv",
    titulo: "Comunicação Corporativa",
    descricao:
      "Endomarketing presencial para empresas: comunicação interna, segurança do trabalho, indicadores, reconhecimento de equipes e campanhas de cultura organizacional em pontos estratégicos da operação.",
    itens: [
      "Endomarketing visualmente consistente",
      "Indicadores e metas em tempo real",
      "Campanhas de SST e compliance",
      "Reforço de cultura e clima organizacional",
    ],
    visual: "v4",
    Icone: Building2,
  },
  {
    id: "comercios",
    label: "Comércios",
    tag: "Privado",
    tagTipo: "priv",
    titulo: "Comércios e Serviços",
    descricao:
      "Para lojas, redes, salões, restaurantes e prestadores de serviço: cardápios digitais, ofertas do dia, programa de fidelidade e reforço de marca no ponto de venda.",
    itens: [
      "Cardápio e ofertas com atualização ágil",
      "Reforço de marca no ponto de venda",
      "Comunicação coordenada em rede",
      "Conteúdo customizado para o público local",
    ],
    visual: "v5",
    Icone: ShoppingBag,
  },
  {
    id: "publico",
    label: "Setor Público",
    tag: "Público",
    tagTipo: "pub",
    titulo: "Comunicação Pública Presencial",
    descricao:
      "Modalidade institucional, sem TV D.Buzz e sem publicidade. Conteúdo institucional customizado para órgãos públicos: serviços ao cidadão, calendários de campanhas governamentais, prevenção em saúde pública e informações de utilidade pública. Operação e infraestrutura tecnológica dedicadas.",
    itens: [
      "Conteúdo 100% institucional customizado",
      "Sem publicidade comercial em qualquer formato",
      "Operação e infraestrutura tecnológica dedicadas",
      "Documentação de apoio à análise jurídica",
    ],
    visual: "v6",
    Icone: Landmark,
  },
];

const Aplicacoes = () => {
  const [ativo, setAtivo] = useState("saude");
  const aplicacao = APLICACOES.find((a) => a.id === ativo);
  const { Icone } = aplicacao;

  return (
    <S.Wrapper id="aplicacoes">
      <S.Container>
        <S.Label>Aplicações</S.Label>
        <S.Title>Por onde a comunicação acontece</S.Title>
        <S.Sub>
          Cada ambiente pede um cuidado diferente com o conteúdo. Selecione o
          contexto para ver como a D.Buzz organiza a entrega completa — conteúdo,
          operação e gestão remota.
        </S.Sub>

        <S.Tabs>
          {APLICACOES.map((a) => (
            <S.Tab
              key={a.id}
              $on={ativo === a.id}
              onClick={() => setAtivo(a.id)}
              type="button"
            >
              {a.label}
            </S.Tab>
          ))}
        </S.Tabs>

        <S.Pane key={aplicacao.id}>
          <S.Texto>
            <S.TagPill $tipo={aplicacao.tagTipo}>{aplicacao.tag}</S.TagPill>
            <S.PaneTitle>{aplicacao.titulo}</S.PaneTitle>
            <S.PaneDesc>{aplicacao.descricao}</S.PaneDesc>
            <S.Lista>
              {aplicacao.itens.map((it, i) => (
                <S.Item key={i}>{it}</S.Item>
              ))}
            </S.Lista>
          </S.Texto>
          <S.TvWrapper>
            <S.TvScreen>
              <Icone size={52} aria-hidden="true" />
            </S.TvScreen>
            <S.TvMoldura src="/imagens/moldura2.png" aria-hidden="true" />
          </S.TvWrapper>
        </S.Pane>
      </S.Container>
    </S.Wrapper>
  );
};

export default Aplicacoes;
