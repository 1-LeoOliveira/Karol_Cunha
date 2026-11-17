/* =====================================================================
   Interações do site. Todo o conteúdo é renderizado na build pelo Astro;
   este arquivo cuida apenas do comportamento no navegador.
   ===================================================================== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

document.documentElement.classList.add("js");

/* ------------------------------------------------- entrada suave */
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-in");
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      )
    : null;

function observar(els) {
  els.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
    if (io) io.observe(el);
    else el.classList.add("is-in");
  });
}
observar($$(".reveal"));

/* ------------------------------------------------------ cabeçalho */
const hdr = $("#hdr");
const onScroll = () => hdr && hdr.classList.toggle("is-stuck", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------------------------------------------------- menu mobile */
const burger = $("#burger");
const drawer = $("#drawer");

function setMenu(open) {
  if (!drawer || !burger) return;
  drawer.hidden = !open;
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.classList.toggle("is-locked", open);
}
burger?.addEventListener("click", () => setMenu(drawer.hidden));
$$("a", drawer || document.createElement("div")).forEach((a) =>
  a.addEventListener("click", () => setMenu(false))
);

/* --------------------------------------------- abas de procedimentos */
const tabs = $$(".pix");
const panels = $$(".pan");

function activate(i, focus) {
  tabs.forEach((t, k) => {
    const on = k === i;
    t.classList.toggle("is-on", on);
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
  });
  panels.forEach((p, k) => {
    if (k === i) {
      p.hidden = false;
      p.classList.add("is-fading");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => p.classList.remove("is-fading"))
      );
    } else {
      p.hidden = true;
    }
  });
  if (focus) tabs[i]?.focus();
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => activate(i));
  tab.addEventListener("keydown", (e) => {
    const last = tabs.length - 1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); activate((i + 1) % tabs.length, true); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); activate((i - 1 + tabs.length) % tabs.length, true); }
    if (e.key === "Home") { e.preventDefault(); activate(0, true); }
    if (e.key === "End") { e.preventDefault(); activate(last, true); }
  });
});

/* ---------------------------------------------- galeria + lightbox */
const grid = $("#galGrid");
const lb = $("#lb");
const lbImg = $("#lbImg");
const lbCap = $("#lbCap");
let fotos = [];
let idx = 0;
let ultimoFoco = null;

function lerFotos() {
  fotos = $$(".gal__item", grid || document).map((fig) => {
    const img = $("img", fig);
    return { src: img?.src || "", alt: img?.alt || "", legenda: $(".gal__cap", fig)?.textContent || "" };
  });
}

function ligarItens() {
  $$(".gal__item", grid || document).forEach((el, i) => {
    el.addEventListener("click", () => abrir(i));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(i); }
    });
  });
}

function pintar() {
  const f = fotos[idx];
  if (!f || !lbImg) return;
  lbImg.src = f.src;
  lbImg.alt = f.alt;
  lbCap.textContent = f.legenda;
}
function abrir(i) {
  if (!lb || !fotos.length) return;
  idx = i;
  ultimoFoco = document.activeElement;
  pintar();
  lb.hidden = false;
  document.body.classList.add("is-locked");
  $("#lbClose")?.focus();
}
function fechar() {
  if (!lb) return;
  lb.hidden = true;
  document.body.classList.remove("is-locked");
  ultimoFoco?.focus?.();
}
const mover = (d) => { idx = (idx + d + fotos.length) % fotos.length; pintar(); };

if (lb) {
  $("#lbClose")?.addEventListener("click", fechar);
  $("#lbPrev")?.addEventListener("click", () => mover(-1));
  $("#lbNext")?.addEventListener("click", () => mover(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) fechar(); });
}

document.addEventListener("keydown", (e) => {
  if (lb && !lb.hidden) {
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mover(-1);
    if (e.key === "ArrowRight") mover(1);
    return;
  }
  if (e.key === "Escape" && drawer && !drawer.hidden) setMenu(false);
});

lerFotos();
ligarItens();

/* ------------------------------- integração futura com o Instagram */
const endpoint = grid?.dataset.feed;
if (endpoint) {
  const limite = Number(grid.dataset.limite || 8);
  fetch(endpoint)
    .then((r) => r.json())
    .then((data) => {
      const posts = Array.isArray(data) ? data : data.posts || data.data || [];
      const novos = posts
        .slice(0, limite)
        .map((p) => ({
          src: p.sizes?.medium?.mediaUrl || p.mediaUrl || p.media_url || p.thumbnailUrl,
          alt: (p.caption || p.prunedCaption || "Publicação do Instagram").slice(0, 110),
        }))
        .filter((p) => p.src);
      if (!novos.length) return;

      grid.innerHTML = novos
        .map(
          (f, i) => `
        <figure class="gal__item reveal is-in" tabindex="0" role="button"
                aria-label="Ampliar publicação do Instagram" data-i="${i}">
          <img src="${f.src}" alt="${f.alt.replace(/"/g, "&quot;")}" loading="lazy" decoding="async">
          <figcaption class="gal__cap">Instagram</figcaption>
        </figure>`
        )
        .join("");
      lerFotos();
      ligarItens();
    })
    .catch(() => { /* mantém a galeria local */ });
}

/* ---------------------------------------- aviso de configuração */
if (document.documentElement.dataset.waPendente === "1") {
  console.warn(
    "[Karol Cunha] WhatsApp ainda não configurado. Edite src/config/site.js → " +
      "contato.whatsapp com o número real (formato internacional, só dígitos). " +
      "Enquanto isso, os botões levam ao Instagram."
  );
}
