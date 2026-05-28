import React from "react";
import * as S from "./Style";

const COMPONENTES = [
  {
    tipo: "Componente Principal",
    tipoClasse: "p",
    titulo: "Operação e Produção de Conteúdo Institucional",
    desc: "Equipe dedicada à curadoria, produção e atualização do conteúdo institucional customizado para o órgão público contratante.",
  },
  {
    tipo: "Componente Secundário",
    tipoClasse: "s",
    titulo: "Disponibilização de Infraestrutura Tecnológica",
    desc: "Telas verticais indoor, sistemas de gestão remota (DBuzz Control Signage) e infraestrutura de rede dedicada à operação.",
  },
  {
    tipo: "Componente Terciário",
    tipoClasse: "t",
    titulo: "Suporte Técnico e Manutenção Preventiva",
    desc: "SLA com atendimento em horário comercial, manutenções preventivas programadas e substituição de peças em caso de falha.",
  },
];

const KIT = [
  "Telas verticais indoor",
  "Players multimídia dedicados",
  "Suportes e fixação adequada ao ambiente",
  "Cabeamento de dados e elétrico",
  "Conectividade dedicada (4G/5G ou cabeada)",
  "Servidor de gestão DBuzz Control Signage",
  "Painel administrativo de programação",
  "Trilha de produção de conteúdo institucional",
  "Calendário editorial customizado",
  "Relatórios de operação e disponibilidade",
  "SLA com atendimento em horário comercial",
  "Manutenções preventivas programadas",
  "Substituição de peças em caso de falha",
  "Treinamento de operadores do órgão",
];

const SetorPublico = () => (
  <S.Wrapper id="setor-publico">
    <S.Container>
      <S.Label>Setor Público</S.Label>
      <S.Title>Comunicação Pública Presencial</S.Title>
      <S.Sub>
        Modalidade institucional desenhada para atender órgãos da administração
        pública direta e indireta, com escopo técnico claro e separação total
        em relação à TV D.Buzz e à publicidade comercial.
      </S.Sub>

      <S.NomeObj>
        <strong>Objeto Contratual</strong>
        Serviço Integrado de Gestão de Comunicação Pública Presencial com
        Operação, Produção de Conteúdo Institucional Customizado e
        Disponibilização de Infraestrutura Tecnológica Dedicada
      </S.NomeObj>

      <S.CompG>
        {COMPONENTES.map((c, i) => (
          <S.Comp key={i}>
            <S.CompTag $tipo={c.tipoClasse}>{c.tipo}</S.CompTag>
            <S.CompTitle>{c.titulo}</S.CompTitle>
            <S.CompDesc>{c.desc}</S.CompDesc>
          </S.Comp>
        ))}
      </S.CompG>
      <S.KitTitulo>Kit Técnico Padrão (14 itens)</S.KitTitulo>
      <S.KitG>
        {KIT.map((item, i) => (
          <S.KitItem key={i}>{item}</S.KitItem>
        ))}
      </S.KitG>

      <S.PubBtn href="mailto:dbuzzcorporate@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Documenta%C3%A7%C3%A3o%20T%C3%A9cnica%20-%20Setor%20P%C3%BAblico">
        Solicitar documentação técnica →
      </S.PubBtn>
    </S.Container>
  </S.Wrapper>
);

export default SetorPublico;
