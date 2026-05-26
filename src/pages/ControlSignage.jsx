import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Shield, RefreshCw, Activity, Clock, Users, FileText,
  ChevronDown, Tv2, Building2, Landmark, ShoppingBag,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled, { keyframes } from "styled-components";

// ─── animation ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── shared atoms ─────────────────────────────────────────────────────────────
const Kicker = styled.span`
  display: block;
  font-family: var(--fonte-corpo);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--amarelo);
  margin-bottom: 16px;
`;

const H1 = styled.h1`
  font-family: var(--fonte-titulo);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.06;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
`;

const H2 = styled.h2`
  font-family: var(--fonte-titulo);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
`;

const Paragrafo = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 28px;
`;

const BtnAmarelo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  background: var(--amarelo);
  border-radius: 3px;
  transition: background 160ms ease, transform 160ms ease;
  &:hover { background: #fff; transform: translateY(-2px); }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
`;

const LinkSeta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--fonte-titulo);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--amarelo);
  transition: gap 160ms ease;
  &:hover { gap: 10px; }
  &:focus-visible { outline: 2px solid var(--amarelo); outline-offset: 3px; border-radius: 2px; }
`;

const Centro = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BulletLista = styled.ul`
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--fonte-corpo);
  font-size: 0.95rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.65);

  &::before {
    content: "";
    display: block;
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--amarelo);
    margin-top: 7px;
  }
`;

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
const HeroWrap = styled.section`
  background: #000;
  padding: 160px 24px 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 80%);
    pointer-events: none;
  }

  @media (max-width: 640px) { padding: 120px 16px 80px; }
`;

const HeroInner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  position: relative;
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const HeroAcoes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 8px;

  @media (max-width: 480px) { flex-direction: column; align-items: flex-start; gap: 14px; }
`;

