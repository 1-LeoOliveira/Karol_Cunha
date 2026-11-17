import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Endereço público do site. É daqui que saem as URLs absolutas do
  // canonical e da miniatura compartilhada (og:image), então precisa
  // apontar sempre para o domínio que está no ar.
  // Quando o domínio próprio for contratado, troque esta linha.
  site: "https://karolcunha.vercel.app",
  output: "static",
  compressHTML: true,
  server: {
    // host: true faz o servidor escutar em IPv4 (127.0.0.1) e na rede local.
    // Sem isso, o Astro escutava só em IPv6 ([::1]) e o navegador no Windows
    // não conseguia abrir http://localhost:4321.
    host: true,
    port: 4321,
  },
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    // Permite otimizar fotos hospedadas fora do projeto.
    domains: ["images.unsplash.com"],
  },
  devToolbar: { enabled: false },
});
