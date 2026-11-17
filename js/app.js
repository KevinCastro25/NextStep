// =============================================================================
// NEXTSTEP · LÓGICA INTERACTIVA E-COMMERCE DROPI / CONTRAENTREGA
// =============================================================================
const $ = s => document.querySelector(s);
const money = n => "$" + Math.round(n).toLocaleString("es-CO");
const pc = p => Math.round((1 - p.p / p.o) * 100);
const qtyTotal = () => cart.reduce((a, i) => a + i.q, 0);
const subtot = () => cart.reduce((a, i) => a + i.p * i.q, 0);
const promoDiscount = () => (qtyTotal() >= 2 ? Math.round(subtot() * (CFG.promo2x / 100)) : 0);
const tot = () => subtot() - promoDiscount();
const onl = () => Math.round(tot() * (100 - CFG.off) / 100);

let lim = 24;
let cart = [];
let flt = "all";
let cur = null;
let sel = { c: "", t: "", m: "f", pack: 1, guide: false };
let si = 0;
let tm = null;
let heroPaused = false;
let tx = 0;
let toastTimer = null;
let toastIdx = 0;

const im = (p, c) => (CFG.imgs && CFG.imgs[p.id] && CFG.imgs[p.id][c]) ? CFG.imgs[p.id][c] : p.img;

try {
  cart = JSON.parse(localStorage.zc || "[]");
} catch (e) {}

const save = () => {
  try {
    localStorage.zc = JSON.stringify(cart);
  } catch (e) {}
  $("#cc").textContent = qtyTotal();
};

// ---------- 1. Marquesina superior + Control accesible de pausa ----------
const mn = Math.min(...P.map(p => p.p));
const mx = Math.max(...P.map(pc));
const T = [
  "🚚 Envío GRATIS a toda Colombia",
  "💵 Pagas al recibir en tu casa",
  `🔥 Lleva 2 pares con ${CFG.promo2x}% OFF extra`,
  `⚡ +${CFG.off}% OFF adicional pagando online`,
  `👟 Hasta -${mx}% en tenis seleccionados`,
  "↩ Cambio rápido por talla"
].map(t => `<span>${t}</span>`).join("");

$("#mq").innerHTML = T + T + T + T;

$("#mq-toggle").onclick = () => {
  const wrap = $("#mq-wrap");
  const paused = wrap.classList.toggle("paused");
  const btn = $("#mq-toggle");
  btn.textContent = paused ? "▶" : "⏸";
  btn.setAttribute("aria-label", paused ? "Reanudar barra de anuncios" : "Pausar barra de anuncios");
  btn.title = paused ? "Reanudar barra de anuncios" : "Pausar barra de anuncios";
};

// ---------- 2. Temporizador regresivo de Oferta Relámpago ----------
let flashSecs = 2 * 3600 + 44 * 60 + 59;
setInterval(() => {
  flashSecs = flashSecs > 0 ? flashSecs - 1 : 2 * 3600 + 44 * 60 + 59;
  const h = String(Math.floor(flashSecs / 3600)).padStart(2, "0");
  const m = String(Math.floor((flashSecs % 3600) / 60)).padStart(2, "0");
  const s = String(flashSecs % 60).padStart(2, "0");
  const el = $("#flash-timer");
  if (el) el.textContent = `${h}:${m}:${s}`;
}, 1000);