const BtnGhost = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  transition: color 160ms ease;
  &:hover { color: #fff; }
  &:focus-visible { outline: 2px solid rgba(255,255,255,0.5); outline-offset: 3px; border-radius: 2px; }
`;

// ─── Section 2: Métricas ──────────────────────────────────────────────────────
const MetricasWrap = styled.section`
  background: #111;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 24px;
`;

const MetricasGrid = styled(Centro)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 760px) { grid-template-columns: repeat(2, 1fr); }
`;

const MetricaCard = styled.div`
  text-align: center;
  padding: 40px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  &:last-child { border-right: none; }

  @media (max-width: 760px) {
    &:nth-child(2) { border-right: none; }
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    &:nth-child(3), &:last-child { border-bottom: none; }
  }
`;

const MetricaNum = styled.div`
  font-family: var(--fonte-titulo);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--amarelo);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 12px;
`;

const MetricaLabel = styled.div`
  font-family: var(--fonte-corpo);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;
`;

// ─── Seções de texto (3–7) ────────────────────────────────────────────────────
const TextoWrap = styled.section`
  background: ${({ $bg }) => $bg || "#000"};
  padding: 96px 24px;
  @media (max-width: 640px) { padding: 72px 16px; }
`;

const TextoInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

// ─── Section 8: Banner CTA ────────────────────────────────────────────────────
const BannerWrap = styled.section`
  background: #0d0d0d;
  border-top: 1px solid rgba(254, 199, 8, 0.15);
  border-bottom: 1px solid rgba(254, 199, 8, 0.15);
  padding: 96px 24px;
  text-align: center;
  @media (max-width: 640px) { padding: 72px 16px; }
`;

const BannerInner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const BannerH2 = styled(H2)`
  color: #fff;
  margin-bottom: 16px;
`;

const BannerSub = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 36px;
`;

// ─── Section 9: Recursos ──────────────────────────────────────────────────────
const RecursosWrap = styled.section`
  background: #000;
  padding: 96px 24px;
  @media (max-width: 640px) { padding: 72px 16px; }
`;

const RecursosTopo = styled(Centro)`
  margin-bottom: 48px;
`;

const RecursosGrid = styled(Centro)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const RecursoCard = styled.div`
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  padding: 28px 24px;
  transition: border-color 200ms ease;
  &:hover { border-color: rgba(254, 199, 8, 0.25); }
`;

const RecursoIcone = styled.div`
  color: var(--amarelo);
  margin-bottom: 14px;
`;

const RecursoTitulo = styled.h3`
  font-family: var(--fonte-titulo);
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
`;

const RecursoDesc = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 0.87rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.48);
  margin: 0;
`;

// ─── Section 10: Onde se aplica ───────────────────────────────────────────────
const AplicacoesWrap = styled.section`
  background: #0a0a0a;
  padding: 96px 24px;
  @media (max-width: 640px) { padding: 72px 16px; }
`;

const AplicacoesTopo = styled(Centro)`
  margin-bottom: 48px;
`;

const AplicacoesGrid = styled(Centro)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

const AplicacaoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
`;

const AplicacaoIcone = styled.div`
  flex-shrink: 0;
  color: var(--amarelo);
  padding-top: 2px;
`;

const AplicacaoTitulo = styled.h3`
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px;
`;

const AplicacaoDesc = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 0.87rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.48);
  margin: 0;
`;

// ─── Section 11: FAQ ──────────────────────────────────────────────────────────
const FaqWrap = styled.section`
  background: #000;
  padding: 96px 24px;
  @media (max-width: 640px) { padding: 72px 16px; }
`;

const FaqTopo = styled.div`
  max-width: 760px;
  margin: 0 auto 48px;
`;

const FaqLista = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const FaqItemWrap = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:first-child { border-top: 1px solid rgba(255, 255, 255, 0.08); }
`;

const FaqBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  font-family: var(--fonte-titulo);
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: color 160ms ease;

  svg {
    flex-shrink: 0;
    color: var(--amarelo);
    transition: transform 240ms ease;
  }

  &[aria-expanded="true"] svg { transform: rotate(180deg); }
  &:hover { color: var(--amarelo); }
  &:focus-visible { outline: 2px solid var(--amarelo); outline-offset: 2px; border-radius: 2px; }
`;

const FaqResposta = styled.div`
  font-family: var(--fonte-corpo);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.58);
  padding-bottom: 20px;
  display: ${({ $aberto }) => ($aberto ? "block" : "none")};
`;

// ─── Section 12: CTA final ────────────────────────────────────────────────────
const CtaFinalWrap = styled.section`
  background: #0a0a0a;
  padding: 108px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 30%, transparent 80%);
    pointer-events: none;
  }

  @media (max-width: 640px) { padding: 80px 16px; }
`;

const CtaFinalInner = styled.div`
  max-width: 660px;
  margin: 0 auto;
  position: relative;
`;

const CtaApoio = styled.p`
  font-family: var(--fonte-corpo);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.3);
  margin: 14px 0 0;
`;

// ─── Dados ────────────────────────────────────────────────────────────────────
const METRICAS = [
  { num: "24/7",   label: "Operação\ncontinua" },
  { num: "~30s",   label: "Sincronização automática\npor display" },
  { num: "~1min",  label: "Heartbeat de\ncada display" },
  { num: "72h",    label: "SLA de recomposição\ncrítica" },
];

const BULLETS_PAINEL = [
  "Upload de mídia (vídeo, imagem, conteúdo institucional)",
  "Agendamento por display, grupo ou rede inteira",
  "Repetição diária, semanal ou customizada",
  "Status ao vivo de cada display (online, offline, último sync)",
  "Gestão de usuários e permissões por nível",
];

const BULLETS_BACKEND = [
  "API REST documentada com autenticação JWT",
  "Storage em nuvem com AWS S3 + CloudFront CDN",
  "Banco PostgreSQL multi-tenant",
  "Rate limiting e proteção contra abuso",
  "Logs completos de eventos e heartbeats",
  "Backup automático e replicação master-slave",
];

const BULLETS_APP = [
  "Polling otimizado a cada 30 segundos",
  "Heartbeat operacional a cada 1 minuto",
  "Suporte a 4K, HLS, DASH e MP4",
  "Cache local para resiliência (continua exibindo se a internet cair)",
  "Loop 24/7 sem memory leaks",
  "Atualização remota sem necessidade de acesso físico ao display",
];

const RECURSOS = [
  { Icone: Shield,     titulo: "Arquitetura proprietária",      desc: "Toda a stack desenvolvida internamente. Sem dependência de fornecedores externos de CMS de signage." },
  { Icone: RefreshCw,  titulo: "Sincronização contínua",        desc: "Cada display verifica a programação a cada 30 segundos e atualiza sem intervenção manual." },
  { Icone: Activity,   titulo: "Monitoramento em tempo real",   desc: "Heartbeat operacional minuto a minuto, com métricas reais de cada display." },
  { Icone: Clock,      titulo: "Operação 24/7 estável",         desc: "Loop infinito sem memory leaks, validado para funcionamento contínuo." },
  { Icone: Users,      titulo: "Multi-tenant nativo",           desc: "Isolamento entre operações distintas dentro da mesma plataforma." },
  { Icone: FileText,   titulo: "Rastreabilidade por evidências",desc: "Logs completos de cada evento, agendamento e exibição." },
];

const APLICACOES = [
  { Icone: Tv2,        titulo: "Rede TV D.Buzz",               desc: "Sustenta a operação das Telas verticais da rede própria da D.Buzz em pontos comerciais." },
  { Icone: Building2,  titulo: "Operações privadas",            desc: "Suporta instalações em consultórios, clínicas, hospitais, escolas e ambientes corporativos." },
  { Icone: Landmark,   titulo: "Operações em órgãos públicos", desc: "Atende contratações específicas no setor público com a mesma infraestrutura de gestão." },
  { Icone: ShoppingBag,titulo: "Anunciantes da malha D.Buzz",  desc: "Distribuição controlada de campanhas publicitárias na rede gerenciada." },
];

const FAQ_ITENS = [
  {
    p: "O Control Signage é vendido como SaaS para terceiros?",
    r: "Não. É uma plataforma proprietária da D.Buzz, desenvolvida para sustentar a operação interna da empresa e de seus contratos. Eventuais licenciamentos para terceiros são tratados caso a caso.",
  },
  {
    p: "Como o sistema garante que o display sempre está atualizado?",
    r: "Cada display consulta o backend a cada 30 segundos comparando a versão da programação local com a do servidor. Quando há mudança, baixa o novo conteúdo e atualiza a fila do player sem interromper a exibição em andamento.",
  },
  {
    p: "O que acontece se a internet do display cair?",
    r: "O aplicativo mantém em cache local o conteúdo da programação atual e continua reproduzindo normalmente. Quando a conexão volta, ele sincroniza com o backend e atualiza se houver mudanças.",
  },
  {
    p: "Como é o monitoramento de cada display?",
    r: "Cada display envia um heartbeat ao backend a cada 1 minuto reportando status (online/offline), conteúdo em exibição no momento, temperatura do equipamento e último sync. Esses dados ficam disponíveis no painel em tempo real e são armazenados como histórico.",
  },
  {
    p: "O sistema suporta qual tipo de conteúdo?",
    r: "Vídeo (MP4, HLS, DASH) com suporte a 4K, e imagens estáticas. O player é baseado em ExoPlayer, padrão profissional para reprodução em Android TV.",
  },
  {
    p: "Como a propriedade intelectual do sistema é protegida?",
    r: "Toda a stack — painel, backend e aplicativo — é de propriedade da D.Buzz, com documentação técnica completa e código próprio. O projeto é registrável no INPI como software.",
  },
  {
    p: "O Control Signage se integra com outros sistemas da D.Buzz?",
    r: "Sim. Foi desenhado para conectar nativamente com os demais sistemas próprios em desenvolvimento — incluindo os coletores automatizados de conteúdo (notícias, clipes esportivos) — permitindo um pipeline operacional integrado de ponta a ponta.",
  },
];

// ─── Accordion item ───────────────────────────────────────────────────────────
const AccordionItem = ({ pergunta, resposta }) => {
  const [aberto, setAberto] = useState(false);
  const toggle = () => setAberto((v) => !v);

  return (
    <FaqItemWrap>
      <FaqBtn
        aria-expanded={aberto}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
        }}
      >
        {pergunta}
        <ChevronDown size={18} aria-hidden="true" />
      </FaqBtn>
      <FaqResposta $aberto={aberto} role="region">
        {resposta}
      </FaqResposta>
    </FaqItemWrap>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const ControlSignage = () => (
  <>
    <Helmet>
      <title>DBUZZ Control Signage — Plataforma proprietária de gestão de displays | D.Buzz</title>
      <meta
        name="description"
        content="Plataforma própria da D.Buzz para gestão de Telas corporativas: agendamento, monitoramento em tempo real e sincronização automática, sob arquitetura proprietária."
      />
      <meta property="og:title" content="DBUZZ Control Signage — Plataforma proprietária de gestão de displays | D.Buzz" />
      <meta
        property="og:description"
        content="Plataforma própria da D.Buzz para gestão de Telas corporativas: agendamento, monitoramento em tempo real e sincronização automática, sob arquitetura proprietária."
      />
    </Helmet>

    <Header />

    <main>
      {/* 1. Hero */}
      <HeroWrap>
        <HeroInner>
          <Kicker>Plataforma Proprietária D.Buzz</Kicker>
          <H1>Controle total da rede de comunicação presencial. Sob arquitetura própria.</H1>
          <Paragrafo>
            O DBUZZ Control Signage é a plataforma que opera por trás da rede de Telas da D.Buzz
            — com agendamento, monitoramento e sincronização automática em escala, sem depender de
            fornecedores externos de CMS.
          </Paragrafo>
          <HeroAcoes>
            <BtnAmarelo href="/#/">
              Falar com nossa equipe <ArrowRight size={16} aria-hidden="true" />
            </BtnAmarelo>
            <BtnGhost href="#como-funciona">
              Como funciona →
            </BtnGhost>
          </HeroAcoes>
        </HeroInner>
      </HeroWrap>

      {/* 2. Métricas */}
      <MetricasWrap>
        <MetricasGrid>
          {METRICAS.map(({ num, label }) => (
            <MetricaCard key={num}>
              <MetricaNum>{num}</MetricaNum>
              <MetricaLabel>{label}</MetricaLabel>
            </MetricaCard>
          ))}
        </MetricasGrid>
      </MetricasWrap>

      {/* 3. O que é */}
      <TextoWrap $bg="#000">
        <TextoInner>
          <Kicker>Plataforma</Kicker>
          <H2>Uma plataforma própria para uma operação que não pode parar.</H2>
          <Paragrafo>
            A D.Buzz opera uma rede de comunicação presencial gerenciada onde cada display precisa
            estar no ar, com o conteúdo certo, no horário certo, todos os dias. O Control Signage
            é a plataforma desenvolvida internamente para sustentar essa operação: ela centraliza a
            programação, distribui o conteúdo, monitora cada tela em tempo real e mantém a rede
            funcionando de forma estável, rastreável e auditável.
          </Paragrafo>
          <LinkSeta href="/#/">
            Solicitar apresentação <ArrowRight size={14} aria-hidden="true" />
          </LinkSeta>
        </TextoInner>
      </TextoWrap>

      {/* 4. Como funciona */}
      <TextoWrap id="como-funciona" $bg="#0a0a0a">
        <TextoInner>
          <Kicker>Como Funciona</Kicker>
          <H2>Três camadas integradas. Uma única operação.</H2>
          <Paragrafo style={{ margin: 0 }}>
            A plataforma é estruturada em três camadas que se comunicam por APIs próprias: o painel
            onde a operação acontece, o backend que orquestra tudo, e o aplicativo que roda em cada
            display.
          </Paragrafo>
        </TextoInner>
      </TextoWrap>

      {/* 5. Camada 1: Painel Web */}
      <TextoWrap $bg="#000">
        <TextoInner>
          <Kicker>Camada 1 — Painel Web</Kicker>
          <H2>Gestão completa em um painel só.</H2>
          <Paragrafo>
            Construído em React, o painel é onde a equipe da D.Buzz programa a rede inteira.
            Upload de conteúdo, agendamento visual em calendário, monitoramento de cada display em
            tempo real e relatórios consolidados — tudo em uma única interface.
          </Paragrafo>
          <BulletLista>
            {BULLETS_PAINEL.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </BulletLista>
        </TextoInner>
      </TextoWrap>

      {/* 6. Camada 2: Backend */}
      <TextoWrap $bg="#0a0a0a">
        <TextoInner>
          <Kicker>Camada 2 — Backend Próprio</Kicker>
          <H2>Infraestrutura robusta, sob nosso controle.</H2>
          <Paragrafo>
            O backend em Node.js orquestra toda a operação: autenticação, agendamentos, distribuição
            de conteúdo e comunicação com os displays. Storage em nuvem com CDN garante que o
            conteúdo chega rápido em qualquer ponto da rede, e cada evento operacional fica
            registrado para auditoria.
          </Paragrafo>
          <BulletLista>
            {BULLETS_BACKEND.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </BulletLista>
        </TextoInner>
      </TextoWrap>

      {/* 7. Camada 3: App nas telas */}
      <TextoWrap $bg="#000">
        <TextoInner>
          <Kicker>Camada 3 — Aplicativo nas Telas</Kicker>
          <H2>Reprodução estável, sincronização automática.</H2>
          <Paragrafo>
            Em cada Tela roda um aplicativo Android TV em Kotlin, com player profissional baseado
            em ExoPlayer. Ele consulta o backend a cada 30 segundos buscando atualizações na
            programação, e envia heartbeat a cada minuto reportando status real — online, conteúdo
            em exibição, temperatura. Tudo isso em loop infinito, 24 horas por dia, sem travamentos.
          </Paragrafo>
          <BulletLista>
            {BULLETS_APP.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </BulletLista>
        </TextoInner>
      </TextoWrap>

      {/* 8. Banner CTA intermediário */}
      <BannerWrap>
        <BannerInner>
          <BannerH2>O Control Signage opera nos bastidores da rede D.Buzz.</BannerH2>
          <BannerSub>
            Quer entender como a tecnologia sustenta nossa operação de comunicação presencial
            gerenciada?
          </BannerSub>
          <BtnAmarelo href="/#/">
            Falar com nossa equipe <ArrowRight size={16} aria-hidden="true" />
          </BtnAmarelo>
        </BannerInner>
      </BannerWrap>

      {/* 9. Recursos */}
      <RecursosWrap>
        <RecursosTopo>
          <Kicker>Recursos</Kicker>
          <H2>O que diferencia o Control Signage.</H2>
        </RecursosTopo>
        <RecursosGrid>
          {RECURSOS.map(({ Icone, titulo, desc }) => (
            <RecursoCard key={titulo}>
              <RecursoIcone><Icone size={22} aria-hidden="true" /></RecursoIcone>
              <RecursoTitulo>{titulo}</RecursoTitulo>
              <RecursoDesc>{desc}</RecursoDesc>
            </RecursoCard>
          ))}
        </RecursosGrid>
      </RecursosWrap>

      {/* 10. Onde se aplica */}
      <AplicacoesWrap>
        <AplicacoesTopo>
          <Kicker>Aplicações</Kicker>
          <H2>Onde o Control Signage atua.</H2>
          <Paragrafo style={{ margin: 0 }}>
            A plataforma sustenta diferentes frentes da operação D.Buzz, do conteúdo institucional
            à malha publicitária.
          </Paragrafo>
        </AplicacoesTopo>
        <AplicacoesGrid>
          {APLICACOES.map(({ Icone, titulo, desc }) => (
            <AplicacaoCard key={titulo}>
              <AplicacaoIcone><Icone size={22} aria-hidden="true" /></AplicacaoIcone>
              <div>
                <AplicacaoTitulo>{titulo}</AplicacaoTitulo>
                <AplicacaoDesc>{desc}</AplicacaoDesc>
              </div>
            </AplicacaoCard>
          ))}
        </AplicacoesGrid>
      </AplicacoesWrap>

      {/* 11. FAQ */}
      <FaqWrap>
        <FaqTopo>
          <Kicker>Dúvidas Frequentes</Kicker>
          <H2>O que costuma ser perguntado sobre o Control Signage.</H2>
        </FaqTopo>
        <FaqLista>
          {FAQ_ITENS.map(({ p, r }) => (
            <AccordionItem key={p} pergunta={p} resposta={r} />
          ))}
        </FaqLista>
      </FaqWrap>

      {/* 12. CTA final */}
      <CtaFinalWrap>
        <CtaFinalInner>
          <Kicker>Próximo Passo</Kicker>
          <H2>Conheça o Control Signage de perto.</H2>
          <Paragrafo>
            Agende uma apresentação com nossa equipe e veja como a plataforma sustenta a operação
            D.Buzz.
          </Paragrafo>
          <BtnAmarelo href="/#/">
            Falar com nossa equipe <ArrowRight size={16} aria-hidden="true" />
          </BtnAmarelo>
          <CtaApoio>Resposta em até 1 dia útil.</CtaApoio>
        </CtaFinalInner>
      </CtaFinalWrap>
    </main>

    <Footer />
  </>
);

export default ControlSignage;
