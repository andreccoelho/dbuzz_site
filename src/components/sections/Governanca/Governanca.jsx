import React from "react";
import * as S from "./Style";

const GOV = [
  "Política de Privacidade e proteção de dados (LGPD)",
  "Termos de uso e contrato padrão de prestação de serviços",
  "Política de conteúdo: filtros editoriais e moderação",
  "Política de anúncios: critérios para aprovação na TV D.Buzz",
  "Manual técnico de operação das Telas",
  "Procedimento de manutenção preventiva e corretiva",
  "Plano de continuidade operacional",
  "Política de segurança da informação",
  "Documentação de conformidade para órgãos públicos",
];

const FEATS = [
  "Programação remota da grade de conteúdo",
  "Gestão de filas, prioridades e agendamento",
  "Monitoramento em tempo real do parque de Displays",
  "Relatórios operacionais e de disponibilidade",
  "Alertas automáticos de falha e manutenção",
  "Controle de acesso por perfil de operador",
];

const Governanca = () => (
  <S.Wrapper id="governanca">
    <S.Container>
      <S.Label>Governança</S.Label>
      <S.Title>Operação documentada, auditável e padronizada</S.Title>
      <S.Sub>
        Conjunto de políticas, procedimentos e infraestrutura tecnológica que
        sustentam a entrega — em qualquer das três frentes.
      </S.Sub>

      <S.Grid>
        <div>
          <S.SubTitulo>Documentos e políticas</S.SubTitulo>
          <S.Lista>
            {GOV.map((item, i) => (
              <S.Item key={i}>{item}</S.Item>
            ))}
          </S.Lista>
        </div>

        <S.CmsBox>
          <S.CmsLabel>Plataforma proprietária</S.CmsLabel>
          <S.CmsTitulo>DBuzz Control Signage</S.CmsTitulo>
          <S.CmsDesc>
            Sistema desenvolvido pela D.Buzz para a gestão centralizada da
            comunicação presencial gerenciada. Coordena conteúdo, programação,
            anúncios e operação técnica em tempo real, com trilha de auditoria
            de todas as alterações.
          </S.CmsDesc>
          <S.CmsFeats>
            {FEATS.map((f, i) => (
              <S.CmsFeat key={i}>{f}</S.CmsFeat>
            ))}
          </S.CmsFeats>
          <S.CmsBtn href="mailto:dbuzzcorporate@gmail.com?subject=Demonstra%C3%A7%C3%A3o%20DBuzz%20Control%20Signage">
            Solicitar demonstração →
          </S.CmsBtn>
        </S.CmsBox>
      </S.Grid>
    </S.Container>
  </S.Wrapper>
);

export default Governanca;
