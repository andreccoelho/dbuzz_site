# Redesign visual — D.Buzz Corporate (paleta sóbria + tom corporativo)

## Princípios de design (norte para todas as decisões)

1. **Sobriedade acima de tudo.** Quando estiver em dúvida entre dois caminhos, escolha o mais discreto.
2. **Paleta de 3 cores — só.** `#fec708`, `#000000`, `#ffffff`. Cinzas neutros são permitidos apenas como tons derivados do preto/branco para hierarquia (lista abaixo). Nada de tons azulados, esverdeados ou alaranjados — nem em fundos, nem em sombras, nem em bordas, nem em gradientes.
3. **Amarelo é accent, não protagonista.** Use-o com parcimônia: CTA primário, números de destaque, marcadores curtos. Quando o site inteiro for amarelo, o amarelo deixa de chamar atenção.
4. **Gradientes coloridos saem.** Substitua todo gradiente diagonal colorido por **preto sólido** (ou um gradient sutilíssimo `#000 → #0a0a0a`).
5. **Cantos menos arredondados.** Empresa grande tem visual mais retangular. Corte os `border-radius` pela metade ou mais.
6. **Sombras quase invisíveis.** Remova box-shadows dramáticos. Mantenha apenas hovers sutis em cards interativos.
7. **Tipografia institucional.** Sai "Syne" (geométrica, moderna). Entra família única e sóbria, com pesos variados.
8. **Letter-spacing apertado em títulos grandes, generoso em labels uppercase.** É um truque clássico do design corporativo (Bloomberg, IBM, FT).
---

## 1) Tipografia — substituir Google Fonts

**Localizar** o `<link>` atual no `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

**Substituir por:**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

**No CSS, substituir todas as referências de fonte:**

- `font-family:'Syne',sans-serif` → `font-family:'Inter Tight',sans-serif`
- `font-family:'DM Sans',sans-serif` → `font-family:'Inter',sans-serif`
> Por que essa escolha: **Inter Tight** (títulos) tem desenho geométrico mais condensado e estável que Syne, sem parecer "tech-startup". **Inter** (corpo) é o padrão da indústria corporativa pós-2020 — neutra, legível, sem personalidade exagerada. Família única reduz ruído visual.

**Em todos os títulos H1/H2/H3 com `font-size > 1.4rem`**, adicionar `letter-spacing:-.025em` (já existe em alguns; aplicar em todos). É o aperto típico de manchete corporativa.

**Em todos os elementos com `text-transform:uppercase`** (labels, badges, kickers), garantir `letter-spacing:.14em` ou maior, `font-weight:600`. Tracking generoso em uppercase é assinatura do design institucional.
 
---

## 2) Paleta — reescrever as variáveis CSS no `:root`

**Substituir o bloco `:root` inteiro por:**

```css
:root{
  /* Paleta oficial — 3 cores */
  --amarelo:#fec708;
  --preto:#000000;
  --branco:#ffffff;
 
  /* Tons neutros derivados (apenas para hierarquia, sem matiz) */
  --preto-2:#0a0a0a;     /* near-black para gradientes sutis */
  --cinza-900:#171717;   /* texto sobre branco quando preto puro for pesado demais */
  --cinza-700:#404040;   /* texto secundário */
  --cinza-500:#737373;   /* texto terciário, captions */
  --cinza-300:#d4d4d4;   /* bordas em fundo branco */
  --cinza-200:#e5e5e5;   /* bordas suaves */
  --cinza-100:#f5f5f5;   /* fundo de seção alternada */
  --cinza-50:#fafafa;    /* fundo muito sutil */
 
  /* Aliases retrocompatíveis — mapeiam variáveis antigas para a nova paleta
     para não precisar refatorar TODAS as ocorrências de var(--azul) etc. */
  --azul:var(--preto);
  --azul2:var(--preto);
  --verde:var(--preto);
  --laran:var(--preto);
  --roxo:var(--preto);
  --bg:var(--cinza-100);
  --texto:var(--cinza-900);
  --sub:var(--cinza-700);
  --borda:var(--cinza-200);
  --br:var(--branco);
}
```

> Por que aliases: o HTML tem dezenas de `var(--azul)`, `var(--verde)`, `var(--azul2)` espalhadas pelos estilos. Em vez de varrer cada ocorrência, redirecionamos as variáveis para a nova paleta. **Isso resolve ~80% das substituições de cor de uma só vez.**
 
---

## 3) Tratamento dos casos que NÃO usam variável (cores hardcoded)

As variáveis dão conta da maioria, mas existem cores literais no CSS que precisam de substituição manual. Faça **busca e substituição global** no `<style>`:

### 3.1 Gradientes coloridos por seção — substituir por preto

Procure e substitua estas declarações inteiras:

| Seletor / linha aproximada | De | Para |
|---|---|---|
| `#inicio { background: linear-gradient(135deg,#06102A 0%,#0E2554 55%,#091D48 100%); }` | gradiente azul | `background:#000;` |
| `.fh.priv` | gradiente verde `#064E3B → #00966A` | `background:#000;border-bottom:2px solid var(--amarelo);` |
| `.fh.pub` | gradiente azul `#0E2554 → #1B4FD8` | `background:#000;border-bottom:2px solid var(--amarelo);` |
| `.fh.tv` | gradiente laranja `#6B2200 → #B85600` | `background:#000;border-bottom:2px solid var(--amarelo);` |
| `#setor-publico` | gradiente azul escuro | `background:#000;` |
| `#tv-dbuzz` | gradiente laranja | `background:#000;` |
| `#contato` | gradiente azul | `background:#000;` |
| `.eq-av` | gradiente azul | `background:#000;color:#fec708;` |