// ---------- 3. Hero Slider ----------
const S = [
  {
    bg: "linear-gradient(120deg,#ff1e00 0%,#7a0000 100%)",
    kicker: "🔥 Liquidación Flash · Envío Gratis",
    h: `Hasta -${mx}% OFF`,
    t: `Tenis urbanos y deportivos desde ${money(mn)}. Paga en casa cuando te lleguen.`,
    b: "Ver ofertas ahora →",
    l: "#ofertas",
    i: P[0].img,
    badge: "💵 Paga al recibir",
    v: CFG.heroVideo
  },
  {
    bg: "linear-gradient(120deg,#09090b 0%,#27272a 100%)",
    kicker: "🚚 Despacho Inmediato Colombia",
    h: "Envío gratis<br>a tu puerta",
    t: `Entrega en ${CFG.envio} con Servientrega o Interrapidísimo. Cero riesgo al comprar.`,
    b: "Explorar catálogo →",
    l: "#tenis",
    i: P[4].img,
    badge: `⭐ +${P[4].sold} vendidos`
  },
  {
    bg: "linear-gradient(120deg,#ff6a00 0%,#b42300 100%)",
    kicker: `⚡ Combo Ahorro ${CFG.promo2x}% Extra`,
    h: "Lleva 2 pares<br>y ahorra más",
    t: `Obtén ${CFG.promo2x}% OFF extra en tu carrito llevando 2 pares o ${CFG.off}% OFF pagando online con Wompi.`,
    b: "Elegir mis pares →",
    l: "#tenis",
    i: P[7].img,
    badge: "🔥 Promo 2x Activa"
  },
  {
    bg: "linear-gradient(120deg,#064e3b 0%,#022c22 100%)",
    kicker: "🏆 Favorito de la semana",
    h: "Lo más<br>vendido hoy",
    t: `${P[2].n} · Hoy por ${money(P[2].p)} (antes ${money(P[2].o)}). Últimas tallas disponibles.`,
    b: "¡Lo quiero ya! →",
    l: `javascript:openP(${P[2].id})`,
    i: P[2].img,
    badge: `Solo ${P[2].stock} disponibles`
  }
];

$("#hero").innerHTML =
  S.map(
    (s, x) => `
    <div class="sl${x ? "" : " on"}" style="background:${s.bg}">
      ${s.v ? `<video class="bgv" src="${s.v}" autoplay muted loop playsinline></video>` : ""}
      <div style="position:relative;z-index:2">
        <span class="hero-kicker">${s.kicker}</span>
        <h1>${s.h}</h1>
        <p>${s.t}</p>
        <a class="cta cta-shine" href="${s.l}">${s.b}</a>
      </div>
      <div class="hero-img-wrap">
        <img src="${s.i}" alt="${s.h.replace(/<[^>]+>/g, " ")}">
        <span class="hero-badge">${s.badge}</span>
      </div>
    </div>`
  ).join("") +
  `<button class="ar" type="button" style="left:12px" onclick="go(-1)" aria-label="Anterior">‹</button>
   <button class="ar" type="button" style="right:12px" onclick="go(1)" aria-label="Siguiente">›</button>
   <div class="dots">
     ${S.map((_, x) => `<i onclick="show(${x})" role="button" aria-label="Ir a diapositiva ${x + 1}"></i>`).join("")}
     <button class="hero-toggle" id="hero-toggle" type="button" onclick="toggleHero()">⏸ Pausar</button>
   </div>`;

function show(n) {
  si = (n + S.length) % S.length;
  document.querySelectorAll(".sl").forEach((e, x) => e.classList.toggle("on", x == si));
  document.querySelectorAll(".dots i").forEach((e, x) => e.classList.toggle("on", x == si));
  clearInterval(tm);
  if (!heroPaused) {
    tm = setInterval(() => show(si + 1), 5500);
  }
}

function toggleHero() {
  heroPaused = !heroPaused;
  const btn = $("#hero-toggle");
  if (heroPaused) {
    clearInterval(tm);
    btn.textContent = "▶ Reanudar";
  } else {
    btn.textContent = "⏸ Pausar";
    tm = setInterval(() => show(si + 1), 5500);
  }
}

const go = d => show(si + d);
$("#hero").ontouchstart = e => (tx = e.touches[0].clientX);
$("#hero").ontouchend = e => {
  const d = e.changedTouches[0].clientX - tx;
  if (Math.abs(d) > 40) go(d < 0 ? 1 : -1);
};

// ---------- 4. Renderizado de Tarjetas de Producto ----------
const vid = u => {
  const y = u.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
  return y
    ? `<iframe src="https://www.youtube.com/embed/${y[1]}" allowfullscreen loading="lazy"></iframe>`
    : `<video src="${u}" controls muted playsinline loop preload="metadata"></video>`;
};

