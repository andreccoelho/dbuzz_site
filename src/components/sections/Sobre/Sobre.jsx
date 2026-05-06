import { Building2, Mail, MapPin, Instagram } from "lucide-react";
import {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, ColunaTexto, ColunaInstitucional,
  Paragrafo, BlocoDados, ItemDado, Rotulo, Valor, MissaoVisao, MV, Valores, ValorPil,
} from "./Style";

const valores = [
  "Responsabilidade técnica",
  "Clareza e transparência",
  "Finalidade adequada da comunicação",
  "Conteúdo com sentido para as pessoas",
  "Continuidade operacional",
  "Rastreabilidade e evidências",
  "Segurança jurídica e respeito ao processo público",
  "Integração da solução",
  "Inovação com utilidade",
  "Compromisso com a experiência humana",
];

const Sobre = () => (
  <Secao id="sobre">
    <Container>
      <Cabecalho>
        <Kicker>Sobre · 01</Kicker>
        <Titulo>Especialista em comunicação presencial gerenciada.</Titulo>
        <Lead>
          A D.Buzz Corporate e Serviços Ltda. é uma empresa especializada em comunicação presencial
          gerenciada, com atuação na produção de conteúdo customizado, operação técnica remota,
          gestão de grade, suporte, acompanhamento contínuo, disponibilização de infraestrutura
          tecnológica dedicada e operação de rede própria de mídia indoor.
        </Lead>
      </Cabecalho>

      <Grid>
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

        <ColunaInstitucional>
          <BlocoDados>
            <Kicker as="div">Dados institucionais</Kicker>

            <ItemDado>
              <Building2 size={16} />
              <div>
                <Rotulo>Razão social</Rotulo>
                <Valor>D.Buzz Corporate e Serviços Ltda.</Valor>
              </div>
            </ItemDado>

            <ItemDado>
              <span className="num-mark">CNPJ</span>
              <div>
                <Rotulo>Cadastro Nacional de Pessoa Jurídica</Rotulo>
                <Valor className="num">07.835.957/0001-05</Valor>
                <small>I.E. 78.066.172</small>
              </div>
            </ItemDado>

            <ItemDado>
              <MapPin size={16} />
              <div>
                <Rotulo>Endereço</Rotulo>
                <Valor>
                  Rua Ivan Vigne, 80 — Sala 112<br />
                  Centro, Nova Iguaçu/RJ — CEP 26.255-160
                </Valor>
              </div>
            </ItemDado>

            <ItemDado>
              <Mail size={16} />
              <div>
                <Rotulo>E-mail</Rotulo>
                <Valor>
                  <a href="mailto:dbuzzcorporate@gmail.com">dbuzzcorporate@gmail.com</a>
                </Valor>
              </div>
            </ItemDado>

            <ItemDado>
              <Instagram size={16} />
              <div>
                <Rotulo>Instagram</Rotulo>
                <Valor>
                  <a
                    href="https://www.instagram.com/dbuzz.corporate/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dbuzz.corporate
                  </a>
                </Valor>
              </div>
            </ItemDado>
          </BlocoDados>
        </ColunaInstitucional>
      </Grid>

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
