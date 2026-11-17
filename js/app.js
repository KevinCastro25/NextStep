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
  const stockPct = Math.min(92, Math.max(20, 100 - p.stock * 10));
  return `
  <article class="card reveal" onclick="openP(${p.id})">
    <div class="im">
      <img loading="lazy" src="${p.img}" alt="${p.n}">
      <span class="bg">-${pc(p)}% OFF</span>
      <span class="tag-hot">${p.tag || "🔥 TOP"}</span>
      <span class="tag-cod">💵 Paga al recibir</span>
      ${CFG.videos[p.id] ? '<span class="vb">▶ Video</span>' : ""}
    </div>
    <div class="card-meta">
      <span class="stars">★★★★★ ${p.rate || 4.9}</span>
      <span>+${p.sold || 120} vendidos</span>
    </div>
    <h3>${p.n}</h3>
    <div class="pr">
      <b>${money(p.p)}</b>
      <s>${money(p.o)}</s>
    </div>
    <div class="sv">Ahorras ${money(p.o - p.p)} · Envío Gratis</div>
    <div class="stock-bar-wrap">
      <span>🔥 ¡Solo quedan ${p.stock || 5} pares en bodega!</span>
      <div class="stock-track"><div class="stock-fill" style="width:${stockPct}%"></div></div>
    </div>
    <button class="card-btn cta-shine" type="button">⚡ ¡LO QUIERO! · ELEGIR TALLA</button>
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
  $("#grid").innerHTML = list.map(card).join("") || "<p class='mu'>No encontramos tenis con ese filtro.</p>";
  observeReveals();
}

function setF(f) {
  flt = f;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.f == f));
  render();
}

function searchTag(term) {
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
  const viewers = 14 + (p.id % 19);
  const pack1Price = p.p;
  const pack2Price = Math.round(p.p * 2 * (1 - CFG.promo2x / 100));

  $("#md").innerHTML = `
    <div>
      <div class="im" style="border-radius:16px">
        ${sel.m == "v" && u ? vid(u) : `<img src="${p.img}" alt="${p.n}">`}
        <span class="bg">-${pc(p)}% OFF</span>
        <span class="tag-cod">💵 Pagas al recibir</span>
      </div>
      ${
        u
          ? `<div class="sz" style="padding:10px 0 0;margin:0">
               <button type="button" class="${sel.m == "v" ? "" : "on"}" onclick="sel.m='f';drawM()">Foto</button>
               <button type="button" class="${sel.m == "v" ? "on" : ""}" onclick="sel.m='v';drawM()">▶ Video</button>
             </div>`
          : ""
      }
      <div class="carriers-strip">
        <span>📦 Servientrega</span>
        <span>⚡ Interrapidísimo</span>
        <span>🚚 Coordinadora</span>
        <span>🚀 Envía</span>
      </div>
    </div>
    <div class="pi">
      <div class="live-viewers">👁️ ${viewers} personas están viendo esta referencia ahora</div>
      <div><span class="stars">★★★★★ ${p.rate || 4.9}</span> <small class="mu">(${p.rev || 120} reseñas · +${p.sold || 150} vendidos)</small></div>
      <h2>${p.n}</h2>
      <div class="pr big"><b>${money(p.p)}</b><s>${money(p.o)}</s></div>
      <div class="sv">Ahorras ${money(p.o - p.p)} · En línea ${money(Math.round(p.p * (100 - CFG.off) / 100))}</div>

      <div class="stock-bar-wrap" style="margin-top:12px">
        <span>🔥 ¡Últimas ${p.stock || 5} unidades disponibles en bodega!</span>
        <div class="stock-track"><div class="stock-fill" style="width:78%"></div></div>
      </div>

      <div class="pack-grid">
        <button type="button" class="pack-opt ${sel.pack === 1 ? "on" : ""}" onclick="setPack(1)">
          <strong>1 Par · Oferta</strong><br>
          <span style="color:var(--r);font-weight:900">${money(pack1Price)}</span><br>
          <small class="mu">Envío gratis</small>
        </button>
        <button type="button" class="pack-opt ${sel.pack === 2 ? "on" : ""}" onclick="setPack(2)">
          <span class="pack-badge">MÁS ELEGIDO</span>
          <strong>2 Pares · -${CFG.promo2x}%</strong><br>
          <span style="color:var(--r);font-weight:900">${money(pack2Price)}</span><br>
          <small class="mu">Ahorras ${money(p.p * 2 - pack2Price)} extra</small>
        </button>
      </div>

      ${
        cs.length
          ? `<h4 style="margin-top:10px">1. Elige Color: <span style="color:var(--r)">${sel.c}</span></h4>
             <div class="sz">${cs.map(c => `<button type="button" class="${c == sel.c ? "on" : ""}" onclick="sel.c='${c}';sel.t='';drawM()">${c}</button>`).join("")}</div>`
          : ""
      }

      <div class="sz-head">
        <h4>2. Elige tu Talla: <span style="color:var(--r)">${sel.t || "Selecciona"}</span></h4>
        <button type="button" class="sz-guide-btn" onclick="toggleSizeGuide()">📏 ${sel.guide ? "Ocultar guía" : "Guía de tallas (cm)"}</button>
      </div>
      ${
        sel.guide && typeof SIZE_GUIDE !== "undefined"
          ? `<div class="sz-table">${SIZE_GUIDE.map(s => `<div>Talla ${s[0]}<br><small class="mu">${s[1]}</small></div>`).join("")}</div>`
          : ""
      }
      <div class="sz">${ts.map(t => `<button type="button" class="${t == sel.t ? "on" : ""}" onclick="sel.t='${t}';drawM()">${t}</button>`).join("")}</div>

      <button class="w cta-shine" type="button" onclick="add()">🚚 Pedir Contraentrega (Pagas al recibir)</button>
      <button class="w wa" type="button" onclick="waProduct()">💬 Pedir este par directo por WhatsApp</button>

      <details open style="margin-top:12px">
        <summary>Detalles del calzado</summary>
        <ul>
          <li>${cs.length || 1} color(es) disponible(s)</li>
          <li>Tallas disponibles: ${al[0]} a ${al[al.length - 1]} (horma estándar nacional)</li>
          <li>Categoría: ${{ h: "Hombre", m: "Mujer", u: "Unisex" }[p.g]}</li>
        </ul>
      </details>
      <details>
        <summary>Envío gratis y pago al recibir</summary>
        <p>Envío gratis a toda Colombia en ${CFG.envio}. Pagas en efectivo al recibir o en línea con Wompi (${CFG.off}% OFF extra).</p>
      </details>
      <details>
        <summary>Cambios y garantía</summary>
        <p>Cambio fácil por talla. 5 días hábiles de retracto (Ley 1480). Confirmamos tu despacho por WhatsApp.</p>
      </details>
      <button class="x" type="button" onclick="closeM()">Cerrar ventana</button>
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
      img: cur.img
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
