import { Briefcase, Landmark, Tv, ArrowRight } from "lucide-react";
import { scrollTo } from "../../../utils/scroll";
import {
  Secao, Container, Cabecalho, Kicker, Titulo, Lead, Grid, Card, CardTopo,
  CardCorpo, IconeBox, Subtitulo, Lista, ItemLista, CardLink,
} from "./Style";

const frentes = [
  {
    cor: "verde",
    icone: Briefcase,
    titulo: "Setor Privado",
    subtitulo: "Soluções dedicadas para clientes privados",
    descricao:
      "Consultórios, clínicas, hospitais, escolas, instituições de ensino superior, empresas, comércios, recepções, salas de espera e ambientes corporativos.",
    itens: [
      "Saúde Digital — Espera Inteligente",
      "Escola Digital e Universidade Digital",
      "Empresas e ambientes corporativos",
      "Comércios e pontos de atendimento",
    ],
    cta: "Ver aplicações privadas",
    href: "#aplicacoes",
  },
  {
    cor: "azul",
    icone: Landmark,
    titulo: "Setor Público",
    subtitulo: "Comunicação pública presencial gerenciada",
    descricao:
      "Serviço Integrado de Gestão de Comunicação Pública Presencial com Operação, Produção de Conteúdo Institucional Customizado e Disponibilização de Infraestrutura Tecnológica Dedicada.",
    itens: [
      "Órgãos federais, estaduais e municipais",
      "Documentação técnica de apoio à análise",
      "Conteúdo institucional customizado",
      "Operação técnica e gestão de grade",
    ],
    cta: "Conhecer a solução pública",
    href: "#setor-publico",
    notaJuridica:
      "A D.Buzz fornece documentação técnica de apoio. A decisão sobre contratação direta cabe ao órgão competente.",
  },
  {
    cor: "laranja",
    icone: Tv,
    titulo: "TV D.Buzz",
    subtitulo: "Rede própria de mídia indoor",
    descricao:
      "Rede própria de comunicação presencial em locais comerciais privados. Mais de 50 Displays de LED verticais indoor com programação em looping de aproximadamente 15 minutos.",
    itens: [
      "50+ Displays de LED verticais indoor",
      "Looping de ~15 minutos",
      "Públicos presenciais reais",
      "Espaços publicitários para anunciantes",
    ],
    cta: "Anunciar na TV D.Buzz",
    href: "#tv-dbuzz",
  },
];

const Solucoes = () => (
  <Secao id="solucoes">
    <Container>
      <Cabecalho>
        <Kicker>Soluções · 02</Kicker>
        <Titulo>Três frentes de atuação, três finalidades distintas.</Titulo>
        <Lead>
          A atuação da D.Buzz está organizada em três frentes complementares — cada uma com público,
          finalidade e enquadramento próprios. A separação é deliberada e tem reflexos comerciais e
          jurídicos.
        </Lead>
      </Cabecalho>

      <Grid>
        {frentes.map((f) => {
          const Icone = f.icone;
          return (
            <Card key={f.titulo} $cor={f.cor}>
              <CardTopo $cor={f.cor}>
                <IconeBox $cor={f.cor}>
                  <Icone size={22} />
                </IconeBox>
                <span className="kicker-frente">Frente</span>
                <h3>{f.titulo}</h3>
                <Subtitulo>{f.subtitulo}</Subtitulo>
              </CardTopo>

              <CardCorpo>
                <p>{f.descricao}</p>

                <Lista>
                  {f.itens.map((it) => (
                    <ItemLista key={it} $cor={f.cor}>
                      {it}
                    </ItemLista>
                  ))}
                </Lista>

                {f.notaJuridica && (
                  <small className="nota-juridica">{f.notaJuridica}</small>
                )}

                <CardLink
                  href={f.href}
                  $cor={f.cor}
                  onClick={(e) => { e.preventDefault(); scrollTo(f.href.slice(1)); }}
                >
                  {f.cta} <ArrowRight size={16} />
                </CardLink>
              </CardCorpo>
            </Card>
          );
        })}
      </Grid>
    </Container>
  </Secao>
);

export default Solucoes;