> A diferenciação visual dos três cards de "Soluções" (privado / público / TV) deixa de ser feita por **cor de fundo** e passa a ser feita por **tipografia e borda inferior amarela** — todos pretos, todos iguais em estrutura. É exatamente isso que dá o ar institucional: consistência cromática, hierarquia por tipo.

### 3.2 Gradientes pastéis dos visuais e portfólio — substituir por cinza neutro

Esses são os fundos coloridos das aplicações (`.ap-vis.v1` a `.v6`), do portfólio (`.pi1` a `.pi6`) e do Instagram (`.ig-p:nth-child(1)` a `(6)`). Substituir **TODOS** por:

```css
background:var(--cinza-100);
border:1px solid var(--cinza-200);
```

Os emojis grandes que ficam em cima continuam visíveis e funcionam como ícone neutro.

### 3.3 Tags coloridas — colapsar para preto/branco/amarelo

| Classe | De | Para |
|---|---|---|
| `.tag-priv` | fundo verde 10% / texto verde | `background:#000;color:#fff;` |
| `.tag-pub` | fundo azul 8% / texto azul | `background:#000;color:#fec708;` |
| `.pb-pub` | fundo azul 88% / texto amarelo | `background:#000;color:#fec708;` |
| `.pb-priv` | fundo verde 88% / texto branco | `background:#000;color:#fff;` |
| `.pb-tv` | fundo laranja 88% / texto branco | `background:#fec708;color:#000;` |
| `.comp-tag.p` (verde claro `#7DD8A8`) | verde | `color:var(--amarelo);` |
| `.ap-list li::before` (✓ verde) | `color:var(--verde)` | `color:var(--amarelo)` |

Em **todas** as tags/badges/pills, substituir `border-radius:100px` (formato pílula) por `border-radius:2px` (retangular). Tag corporativa não é redonda.

### 3.4 Cor de destaque do hero (amarelo da marca)

A variável `--amarelo` já está reapontada para `#fec708` no `:root`, então `.h-title .ac { color:var(--amarelo); }` resolve automaticamente. Confirme que o tom novo `#fec708` (mais saturado e ligeiramente mais quente que o `#F5C400` antigo) está aparecendo no preview.

### 3.5 Cor laranja claro do `#tv-dbuzz` (`#FFB366`)