const card = p => {
  return `
  <article class="card reveal" onclick="openP(${p.id})">
    <div class="im">
      <img loading="lazy" src="${p.img}" alt="${p.n}">
      <span class="badge-discount">-${pc(p)}% OFF</span>
      <span class="badge-cod">💵 Contraentrega</span>
      ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ""}
      ${CFG.videos[p.id] ? '<span class="vb">▶ Video</span>' : ""}
    </div>
    <div class="card-info">
      <div class="card-meta">
        <span class="stars">★ ${p.rate || 4.9}</span>
        <span class="card-sold">${p.sold || 120}+ vendidos</span>
      </div>
      <h3 class="card-title">${p.n}</h3>
      <div class="card-pricing">
        <div class="pr">
          <b>${money(p.p)}</b>
          <s>${money(p.o)}</s>
        </div>
        <span class="card-savings">Ahorras ${money(p.o - p.p)}</span>
      </div>
      <div class="card-bottom">
        <span class="card-shipping">🚚 Envío Gratis</span>
        <button class="card-btn cta-shine" type="button" aria-label="Elegir talla de ${p.n}">Ver Tallas →</button>
      </div>
    </div>
  </article>`;
};

function render() {
  const q = $("#q").value.trim().toLowerCase();
  const sortMode = $("#sort") ? $("#sort").value : "featured";

  $("#of").innerHTML = [...P]
    .sort((a, b) => b.o - b.p - (a.o - a.p))
    .slice(0, 4)
    .map(card)
    .join("");

  let list = P.filter(
    p => (flt == "all" || p.g == "u" || p.g == flt) && p.n.toLowerCase().includes(q)
  );

  if (sortMode === "discount") {
    list.sort((a, b) => pc(b) - pc(a));
  } else if (sortMode === "price-asc") {
    list.sort((a, b) => a.p - b.p);
  } else if (sortMode === "price-desc") {
    list.sort((a, b) => b.p - a.p);
  } else {
    list.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  }

  $("#catalog-count").textContent = `${list.length} ${list.length === 1 ? "referencia disponible" : "referencias listas para despacho"}`;
  const visible = list.slice(0, lim);
  $("#grid").innerHTML = visible.map(card).join("") || "<p class='mu'>No encontramos tenis con ese filtro.</p>";
  const moreBtn = $("#more");
  if (moreBtn) {
    moreBtn.style.display = list.length > lim ? "inline-block" : "none";
  }
  observeReveals();
}

function setF(f) {
  flt = f;
  lim = 24;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.f == f));
  render();
}

