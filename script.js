const photos = [
  "03A63120-4E25-4DD4-AB7A-202F967636F6_1_105_c.jpeg",
  "0D652102-5C60-4BE6-AAFF-8FCB3DD06342_1_105_c.jpeg",
  "0ED7CA84-BE06-4CB1-890D-38AF59E35109_1_105_c.jpeg",
  "18D1A3FF-55D4-49BD-8BF6-0DFA41DD4F5B_1_105_c.jpeg",
  "1A692180-E70E-4009-8E25-E4BEA95D0DD3_1_105_c.jpeg",
  "1BACF449-E3AD-437B-9A03-F086BF314B4C_1_105_c.jpeg",
  "1C5CEA19-85A0-4935-BA9C-E5A224AEA315_1_105_c.jpeg",
  "1CF0CC04-7C61-4830-A282-F98DEF9294E1_1_105_c.jpeg",
  "2859E2A5-CB4D-4CD9-9C1B-F400E90F01C0_1_105_c.jpeg",
  "2C1105D8-A379-46AA-934A-3ACDAEBE1B0F_1_105_c.jpeg",
  "38811DB7-DF7A-4197-A7C4-BC0F21B0E12F_1_105_c.jpeg",
  "38DFDD00-B545-40C5-960B-6FCBE8A8E1EA_1_105_c.jpeg",
  "40280591-F9F1-46EF-8EB6-8577A92FAA58_1_105_c.jpeg",
  "40E129F9-DF46-42A5-A45A-CAB98CA5BBE2_1_105_c.jpeg",
  "41D13C5A-1A1C-4F7F-B801-CF52401BF16F_1_105_c.jpeg",
  "462120C8-4895-4A95-B823-E669DF72724E_1_105_c.jpeg",
  "4A290F67-C9D4-4585-A96B-7DA89695D602.jpeg",
  "54BD9858-077C-4522-BDA5-075A5EFBFCE5_1_105_c.jpeg",
  "5AA436B5-6265-4D21-8348-B4DD116F4D5A_1_105_c.jpeg",
  "5D346BA6-5B57-4F76-BA4B-5C6C43D1C6CF_1_105_c.jpeg",
  "69AEA823-ADBB-4166-8477-FEF190984788_1_105_c.jpeg",
  "69AF5507-DB5E-4D5F-A4DC-69EF8B854146_1_105_c.jpeg",
  "6D1BAEBA-AE8F-425C-A12C-341ED314F5C6_1_105_c.jpeg",
  "6D7684B1-370E-4911-B578-E78D9AB47093_1_105_c.jpeg",
  "74CF66F4-8461-4643-9D23-7BA834F11475_1_105_c.jpeg",
  "7A61A14B-8465-4A11-881D-A6A8DD31488A_1_105_c.jpeg",
  "89E3B387-1650-4CFB-A129-F5FEC31BB21E_1_105_c.jpeg",
  "8D09EA44-26FB-41C7-B38D-C76E0F9FC0FD_1_105_c.jpeg",
  "96E4F51F-954B-45FA-BE04-5EEB4EA5BD4D_1_105_c.jpeg",
  "A0076625-8DA3-4909-9208-9E2C36CC2BC8_1_105_c.jpeg",
  "A449A059-6095-401A-970C-79D68C251644_1_105_c.jpeg",
  "B0840659-E605-440E-8264-64CB2FD2B1C4_4_5005_c.jpeg",
  "B4718B24-0F2C-4059-8DAB-7F7596B83E0F_1_105_c.jpeg",
  "B5C2CD18-157B-4A2F-909B-F599F05587B9_1_105_c.jpeg",
  "B929DB44-5396-4B15-AF0C-C76C05C06A78_1_105_c.jpeg",
  "C030965D-E26F-4A87-BD90-CEDF696992DE_1_105_c.jpeg",
  "C27A6CCF-8019-4A8A-A23A-68BBD1255B47_1_105_c.jpeg",
  "C41481FE-E014-4A48-BC61-E70CDDD8A308_1_105_c.jpeg",
  "C8495354-D921-42D1-8B83-FF3CDF45E39C_1_105_c.jpeg",
  "D4F8C0DA-8CEA-4836-8592-E7B7A28311EF_1_105_c.jpeg",
  "DE1B4BB1-F857-4FE1-BA60-175CF8523605_1_105_c.jpeg",
  "E0A3C734-463D-47E9-BB15-B6F06217AEE4_1_105_c.jpeg",
  "E1E0C213-7C8B-4DD4-A3FC-D9B515EE8B40_1_105_c.jpeg",
  "E69EF446-4A1D-4E30-8E5F-E30C1BED0FFB_1_105_c.jpeg",
  "EC881930-A064-4237-8A2E-16ED8208F390_1_105_c.jpeg",
  "EEABC044-A23E-4A22-ABA9-2713FD932E5B_1_105_c.jpeg",
  "F5AC204A-E332-4CD4-A4E9-044B893FE992_1_105_c.jpeg",
  "F71D68DE-B3AC-44BE-B2BF-CA9CA8B618A4_1_105_c.jpeg",
  "F7C42330-F672-4532-8EC1-A6A00FF97480_1_105_c.jpeg",
  "F7E730CE-7151-4D03-A494-580C2ECDDF64_1_105_c.jpeg",
  "FEBC2CF8-69A8-4AF1-869E-39708C2F3738_1_105_c.jpeg"
];

