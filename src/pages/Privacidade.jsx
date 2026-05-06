import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Wrap = styled.section`
  max-width: 760px;
  margin: 120px auto 80px;
  padding: 0 24px;

  h1 {
    font-size: clamp(1.8rem, 3.2vw, 2.4rem);
    margin-bottom: 12px;
  }

  .voltar {
    display: inline-block;
    margin-bottom: 24px;
    font-family: var(--fonte-mono);
    font-size: 0.85rem;
    color: var(--azul2);
    border-bottom: 1px dotted currentColor;
  }

  h2 {
    font-size: 1.15rem;
    margin: 32px 0 12px;
    color: var(--azul);
  }

  p { font-size: 0.96rem; line-height: 1.7; color: var(--sub); }

  small { display: block; margin-top: 8px; color: var(--sub); }
`;

const Privacidade = () => (
  <>
    <Header />
    <Wrap>
      <Link to="/" className="voltar">← Voltar para o site</Link>
      <h1>Política de Privacidade</h1>
      <small>D.Buzz Corporate e Serviços Ltda. · Última atualização: maio de 2026</small>

      <h2>1. Quem somos</h2>
      <p>
        D.Buzz Corporate e Serviços Ltda., pessoa jurídica de direito privado, inscrita no CNPJ
        07.835.957/0001-05, com sede na Rua Ivan Vigne, 80 — Sala 112, Centro, Nova Iguaçu/RJ.
      </p>

      <h2>2. Dados coletados neste site</h2>
      <p>
        Este site coleta automaticamente dados de navegação por meio do Google Analytics 4 (GA4),
        incluindo páginas visitadas, tempo de permanência, cidade/estado do visitante, tipo de
        dispositivo e navegador. Esses dados são coletados de forma anônima e agregada e não
        permitem identificação pessoal do visitante.
      </p>
      <p>
        Dados fornecidos voluntariamente: quando você preenche formulário de contato ou envia
        e-mail, coletamos nome, e-mail e mensagem exclusivamente para responder à sua solicitação.
      </p>

      <h2>3. Finalidade do uso</h2>
      <p>
        Os dados de navegação são usados exclusivamente para análise estatística de desempenho do
        site. Os dados de contato são usados exclusivamente para responder à solicitação enviada.
      </p>

      <h2>4. Compartilhamento</h2>
      <p>
        Os dados de navegação são processados pelo Google (Google Analytics). Não compartilhamos
        dados pessoais com terceiros para fins comerciais ou publicitários.
      </p>

      <h2>5. Seus direitos (LGPD — Lei 13.709/2018)</h2>
      <p>
        Você tem direito a confirmar a existência de tratamento, acessar seus dados, solicitar
        correção, portabilidade ou exclusão. Para exercer seus direitos, escreva para
        dbuzzcorporate@gmail.com.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Este site usa cookies para funcionamento do Google Analytics. Você pode desativar cookies
        nas configurações do seu navegador. A desativação não impede o uso do site.
      </p>

      <h2>7. Contato</h2>
      <p>E-mail: dbuzzcorporate@gmail.com</p>
    </Wrap>
    <Footer />
  </>
);

export default Privacidade;
