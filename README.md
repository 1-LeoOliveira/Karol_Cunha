# Karol Cunha — Estética e Massoterapia

Landing page institucional construída em **Astro 5** (site estático, sem framework
de UI, zero JavaScript desnecessário no navegador).

---

## Como rodar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/ pronto para publicar
npm run preview    # confere o resultado da build
```

Publicação: suba a pasta `dist/` em qualquer serviço estático
(Vercel, Netlify, Cloudflare Pages, Hostinger, GitHub Pages).

---

## Antes de publicar — o que precisa ser preenchido

Tudo está em **`src/config/site.js`**. Nenhum outro arquivo precisa ser tocado.

| Campo | Situação | Onde aparece |
|---|---|---|
| `contato.whatsapp` | ⚠ **provisório** (`5500000000000`) | todos os botões de agendamento |
| `contato.whatsappVisivel` | vazio | rodapé do CTA e bloco de contato |
| `endereco.linha1/2`, `referencia` | vazios — a confirmar | seção Localização |
| `endereco.buscaMaps` | vazio | ativa o mapa do Google |
| `horarios` | "A confirmar" | seção Localização |
| `sobre.credenciais`, `sobre.marcos` | vazios | seção Sobre |
| `avaliacoes.*` | vazios | seção Depoimentos |
| `contato.googleReviews` | vazio | botão "Ver avaliações no Google" |

### Comportamento enquanto os campos estão vazios

O site **nunca inventa informação**. Cada campo vazio tem um estado de
fallback que continua elegante:

- **WhatsApp não configurado** → os botões levam ao Instagram e o console
  avisa o que falta. Assim que o número real entrar em `contato.whatsapp`,
  todos os botões passam a abrir a conversa com a mensagem certa.
- **Endereço vazio** → o mapa vira um cartão de localização discreto com o
  botão "Pedir o endereço". Ao preencher `buscaMaps`, o mapa do Google
  aparece no lugar.
- **Credenciais e marcos vazios** → os blocos simplesmente não são
  renderizados. Nenhuma formação, certificação ou tempo de experiência foi
  presumido.
- **Depoimentos vazios** → a seção mostra o convite com link para Instagram
  e Google, em vez de avaliações fictícias.

### Exemplo de preenchimento

```js
contato: {
  whatsapp: "5548999998888",
  whatsappVisivel: "(48) 99999-8888",
  googleReviews: "https://g.page/r/XXXXXXXX",
},
endereco: {
  linha1: "Rua das Palmeiras, 320 — Sala 12",
  linha2: "Centro — Florianópolis / SC",
  buscaMaps: "Rua das Palmeiras 320, Centro, Florianópolis SC",
},
horarios: [
  { dias: "Segunda a sexta", horas: "09h — 19h" },
  { dias: "Sábado", horas: "09h — 14h" },
  { dias: "Domingo", horas: "Fechado" },
],
sobre: {
  credenciais: ["Formação em Estética e Cosmética", "Especialização em Massoterapia"],
  marcos: [{ numero: "+8", rotulo: "anos de atuação" }],
},
avaliacoes: {
  nota: 5.0,
  quantidade: 48,
  depoimentos: [
    { nome: "Nome real da cliente", texto: "Avaliação copiada do Google.", estrelas: 5 },
  ],
},
```

> Preencher `avaliacoes` **somente** com dados reais e verificáveis do Google.

---

## Logo

O logotipo foi reconstruído em código a partir da **placa da fachada**:
capitulares romanas (Cinzel) em dourado polido, filete preto com arabesco
acima e abaixo, e "ESTÉTICA E MASSOTERAPIA" em caixa alta espaçada.

- **`src/components/ui/Wordmark.astro`** — o lockup.
  `size="full"` (rodapé) e `size="compact"` (cabeçalho).
- **`src/components/ui/Ornament.astro`** — o arabesco, reutilizado como
  divisor na seção de agendamento. `flip` inverte na vertical.
- O brilho metálico está no token `--gold-metal` (`src/styles/global.css`),
  um gradiente recortado no texto — ajuste ali para mais ou menos contraste.

Para usar o arquivo oficial da logo no lugar do desenho, coloque-o em
`public/logo.svg` e troque o bloco interno do `Wordmark.astro` por:

```astro
<img src="/logo.svg" alt="Karol Cunha Estética e Massoterapia" />
```

---

## Fotografia

As imagens atuais são de banco (Unsplash) e servem como referência de
direção visual. Para trocar por fotos reais:

- **Galeria, procedimentos**: edite `src/config/procedimentos.js`.
- **Hero, Sobre, Cursos VIP**: os caminhos estão nos componentes
  correspondentes em `src/components/`.

Para usar arquivos locais com otimização automática do Astro, coloque as
fotos em `src/assets/` e troque `<img>` por `<Image>` de `astro:assets`.
Proporções usadas no layout: **4:5** (hero, sobre, cursos), **3:4**
(procedimentos), **1:1** e **2:1** (galeria).

---

## Integração futura com o Instagram

A galeria já está preparada. Basta preencher em `src/config/site.js`:

```js
instagramFeed: { endpoint: "https://feeds.behold.so/XXXXXXXX", limite: 8 }
```

Com o endpoint definido, o script busca o feed e substitui as imagens
mantendo exatamente o mesmo layout, lightbox e animações. Sem endpoint,
a galeria local continua valendo. Serviços compatíveis: Behold,
EmbedSocial, SnapWidget ou a Instagram Basic Display API — qualquer um que
devolva JSON com `mediaUrl` / `media_url` / `thumbnailUrl`.

---

## Estrutura

```
src/
├─ config/
│  ├─ site.js             ← contato, endereço, horários, avaliações  (EDITAR AQUI)
│  └─ procedimentos.js    ← categorias, cursos, diferenciais, galeria
├─ components/
│  ├─ ui/                 ← Button, Eyebrow, Frame, Monogram (reutilizáveis)
│  ├─ Header · Hero · Sobre · Procedimentos · Experiencia
│  └─ Depoimentos · CursosVip · Galeria · Contato · Footer · FloatingWhatsApp
├─ layouts/Base.astro     ← <head>, SEO, Open Graph, JSON-LD
├─ pages/index.astro      ← ordem das seções
├─ scripts/main.js        ← menu, abas, lightbox, animações
└─ styles/global.css      ← tokens de cor/tipografia e todo o layout
```

### Identidade visual (tokens em `src/styles/global.css`)

| Token | Cor |
|---|---|
| `--gold` | `#C5A34A` dourado champagne |
| `--gold-deep` | `#B08D3C` dourado metálico |
| `--champagne` | `#E8DDC9` bege champagne |
| `--paper` | `#F8F5EF` off-white |
| `--nude` | `#B5A18A` |
| `--ink` | `#171512` preto sofisticado |

Tipografia: **Cormorant Garamond** (títulos) + **Jost** (textos e rótulos).

---

## Preview em página única (opcional)

```bash
npm run build
node scripts/make-preview.mjs     # gera preview/page.html com CSS embutido
node scripts/inline-images.mjs    # embute as imagens como data: URI
```

Usado apenas para compartilhar uma prévia em ambientes que bloqueiam
requisições externas. O site real (`dist/`) não é afetado.

---

## Checklist de acessibilidade e performance já atendido

- HTML semântico, navegação por teclado nas abas, galeria e lightbox.
- `prefers-reduced-motion` respeitado em todas as animações.
- Foco visível, skip link, `aria-*` nas abas e no menu.
- Imagens com `width`/`height`, `loading="lazy"` e `decoding="async"`.
- CSS crítico embutido na build; JS total abaixo de 5 kB.
- Metadados, Open Graph, `robots.txt` e JSON-LD (`HealthAndBeautyBusiness`).
