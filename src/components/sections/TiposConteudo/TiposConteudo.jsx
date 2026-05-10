import {
  Megaphone, Tag, CalendarDays, BarChart3,
  UserCheck, BookOpen, Tv2, Trophy,
  ShieldCheck, Landmark,
} from "lucide-react";
import styled from "styled-components";

const TIPOS = [
  {
    Icone: Megaphone,
    titulo: "Comunicados e avisos",
    desc: "Informes institucionais sempre atualizados, sem depender de murais ou e-mail.",
  },
  {
    Icone: Tag,
    titulo: "Campanhas e promoções",
    desc: "Ofertas, lançamentos e ações comerciais com atualização ágil e remota.",
  },
  {
    Icone: CalendarDays,
    titulo: "Agenda e eventos",
    desc: "Calendários, programações e datas relevantes visíveis nos pontos certos.",
  },
  {
    Icone: BarChart3,
    titulo: "Indicadores e metas",
    desc: "KPIs, dashboards e resultados em tempo real exibidos na operação.",
  },
  {
    Icone: UserCheck,
    titulo: "Atendimento e serviços",
    desc: "Orientação a pacientes, clientes e cidadãos em salas de espera e recepções.",
  },
  {
    Icone: BookOpen,
    titulo: "Conteúdo educativo",
    desc: "Informações de saúde, segurança, procedimentos e boas práticas no ponto de uso.",
  },
  {
    Icone: Tv2,
    titulo: "Entretenimento e notícias",
    desc: "Conteúdo de espera: clima, notícias, utilidade pública e identidade de marca.",
  },
  {
    Icone: Trophy,
    titulo: "Cultura e reconhecimento",
    desc: "Valores organizacionais, destaques de equipe e reforço de clima interno.",
  },
  {
    Icone: Landmark,
    titulo: "Canal do cidadão",
    desc: "Serviços públicos, campanhas governamentais e informações de utilidade pública.",
  },
  {
    Icone: ShieldCheck,
    titulo: "Segurança e compliance",
    desc: "SST, prevenção de acidentes, normas e campanhas de conformidade.",
  },
];

const Secao = styled.section`
  background: #fff;
  padding: 100px 24px;

  @media (max-width: 900px) { padding: 72px 20px; }
  @media (max-width: 640px) { padding: 56px 16px; }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Cabecalho = styled.header`
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;

  @media (max-width: 900px) { text-align: left; margin-bottom: 40px; }
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
  font-size: clamp(1.65rem, 3.2vw, 2.6rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 14px;
`;

const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--sub);

  @media (max-width: 640px) { font-size: 0.94rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 1100px) { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 800px)  { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 560px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`;

const Card = styled.div`
  padding: 20px 16px;
  background: var(--cinza-50);
  border: 1px solid var(--cinza-200);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    border-color: var(--cinza-300);
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  @media (max-width: 560px) {
    min-width: 136px;
    flex-shrink: 0;
  }
`;

const IconeBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #000;
  border-radius: 3px;
  color: var(--amarelo);
  flex-shrink: 0;
`;

const CardTitulo = styled.h3`
  font-family: var(--fonte-titulo);
  font-size: 0.97rem;
  font-weight: 700;
  color: var(--texto);
  line-height: 1.3;
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--sub);
  margin: 0;

  @media (max-width: 560px) { display: none; }
`;

const TiposConteudo = () => (
  <Secao id="tipos-conteudo">
    <Container>
      <Cabecalho>
        <Kicker>O que vai na tela · 02.5</Kicker>
        <Titulo>10 tipos de conteúdo que a D.Buzz gerencia</Titulo>
        <Lead>
          Cada ambiente pede uma abordagem diferente. A D.Buzz produz, agenda e atualiza
          conteúdo para todos esses contextos com grade gerenciada remotamente.
        </Lead>
      </Cabecalho>

      <Grid>
        {TIPOS.map(({ Icone, titulo, desc }) => (
          <Card key={titulo}>
            <IconeBox aria-hidden="true">
              <Icone size={18} />
            </IconeBox>
            <CardTitulo>{titulo}</CardTitulo>
            <CardDesc>{desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Container>
  </Secao>
);

export default TiposConteudo;