Buscar `#FFB366` em todo o `<style>` e substituir por `var(--amarelo)`. Aparece em `.tv-stat .n`, `.tv-prog li::before`, `.tv-lbl strong`, etc.

### 3.6 Cor verde-claro `#7DD8A8` em `.comp-tag.p`

Substituir por `var(--amarelo)`.
 
---

## 4) Reduzir border-radius globalmente

Sem isso o site continua "fofinho". Aplicar nesta ordem (busca e substituição literal no `<style>`):

| De | Para |
|---|---|
| `border-radius:14px` | `border-radius:6px` |
| `border-radius:12px` | `border-radius:4px` |
| `border-radius:10px` | `border-radius:4px` |
| `border-radius:9px` | `border-radius:4px` |
| `border-radius:8px` | `border-radius:3px` |
| `border-radius:7px` | `border-radius:3px` |
| `border-radius:6px` | `border-radius:2px` |
| `border-radius:100px` (pílulas) | `border-radius:2px` |

**Exceções a manter:** `border-radius:50%` (avatar `.eq-av`, dot do `.h-badge::before`, dot do `.cms-f::before`) — círculos perfeitos permanecem.
 
---

## 5) Sombras — reduzir/remover

Buscar todas as ocorrências de `box-shadow` e aplicar:

- `box-shadow:0 6px 20px rgba(245,196,0,.35)` (hover do `.btn-am`) → **remover** (deletar a linha inteira)
- `box-shadow:0 12px 32px rgba(14,37,84,.1)` (hover do `.port-c`) → `box-shadow:0 2px 8px rgba(0,0,0,.08)`
- `transform:translateY(-4px)` no hover dos cards de portfólio → `transform:translateY(-2px)` (movimento mais comedido)
- `transform:translateY(-2px)` no hover do `.btn-am` → **remover**
  Botão primário (`.btn-am`) no hover: trocar por mudança de cor sutil:
```css
.btn-am:hover{ background:#000; color:var(--amarelo); }
```
(Inversão preto/amarelo no hover é mais corporativa que "elevar com sombra".)
 
---

## 6) Decorações do hero — simplificar

No `#inicio`:

- **Manter** `.h-grid` (grade sutil) **mas reduzir opacidade**: trocar `rgba(245,196,0,.05)` por `rgba(255,255,255,.04)` nas duas linhas do gradiente (a grade vira branca tênue, não amarela tênue).
- **Remover** `.h-glow` por completo (deletar a regra CSS e o `<div class="h-glow"></div>` do HTML, OU deixar a div e zerar a regra com `display:none`). O glow amarelo radial é o elemento mais "startup" do hero.
- **Manter** o badge `.h-badge` mas **remover a animação `blink`**: deletar a regra `.h-badge::before { animation:blink 2s infinite }` (o ponto amarelo fica estático). Animação piscante é tom de "live alert", não de empresa institucional.
---

## 7) Animação das barras na TV D.Buzz

A animação `barA` em `.tv-bar` (barras de áudio amarelas pulando) **é parte da identidade do produto TV D.Buzz** (representa transmissão ativa). **Manter** — só garantir que `.tv-bar` use `background:var(--amarelo);` (já usa).
 
---

## 8) Botões — padronizar

```css
.btn-am, .pub-btn, .cms-btn, .nav-cta, .mob-cta, .ig-btn{
  background:var(--amarelo);
  color:#000;
  border-radius:3px;
  font-family:'Inter Tight',sans-serif;
  font-weight:700;
  letter-spacing:.01em;
  transition:background .2s, color .2s;
}
.btn-am:hover, .pub-btn:hover, .cms-btn:hover, .nav-cta:hover, .mob-cta:hover, .ig-btn:hover{
  background:#000;
  color:var(--amarelo);
}
 
.btn-gh, .tv-btn{
  background:transparent;
  color:#fff;
  border:1px solid rgba(255,255,255,.4);
  border-radius:3px;
  font-family:'Inter Tight',sans-serif;
  font-weight:600;
  transition:background .2s, border-color .2s;
}
.btn-gh:hover, .tv-btn:hover{
  background:var(--amarelo);
  color:#000;
  border-color:var(--amarelo);
}
```