const photoSets = {
  couple: [0, 4, 8, 12, 22, 30, 36, 40],
  selfies: [3, 5, 7, 9, 15, 25, 33, 42],
  home: [1, 6, 11, 17, 18, 21, 28, 43],
  party: [10, 20, 31, 34, 38, 44, 47, 49],
  plans: [2, 13, 14, 16, 23, 24, 29, 46],
  final: [0, 19, 27, 35, 39, 45, 48, 50],
  year2021: [0, 4, 8, 10, 12, 16, 20, 24],
  year2022: [1, 5, 9, 13, 17, 21, 25, 29],
  year2023: [2, 6, 14, 18, 22, 30, 36, 42],
  year2024: [3, 7, 11, 15, 23, 31, 39, 43],
  year2025: [19, 27, 32, 35, 38, 44, 47, 49],
  year2026: [28, 33, 37, 40, 45, 46, 48, 50]
};

const tracks = [
  {
    title: "Te Encontré",
    artist: "El Vega",
    file: "musica/Te Encontre - El Vega ® - The Lions Records (youtube).mp3",
    cueStart: 42,
    note: "Para el principio, porque al final todo va de haberte encontrado."
  },
  {
    title: "WITHOUT YOU",
    artist: "The Kid LAROI & Miley Cyrus",
    file: "musica/The Kid LAROI, Miley Cyrus - WITHOUT YOU (With Miley Cyrus - Official Video) - MileyCyrusVEVO (youtube).mp3",
    cueStart: 48,
    note: "Para las partes intensas, las de echarte de menos y volver a buscarnos."
  },
  {
    title: "Envidiosos",
    artist: "Maka ft Bandaga",
    file: "musica/MAKA ft BANDAGA - Envidiosos (Audio Oficial) - Maka Pna (youtube).mp3",
    cueStart: 37,
    note: "Porque en el chat ya estabas diciendo que yo no cagaba con esta canción."
  }
];

const chatStats = [
  ["306.850", "mensajes"],
  ["1.855", "días hablando"],
  ["450", "días de racha"],
  ["0,5 min", "respuesta mediana"],
  ["10.271", "te quiero"],
  ["27.849", "risas"],
  ["7.283", "fotos mandadas"],
  ["11.172", "audios mandados"]
];

const personalWords = [
  ["julita", 1130],
  ["prinzeza", 125],
  ["julitosa", 109],
  ["pichu", 57],
  ["proyecto", 48],
  ["bombona", 45],
  ["aeropuerto", 45],
  ["oreo", 37],
  ["palomitas", 28],
  ["macedonia", 14],
  ["wuls", 14]
];

const travelRecap = [
  { place: "Mallorca", when: "junio 2022", slug: "mallorca-junio-2022", lat: 39.7, lon: 3.0, note: "Isla, verano temprano y otro recuerdo que faltaba en nuestro mapa." },
  { place: "Lago di Como", when: "septiembre 2022", slug: "lago-di-como-septiembre-2022", lat: 46.02, lon: 9.26, note: "El punto elegante del mapa: agua, montañas y esa sensación de película italiana." },
  { place: "Sevilla", when: "febrero 2023", slug: "sevilla-febrero-2023", lat: 37.39, lon: -5.99, note: "Calles bonitas, planes tranquilos y empezar a llenar 2023 de recuerdos fuera de casa." },
  { place: "Lanzarote", when: "mayo 2023", slug: "lanzarote-mayo-2023", lat: 29.05, lon: -13.59, note: "Volcanes, mar y esa isla que parece de otro planeta cuando vas con la persona correcta." },
  { place: "Jávea", when: "julio 2023", slug: "javea-julio-2023", lat: 38.79, lon: 0.16, note: "Verano azul, calas, calor y fotos con pinta de no querer volver todavía." },
  { place: "El Puerto de Santa María", when: "agosto 2023", slug: "el-puerto-de-santa-maria-agosto-2023", lat: 36.6, lon: -6.23, note: "Agosto con sabor a sur, playa y planes que huelen a verano de verdad." },
  { place: "Valencia", when: "octubre 2023", slug: "valencia-octubre-2023", lat: 39.47, lon: -0.38, note: "Ciudad, paseo, comida rica y otro punto más en nuestro mapa." },
  { place: "Granada", when: "julio 2024", slug: "granada-julio-2024", lat: 37.18, lon: -3.6, note: "La Alhambra de fondo, calor de julio y un viaje con muchísima luz." },
  { place: "Tarifa", when: "agosto 2024", slug: "tarifa-agosto-2024", lat: 36.01, lon: -5.6, note: "Viento, mar, atardeceres y esa energía de fin del mundo que tiene Tarifa." },
  { place: "Huesca", when: "septiembre 2024", slug: "huesca-septiembre-2024", lat: 42.14, lon: -0.41, note: "Montaña, carretera y cambiar el mar por aire fresco." },
  { place: "Segovia", when: "noviembre 2024", slug: "segovia-noviembre-2024", lat: 40.95, lon: -4.12, note: "Acueducto, frío bonito y una escapada de las que saben a abrigo." },
  { place: "Burgos", when: "marzo 2025", slug: "burgos-marzo-2025", lat: 42.34, lon: -3.7, note: "Catedral, norte y ese marzo que se convirtió en mini ruta." },
  { place: "Bilbao", when: "marzo 2025", slug: "bilbao-marzo-2025", lat: 43.26, lon: -2.93, note: "Pintxos, ría y seguir subiendo por el mapa juntos." },
  { place: "Murcia", when: "mayo 2025", slug: "murcia-mayo-2025", lat: 37.99, lon: -1.13, note: "Sol, plan sencillo y otro mayo guardado en la colección." },
  { place: "Santander", when: "noviembre 2025", slug: "santander-noviembre-2025", lat: 43.46, lon: -3.81, note: "Mar del norte, paseo y una postal distinta para cerrar el año." },
  { place: "Montería al lado de Quesada", when: "enero 2026", slug: "monteria-quesada-enero-2026", lat: 37.84, lon: -3.07, note: "Plan distinto, campo, enero y una historia de esas que no salen en una guía." },
  { place: "Vilar de Mouros", when: "abril 2026", slug: "vilar-de-mouros-abril-2026", lat: 41.89, lon: -8.79, note: "Portugal en el mapa, escapada especial y carretera compartida." },
  { place: "Feria de Jerez", when: "mayo 2026", slug: "feria-de-jerez-mayo-2026", lat: 36.69, lon: -6.14, note: "Feria, casetas, luces y el sur haciendo lo que mejor sabe hacer." },
  { place: "Cortijo", when: "varias veces", slug: "cortijo-varias-veces", lat: 37.65, lon: -3.4, note: "Un sitio repetido también cuenta: porque volver a un plan es convertirlo en tradición." },
  { place: "Sancti Petri", when: "todos los veranos", slug: "sancti-petri-todos-los-veranos", lat: 36.38, lon: -6.2, note: "Nuestro marcador de verano: playa, sal y la parte del año que siempre apetece repetir." },
  { place: "Marbella", when: "todos los veranos", slug: "marbella-todos-los-veranos", lat: 36.51, lon: -4.89, note: "Verano, planes conocidos y ese lujo pequeño de tener sitios a los que volver." },
  { place: "Manzanares", when: "todos los veranos", slug: "manzanares-todos-los-veranos", lat: 38.99, lon: -3.37, note: "Casa, verano y una constante en la historia." }
];

