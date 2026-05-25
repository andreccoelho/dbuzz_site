# Script de Ajustes — Site DBUZZ

Olá Claude Code. Preciso que você aplique os seguintes ajustes no projeto. Antes de começar, faça um levantamento dos arquivos relevantes (componentes do Hero, Sobre Nós, Clientes, Aplicações, Valores, Setor Público e Rodapé) e me mostre um plano de execução resumido. Em seguida, execute na ordem abaixo, commit por ajuste, com mensagens claras em português.

---

## 1. Refatorar as telinhas (cards/slides) da seção HERO

**Problema:** As telinhas do Hero estão confusas, sem hierarquia visual e sem mensagem clara.

**O que fazer:**
- Localize o componente do Hero (provavelmente `Hero.tsx`, `HeroSection.tsx` ou similar).
- Revise o conteúdo de cada telinha/slide: cada uma deve ter **um único conceito central** comunicado de forma direta (título curto + subtítulo de apoio + CTA quando fizer sentido).
- Garanta consistência visual entre as telinhas: mesma estrutura de grid, mesma tipografia, mesmo padding, mesma proporção de imagem/texto.
- Alinhe a mensagem ao posicionamento da DBUZZ (ver item 8 deste documento — "Tela como produto completo").
- Se houver animação ou carrossel, verifique se o timing está adequado para leitura (mínimo 5s por slide).

**Critério de aceite:** Ao olhar o Hero, deve ficar imediatamente claro o que a DBUZZ entrega.

---

## 2. Substituir "Baixada Fluminense" por "Rio de Janeiro"

**O que fazer:**
- Faça um `grep -ri "Baixada Fluminense"` em todo o projeto (incluindo arquivos `.tsx`, `.ts`, `.json`, `.md`, `.mdx`, conteúdo de CMS local se houver).
- Substitua **todas** as ocorrências por `Rio de Janeiro`.
- Atenção para variações com acento, caixa diferente ou abreviações ("Baixada", "B. Fluminense" etc.) — me reporte qualquer ocorrência ambígua antes de trocar.
- Verifique também `meta tags`, `alt` de imagens, dados estruturados (schema.org) e SEO.

---

## 3. Remover dados institucionais da seção "Sobre Nós"

**Contexto:** Os dados institucionais já existem no rodapé. Não é necessário mover nem duplicar — apenas remover da seção Sobre Nós.

**O que fazer:**
- Identifique e **remova** os dados institucionais da seção Sobre Nós (CNPJ, endereço, telefone, e-mail, razão social, inscrição etc., conforme estiverem presentes).
- **Não tocar no rodapé** — ele já contém esses dados.
- A seção Sobre Nós deve focar exclusivamente em narrativa: quem somos, o que fazemos, propósito.
- Ajuste o layout/espaçamento da seção após a remoção para que não fique um vazio estranho.

---

## 4. Reordenar seções: subir "Clientes" para posição de destaque

**O que fazer:**
- Localize a ordem atual das seções na página inicial (provavelmente em `page.tsx`, `index.tsx` ou arquivo de layout principal).
- Mova a seção **Clientes** para uma posição mais alta na hierarquia da página — sugestão: logo após o Hero ou após uma primeira seção de proposta de valor curta.
- Mantenha o restante da ordem coerente. Se quiser, me proponha a nova ordem antes de aplicar.

---

## 5. Substituir TV horizontal pela TV vertical na seção "Aplicações"

**O que fazer:**
- Na seção **Aplicações**, localize o asset/componente da TV horizontal (moldura 1).
- Substitua pela versão vertical (moldura 2).
- Ajuste o layout ao redor para acomodar a nova proporção (vertical ocupa menos largura e mais altura).
- Reposicione textos, badges ou elementos adjacentes para que a composição continue equilibrada.
- Verifique responsividade em mobile, tablet e desktop.

---

## 6. Padronizar destino dos botões de "Documentação"

**O que fazer:**
- Encontre **todos** os botões/links cujo texto ou propósito envolva "Documentação", "Documentos", "Saiba mais sobre documentação", "Acessar documentação" etc.
- Aponte todos eles para a **área de Setor Público** (rota/seção correspondente — confirme a URL exata: provavelmente algo como `/setor-publico` ou `#setor-publico`).
- Garanta que os botões abram na mesma aba (a menos que já fosse padrão diferente) e que o âncora/scroll funcione corretamente.

---

## 7. Renomear Valor 7

**O que fazer:**
- Localize a seção de Valores da empresa.
- No **Valor 7**, alterar o texto:
  - **De:** "Segurança jurídica e respeito ao processo público"
  - **Para:** "Segurança jurídica e LGPD"
- Se houver descrição/subtítulo desse valor, revise para garantir coerência com o novo título (mencionar LGPD, proteção de dados, conformidade etc.). Se preferir, me mostre o texto atual antes de reescrever a descrição.

---

## 8. Refinar conceito da DBUZZ: "Tela como produto completo"

**Contexto:** O posicionamento da DBUZZ NÃO é "vender uma TV com um TV Box instalado". É entregar a **Tela como um produto completo** — hardware, software, conteúdo, gestão e operação integrados como uma solução única.

**O que fazer:**
- Revise todos os textos do site que descrevem o produto/serviço (Hero, Sobre, Aplicações, Soluções, Diferenciais).
- Onde estiver enquadrado como "TV + TV Box" ou similar (linguagem de componentes separados), reescreva para comunicar **entrega integrada de uma solução de tela**.
- Reforce vocabulário como: solução completa, plataforma integrada, produto end-to-end, tela gerenciada, mídia como serviço (se fizer sentido), etc.
- Não invente capacidades — apenas reposicione o que já existe.
- Me mostre as alterações de copy mais relevantes para eu aprovar antes do commit.

---

## Ordem de execução sugerida

1. Itens 2 e 7 (rápidos, baixo risco) — commits separados.
2. Item 3 (mover dados para rodapé).
3. Item 6 (padronizar botões).
4. Item 4 (reordenar seções).
5. Item 5 (trocar TV).
6. Item 8 (revisão de copy de posicionamento).
7. Item 1 (refazer telinhas do Hero) — por último, pois depende do item 8.

## Regras gerais

- Um commit por ajuste, mensagem em português no formato: `ajuste: <descrição curta>`.
- Rode o lint/typecheck após cada alteração estrutural.
- Se encontrar ambiguidade em qualquer item, **pergunte antes de decidir**.
- Ao terminar, gere um resumo do que foi alterado, com lista de arquivos tocados.