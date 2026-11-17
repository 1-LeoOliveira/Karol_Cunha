/* Gera uma versão de página única (CSS embutido, sem <html>/<head>/<body>)
   a partir de dist/index.html, usada para publicar um preview online.
   Uso:  node scripts/make-preview.mjs   (depois de `npm run build`) */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(raiz, "dist", "index.html"), "utf8");

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];

const titulo = head.match(/<title>([\s\S]*?)<\/title>/)[1];
const fontes = head.match(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/)[0];
const cssHref = head.match(/href="(\/_astro\/[^"]+\.css)"/)[1];
const css = readFileSync(join(raiz, "dist", cssHref.replace(/^\//, "")), "utf8");

const saida = `<title>${titulo}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${fontes}
<style>
${css}
</style>
${body.trim()}
`;

mkdirSync(join(raiz, "preview"), { recursive: true });
writeFileSync(join(raiz, "preview", "page.html"), saida, "utf8");
console.log(`preview/page.html — ${(saida.length / 1024).toFixed(1)} kB`);