const restaurantRecap = [
  {
    name: "La Maruca",
    slug: "la-maruca",
    plate: "El pincho de tortilla",
    award: "El clásico",
    note: "El pincho de tortilla como plan perfecto: sencillo, rico y de esos que no necesitan explicación.",
    palette: "#ffd43b"
  },
  {
    name: "Hamachi",
    slug: "hamachi",
    plate: "Sushi bueno cerca de casa",
    award: "El de entre semana",
    note: "Cuando apetece sushi sin montar una expedición: cerca, fiable y con sabor a plan nuestro.",
    palette: "#34f078"
  },
  {
    name: "Sushita",
    slug: "sushita",
    plate: "Sushi de confianza",
    award: "El seguro",
    note: "Ese sitio al que se vuelve porque sabes que va a salir bien, que también es una forma de lujo.",
    palette: "#ff4ea3"
  },
  {
    name: "Leña",
    slug: "lena",
    plate: "La mejor hamburguesa del mundo",
    award: "La bestia",
    note: "Carne, fuego y la hamburguesa que juega en otra liga.",
    palette: "#ff6b1a"
  },
  {
    name: "Sushi 99",
    slug: "sushi-99",
    plate: "El mejor sushi",
    award: "El top",
    note: "El sushi que no compite con nadie porque ya tiene su propio pedestal.",
    palette: "#00d2ff"
  },
  {
    name: "Tao 369",
    slug: "tao-369",
    plate: "Nuestras mejores citas",
    award: "El especial",
    note: "El sitio que suena a cita buena antes incluso de sentarnos.",
    palette: "#d9ff3f"
  },
  {
    name: "Grosso Napolitano",
    slug: "grosso-napolitano",
    plate: "Pizzas buenas, bonitas y baratas",
    award: "El comodín",
    note: "Pizza que siempre apetece: masa rica, plan fácil y cero drama.",
    palette: "#ff944d"
  },
  {
    name: "Cafe de Paris",
    slug: "Cafe de paris",
    plate: "Un sitio nuevo para la lista",
    award: "El nuevo",
    note: "Añadido a nuestra guía porque ya tiene sitio propio entre nuestros planes.",
    palette: "#ffd1a8"
  }
];

const yearData = {
  2021: {
    messages: "32.517",
    active: "242 días activos",
    top: "Autocine, Manzanares, aeropuerto",
    detail: "504 te quiero y 5.447 risas",
    quote: ["Gon", "26/10/2021", "Te quiero prinzeza"],
    bars: [["Risas", 5447, 72], ["Te quiero", 504, 34], ["Autocine", 40, 48], ["Boda", 29, 35]]
  },
  2022: {
    messages: "67.486",
    active: "361 días activos",
    top: "Cine, playa, Estepona",
    detail: "El día récord fue 14/01/2022",
    quote: ["Gon", "01/01/2022", "Feliz año prinzeza te quiero muchísimo❤️"],
    bars: [["Risas", 7653, 78], ["Te quiero", 1248, 46], ["Julita", 537, 64], ["Estepona", 20, 33]]
  },
  2023: {
    messages: "60.593",
    active: "359 días activos",
    top: "Aeropuerto, Estepona, cine",
    detail: "Aparece julitosa y se queda",
    quote: ["Gon", "03/04/2023", "Buenas nochesitas julitosa"],
    bars: [["Risas", 6643, 70], ["Te quiero", 741, 38], ["Julita", 314, 56], ["Palomitas", 9, 28]]
  },
  2024: {
    messages: "64.584",
    active: "362 días activos",
    top: "Madrid, Estepona, conciertos",
    detail: "Un año entero de seguir eligiéndonos",
    quote: ["Gon", "01/01/2024", "Te quiero muchísimo Julia"],
    bars: [["Risas", 7879, 80], ["Te quiero", 662, 36], ["Proyecto", 23, 44], ["Boda", 23, 44]]
  },
  2025: {
    messages: "57.180",
    active: "363 días activos",
    top: "Madrid, cine, aeropuerto",
    detail: "7.244 te quiero en un año",
    quote: ["Gon", "01/01/2025", "Te quiero mucho jujis"],
    bars: [["Te quiero", 7244, 92], ["Risas", 7641, 86], ["Aeropuerto", 15, 38], ["Casar", 10, 30]]
  },
  2026: {
    messages: "24.028",
    active: "159 días activos",
    top: "Cine, moto, aeropuerto",
    detail: "Hasta junio y ya había historia",
    quote: ["Gon", "01/01/2026", "Te quiero mucho 🥰"],
    bars: [["Risas", 2993, 58], ["Te quiero", 226, 26], ["Te amo", 17, 44], ["Moto", 7, 34]]
  }
};

