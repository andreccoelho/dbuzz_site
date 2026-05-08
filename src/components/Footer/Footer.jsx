import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";
import {
  Rodape, Container, ColunaLogo, Logo, TextoMarca, Colunas, Coluna, Titulo,
  Lista, Linha, Inferior, LinkPrivacidade, BotaoTopo,
} from "./Style";

const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <Rodape>
      <Container>
        <ColunaLogo>
          <Logo>
            <img
              src="/imagens/logo-1.png"
              alt="D.Buzz Corporate"
            />
          </Logo>
          <TextoMarca>
            Comunicação presencial gerenciada para empresas, instituições, anunciantes e órgãos
            públicos.
          </TextoMarca>
        </ColunaLogo>

        <Colunas>
          <Coluna>
            <Titulo>Soluções</Titulo>
            <Lista>
              <li><a href="#solucoes">Setor Privado</a></li>
              <li><a href="#setor-publico">Setor Público</a></li>
              <li><a href="#tv-dbuzz">TV D.Buzz</a></li>
              <li><a href="#aplicacoes">Aplicações</a></li>
            </Lista>
          </Coluna>

          <Coluna>
            <Titulo>Empresa</Titulo>
            <Lista>
              <li><a href="#sobre">Sobre a D.Buzz</a></li>
              <li><a href="#governanca">Governança</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#contato">Contato</a></li>
            </Lista>
          </Coluna>

          <Coluna>
            <Titulo>Contato</Titulo>
            <Lista>
              <li>
                <Mail size={14} />
                <a href="mailto:dbuzzcorporate@gmail.com">dbuzzcorporate@gmail.com</a>
              </li>
              <li>
                <Instagram size={14} />
                <a
                  href="https://www.instagram.com/dbuzz.corporate/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dbuzz.corporate
                </a>
              </li>
              <li>
                <MapPin size={14} />
                <span>
                  Rua Ivan Vigne, 80 — Sala 112<br />
                  Centro, Nova Iguaçu/RJ — CEP 26.255-160
                </span>
              </li>
            </Lista>
          </Coluna>
        </Colunas>
      </Container>

      <Linha />

      <Inferior>
        <span className="num">
          D.Buzz Corporate e Serviços Ltda. · CNPJ 07.835.957/0001-05 · I.E. 78.066.172
        </span>
        <span>© {ano} D.Buzz Corporate. Todos os direitos reservados.</span>
        <LinkPrivacidade to="/privacidade">Política de Privacidade</LinkPrivacidade>
        <BotaoTopo href="#inicio">Topo ↑</BotaoTopo>
      </Inferior>
    </Rodape>
  );
};

export default Footer;
