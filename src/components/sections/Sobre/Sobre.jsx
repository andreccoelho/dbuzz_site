import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, ColunaTexto,
  Paragrafo, Lista, PilarBox, MissaoVisao, MV, Valores, ValorCard, ValorTopo, ValorTexto,
} from "./Style";

const VALORES = [
  {
    titulo: "Compromisso com a continuidade operacional",
    descricao: "Atuar com estabilidade, monitoramento e acompanhamento contínuo da operação.",
  },
  {
    titulo: "Comunicação com propósito",
    descricao: "Utilizar a comunicação digital como ferramenta de orientação, informação, organização e experiência do público.",
  },
  {
    titulo: "Governança e responsabilidade institucional",
    descricao: "Operar com rastreabilidade, padronização, transparência e responsabilidade na gestão da comunicação institucional.",
  },
  {
    titulo: "Compromisso com LGPD e privacidade",
    descricao: "Atuar com respeito à Lei Geral de Proteção de Dados (LGPD), priorizando boas práticas de privacidade, controle de acesso, proteção de informações e uso responsável dos ambientes digitais e operacionais.",
  },
  {
    titulo: "Inovação aplicada à operação",
    descricao: "Desenvolver soluções tecnológicas próprias voltadas para eficiência operacional, gestão remota e evolução contínua da comunicação digital.",
  },
  {
    titulo: "Excelência no atendimento e suporte",
    descricao: "Garantir acompanhamento próximo, suporte contínuo e relacionamento de longo prazo com cada organização atendida.",
  },
  {
    titulo: "Evolução contínua",
    descricao: "Buscar melhoria permanente em processos, tecnologia, conteúdo e experiência operacional.",
  },
  {
    titulo: "Respeito institucional",
    descricao: "Atuar com ética, profissionalismo, impessoalidade e alinhamento às necessidades e diretrizes de cada ambiente atendido.",
  },
  {
    titulo: "Integração entre conteúdo, tecnologia e operação",
    descricao: "Compreender a comunicação institucional digital como uma solução integrada, onde conteúdo, plataforma, operação e infraestrutura funcionam de forma coordenada, contínua e gerenciada.",
  },
];

const Sobre = () => {
  const [aberto, setAberto] = useState(null);
  const toggle = (i) => setAberto(aberto === i ? null : i);

  return (
    <Secao id="sobre">
      <Container>
        <Cabecalho>
          <Kicker>Sobre Nós</Kicker>
          <Titulo>Especialistas em comunicação institucional digital gerenciada.</Titulo>
          <Lead>
            A D.Buzz Corporate e Serviços Ltda. é especializada na operação de soluções integradas
            de comunicação institucional digital, com atuação em ambientes públicos, corporativos,
            educacionais, assistenciais e comerciais.
          </Lead>
        </Cabecalho>

        <ColunaTexto>
          <div>
            <Paragrafo>
              A empresa atua na produção contínua de conteúdo institucional customizado, gestão
              centralizada de programação, operação técnica remota, suporte operacional,
              monitoramento contínuo e disponibilização de infraestrutura tecnológica dedicada
              para redes de Telas verticais indoor.
            </Paragrafo>

            <Paragrafo>
              A D.Buzz transforma ambientes físicos de atendimento, circulação e relacionamento
              em canais permanentes de informação, orientação, campanhas institucionais,
              comunicação organizacional, educação e experiência do público.
            </Paragrafo>

            <Paragrafo>
              A solução é operada por meio da plataforma <strong>DBuzz Control Signage</strong>,
              responsável pela gestão remota da rede, atualização de conteúdos, controle
              operacional, monitoramento dos pontos ativos, rastreabilidade de execução e
              acompanhamento contínuo da operação.
            </Paragrafo>

            <Paragrafo>
              A D.Buzz não atua apenas com disponibilização de Displays de LED, equipamentos ou
              software. Sua entrega consiste em uma{" "}
              <strong>operação contínua de comunicação institucional digital gerenciada</strong>,
              estruturada para garantir padronização, estabilidade operacional, organização
              comunicacional e suporte permanente às estratégias institucionais de cada
              organização atendida.
            </Paragrafo>
          </div>

          <div>
            <PilarBox>
              <h4>Pilares de atuação</h4>
              <Paragrafo>Sua atuação é estruturada de forma integrada, combinando:</Paragrafo>
              <Lista>
                <li>Produção de conteúdo institucional customizado</li>
                <li>Operação técnica centralizada</li>
                <li>Gestão remota de programação e campanhas</li>
                <li>Monitoramento operacional contínuo</li>
                <li>Suporte e manutenção operacional</li>
                <li>Infraestrutura dedicada de comunicação digital presencial</li>
              </Lista>
            </PilarBox>

            <MissaoVisao>
              <MV>
                <h3>Missão</h3>
                <p>
                  Transformar ambientes físicos em canais institucionais permanentes de comunicação
                  digital integrada com gerenciamento contínuo, conectando organizações, serviços e
                  pessoas por meio de conteúdo estratégico, operação técnica centralizada,
                  tecnologia própria e gestão remota da comunicação presencial.
                </p>
              </MV>
              <MV>
                <h3>Visão</h3>
                <p>
                  Ser referência nacional em soluções integradas de comunicação institucional
                  digital gerenciada, reconhecida pela capacidade de integrar conteúdo, tecnologia,
                  operação e governança em soluções contínuas para órgãos públicos, saúde, educação
                  e ambientes corporativos.
                </p>
              </MV>
            </MissaoVisao>
          </div>
        </ColunaTexto>

        <Valores>
          <Kicker as="div">Valores</Kicker>
          <div className="grid">
            {VALORES.map((v, i) => (
              <ValorCard key={i} $aberto={aberto === i} onClick={() => toggle(i)}>
                <ValorTopo $aberto={aberto === i}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{v.titulo}</strong>
                  <ChevronDown size={15} className="icone" />
                </ValorTopo>
                <ValorTexto $aberto={aberto === i}>{v.descricao}</ValorTexto>
              </ValorCard>
            ))}
          </div>
        </Valores>
      </Container>
    </Secao>
  );
};

export default Sobre;
