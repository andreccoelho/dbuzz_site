import {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, ColunaTexto,
  Paragrafo, MissaoVisao, MV, Valores, ValorPil,
} from "./Style";

const valores = [
  "Responsabilidade técnica",
  "Clareza e transparência",
  "Finalidade adequada da comunicação",
  "Conteúdo com sentido para as pessoas",
  "Continuidade operacional",
  "Rastreabilidade e evidências",
  "Segurança jurídica e LGPD",
  "Integração da solução",
  "Inovação com utilidade",
  "Compromisso com a experiência humana",
];

const Sobre = () => (
  <Secao id="sobre">
    <Container>
      <Cabecalho>
        <Kicker>Sobre Nós</Kicker>
        <Titulo>Especialista em comunicação presencial gerenciada.</Titulo>
        <Lead>
          A D.Buzz Corporate e Serviços Ltda. é uma empresa especializada em comunicação presencial
          gerenciada, com atuação na produção de conteúdo customizado, operação técnica remota,
          gestão de grade, suporte, acompanhamento contínuo, disponibilização de infraestrutura
          tecnológica dedicada e operação de rede própria de mídia indoor.
        </Lead>
      </Cabecalho>

      <ColunaTexto>
          <Paragrafo>
            A D.Buzz transforma espaços físicos de atendimento, circulação e relacionamento em
            canais permanentes de informação, orientação, campanhas, avisos, entretenimento,
            comunicação institucional e publicidade, conforme a finalidade de cada frente de
            atuação.
          </Paragrafo>

          <Paragrafo>
            A entrega da D.Buzz não se limita à instalação de Displays de LED, ao fornecimento de
            equipamentos, à disponibilização de software ou à exibição de arquivos digitais. A
            solução é estruturada para que conteúdo, operação técnica, gestão remota, grade de
            programação, infraestrutura, suporte e acompanhamento funcionem de maneira coordenada e
            contínua.
          </Paragrafo>

          <MissaoVisao>
            <MV>
              <h3>Missão</h3>
              <p>
                Modernizar a comunicação presencial de empresas, instituições, anunciantes e órgãos
                públicos por meio de soluções integradas, contínuas e gerenciadas.
              </p>
            </MV>
            <MV>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como empresa de referência em comunicação presencial gerenciada,
                atuando com excelência técnica, responsabilidade operacional e sensibilidade
                humana.
              </p>
            </MV>
          </MissaoVisao>
        </ColunaTexto>

      <Valores>
        <Kicker as="div">Valores</Kicker>
        <ul>
          {valores.map((v, i) => (
            <ValorPil key={v}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              {v}
            </ValorPil>
          ))}
        </ul>
      </Valores>
    </Container>
  </Secao>
);

export default Sobre;