let quotes = [
  { sender: "Gon", date: "10/09/2021", text: "Butana eres lo más importante de mi vida como no te voy a cuidar y a valorar" },
  { sender: "Juls", date: "03/06/2021", text: "Jajajakakak no solo te quiero para esto" },
  { sender: "Gon", date: "26/10/2021", text: "Te quiero prinzeza" },
  { sender: "Gon", date: "03/04/2023", text: "Buenas nochesitas julitosa" },
  { sender: "Juls", date: "19/10/2021", text: "Súper pichuiii" },
  { sender: "Gon", date: "13/09/2021", text: "Buenas noches bombona" },
  { sender: "Juls", date: "13/09/2021", text: "La de casarme contigo?" },
  { sender: "Juls", date: "12/07/2021", text: "te echo de menos" }
];

const crosswordWords = [
  { answer: "JULITA", clue: "El mote que gana por goleada.", row: 0, col: 2, dir: "down" },
  { answer: "PALOMITAS", clue: "Obligatorias en el cine.", row: 2, col: 0, dir: "across" },
  { answer: "AEROPUERTO", clue: "Lugar de llegadas, despedidas y perdidas...", row: 5, col: 2, dir: "across" },
  { answer: "BOMBONA", clue: "Buenas noches con nombre de bombon.", row: 4, col: 5, dir: "down" },
  { answer: "OREO", clue: "Cereales qespeciales.", row: 8, col: 5, dir: "across" },
  { answer: "WULS", clue: "Palabra privada que no tiene que entender nadie.", row: 4, col: 7, dir: "down" },
  { answer: "PICHU", clue: "Versión corta y cariñosa de como te llamo.", row: 9, col: 0, dir: "across" }
];

const slideTrackMap = [0, 0, 2, 1, 0, 2, 1, 1, 2, 0, 2, 2, 0, 1, 2, 0];
const heroPositions = [
  ["5%", "14%", "-9deg"], ["25%", "58%", "6deg"], ["44%", "16%", "5deg"],
  ["65%", "45%", "-4deg"], ["78%", "10%", "8deg"], ["83%", "63%", "11deg"],
  ["11%", "70%", "-7deg"], ["38%", "72%", "10deg"], ["58%", "74%", "-10deg"],
  ["70%", "22%", "7deg"], ["17%", "34%", "11deg"], ["50%", "43%", "-6deg"]
];

const slideEls = Array.from(document.querySelectorAll(".slide"));
const progressFill = document.querySelector("#progressFill");
const slideCounter = document.querySelector("#slideCounter");
const audio = document.querySelector("#audio");
const nowPlaying = document.querySelector("#nowPlaying");
const playerHint = document.querySelector("#playerHint");
const cursorGlow = document.querySelector(".cursor-glow");
let currentSlide = 0;
let currentTrack = 0;
let soundStarted = false;
let quoteIndex = 0;
let photoWallList = photos.slice();
let photoWallRendered = 0;
let photoWallStarted = false;
let photoWallBusy = false;
const photoWallBatchSize = 36;

function photoPath(name) {
  return `photos/${name}`;
}

function travelPhotoPath(slug) {
  return `photos/viajes/${slug}/foto.jpeg`;
}

function restaurantPhotoPath(slug) {
  return `photos/restaurantes/${slug}/foto.jpeg`;
}

const travelMapPositions = {
  "mallorca-junio-2022": { x: 93, y: 58, kind: "island" },
  "lago-di-como-septiembre-2022": { x: 91, y: 12, kind: "europe" },
  "sevilla-febrero-2023": { x: 35, y: 82, kind: "main" },
  "lanzarote-mayo-2023": { x: 7, y: 91, kind: "island" },
  "javea-julio-2023": { x: 85, y: 67, kind: "main" },
  "el-puerto-de-santa-maria-agosto-2023": { x: 31, y: 87, kind: "main" },
  "valencia-octubre-2023": { x: 80, y: 59, kind: "main" },
  "granada-julio-2024": { x: 51, y: 81, kind: "main" },
  "tarifa-agosto-2024": { x: 38, y: 93, kind: "main" },
  "huesca-septiembre-2024": { x: 65, y: 30, kind: "main" },
  "segovia-noviembre-2024": { x: 48, y: 42, kind: "main" },
  "burgos-marzo-2025": { x: 48, y: 26, kind: "main" },
  "bilbao-marzo-2025": { x: 45, y: 16, kind: "main" },
  "murcia-mayo-2025": { x: 72, y: 76, kind: "main" },
  "santander-noviembre-2025": { x: 43, y: 14, kind: "main" },
  "monteria-quesada-enero-2026": { x: 57, y: 75, kind: "main" },
  "vilar-de-mouros-abril-2026": { x: 18, y: 47, kind: "main" },
  "feria-de-jerez-mayo-2026": { x: 32, y: 86, kind: "main" },
  "cortijo-varias-veces": { x: 55, y: 73, kind: "main" },
  "sancti-petri-todos-los-veranos": { x: 31, y: 88, kind: "main" },
  "marbella-todos-los-veranos": { x: 44, y: 87, kind: "main" },
  "manzanares-todos-los-veranos": { x: 49, y: 59, kind: "main" }
};

