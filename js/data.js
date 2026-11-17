// =============================================================================
// NEXTSTEP · CONFIGURACIÓN Y CATÁLOGO DROPI
// =============================================================================
// CONFIGURACIÓN:
// - wa: número de WhatsApp con indicativo (ej: "573001234567") — reemplázalo con tu número real
// - wompi: llave pública de Wompi para pagos online
// - off: % descuento adicional por pago online
// - promo2x: % descuento adicional por llevar 2 o más pares
// - videos: { idProducto: "url mp4 o YouTube" }
// - heroVideo: url mp4 opcional para el banner principal
const CFG = {
  name: "NextStep",
  wa: "573001234567",
  wompi: "",
  off: 5,
  promo2x: 10,
  envio: "2 a 5 días hábiles",
  heroVideo: "",
  videos: {}
};

// Catálogo oficial conectado con variantes Dropi: [idVarianteDropi, color, talla]
const P = [
  {
    id: 2128764,
    n: "Tenis TN Urban",
    g: "u",
    p: 129900,
    o: 189900,
    rate: 4.9,
    rev: 184,
    sold: 312,
    stock: 5,
    tag: "🔥 MÁS VENDIDO",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2128764/1776124255WhatsApp%20Image%202025-07-22%20at%207.17.45%20PM%20(1).jpeg",
    v: [[2097212,"Negro","43"],[2097163,"Blanco","35"],[2097164,"Negro","35"],[2097165,"Blanco/Negro","35"],[2097167,"Blanco/Verde","35"],[2097168,"Negro/Dorado","35"],[2097169,"Blanco","36"],[2097170,"Negro","36"],[2097171,"Blanco/Negro","36"],[2097173,"Blanco/Verde","36"],[2097174,"Negro/Dorado","36"],[2097175,"Blanco","37"],[2097176,"Negro","37"],[2097177,"Blanco/Negro","37"],[2097179,"Blanco/Verde","37"],[2097180,"Negro/Dorado","37"],[2097181,"Blanco","38"],[2097182,"Negro","38"],[2097183,"Blanco/Negro","38"],[2097185,"Blanco/Verde","38"],[2097186,"Negro/Dorado","38"],[2097187,"Blanco","39"],[2097188,"Negro","39"],[2097189,"Blanco/Negro","39"],[2097191,"Blanco/Verde","39"],[2097192,"Negro/Dorado","39"],[2097193,"Blanco","40"],[2097194,"Negro","40"],[2097195,"Blanco/Negro","40"],[2097197,"Blanco/Verde","40"],[2097198,"Negro/Dorado","40"],[2097199,"Blanco","41"],[2097200,"Negro","41"],[2097201,"Blanco/Negro","41"],[2097203,"Blanco/Verde","41"],[2097204,"Negro/Dorado","41"],[2097205,"Blanco","42"],[2097206,"Negro","42"],[2097207,"Blanco/Negro","42"],[2097209,"Blanco/Verde","42"],[2097210,"Negro/Dorado","42"],[2097211,"Blanco","43"],[2097213,"Blanco/Negro","43"],[2097215,"Blanco/Verde","43"],[2097216,"Negro/Dorado","43"]]
  },
  {
    id: 2125711,
    n: "Tenis Válvula Dama",
    g: "m",
    p: 119900,
    o: 169900,
    rate: 4.9,
    rev: 142,
    sold: 245,
    stock: 4,
    tag: "⚡ LIQUIDACIÓN",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2125711/1775702914WhatsApp%20Image%202026-04-06%20at%2010.24.54%20PM%20(5).jpeg",
    v: [[2088693,"Gris Azul Naranja","36"],[2088694,"Gris Azul Naranja","37"],[2088695,"Gris Azul Naranja","38"],[2088696,"Gris Azul Naranja","39"],[2088697,"Gris Azul Naranja","40"],[2088698,"Blanco Gris","35"],[2088699,"Blanco Gris","36"],[2088700,"Blanco Gris","37"],[2088701,"Blanco Gris","38"],[2088702,"Blanco Gris","39"],[2088703,"Blanco Gris","40"],[2088704,"Negro","35"],[2088705,"Negro","36"],[2088706,"Negro","37"],[2088707,"Negro","38"],[2088708,"Negro","39"],[2088709,"Negro","40"],[2088710,"Blanco Negro","35"],[2088714,"Blanco Negro","39"],[2088715,"Blanco Negro","40"],[2088716,"Beige Negro","35"],[2088717,"Beige Negro","36"],[2088718,"Beige Negro","37"],[2088719,"Beige Negro","38"],[2088720,"Beige Negro","39"],[2088724,"Blanco Chulo Azul","37"],[2088725,"Blanco Chulo Azul","38"],[2088726,"Blanco Chulo Azul","39"],[2088727,"Blanco Chulo Azul","40"],[2088692,"Gris Azul Naranja","35"],[2088711,"Blanco Negro","36"],[2088712,"Blanco Negro","37"],[2088713,"Blanco Negro","38"],[2088721,"Beige Negro","40"],[2088722,"Blanco Chulo Azul","35"],[2088723,"Blanco Chulo Azul","36"]]
  },
  {
    id: 1627658,
    n: "Tenis Skate Chilango",
    g: "h",
    p: 129900,
    o: 189900,
    rate: 5.0,
    rev: 215,
    sold: 389,
    stock: 3,
    tag: "⭐ TOP CALIDAD",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1627658/1753286099WhatsApp%20Image%202025-07-22%20at%2013.47.27.jpeg",
    v: [[2530081,"NEGRO CAFE","42"],[2198681,"NEGRO FORRO ROJO","40"],[2198682,"NEGRO FORRO ROJO","39"],[2198683,"NEGRO FORRO ROJO","38"],[2176304,"gris","38"],[2176305,"gris","39"],[2176306,"gris","40"],[2176307,"gris","41"],[2176308,"gris","42"],[2260586,"negro","34"],[2198684,"NEGRO FORRO ROJO","37"],[2176296,"negro","37"],[2176311,"arena","38"],[2176312,"arena","39"],[2176313,"arena","40"],[2176315,"arena","42"],[2176316,"arena","43"],[2176297,"negro","38"],[2176298,"negro","39"],[2176299,"negro","40"],[2176300,"negro","41"],[2176301,"negro","42"],[2176302,"negro","43"],[2176303,"gris","37"],[2198678,"NEGRO FORRO ROJO","43"],[2198679,"NEGRO FORRO ROJO","42"],[2198680,"NEGRO FORRO ROJO","41"],[2176309,"gris","43"],[2260575,"NEGRO FORRO ROJO","36"],[2260576,"NEGRO FORRO ROJO","35"],[2260577,"NEGRO FORRO ROJO","34"],[2260578,"arena","36"],[2260579,"arena","35"],[2260580,"arena","34"],[2260581,"gris","36"],[2260582,"gris","35"],[2260583,"gris","34"],[2260584,"negro","36"],[2260585,"negro","35"],[2176314,"arena","41"],[2176310,"arena","37"],[2530076,"NEGRO CAFE","37"],[2530077,"NEGRO CAFE","38"],[2530078,"NEGRO CAFE","39"],[2530079,"NEGRO CAFE","40"],[2530080,"NEGRO CAFE","41"],[2530082,"NEGRO CAFE","43"]]
  },
  {
    id: 1844425,
    n: "Tenis Suede Retro XL",
    g: "u",
    p: 129900,
    o: 189900,
    rate: 4.8,
    rev: 129,
    sold: 210,
    stock: 6,
    tag: "🔥 TENDENCIA",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1844425/172360c3-0c32-45c6-805c-6e94e587ff90.png",
    v: [[1549225,"Negro Suela Blanca","41"],[1549224,"Negro Suela Blanca","40"],[1549223,"Negro Suela Blanca","39"],[1549222,"Negro Suela Blanca","38"],[1549221,"Negro Suela Blanca","37"],[1549220,"Negro Suela Blanca","36"],[1549219,"Negro Suela Blanca","35"],[1549218,"Blanco Línea Negra","43"],[1549217,"Blanco Línea Negra","42"],[1549216,"Blanco Línea Negra","41"],[1549215,"Blanco Línea Negra","40"],[1549214,"Blanco Línea Negra","39"],[1549213,"Blanco Línea Negra","38"],[1549212,"Blanco Línea Negra","37"],[1549211,"Blanco Línea Negra","36"],[1549210,"Blanco Línea Negra","35"],[1549200,"Todo Negro","43"],[1549199,"Todo Negro","42"],[1549198,"Todo Negro","41"],[1549197,"Todo Negro","40"],[1549196,"Todo Negro","39"],[1549195,"Todo Negro","38"],[1549194,"Todo Negro","37"],[1549192,"Todo Negro","35"],[1549191,"Todo Blanco","43"],[1549190,"Todo Blanco","42"],[1549189,"Todo Blanco","41"],[1549188,"Todo Blanco","40"],[1549187,"Todo Blanco","39"],[1549186,"Todo Blanco","38"],[1549185,"Todo Blanco","37"],[1549183,"Todo Blanco","35"],[1549226,"Negro Suela Blanca","42"],[1549193,"Todo Negro","36"],[1549184,"Todo Blanco","36"],[1549227,"Negro Suela Blanca","43"]]
  },
  {
    id: 1899617,
    n: "Tenis Park Lifestyle",
    g: "u",
    p: 139900,
    o: 199900,
    rate: 4.9,
    rev: 163,
    sold: 274,
    stock: 7,
    tag: "⭐ TOP CALIDAD",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1899617/175513200034.jpg",
    v: [[1672093,"BLANCO","38"],[1672105,"BLANCO","41"],[1672090,"NEGRO","37"],[1672094,"NEGRO","38"],[2065385,"AZUL","40"],[2065383,"AZUL","38"],[1859937,"NEGRO","35"],[1672087,"BLANCO/NEGRO","36"],[1672085,"BLANCO","36"],[2065376,"VERDE","39"],[2065377,"VERDE","40"],[1672089,"BLANCO","37"],[1672100,"BEIGE","39"],[1672091,"BLANCO/NEGRO","37"],[1672095,"BLANCO/NEGRO","38"],[2065372,"VERDE","35"],[2065373,"VERDE","36"],[2065378,"VERDE","41"],[1672114,"NEGRO","43"],[1672115,"BLANCO/NEGRO","43"],[2065382,"AZUL","37"],[1672113,"BLANCO","43"],[2065387,"AZUL","42"],[1859938,"BLANCO","35"],[1672096,"BEIGE","38"],[1672111,"BLANCO/NEGRO","42"],[1672102,"NEGRO","40"],[1672097,"BLANCO","39"],[1672104,"BEIGE","40"],[1672099,"BLANCO/NEGRO","39"],[1672109,"BLANCO","42"],[1672110,"NEGRO","42"],[1672098,"NEGRO","39"],[1672106,"NEGRO","41"],[1859936,"BLANCO/NEGRO","35"],[1672117,"BLANCO","44"],[2065386,"AZUL","41"],[1672092,"BEIGE","37"],[2065384,"AZUL","39"],[2065374,"VERDE","37"],[2065381,"AZUL","36"],[1672103,"BLANCO/NEGRO","40"],[2144455,"AZUL","43"],[1672101,"BLANCO","40"],[2065375,"VERDE","38"],[1672116,"BEIGE","43"],[1672086,"NEGRO","36"],[1672107,"BLANCO/NEGRO","41"],[2065379,"VERDE","42"]]
  },
  {
    id: 1790433,
    n: "Tenis Walk Confort Dama",
    g: "m",
    p: 109900,
    o: 159900,
    rate: 4.8,
    rev: 98,
    sold: 176,
    stock: 8,
    tag: "⚡ OFERTA HOY",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1790433/1774656110aa5bdba6-9002-4f51-8c2d-76fb51155d6b.JPG",
    v: [[1475641,"Blanco","38"],[1475642,"Blanco","39"],[1475643,"Blanco","40"],[1475644,"Negro","35"],[1475645,"Negro","36"],[1475646,"Negro","37"],[1475647,"Negro","38"],[1475648,"Negro","39"],[1475652,"Cafe","37"],[1475653,"Cafe","38"],[1475654,"Cafe","39"],[1475655,"Cafe","40"],[1475651,"Cafe","36"],[1475650,"Cafe","35"],[1475649,"Negro","40"],[1475640,"Blanco","37"],[1475639,"Blanco","36"],[1475638,"Blanco","35"]]
  },
  {
    id: 1807369,
    n: "Tenis Classic Stripe Dama",
    g: "m",
    p: 109900,
    o: 159900,
    rate: 4.9,
    rev: 114,
    sold: 193,
    stock: 5,
    tag: "🔥 FAVORITO",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1807369/1746459382WhatsApp%20Image%202025-05-04%20at%2010.40.50%20AM.jpeg",
    v: [[1480385,"Blanco","36"],[1480386,"Blanco","37"],[1480387,"Blanco","38"],[1480384,"Blanco","35"],[1480388,"Blanco","39"],[1480389,"Blanco","40"],[1480390,"Negro","35"],[1480391,"Negro","36"],[1480392,"Negro","37"],[1480393,"Negro","38"],[1480394,"Negro","39"],[1480395,"Negro","40"],[1480396,"Azul","35"],[1480397,"Azul","36"],[1480398,"Azul","37"],[1480399,"Azul","38"],[1480400,"Azul","39"],[1480401,"Azul","40"],[1480402,"Rojo","35"],[1480403,"Rojo","36"],[1480404,"Rojo","37"],[1480405,"Rojo","38"],[1480406,"Rojo","39"],[1480407,"Rojo","40"]]
  },
  {
    id: 2099257,
    n: "Tenis Classic Star",
    g: "u",
    p: 129900,
    o: 189900,
    rate: 4.9,
    rev: 171,
    sold: 298,
    stock: 4,
    tag: "🔥 MÁS VENDIDO",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2099257/1772632832WhatsApp%20Image%202026-03-03%20at%2011.00.45%20AM.jpeg",
    v: [[2031391,"BLANCO CON ROJO","40"],[2062115,"BLANCO CON AZUL","40"],[2031392,"NEGRO CON PRINT","35"],[2031393,"NEGRO CON PRINT","36"],[2031394,"NEGRO CON PRINT","37"],[2031397,"NEGRO CON PRINT","40"],[2062109,"NEGRO CON BLANCO","40"],[2062110,"NEGRO CON BLANCO","39"],[2062111,"NEGRO CON BLANCO","38"],[2062112,"NEGRO CON BLANCO","37"],[2062113,"NEGRO CON BLANCO","36"],[2062114,"NEGRO CON BLANCO","35"],[2062116,"BLANCO CON AZUL","39"],[2062117,"BLANCO CON AZUL","38"],[2062118,"BLANCO CON AZUL","37"],[2062119,"BLANCO CON AZUL","36"],[2062120,"BLANCO CON AZUL","35"],[2031381,"BLANCO CON NEGRO","36"],[2031382,"BLANCO CON NEGRO","37"],[2031383,"BLANCO CON NEGRO","38"],[2031384,"BLANCO CON NEGRO","39"],[2031385,"BLANCO CON NEGRO","40"],[2031386,"BLANCO CON ROJO","35"],[2031395,"NEGRO CON PRINT","38"],[2031396,"NEGRO CON PRINT","39"],[2031374,"BLANCO","35"],[2031375,"BLANCO","36"],[2031376,"BLANCO","37"],[2031377,"BLANCO","38"],[2031378,"BLANCO","39"],[2031379,"BLANCO","40"],[2031380,"BLANCO CON NEGRO","35"],[2031387,"BLANCO CON ROJO","36"],[2031388,"BLANCO CON ROJO","37"],[2031389,"BLANCO CON ROJO","38"],[2031390,"BLANCO CON ROJO","39"]]
  },
  {
    id: 2293499,
    n: "Tenis Trail X Outdoor",
    g: "u",
    p: 129900,
    o: 189900,
    rate: 4.8,
    rev: 87,
    sold: 149,
    stock: 6,
    tag: "🏔️ TODO TERRENO",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2293499/07a55bc8-53f9-462a-8e56-97d1d0e6c202.jpeg",
    v: [[2413265,"BLANCO","43"],[2413266,"NEGRO","43"],[2413001,"BLANCO","42"],[2412989,"NEGRO","37"],[2412990,"NEGRO","38"],[2412991,"NEGRO","39"],[2412992,"NEGRO","40"],[2412993,"NEGRO","41"],[2412994,"NEGRO","42"],[2412996,"BLANCO","37"],[2412997,"BLANCO","38"],[2412998,"BLANCO","39"],[2412999,"BLANCO","40"],[2413000,"BLANCO","41"]]
  },
  {
    id: 453690,
    n: "Tenis Sport YRX Hombre",
    g: "h",
    p: 109900,
    o: 159900,
    rate: 4.9,
    rev: 156,
    sold: 268,
    stock: 5,
    tag: "⚡ SÚPER PRECIO",
    img: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/453690/1748462080GIF%20YRX.gif",
    v: [[641937,"BLANCO","44"],[641938,"AZUL","44"],[308801,"AZUL","43"],[308804,"BLANCO","40"],[308806,"BLANCO","42"],[308799,"AZUL","41"],[308797,"AZUL","39"],[308805,"BLANCO","41"],[308807,"BLANCO","43"],[308800,"AZUL","42"],[308798,"AZUL","40"]]
  }
];

