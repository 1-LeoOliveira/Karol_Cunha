/* Converte as imagens remotas de preview/page.html em data: URIs, para que
   o preview funcione em ambientes que bloqueiam requisições externas.
   Não afeta o site real (dist/), que continua usando as URLs normais.
   Uso:  node scripts/inline-images.mjs */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const arquivo = join(raiz, "preview", "page.html");
let html = readFileSync(arquivo, "utf8");

const urls = [...new Set(html.match(/https:\/\/images\.unsplash\.com\/[^"'\s)]+/g) || [])];
console.log(`${urls.length} imagens para embutir…`);

let total = 0;
for (const url of urls) {
  const menor = url.replace(/w=\d+/, "w=900").replace(/q=\d+/, "q=62");
  const res = await fetch(menor);
  if (!res.ok) {
    console.warn(`  ! falhou: ${menor} (${res.status})`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const tipo = res.headers.get("content-type") || "image/jpeg";
  const data = `data:${tipo};base64,${buf.toString("base64")}`;
  html = html.split(url).join(data);
  total += buf.length;
  console.log(`  ✓ ${(buf.length / 1024).toFixed(0)} kB`);
}

writeFileSync(arquivo, html, "utf8");
console.log(
  `preview/page.html — ${(html.length / 1024 / 1024).toFixed(2)} MB ` +
    `(${(total / 1024 / 1024).toFixed(2)} MB em imagens)`
);