function searchTag(term) {
  lim = 24;
  const q = $("#q");
  if (q) q.value = term;
  if (term.toLowerCase() === "hombre") {
    setF("h");
  } else if (term.toLowerCase() === "dama" || term.toLowerCase() === "mujer") {
    setF("m");
  } else {
    setF("all");
  }
  const target = $("#tenis");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

$("#bar").onclick = e => {
  const b = e.target.closest("button");
  if (b && b.dataset.f) setF(b.dataset.f);
};

// ---------- 5. Categorías, Reels, Reseñas y FAQ ----------
$("#tiles").innerHTML = [
  ["Hombre", "h", P[2].img, "Ver colección masculina →"],
  ["Mujer", "m", P[1].img, "Ver colección femenina →"],
  ["Unisex", "all", P[0].img, "Ver todos los estilos →"]
]
  .map(
    t => `
    <a class="tile" href="#tenis" style="background-image:url('${t[2]}')" onclick="setF('${t[1]}')">
      <strong>${t[0]}</strong>
      <span>${t[3]}</span>
    </a>`
  )
  .join("");

const vs = P.filter(p => CFG.videos[p.id]);
if (vs.length) {
  $("#reel").innerHTML = `
    <h2 class="sec">Míralos <span>en acción</span></h2>
    <div class="grid">
      ${vs
        .map(
          p => `
          <div class="card">
            ${vid(CFG.videos[p.id])}
            <h3>${p.n}</h3>
            <button class="cta k" type="button" onclick="openP(${p.id})">Ver tenis · ${money(p.p)}</button>
          </div>`
        )
        .join("")}
    </div>`;
}

if ($("#reviews-grid") && typeof REVIEWS !== "undefined") {
  $("#reviews-grid").innerHTML = REVIEWS.map(
    r => `
    <article class="rev-card reveal">
      <div class="rev-top">
        <span class="stars">${"★".repeat(r.stars)}</span>
        <span class="rev-badge">✓ ${r.verified}</span>
      </div>
      <p>“${r.text}”</p>
      <div class="rev-foot">
        <strong>${r.name}</strong>
        <span>${r.city} · ${r.product}</span>
      </div>
    </article>`
  ).join("");
}

$("#fq").innerHTML = [
  [
    "¿Cómo funciona el pago contraentrega?",
    "Haces tu pedido aquí o por WhatsApp sin pagar nada por adelantado. Confirmamos tus datos y despachamos por transportadora (Servientrega, Interrapidísimo, Coordinadora o Envía). Pagas en efectivo o transferencia cuando el mensajero te entrega los tenis en tu casa."
  ],
  [
    "¿Cuánto cuesta el envío a mi ciudad?",
    "¡$0 pesos! El envío es 100% gratis a todo Colombia, incluyendo ciudades principales y municipios."
  ],
  [
    "¿Cuánto tiempo tarda en llegar mi pedido?",
    `Entre ${CFG.envio}, dependiendo de tu ciudad o municipio. Te enviamos el número de guía por WhatsApp para que rastrees tu paquete.`
  ],
  [
    "¿Cómo funciona el descuento llevando 2 pares?",
    `Si agregas 2 o más pares al carrito (pueden ser diferentes referencias, colores o tallas), el sistema aplica automáticamente un ${CFG.promo2x}% de descuento adicional sobre el total de tu compra.`
  ],
  [
    "¿Puedo cambiar la talla si no me queda?",
    "Sí, cuentas con cambio rápido por talla. Solo escríbenos al botón flotante de WhatsApp con tu número de pedido y te gestionamos el cambio."
  ],
  [
    "¿Puedo pagar en línea con tarjeta, Nequi o PSE?",
    `Sí, si prefieres pagar en línea con Wompi (Tarjeta, PSE, Nequi) recibes un ${CFG.off}% de descuento adicional automático.`
  ]
]
  .map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`)
  .join("");

// ---------- 6. Botón Flotante de WhatsApp Siempre Activo ----------
function updateWaWidget(product) {
  const num = CFG.wa || "573001234567";
  const msg = product
    ? `Hola ${CFG.name}, quiero información y pedir contraentrega los ${product.n} (${money(product.p)}).`
    : `Hola ${CFG.name}, quiero asesoría para pedir unos tenis con pago contraentrega.`;
  const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  const wab = $("#wab");
  const bubble = $("#wab-bubble");
  if (wab) wab.href = url;
  if (bubble) bubble.href = url;
}
updateWaWidget(null);

// ---------- 7. Modal de Producto de Alta Conversión ----------
function openP(id) {
  cur = P.find(p => p.id == id);
  if (!cur) return;
  sel = { c: cur.v[0][1], t: "", m: "f", pack: 1, guide: false };
  drawM();
  updateWaWidget(cur);
  $("#ov").classList.add("on");
}

function closeM() {
  $("#ov").classList.remove("on");
  updateWaWidget(null);
}

function setPack(q) {
  sel.pack = q;
  drawM();
}

function toggleSizeGuide() {
  sel.guide = !sel.guide;
  drawM();
}

function drawM() {
  const p = cur;
  const u = CFG.videos[p.id];
  const cs = [...new Set(p.v.map(v => v[1]))].filter(Boolean);
  const ts = p.v
    .filter(v => v[1] == sel.c)
    .map(v => v[2])
    .sort((a, b) => a - b);
  const al = [...new Set(p.v.map(v => v[2]))].sort((a, b) => a - b);
  const viewers = 18 + (p.id % 24);
  const pack1Price = p.p;
  const pack2Price = Math.round(p.p * 2 * (1 - CFG.promo2x / 100));
  const onlinePrice = Math.round(p.p * (100 - CFG.off) / 100);

  $("#md").innerHTML = `
    <div class="md-gallery">
      <div class="md-image-wrap">
        ${sel.m == "v" && u ? vid(u) : `<img src="${im(p, sel.c)}" alt="${p.n}">`}
        <span class="md-badge-discount">-${pc(p)}% OFF</span>
        <span class="md-badge-cod">💵 Pagas al recibir en tu puerta</span>
        ${u ? `<div class="md-media-toggle">
                 <button type="button" class="${sel.m == "v" ? "" : "on"}" onclick="sel.m='f';drawM()">📸 Fotos</button>
                 <button type="button" class="${sel.m == "v" ? "on" : ""}" onclick="sel.m='v';drawM()">▶ Video Oficial</button>
               </div>` : ""}
      </div>
      <div class="md-carriers-card">
        <span class="carriers-title">📦 Despacho prioritario asegurado con:</span>
        <div class="carriers-pills">
          <span class="carrier-pill servientrega">Servientrega</span>
          <span class="carrier-pill interrapidisimo">Interrapidísimo</span>
          <span class="carrier-pill coordinadora">Coordinadora</span>
          <span class="carrier-pill envia">Envía</span>
        </div>
      </div>
      <div class="md-assurance-box">
        <span>🔒</span>
        <div>
          <strong>Compra 100% Sin Riesgo</strong><br>
          <small>No pagas por adelantado, revisas y pagas en efectivo al mensajero.</small>
        </div>
      </div>
    </div>

    <div class="pi">
      <div class="md-top-bar">
        <div class="live-viewers-pill">
          <span class="live-dot-pulse"></span>
          <span><b>${viewers} personas</b> viendo este par ahora</span>
        </div>
        <button class="md-close-btn" type="button" onclick="closeM()" aria-label="Cerrar ventana">✕</button>
      </div>

      <div class="md-rating-row">
        <span class="stars">★★★★★ ${p.rate || 4.9}</span>
        <span class="rating-sub">(${p.rev || 145} opiniones verificadas · ${p.sold || 230}+ entregados)</span>
        <span class="tag-trending">🔥 Más vendido</span>
      </div>

      <h2 class="md-product-title">${p.n}</h2>

      <div class="md-price-hero">
        <div class="price-numbers">
          <span class="price-current">${money(p.p)}</span>
          <span class="price-strike">${money(p.o)}</span>
          <span class="savings-tag">AHORRAS ${money(p.o - p.p)}</span>
        </div>
        <div class="price-sub-perks">
          <span class="perk-pill-green">🚚 <b>Envío GRATIS</b> a toda Colombia</span>
          <span class="perk-pill-blue">⚡ <b>+${CFG.off}% OFF en línea</b> con Wompi: ${money(onlinePrice)}</span>
        </div>
      </div>

      <!-- Selector de Combo / Descuento 2 Pares -->
      <div class="md-section-label">Selecciona tu paquete de compra:</div>
      <div class="pack-grid">
        <div class="pack-opt ${sel.pack === 1 ? "on" : ""}" onclick="setPack(1)" role="button" tabindex="0">
          <div class="pack-radio">${sel.pack === 1 ? "●" : "○"}</div>
          <div class="pack-details">
            <span class="pack-title">1 Par · Precio Oferta</span>
            <span class="pack-price-num">${money(pack1Price)}</span>
            <small class="pack-extra">Envío gratis incluido</small>
          </div>
        </div>
        <div class="pack-opt combo ${sel.pack === 2 ? "on" : ""}" onclick="setPack(2)" role="button" tabindex="0">
          <span class="pack-badge-popular">⭐ MÁS ELEGIDO · -${CFG.promo2x}% EXTRA</span>
          <div class="pack-radio">${sel.pack === 2 ? "●" : "○"}</div>
          <div class="pack-details">
            <span class="pack-title">2 Pares (Combo Doble)</span>
            <span class="pack-price-num">${money(pack2Price)}</span>
            <small class="pack-savings-highlight">¡Ahorras ${money(p.p * 2 - pack2Price)} adicionales!</small>
          </div>
        </div>
      </div>

      <!-- Selector de Color -->
      ${
        cs.length
          ? `<div class="md-selector-header">
               <span class="selector-title">1. Color: <strong class="highlight-val">${sel.c}</strong></span>
             </div>
             <div class="color-options-wrap">
               ${cs.map(c => {
                 const thumb = (CFG.imgs && CFG.imgs[p.id] && CFG.imgs[p.id][c]) ? `<img src="${CFG.imgs[p.id][c]}" alt="" class="color-thumb-mini">` : "";
                 return `<button type="button" class="color-chip ${c == sel.c ? "on" : ""}" onclick="sel.c='${c}';sel.t='';sel.m='f';drawM()">${thumb}<span>${c}</span></button>`;
               }).join("")}
             </div>`
          : ""
      }

      <!-- Selector de Talla -->
      <div class="md-selector-header">
        <span class="selector-title">2. Talla Nacional: <strong class="highlight-val">${sel.t || "Selecciona una opción"}</strong></span>
        <button type="button" class="sz-guide-link" onclick="toggleSizeGuide()">📏 ${sel.guide ? "Ocultar guía" : "Guía de tallas (cm)"}</button>
      </div>

      ${
        sel.guide && typeof SIZE_GUIDE !== "undefined"
          ? `<div class="sz-table-card">
               <div class="sz-table-intro">Horma estándar nacional colombiana. Si calzas 38 normal, pide 38:</div>
               <div class="sz-table-grid">${SIZE_GUIDE.map(s => `<div><b>Talla ${s[0]}</b><small>${s[1]}</small></div>`).join("")}</div>
             </div>`
          : ""
      }

      <div class="size-options-grid">
        ${ts.map(t => `<button type="button" class="size-tile ${t == sel.t ? "on" : ""}" onclick="sel.t='${t}';drawM()">${t}</button>`).join("")}
      </div>

      <!-- Barra de Urgencia y Stock -->
      <div class="stock-urgency-box">
        <div class="stock-urgency-header">
          <span>🔥 <b>¡Alta demanda!</b> Quedan pocas unidades en bodega</span>
          <span class="stock-countdown">Despacho en 24h</span>
        </div>
        <div class="stock-urgency-track"><div class="stock-urgency-fill" style="width:84%"></div></div>
      </div>

      <!-- Botones Principales de Compra (Llamativos y de Alta Conversión) -->
      <div class="md-actions-wrap">
        <button class="btn-main-cod cta-shine" type="button" onclick="add()">
          <span class="btn-ico">🚚</span>
          <span class="btn-text-wrap">
            <span class="btn-primary-title">PEDIR CONTRAENTREGA (PAGAS AL RECIBIR)</span>
            <span class="btn-primary-sub">Sin tarjetas · Pagas en efectivo al mensajero en tu puerta</span>
          </span>
        </button>

        <button class="btn-main-wa" type="button" onclick="waProduct()">
          <span class="btn-ico">💬</span>
          <span class="btn-text-wrap">
            <span class="btn-wa-title">PEDIR ESTE PAR POR WHATSAPP</span>
            <span class="btn-wa-sub">Respuesta inmediata · Confirmamos tu pedido y talla</span>
          </span>
        </button>
      </div>

      <!-- 3 Pilares de Confianza -->
      <div class="trust-pillars-row">
        <div class="trust-pillar">
          <span class="trust-icon">🚚</span>
          <div>
            <b>Envío 100% Gratis</b>
            <small>A más de 1.000 municipios</small>
          </div>
        </div>
        <div class="trust-pillar">
          <span class="trust-icon">💵</span>
          <div>
            <b>Pagas al Recibir</b>
            <small>Cero riesgo con pago contraentrega</small>
          </div>
        </div>
        <div class="trust-pillar">
          <span class="trust-icon">↩️</span>
          <div>
            <b>Cambio por Talla</b>
            <small>Garantía directa de cambio</small>
          </div>
        </div>
      </div>

      <!-- Acordeones informativos -->
      <details class="md-details" open>
        <summary>👟 Características y Horma</summary>
        <div class="details-body">
          <ul>
            <li><strong>Colores:</strong> ${cs.join(", ") || "Color único"}</li>
            <li><strong>Tallas:</strong> ${al[0]} a ${al[al.length - 1]} (horma estándar colombiana)</li>
            <li><strong>Categoría:</strong> ${{ h: "Hombre", m: "Mujer", u: "Unisex" }[p.g] || "Unisex"}</li>
            <li><strong>Materiales:</strong> Capellada transpirable, suela antideslizante con amortiguación de alto impacto.</li>
          </ul>
        </div>
      </details>

      <details class="md-details">
        <summary>🚚 Envíos y Tiempos de Entrega</summary>
        <div class="details-body">
          <p>Despachamos tu pedido por <strong>Servientrega, Interrapidísimo, Coordinadora o Envía</strong>. El tiempo estimado es de <strong>${CFG.envio}</strong>. Te enviamos el número de guía por WhatsApp para rastrear tu paquete en todo momento.</p>
        </div>
      </details>

      <details class="md-details">
        <summary>🛡️ Garantía y Políticas de Devolución</summary>
        <div class="details-body">
          <p>Cuentas con 30 días de garantía por defectos de fábrica y 5 días hábiles de retracto según la Ley 1480. Si necesitas cambio de talla, te asistimos de inmediato por WhatsApp.</p>
        </div>
      </details>
      <button class="x" type="button" onclick="closeM()">✕ Cerrar ventana</button>
    </div>`;
}

function add() {
  if (!sel.t) {
    alert("Por favor elige tu talla antes de continuar.");
    return;
  }
  const v = cur.v.find(v => v[1] == sel.c && v[2] == sel.t);
  if (!v) return;
  const it = cart.find(i => i.k == v[0]);
  const addQty = sel.pack === 2 ? 2 : 1;
  if (it) {
    it.q += addQty;
  } else {
    cart.push({
      k: v[0],
      id: cur.id,
      n: cur.n,
      c: sel.c,
      t: sel.t,
      p: cur.p,
      q: addQty,
      img: im(cur, sel.c)
    });
  }
  save();
  closeM();
  openC();
}

function waProduct() {
  if (!sel.t) {
    alert("Por favor elige tu talla para enviarte la disponibilidad exacta.");
    return;
  }
  const v = cur.v.find(v => v[1] == sel.c && v[2] == sel.t);
  const num = CFG.wa || "573001234567";
  const q = sel.pack === 2 ? 2 : 1;
  const price = q === 2 ? Math.round(cur.p * 2 * (1 - CFG.promo2x / 100)) : cur.p;
  const msg =
    `Hola ${CFG.name}, quiero pedir CONTRAENTREGA:\n` +
    `• ${q}x ${cur.n}\n` +
    `• Color: ${sel.c}\n` +
    `• Talla: ${sel.t}\n` +
    `• Ref Dropi: ${v ? v[0] : cur.id}\n` +
    `• Total a pagar al recibir: ${money(price)} (Envío GRATIS)`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
}

// ---------- 8. Carrito y Checkout Contraentrega Dropi ----------
function openC() {
  drawC();
  $("#dr").classList.add("on");
  $("#bk").classList.add("on");
}

function closeC() {
  $("#dr").classList.remove("on");
  $("#bk").classList.remove("on");
}

function drawC() {
  $("#items").innerHTML = cart.length
    ? cart
        .map(
          (i, x) => `
          <div class="it">
            <img src="${i.img}" alt="${i.n}">
            <div>
              <b>${i.n}</b><br>
              <small class="mu">${i.c ? i.c + " · " : ""}Talla ${i.t}</small><br>
              <strong style="color:var(--r)">${money(i.p)}</strong>
            </div>
            <div class="qt">
              <button type="button" onclick="qty(${x},-1)">−</button>
              <span>${i.q}</span>
              <button type="button" onclick="qty(${x},1)">+</button>
            </div>
          </div>`
        )
        .join("")
    : "<p class='mu' style='padding:24px;text-align:center'>Tu carrito está vacío. ¡Elige tus tenis favoritos y paga al recibir!</p>";

  const qCount = qtyTotal();
  const disc = promoDiscount();
  $("#cart-perk").innerHTML =
    qCount >= 2
      ? `🎉 ¡Envío GRATIS + <b>${CFG.promo2x}% OFF Combo 2+ pares</b> desbloqueados!`
      : `🚚 ¡Envío GRATIS desbloqueado! Agrega 1 par más para obtener <b>${CFG.promo2x}% OFF extra</b>.`;

  $("#subtot").textContent = money(subtot());
  $("#promo2x-row").style.display = disc > 0 ? "flex" : "none";
  $("#promo2x-val").textContent = "-" + money(disc);
  $("#tot").textContent = money(tot());
  $("#onl").textContent = `⚡ Pagando online con Wompi ahorras ${money(tot() - onl())} adicionales`;
  $("#pb").textContent = `🔒 Pagar en línea (${CFG.off}% OFF) · ${money(onl())}`;
  $("#co").style.display = cart.length ? "block" : "none";
}

function qty(x, d) {
  cart[x].q += d;
  if (cart[x].q < 1) cart.splice(x, 1);
  save();
  drawC();
}

function data() {
  const d = {
    n: $("#nm").value.trim(),
    ph: $("#ph").value.trim(),
    dp: $("#dp") ? $("#dp").value.trim() : "",
    ci: $("#ci").value.trim(),
    ad: $("#ad").value.trim(),
    nt: $("#nt").value.trim()
  };
  if (!d.n || !d.ph || !d.ci || !d.ad) {
    alert("Completa tu nombre, celular, ciudad y dirección exacta para el envío contraentrega.");
    return null;
  }
  return d;
}

function txt(d) {
  const disc = promoDiscount();
  return (
    `Hola ${CFG.name}, quiero confirmar mi pedido CONTRAENTREGA (pago al recibir):\n\n` +
    cart
      .map(
        i =>
          `• ${i.q}x ${i.n} (${i.c ? i.c + ", " : ""}Talla ${i.t}) [Var:${i.k}] — ${money(i.p * i.q)}`
      )
      .join("\n") +
    (disc > 0 ? `\nDescuento Combo 2+ pares (-${CFG.promo2x}%): -${money(disc)}` : "") +
    `\nEnvío: GRATIS\n*TOTAL A PAGAR AL RECIBIR: ${money(tot())}*\n\n` +
    `*Datos de entrega:*\n` +
    `Nombre: ${d.n}\n` +
    `Celular: ${d.ph}\n` +
    (d.dp ? `Departamento: ${d.dp}\n` : "") +
    `Ciudad: ${d.ci}\n` +
    `Dirección: ${d.ad}` +
    (d.nt ? `\nNotas: ${d.nt}` : "")
  );
}

function wa() {
  const d = data();
  if (!d) return;
  const t = txt(d);
  if (!CFG.wa) {
    try {
      navigator.clipboard.writeText(t);
    } catch (e) {}
    alert("Aún no hay número de WhatsApp configurado. Copié tu pedido para que lo pegues.");
    return;
  }
  window.open("https://wa.me/" + CFG.wa + "?text=" + encodeURIComponent(t), "_blank", "noopener,noreferrer");
}

function pay() {
  const d = data();
  if (!d) return;
  if (!CFG.wompi) {
    alert("El pago online se activa al configurar la llave pública de Wompi en js/data.js. Puedes pedir contraentrega por WhatsApp ahora mismo.");
    return;
  }
  location.href = `https://checkout.wompi.co/p/?public-key=${CFG.wompi}&currency=COP&amount-in-cents=${onl() * 100}&reference=ZAN-${Date.now()}&customer-data:full-name=${encodeURIComponent(d.n)}&customer-data:phone-number=${d.ph.replace(/\D/g, "")}&customer-data:phone-number-prefix=%2B57`;
}

