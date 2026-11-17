/* Gera public/og.jpg — a miniatura que aparece ao compartilhar o link
   no WhatsApp, Instagram, Facebook e Google.

   Formato 1200×630 (1,91:1), que é o recorte usado por essas redes.
   A foto vertical da Karol sozinha seria cortada na altura do rosto,
   por isso o cartão combina foto + logotipo + nota do Google.

   Uso:  node scripts/make-og.mjs
   O arquivo gerado é versionado, então só precisa rodar de novo
   quando a foto, o nome ou a nota mudarem. */

import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/config/site.js";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

const L = 1200;
const A = 630;
const FOTO_W = 500;

const PAPEL = "#F8F5EF";
const OURO = "#B08D3C";
const OURO_CLARO = "#C5A34A";
const TINTA = "#171512";
const NUDE = "#B5A18A";

const { nota, quantidade } = site.avaliacoes;

/* estrela desenhada como polígono — não depende de fonte com o glifo */
const estrela = (cx, cy, r, cor) => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const raio = i % 2 === 0 ? r : r * 0.42;
    const ang = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + raio * Math.cos(ang)).toFixed(2)},${(cy + raio * Math.sin(ang)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(" ")}" fill="${cor}"/>`;
};

const temNota = nota != null && quantidade != null;
const estrelas = temNota
  ? [0, 1, 2, 3, 4].map((i) => estrela(84 + i * 26, 505, 9, OURO_CLARO)).join("")
  : "";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${A}">
  <rect width="${L}" height="${A}" fill="${PAPEL}"/>

  <!-- filete dourado da borda -->
  <rect x="26" y="26" width="${L - 52}" height="${A - 52}" fill="none"
        stroke="${OURO_CLARO}" stroke-width="1" opacity="0.5"/>

  <!-- logotipo -->
  <text x="74" y="252" font-family="Georgia, 'Times New Roman', serif"
        font-size="76" letter-spacing="5" fill="${OURO}">KAROL CUNHA</text>

  <line x1="74" y1="296" x2="${L - FOTO_W - 76}" y2="296" stroke="${TINTA}" stroke-width="1.4"/>

  <text x="74" y="340" font-family="Arial, Helvetica, sans-serif"
        font-size="22" letter-spacing="9" fill="${TINTA}">ESTÉTICA E MASSOTERAPIA</text>

  <line x1="74" y1="372" x2="${L - FOTO_W - 76}" y2="372" stroke="${TINTA}" stroke-width="1.4"/>

  <!-- chamada -->
  <text x="74" y="432" font-family="Georgia, 'Times New Roman', serif"
        font-size="30" font-style="italic" fill="${TINTA}">Beleza, cuidado e bem-estar</text>
  <text x="74" y="470" font-family="Georgia, 'Times New Roman', serif"
        font-size="30" font-style="italic" fill="${TINTA}">em sua melhor versão.</text>

  ${
    temNota
      ? `${estrelas}
  <text x="214" y="512" font-family="Arial, Helvetica, sans-serif" font-size="19"
        letter-spacing="2" fill="${NUDE}">${Number(nota).toFixed(1).replace(".", ",")} · ${quantidade} avaliações no Google</text>`
      : ""
  }

  <text x="74" y="566" font-family="Arial, Helvetica, sans-serif" font-size="18"
        letter-spacing="4" fill="${NUDE}">ANANINDEUA · PA</text>
</svg>`;

const foto = await sharp(join(raiz, "src", "assets", "karol-cunha.jpg"))
  .resize(FOTO_W, A, { fit: "cover", position: "attention" })
  .toBuffer();

/* véu champagne na junção, para a foto não cortar seco */
const veu = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="${A}">
     <defs><linearGradient id="g" x1="0" x2="1">
       <stop offset="0" stop-color="${PAPEL}" stop-opacity="1"/>
       <stop offset="1" stop-color="${PAPEL}" stop-opacity="0"/>
     </linearGradient></defs>
     <rect width="90" height="${A}" fill="url(#g)"/>
   </svg>`
);

await sharp(Buffer.from(svg))
  .composite([
    { input: foto, left: L - FOTO_W, top: 0 },
    { input: veu, left: L - FOTO_W, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(raiz, "public", "og.jpg"));

console.log("public/og.jpg — 1200×630 gerado");