// Reseñas verificadas estilo ecommerce contraentrega Colombia
const REVIEWS = [
  {
    name: "Andrés Felipe G.",
    city: "Medellín, Antioquia",
    product: "Tenis TN Urban",
    stars: 5,
    text: "Llegaron en 2 días por Interrapidísimo. Pagué en efectivo cuando el mensajero me los entregó en la puerta. La suela y los acabados son brutales.",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Laura Camila R.",
    city: "Bogotá D.C.",
    product: "Tenis Válvula Dama",
    stars: 5,
    text: "Súper cómodos y livianos. Tenía miedo de pedir por internet pero me confirmaron por WhatsApp y pagué al recibir. ¡Volveré a pedir otro color!",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Juan Sebastián M.",
    city: "Cali, Valle",
    product: "Tenis Skate Chilango",
    stars: 5,
    text: "Aproveché la promo de 2 pares con mi hermano y nos salió con el 10% extra. La talla exacta según la guía de centímetros. 10/10.",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Valentina Torres",
    city: "Barranquilla, Atlántico",
    product: "Tenis Classic Star",
    stars: 5,
    text: "Divinos tal cual la foto. Me atendieron súper rápido por el botón de WhatsApp y el envío gratis fue real sin costos ocultos.",
    verified: "Compra Contraentrega Verificada"
  }
];

// Compras recientes simuladas para el popup de prueba social en vivo
const LIVE_SALES = [
  { buyer: "Carlos M.", city: "Bogotá", id: 2128764, ago: "hace 3 min" },
  { buyer: "Sofía V.", city: "Medellín", id: 2125711, ago: "hace 6 min" },
  { buyer: "Mateo R.", city: "Cali", id: 1627658, ago: "hace 9 min" },
  { buyer: "Daniela P.", city: "Bucaramanga", id: 2099257, ago: "hace 12 min" },
  { buyer: "Santiago L.", city: "Barranquilla", id: 1844425, ago: "hace 15 min" },
  { buyer: "Camila O.", city: "Pereira", id: 1807369, ago: "hace 18 min" }
];

// Guía de tallas estándar Colombia (EU -> cm)
const SIZE_GUIDE = [
  ["34", "22.0 cm"], ["35", "22.5 cm"], ["36", "23.0 cm"],
  ["37", "23.5 cm"], ["38", "24.5 cm"], ["39", "25.0 cm"],
  ["40", "25.5 cm"], ["41", "26.5 cm"], ["42", "27.0 cm"],
  ["43", "27.5 cm"], ["44", "28.5 cm"]
];