function travelMapPoint(item) {
  return travelMapPositions[item.slug] || { x: 50, y: 50, kind: "main" };
}

function renderPhotoGroup(container, indices, mode = "mini") {
  indices.forEach((photoIndex, index) => {
    const img = document.createElement("img");
    img.src = photoPath(photos[photoIndex % photos.length]);
    img.alt = "";
    img.loading = "lazy";
    img.className = mode === "hero" ? "hero-photo" : "section-photo";
    if (mode === "hero") {
      const [left, top, rotate] = heroPositions[index % heroPositions.length];
      img.style.left = left;
      img.style.top = top;
      img.style.rotate = rotate;
    } else {
      img.style.setProperty("--r", `${(index % 2 ? 1 : -1) * (3 + index)}deg`);
      img.style.animationDelay = `${index * -0.45}s`;
    }
    container.appendChild(img);
  });
}

function renderPhotoWall(photoList) {
  const stream = document.querySelector("#photoStream");
  if (!stream) return;
  stream.innerHTML = "";
  photoWallList = Array.isArray(photoList) && photoList.length ? photoList : photos;
  photoWallRendered = 0;
  photoWallStarted = false;
  photoWallBusy = false;
}

function appendPhotoWallBatch(count = photoWallBatchSize) {
  const stream = document.querySelector("#photoStream");
  if (!stream || photoWallBusy || photoWallRendered >= photoWallList.length) return;
  photoWallBusy = true;
  const fragment = document.createDocumentFragment();
  const end = Math.min(photoWallRendered + count, photoWallList.length);
  photoWallList.slice(photoWallRendered, end).forEach((name) => {
    const img = document.createElement("img");
    img.className = "stream-photo";
    img.src = photoPath(name);
    img.loading = "lazy";
    img.decoding = "async";
    img.fetchPriority = "low";
    img.alt = "Recuerdo nuestro";
    fragment.appendChild(img);
  });
  stream.appendChild(fragment);
  photoWallRendered = end;
  photoWallBusy = false;
}

function ensurePhotoWallStarted() {
  if (photoWallStarted) return;
  photoWallStarted = true;
  appendPhotoWallBatch(54);
}

function maybeExtendPhotoWall() {
  const activeSlide = slideEls[currentSlide];
  if (!activeSlide || !activeSlide.querySelector("#photoStream")) return;
  const remaining = activeSlide.scrollHeight - activeSlide.scrollTop - activeSlide.clientHeight;
  if (remaining < 900) appendPhotoWallBatch();
}

function renderPhotos() {
  renderPhotoGroup(document.querySelector("#heroCollage"), [0, 4, 8, 12, 19, 27, 35, 39, 45, 48, 50, 36], "hero");
  renderPhotoGroup(document.querySelector("#entryPhotos"), [0, 12, 22, 30, 36, 40, 45, 48], "mini");
  document.querySelectorAll(".section-photos").forEach((node) => {
    renderPhotoGroup(node, photoSets[node.dataset.set] || photoSets.couple, "mini");
  });
  renderPhotoWall(photos);
}

async function loadPhotoWall() {
  try {
    const response = await fetch("data/photos.json", { cache: "no-store" });
    if (!response.ok) return;
    const list = await response.json();
    if (Array.isArray(list) && list.length) {
      renderPhotoWall(list);
      if (slideEls[currentSlide]?.querySelector("#photoStream")) ensurePhotoWallStarted();
    }
  } catch {
    // Opening the HTML directly may block fetch; the built-in list still works.
  }
}

function renderStats() {
  const grid = document.querySelector("#wrappedStats");
  chatStats.forEach(([value, label]) => {
    const card = document.createElement("article");
    card.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    grid.appendChild(card);
  });
}

function renderYearSlides() {
  Object.entries(yearData).forEach(([year, data]) => {
    const stats = document.querySelector(`[data-year-stats="${year}"]`);
    const quote = document.querySelector(`[data-year-quote="${year}"]`);
    if (!stats || !quote) return;
    stats.innerHTML = `
      <article class="year-big"><strong>${data.messages}</strong><span>mensajes</span></article>
      <article><strong>${data.active}</strong><span>${data.top}</span></article>
      <article><strong>${data.detail}</strong><span>dato del año</span></article>
      <div class="year-bars">
        ${data.bars.map(([label, value, width]) => `
          <div class="year-bar">
            <span>${label}</span>
            <strong>${value}</strong>
            <i style="--w:${width}%"></i>
          </div>
        `).join("")}
      </div>
    `;
    quote.innerHTML = `
      <span>${data.quote[0]} - ${data.quote[1]}</span>
      <strong>${data.quote[2]}</strong>
    `;
  });
}