Aplicar essas regras **depois** das definições originais para sobrescrever (ou substituir as originais diretamente).
 
---

## 9) Navbar

```css
nav{
  background:rgba(0,0,0,.96);
  border-bottom:1px solid rgba(255,255,255,.08);
}
.nav-links a{ color:rgba(255,255,255,.65); }
.nav-links a:hover, .nav-links a.ativo{ color:var(--amarelo); }
.mob{ background:rgba(0,0,0,.98); }
```
 
---

## 10) Section labels (kicker uppercase amarelo)

A regra atual:
```css
.sec-label{ color:var(--azul2); }
```
Já vai virar preto via alias, mas para os section labels queremos **amarelo** (são pequenos, funcionam como assinatura). Sobrescrever:

```css
.sec-label{ color:var(--amarelo); font-weight:600; letter-spacing:.16em; }
```

E em seções de fundo preto (`#setor-publico .sec-label`, `#contato .sec-label`) já tem `color:var(--amarelo)` — manter.

Garantir também que:
```css
#setor-publico .sec-title, #contato .sec-title, #tv-dbuzz .sec-title{ color:#fff; }
```
(Já existe; só conferir que continua funcionando após o redirect das variáveis.)
 
---

## 11) Checklist de validação final

Depois de salvar, rode o site e confira **uma a uma**:

- [ ] Não existe nenhum azul, verde, laranja ou roxo visível em lugar nenhum.
- [ ] Os 3 cards de "Soluções" (privado/público/TV) são todos pretos com borda inferior amarela.
- [ ] O hero é preto sólido, sem glow radial amarelo.
- [ ] As tags em "Aplicações" e "Portfólio" são retangulares (não pílulas), em preto/branco/amarelo.
- [ ] Os fundos coloridos pastéis das aplicações/portfólio/Instagram viraram cinza neutro `#f5f5f5`.
- [ ] A fonte dos títulos é "Inter Tight" e a do corpo é "Inter" — não há mais "Syne" nem "DM Sans" no DOM.
- [ ] Section labels uppercase são amarelos com letter-spacing largo.
- [ ] Cantos visivelmente menos arredondados (cards, botões, inputs).
- [ ] Botões primários: fundo amarelo, texto preto, hover invertido (preto/amarelo).
- [ ] Conteúdo textual está **idêntico** ao original — nada foi reescrito.
- [ ] Estrutura HTML, IDs, classes, scripts e atributos `onclick` permanecem intactos.
- [ ] Animação das barras de áudio na TV D.Buzz continua funcionando.
- [ ] Logo no canto superior continua aparecendo corretamente sobre o fundo preto da nav.
---

## O que NÃO mexer (linha vermelha)

- Nenhum texto visível ao usuário (títulos, parágrafos, listas, labels, CTAs, footer).
- Estrutura HTML, hierarquia de seções, ordem dos blocos.
- IDs (`#inicio`, `#sobre`, `#solucoes`, `#aplicacoes`, `#setor-publico`, `#tv-dbuzz`, `#portfolio`, `#governanca`, `#equipe`, `#contato`).
- Scripts JS inline, atributos `onclick`, navegação entre tabs.
- Atributos `aria-*`, `alt`, `lang`, `meta` description e SEO.
- Links `mailto:` e âncoras `href="#..."`.
- A animação das barras de áudio (`@keyframes barA`) e o `@keyframes blink` pode ser **removido** (não usado mais), mas se ficar não atrapalha.
---

## Resumo executivo (uma frase)

Tira os azuis/verdes/laranjas/roxos e os gradientes coloridos por seção, troca tudo por preto sólido com accent amarelo `#fec708`, fonte Inter Tight + Inter no lugar de Syne + DM Sans, cantos mais retos e sombras mais discretas — sem encostar em nenhum texto.