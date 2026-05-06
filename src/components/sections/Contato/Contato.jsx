import React from "react";
import * as S from "./Style";

const FLUXOS = [
  {
    icon: "🏥",
    titulo: "Setor Privado",
    desc: "Saúde Digital, Escola Digital, Universidade, Empresas e Comércios. Conte sobre o ambiente, o objetivo de comunicação e o ponto de partida.",
    btn: "Falar com comercial →",
    btnTipo: "primary",
    href: "mailto:dbuzzcorporate@gmail.com?subject=Or%C3%A7amento%20Setor%20Privado",
  },
  {
    icon: "🏛️",
    titulo: "Setor Público",
    desc: "Para órgãos da administração pública direta e indireta interessados em receber a documentação técnica de apoio à análise.",
    btn: "Solicitar documentação →",
    btnTipo: "ghost",
    href: "mailto:dbuzzcorporate@gmail.com?subject=Documenta%C3%A7%C3%A3o%20T%C3%A9cnica%20-%20Setor%20P%C3%BAblico",
  },
  {
    icon: "📺",
    titulo: "TV D.Buzz",
    desc: "Anunciantes interessados em pacotes comerciais, plano de mídia e propostas customizadas para a rede comercial privada.",
    btn: "Solicitar mídia kit →",
    btnTipo: "primary",
    href: "mailto:dbuzzcorporate@gmail.com?subject=An%C3%BAncio%20TV%20D.Buzz",
  },
];

const Contato = () => (
  <S.Wrapper id="contato">
    <S.Container>
      <S.Label>Contato</S.Label>
      <S.Title>Três fluxos de entrada — escolha o que se aplica</S.Title>
      <S.Sub>
        Para evitar ruído entre as frentes, cada modalidade tem um caminho de
        contato dedicado. Use o que faz sentido para o seu caso.
      </S.Sub>

      <S.Grid>
        {FLUXOS.map((f, i) => (
          <S.Card key={i}>
            <S.Icon aria-hidden="true">{f.icon}</S.Icon>
            <S.CardTitle>{f.titulo}</S.CardTitle>
            <S.CardDesc>{f.desc}</S.CardDesc>
            <S.Btn href={f.href} $tipo={f.btnTipo}>
              {f.btn}
            </S.Btn>
          </S.Card>
        ))}
      </S.Grid>

      <S.Dados>
        <S.DadoItem>
          <S.DadoLabel>Razão Social</S.DadoLabel>
          <S.DadoValor>D.Buzz Corporate e Serviços Ltda.</S.DadoValor>
        </S.DadoItem>
        <S.DadoItem>
          <S.DadoLabel>CNPJ</S.DadoLabel>
          <S.DadoValor>07.835.957/0001-05</S.DadoValor>
        </S.DadoItem>
        <S.DadoItem>
          <S.DadoLabel>Endereço</S.DadoLabel>
          <S.DadoValor>
            Rua Ivan Vigne, 80 — Sala 112, Centro, Nova Iguaçu/RJ — CEP
            26.255-160
          </S.DadoValor>
        </S.DadoItem>
        <S.DadoItem>
          <S.DadoLabel>E-mail</S.DadoLabel>
          <S.DadoValor>dbuzzcorporate@gmail.com</S.DadoValor>
        </S.DadoItem>
      </S.Dados>
    </S.Container>
  </S.Wrapper>
);

export default Contato;