function renderWords() {
  const cloud = document.querySelector("#wordCloud");
  const max = personalWords[0][1];
  personalWords.forEach(([word, count], index) => {
    const item = document.createElement("span");
    item.className = "word-token";
    item.style.setProperty("--s", `${0.95 + (count / max) * 1.85}rem`);
    item.style.setProperty("--d", `${index * -0.2}s`);
    item.innerHTML = `${word}<small>${count}</small>`;
    cloud.appendChild(item);
  });

  const ranking = document.querySelector("#insideRanking");
  personalWords.slice(0, 5).forEach(([title, count], index) => {
    const score = Math.max(10, Math.round((count / max) * 100));
    const row = document.createElement("article");
    row.className = "rank-item";
    row.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <div>
        <div class="rank-title">${title}</div>
        <p class="rank-meta">${count} veces en el chat</p>
      </div>
      <div class="rank-bar" aria-hidden="true"><span style="--w:${score}%"></span></div>
    `;
    ranking.appendChild(row);
  });
}

function renderTravelRecap() {
  const feature = document.querySelector("#travelFeature");
  const strip = document.querySelector("#travelStrip");
  const map = document.querySelector("#travelMap");
  if (!feature || !strip || !map) return;

  const points = travelRecap.map((item) => ({ ...item, ...travelMapPoint(item) }));

  map.innerHTML = `
    <img class="travel-base-map" src="assets/spain-location-map.svg" alt="">
    <div class="travel-map-vignette"></div>
    <div class="travel-map-card travel-card-canarias">
      <span>Canarias</span>
      <strong>Lanzarote</strong>
    </div>
    <div class="travel-map-card travel-card-como">
      <span>Italia</span>
      <strong>Lago di Como</strong>
    </div>
    <svg class="travel-map-art" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path class="travel-route-active" id="travelRouteActive" d=""></path>
      <text class="travel-plane-svg" x="0" y="0">✈
        <animateMotion id="travelPlaneMotion" dur="9s" repeatCount="indefinite" rotate="auto" path="M 0 0 L 0 0"></animateMotion>
      </text>
    </svg>
    <div class="travel-map-label label-portugal">Portugal</div>
    <div class="travel-map-label label-north">Norte</div>
    <div class="travel-map-label label-south">Andalucía</div>
    <div class="travel-map-label label-east">Mediterráneo</div>
    <a class="travel-map-credit" href="https://commons.wikimedia.org/wiki/File:Spain_location_map.svg" target="_blank" rel="noreferrer">Mapa: Wikimedia Commons</a>
    <div class="travel-live-postcard" id="travelLivePostcard"></div>
    <div class="travel-map-pins">
      ${points.map((item, index) => `
        <button class="travel-map-pin travel-map-pin-${item.kind}" type="button" data-travel-index="${index}" style="--x:${item.x}%; --y:${item.y}%; --d:${index * -0.07}s">
          <span>${index + 1}</span>
          <strong>${item.place}</strong>
        </button>
      `).join("")}
    </div>
  `;

  const setActiveTravel = (index) => {
    const item = travelRecap[index];
    const point = points[index];
    feature.innerHTML = `
      <img src="${travelPhotoPath(item.slug)}" alt="${item.place}">
      <div class="travel-feature-copy">
        <span>${String(index + 1).padStart(2, "0")} / ${travelRecap.length}</span>
        <strong>${item.place}</strong>
        <em>${item.when}</em>
        <p>${item.note}</p>
      </div>
    `;
    document.querySelector("#travelLivePostcard").innerHTML = `
      <img src="${travelPhotoPath(item.slug)}" alt="">
      <span>${item.place}</span>
      <small>${item.when}</small>
    `;
    document.querySelector("#travelLivePostcard").style.setProperty("--x", `${point.x}%`);
    document.querySelector("#travelLivePostcard").style.setProperty("--y", `${point.y}%`);
    document.querySelector("#travelLivePostcard").style.setProperty("--tx", point.x > 72 ? "calc(-100% - 1.2rem)" : "4rem");
    document.querySelector("#travelLivePostcard").style.setProperty("--ty", point.y < 28 ? "1.2rem" : "calc(-100% - 1.2rem)");
    document.querySelector("#travelLivePostcard").style.setProperty("--rot", point.x > 72 ? "3deg" : "-3deg");
    const previousPoint = index === 0 ? point : points[index - 1];
    const segmentD = index === 0 ? `M ${point.x} ${point.y} L ${point.x} ${point.y}` : `M ${previousPoint.x} ${previousPoint.y} L ${point.x} ${point.y}`;
    document.querySelector("#travelRouteActive").setAttribute("d", segmentD);
    document.querySelector("#travelPlaneMotion").setAttribute("path", segmentD);
    map.querySelectorAll(".travel-map-pin").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
    strip.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
  };

  travelRecap.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<img src="${travelPhotoPath(item.slug)}" alt=""><span>${item.place}</span><small>${item.when}</small>`;
    button.addEventListener("click", () => setActiveTravel(index));
    strip.appendChild(button);
  });
  map.addEventListener("click", (event) => {
    const button = event.target.closest("[data-travel-index]");
    if (button) setActiveTravel(Number(button.dataset.travelIndex));
  });

  let travelIndex = 0;
  setActiveTravel(travelIndex);
  window.setInterval(() => {
    const travelSlide = document.querySelector(".travel-slide");
    if (!travelSlide?.classList.contains("active")) return;
    travelIndex = (travelIndex + 1) % travelRecap.length;
    setActiveTravel(travelIndex);
  }, 5200);
}