// ---------- 9. Prueba Social en Vivo (#sales-toast) ----------
function showNextToast() {
  if (typeof LIVE_SALES === "undefined" || !LIVE_SALES.length) return;
  const s = LIVE_SALES[toastIdx % LIVE_SALES.length];
  toastIdx++;
  const prod = P.find(p => p.id === s.id);
  if (!prod) return;
  $("#st-img").src = prod.img;
  $("#st-img").alt = prod.n;
  $("#st-txt").innerHTML = `<b>${s.buyer}</b> en <b>${s.city}</b> pidió<br><b>${prod.n}</b> contraentrega<br><small class="mu">${s.ago} · Envío gratis</small>`;
  $("#st-txt").onclick = () => openP(prod.id);
  $("#sales-toast").classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 5200);
}

function hideToast() {
  $("#sales-toast").classList.remove("on");
}

setTimeout(() => {
  showNextToast();
  setInterval(showNextToast, 15000);
}, 5000);

// ---------- 10. Animación de Entrada en Scroll ----------
let revealObserver = null;
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.vis)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(el => el.classList.add("vis"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("pre");
            entry.target.classList.add("vis");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
  }
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add("vis");
    } else {
      el.classList.add("pre");
      revealObserver.observe(el);
    }
  });
}

// Inicialización
render();
save();
show(0);