function renderRestaurantRecap() {
  const showcase = document.querySelector("#restaurantShowcase");
  if (!showcase) return;

  const setActiveRestaurant = (index) => {
    const item = restaurantRecap[index];
    showcase.style.setProperty("--restaurant-accent", item.palette);
    showcase.innerHTML = `
      <div class="restaurant-photo-stack">
        <img class="restaurant-main-photo" src="${restaurantPhotoPath(item.slug)}" alt="${item.name}">
        <div class="restaurant-polaroid">
          <img src="${restaurantPhotoPath(item.slug)}" alt="">
          <span>${item.award}</span>
        </div>
      </div>
      <div class="restaurant-ticket">
        <span>${String(index + 1).padStart(2, "0")} / ${restaurantRecap.length}</span>
        <strong>${item.name}</strong>
        <em>${item.plate}</em>
        <p>${item.note}</p>
      </div>
    `;
  };

  let restaurantIndex = 0;
  setActiveRestaurant(restaurantIndex);
  showcase.addEventListener("click", () => {
    restaurantIndex = (restaurantIndex + 1) % restaurantRecap.length;
    setActiveRestaurant(restaurantIndex);
  });
  window.setInterval(() => {
    const restaurantSlide = document.querySelector(".restaurants-slide");
    if (!restaurantSlide?.classList.contains("active")) return;
    restaurantIndex = (restaurantIndex + 1) % restaurantRecap.length;
    setActiveRestaurant(restaurantIndex);
  }, 3800);
}

function renderMusic() {
  const stack = document.querySelector("#albumStack");
  tracks.forEach((track, index) => {
    const cover = document.createElement("div");
    cover.className = "album-cover";
    cover.dataset.label = track.title;
    cover.style.setProperty("--rot", `${[-8, 8, -2][index]}deg`);
    cover.style.setProperty("--tx", `${[0, 28, 14][index]}%`);
    cover.style.setProperty("--ty", `${[2, 22, 42][index]}%`);
    cover.innerHTML = `<img src="${photoPath(photos[[18, 31, 44][index]])}" alt="">`;
    stack.appendChild(cover);
  });

  const list = document.querySelector("#trackList");
  tracks.forEach((track, index) => {
    const row = document.createElement("article");
    row.className = "track";
    row.innerHTML = `
      <span class="track-number">${index + 1}</span>
      <div>
        <div class="track-title">${track.title}</div>
        <p class="track-meta">${track.artist} - ${track.note}</p>
      </div>
      <button type="button" data-track="${index}">Estribillo</button>
    `;
    list.appendChild(row);
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-track]");
    if (button) playTrack(Number(button.dataset.track), true);
  });
}

function renderQuote() {
  if (!quotes.length) return;
  const { sender, date, text } = quotes[quoteIndex % quotes.length];
  document.querySelector("#quoteText").textContent = text;
  document.querySelector("#quoteMeta").textContent = `${sender} - ${date}`;
}

async function loadQuotes() {
  try {
    const response = await fetch("data/mensajes/quotes.json", { cache: "no-store" });
    if (!response.ok) return;
    const loadedQuotes = await response.json();
    if (!Array.isArray(loadedQuotes) || !loadedQuotes.length) return;
    quotes = loadedQuotes
      .filter((item) => item && item.text)
      .map((item) => ({
        sender: item.sender || "Nosotros",
        date: item.date || "",
        text: item.text
      }));
    quoteIndex = 0;
    renderQuote();
  } catch {
    // Opening the HTML directly may block fetch; the defaults remain available.
  }
}

function renderCrossword() {
  const grid = document.querySelector("#crosswordGrid");
  const clues = document.querySelector("#crosswordClues");
  if (!grid || !clues) return;

  const rows = 11;
  const cols = 12;
  const cells = new Map();
  crosswordWords.forEach((word, wordIndex) => {
    [...word.answer].forEach((letter, letterIndex) => {
      const row = word.row + (word.dir === "down" ? letterIndex : 0);
      const col = word.col + (word.dir === "across" ? letterIndex : 0);
      const key = `${row}-${col}`;
      const current = cells.get(key) || { row, col, letter, starts: [] };
      current.letter = letter;
      if (letterIndex === 0) current.starts.push(wordIndex + 1);
      cells.set(key, current);
    });
  });

  grid.style.setProperty("--cols", cols);
  grid.innerHTML = "";
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const key = `${row}-${col}`;
      const cell = cells.get(key);
      const box = document.createElement(cell ? "label" : "span");
      box.className = cell ? "crossword-cell" : "crossword-cell empty";
      if (cell) {
        box.innerHTML = `
          ${cell.starts.length ? `<small>${cell.starts.join("/")}</small>` : ""}
          <input maxlength="1" data-answer="${cell.letter}" aria-label="Casilla ${row + 1}, ${col + 1}">
        `;
      }
      grid.appendChild(box);
    }
  }

  clues.innerHTML = crosswordWords.map((word, index) => `
    <article>
      <span>${index + 1}</span>
      <p>${word.clue}</p>
    </article>
  `).join("");

  grid.addEventListener("input", (event) => {
    const input = event.target.closest("input");
    if (!input) return;
    input.value = input.value.toUpperCase().slice(0, 1);
    const next = input.closest(".crossword-cell")?.nextElementSibling?.querySelector("input");
    if (next) next.focus();
  });
}

function updateChorusCard(track) {
  document.querySelector("#chorusTitle").textContent = track.title;
  document.querySelector("#chorusNote").textContent = track.note;
}

function setTrack(index, useCue = false) {
  currentTrack = (index + tracks.length) % tracks.length;
  const track = tracks[currentTrack];
  if (audio.getAttribute("src") !== track.file) audio.src = track.file;
  nowPlaying.textContent = `${track.title} - ${track.artist}`;
  playerHint.textContent = useCue ? "Saltando al momento estribillo." : track.note;
  updateChorusCard(track);
  if (useCue) {
    const setCue = () => {
      if (Number.isFinite(audio.duration) && audio.duration > track.cueStart + 2) audio.currentTime = track.cueStart;
    };
    if (audio.readyState >= 1) setCue();
    else audio.addEventListener("loadedmetadata", setCue, { once: true });
  }
}

function playTrack(index, useCue = false) {
  setTrack(index, useCue);
  soundStarted = true;
  audio.play().catch(() => {
    playerHint.textContent = "El navegador pide un toque para arrancar la música.";
  });
  updatePlayButton();
}

function updatePlayButton() {
  document.querySelector("#playPause").textContent = audio.paused ? "Play" : "Pausa";
  document.querySelector("#soundButton").textContent = soundStarted && !audio.paused ? "Sonando" : "Música";
}

function updateSlide() {
  slideEls.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
    if (index === currentSlide) slide.scrollTop = 0;
  });
  document.body.classList.toggle("travel-active", slideEls[currentSlide]?.classList.contains("travel-slide"));
  document.body.classList.toggle("restaurants-active", slideEls[currentSlide]?.classList.contains("restaurants-slide"));
  document.body.classList.toggle("crossword-active", slideEls[currentSlide]?.classList.contains("crossword-slide"));
  progressFill.style.width = `${((currentSlide + 1) / slideEls.length) * 100}%`;
  slideCounter.textContent = `${currentSlide + 1} / ${slideEls.length}`;
  const trackIndex = slideTrackMap[currentSlide] || 0;
  if (soundStarted) playTrack(trackIndex, true);
  else setTrack(trackIndex, false);
  if (slideEls[currentSlide]?.querySelector("#photoStream")) ensurePhotoWallStarted();
}

function goToSlide(index) {
  currentSlide = (index + slideEls.length) % slideEls.length;
  updateSlide();
}

function confetti(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const colors = ["#fffaf2", "#ffd43b", "#34f078", "#ff4ea3", "#00d2ff", "#ff6b1a"];
  for (let i = 0; i < 70; i += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 260;
    piece.className = "burst";
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * distance + 120}px`);
    piece.style.setProperty("--r", `${Math.random() * 180}deg`);
    piece.style.setProperty("--c", colors[i % colors.length]);
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function bindEvents() {
  document.querySelector("#enterButton").addEventListener("click", () => {
    document.querySelector("#entryGate").classList.add("hidden");
    playTrack(0, true);
  });
  document.querySelector("#startButton").addEventListener("click", () => goToSlide(1));
  document.querySelector("#nextSlide").addEventListener("click", () => goToSlide(currentSlide + 1));
  document.querySelector("#prevSlide").addEventListener("click", () => goToSlide(currentSlide - 1));
  document.querySelector("#restartButton").addEventListener("click", () => goToSlide(0));
  document.querySelector("#quoteButton").addEventListener("click", () => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    renderQuote();
  });
  document.querySelector("#confettiButton").addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    confetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
  document.querySelector("#soundButton").addEventListener("click", () => {
    if (!soundStarted) playTrack(slideTrackMap[currentSlide] || 0, true);
    else audio.paused ? audio.play() : audio.pause();
    updatePlayButton();
  });
  document.querySelector("#playPause").addEventListener("click", () => {
    if (!soundStarted) playTrack(slideTrackMap[currentSlide] || 0, true);
    else audio.paused ? audio.play() : audio.pause();
    updatePlayButton();
  });
  document.querySelector("#prevTrack").addEventListener("click", () => playTrack(currentTrack - 1, true));
  document.querySelector("#nextTrack").addEventListener("click", () => playTrack(currentTrack + 1, true));
  document.querySelector("#crosswordCheck").addEventListener("click", () => {
    const inputs = Array.from(document.querySelectorAll("#crosswordGrid input"));
    let correct = 0;
    inputs.forEach((input) => {
      const ok = input.value.toUpperCase() === input.dataset.answer;
      input.classList.toggle("correct", ok);
      input.classList.toggle("wrong", input.value && !ok);
      if (ok) correct += 1;
    });
    document.querySelector("#crosswordResult").textContent =
      correct === inputs.length ? "Completo. Este crucigrama si que era nuestro." : `${correct} / ${inputs.length} letras correctas.`;
  });
  audio.addEventListener("play", updatePlayButton);
  audio.addEventListener("pause", updatePlayButton);
  audio.addEventListener("ended", () => playTrack(currentTrack + 1, true));
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === " ") goToSlide(currentSlide + 1);
    if (event.key === "ArrowLeft") goToSlide(currentSlide - 1);
  });
  slideEls.forEach((slide) => {
    slide.addEventListener("scroll", maybeExtendPhotoWall, { passive: true });
  });
}

renderPhotos();
loadPhotoWall();
renderYearSlides();
renderStats();
renderWords();
renderTravelRecap();
renderRestaurantRecap();
renderMusic();
renderQuote();
loadQuotes();
renderCrossword();
setTrack(0, false);
bindEvents();
updateSlide();
