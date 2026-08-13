var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");

// src/data/cardsData.ts
var CATEGORIES = [
  {
    id: "date-night",
    dayNumber: 1,
    title: "Roleta do Date Night",
    subtitle: "Encontros, divers\xE3o e conex\xE3o",
    description: "Ideias especiais de encontros e experi\xEAncias para sair da rotina e cultivar momentos inesquec\xEDveis.",
    icon: "Sparkles",
    gradient: "from-amber-500 via-rose-500 to-red-600",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    cardsCount: 30,
    previewTeaser: "Liberado no seu 1\xBA dia! Roleta com 30 encontros incr\xEDveis."
  },
  {
    id: "roleta-desejo",
    dayNumber: 2,
    title: "Roleta do Desejo",
    subtitle: "Clima, atra\xE7\xE3o e intimidade",
    description: "Propostas estimulantes, provoca\xE7\xF5es carinhosas e segredos para reacender a chama do casal.",
    icon: "Flame",
    gradient: "from-red-600 via-pink-600 to-purple-700",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    cardsCount: 25,
    previewTeaser: "Libera no Dia 2! Desafios de desejo para apimentar a rela\xE7\xE3o."
  },
  {
    id: "bingo-romantico",
    dayNumber: 3,
    title: "Bingo Rom\xE2ntico",
    subtitle: "Cartela Interativa (5x4)",
    description: "20 miss\xF5es rom\xE2nticas e uma cartela interativa de 20 casas para marcarem juntos a cada conquista.",
    icon: "Grid",
    gradient: "from-purple-600 via-indigo-600 to-rose-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    cardsCount: 20,
    previewTeaser: "Libera no Dia 3! Cartela de bingo e miss\xF5es divertidas a dois."
  },
  {
    id: "cartas-seducao",
    dayNumber: 4,
    title: "Cartas de Sedu\xE7\xE3o",
    subtitle: "Conquista, charme e provoca\xE7\xE3o elegante",
    description: "Jogos de olhar, gestos sutis e provoca\xE7\xF5es elegantes para reconquistar o parceiro todos os dias.",
    icon: "HeartHandshake",
    gradient: "from-rose-600 via-red-700 to-amber-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    cardsCount: 25,
    previewTeaser: "Libera no Dia 4! Jogos de provoca\xE7\xE3o e sedu\xE7\xE3o guiada."
  },
  {
    id: "mapa-prazer",
    dayNumber: 5,
    title: "Mapa do Prazer",
    subtitle: "Prefer\xEAncias, carinho e descoberta",
    description: "Um guia afetivo para o casal descobrir o que proporciona conforto, carinho, conex\xE3o e prazer emocional.",
    icon: "Compass",
    gradient: "from-pink-600 via-rose-700 to-purple-800",
    badgeColor: "bg-rose-400/20 text-rose-200 border-rose-400/30",
    cardsCount: 20,
    previewTeaser: "Libera no Dia 5! Rituais de toque, carinho e mapa afetivo."
  },
  {
    id: "confissoes-casal",
    dayNumber: 6,
    title: "Confiss\xF5es do Casal",
    subtitle: "Vulnerabilidade e verdades",
    description: "Cartas de di\xE1logo profundo, mem\xF3rias emocionantes e revela\xE7oes para fortalecer a confian\xE7a.",
    icon: "MessageCircleHeart",
    gradient: "from-indigo-600 via-purple-700 to-pink-600",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    cardsCount: 15,
    previewTeaser: "Libera no Dia 6! Perguntas reveladoras para conectar suas almas."
  },
  {
    id: "cartas-elogios",
    dayNumber: 7,
    title: "Cartas de Elogios",
    subtitle: "Valoriza\xE7\xE3o e carinho",
    description: "Mensagens sinceras, afirma\xE7\xF5es e declara\xE7\xF5es marcantes para expressar gratid\xE3o e amor.",
    icon: "Heart",
    gradient: "from-amber-400 via-rose-500 to-pink-600",
    badgeColor: "bg-amber-400/20 text-amber-200 border-amber-400/30",
    cardsCount: 15,
    previewTeaser: "Libera no Dia 7! Cartas de gratid\xE3o e declara\xE7\xF5es inesquec\xEDveis."
  }
];
var CARDS_DATA = [
  // ==========================================
  // DECK 1 — 💌 ROLETA DO DATE NIGHT (30 Cartas)
  // ==========================================
  {
    id: "dn-1",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 1,
    title: "Jantar de Olhos Fechados",
    description: "Escolham algo simples para comer e alimentem um ao outro por alguns minutos.",
    actionPrompt: "A cada mordida, tentem adivinhar o que est\xE3o comendo.",
    tag: "Encontro",
    spicyLevel: 1
  },
  {
    id: "dn-2",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 2,
    title: "Nosso Restaurante",
    description: "Transformem a sala em um pequeno restaurante especial.",
    actionPrompt: "Um de voc\xEAs ser\xE1 o anfitri\xE3o e criar\xE1 uma experi\xEAncia especial usando apenas o que j\xE1 existe em casa.",
    tag: "Criativo",
    spicyLevel: 1
  },
  {
    id: "dn-3",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 3,
    title: "Primeiro Encontro",
    description: "Recriem o primeiro encontro de voc\xEAs da forma mais simples poss\xEDvel.",
    actionPrompt: "Escolham uma m\xFAsica, uma comida ou uma conversa que fa\xE7a lembrar aquela \xE9poca.",
    tag: "Nostalgia",
    spicyLevel: 1
  },
  {
    id: "dn-4",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 4,
    title: "Filme Escolhido pelo Outro",
    description: "Cada um escolhe um filme que gostaria muito que o parceiro conhecesse.",
    actionPrompt: "Assistam juntos sem reclamar da escolha.",
    tag: "Cinema",
    spicyLevel: 1
  },
  {
    id: "dn-5",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 5,
    title: "Cozinha a Dois",
    description: "Preparem alguma coisa juntos, mesmo que seja extremamente simples.",
    actionPrompt: "A regra \xE9 que os dois participem.",
    tag: "Gastronomia",
    spicyLevel: 1
  },
  {
    id: "dn-6",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 6,
    title: "Dan\xE7a Improvisada",
    description: "Escolham tr\xEAs m\xFAsicas diferentes e dancem juntos durante cada uma delas.",
    actionPrompt: "A \xFAltima m\xFAsica deve ser lenta.",
    tag: "Dan\xE7a",
    spicyLevel: 2
  },
  {
    id: "dn-7",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 7,
    title: "Noite sem Celular",
    description: "Deixem os celulares longe por pelo menos 30 minutos.",
    actionPrompt: "Usem esse tempo para conversar, brincar ou simplesmente ficar juntos.",
    tag: "Presen\xE7a",
    spicyLevel: 1
  },
  {
    id: "dn-8",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 8,
    title: "Nosso Lugar",
    description: "Escolham um canto da casa e transformem-no temporariamente em um pequeno espa\xE7o de encontro.",
    actionPrompt: "Levem uma bebida, m\xFAsica ou cobertor e fiquem ali juntos.",
    tag: "Aconchego",
    spicyLevel: 1
  },
  {
    id: "dn-9",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 9,
    title: "Pergunta Aleat\xF3ria",
    description: "Cada um deve fazer tr\xEAs perguntas que nunca fez ao outro.",
    actionPrompt: "Vale perguntar sobre sonhos, inf\xE2ncia, futuro ou pequenas curiosidades.",
    tag: "Di\xE1logo",
    spicyLevel: 1
  },
  {
    id: "dn-10",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 10,
    title: "Foto do Momento",
    description: "Tirem uma foto juntos que represente a noite.",
    actionPrompt: "N\xE3o precisa ser perfeita; deve apenas registrar o momento.",
    tag: "Mem\xF3rias",
    spicyLevel: 1
  },
  {
    id: "dn-11",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 11,
    title: "10 Minutos de Carinho",
    description: "Durante dez minutos, fa\xE7am apenas coisas que demonstrem carinho.",
    actionPrompt: "Abra\xE7o, cafun\xE9, m\xE3os dadas ou conversa pr\xF3xima.",
    tag: "Carinho",
    spicyLevel: 1
  },
  {
    id: "dn-12",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 12,
    title: "Nossa Playlist",
    description: "Cada um escolhe duas m\xFAsicas que lembram o relacionamento.",
    actionPrompt: "Escutem todas e contem o significado de cada escolha.",
    tag: "M\xFAsica",
    spicyLevel: 1
  },
  {
    id: "dn-13",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 13,
    title: "Sobremesa Surpresa",
    description: "Um de voc\xEAs prepara ou escolhe uma sobremesa simples para surpreender o outro.",
    actionPrompt: "O outro s\xF3 pode descobrir quando estiver pronta.",
    tag: "Surpresa",
    spicyLevel: 1
  },
  {
    id: "dn-14",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 14,
    title: "Viagem Imagin\xE1ria",
    description: "Escolham um lugar que gostariam de conhecer.",
    actionPrompt: "Por alguns minutos, planejem juntos como seria passar um fim de semana l\xE1.",
    tag: "Sonhos",
    spicyLevel: 1
  },
  {
    id: "dn-15",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 15,
    title: "Jogo de Mem\xF3ria",
    description: "Cada um fala uma lembran\xE7a que acredita que o outro n\xE3o lembra.",
    actionPrompt: "Descubram quem consegue recuperar mais detalhes.",
    tag: "Jogo",
    spicyLevel: 1
  },
  {
    id: "dn-16",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 16,
    title: "Date de 15 Reais",
    description: "Criem um encontro usando, no m\xE1ximo, algo que j\xE1 tenham em casa ou uma quantia simb\xF3lica.",
    actionPrompt: "A criatividade vale mais que o dinheiro.",
    tag: "Criativo",
    spicyLevel: 1
  },
  {
    id: "dn-17",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 17,
    title: "Eu Escolho por Voc\xEA",
    description: "Cada um escolhe a m\xFAsica, bebida, comida e atividade do outro para aquela noite.",
    actionPrompt: "A \xFAnica regra \xE9 aceitar a escolha.",
    tag: "Desafio",
    spicyLevel: 2
  },
  {
    id: "dn-18",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 18,
    title: "Noite de Risadas",
    description: "Tentem fazer um ao outro rir.",
    actionPrompt: "Contem hist\xF3rias engra\xE7adas, imitem situa\xE7\xF5es ou lembrem momentos constrangedores do casal.",
    tag: "Humor",
    spicyLevel: 1
  },
  {
    id: "dn-19",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 19,
    title: "Nosso Futuro",
    description: "Imaginem como seria uma noite comum da vida de voc\xEAs daqui a cinco anos.",
    actionPrompt: "Construam essa hist\xF3ria juntos.",
    tag: "Futuro",
    spicyLevel: 1
  },
  {
    id: "dn-20",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 20,
    title: "Cafun\xE9 e Conversa",
    description: "Um faz carinho no outro enquanto conversam durante dez minutos.",
    actionPrompt: "Quem recebe o carinho escolhe o assunto.",
    tag: "Carinho",
    spicyLevel: 1
  },
  {
    id: "dn-21",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 21,
    title: "O Date Perfeito",
    description: "Cada um descreve como seria seu encontro perfeito.",
    actionPrompt: "Depois escolham juntos uma parte de cada ideia para criar um terceiro encontro.",
    tag: "Planejamento",
    spicyLevel: 1
  },
  {
    id: "dn-22",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 22,
    title: "Recriando uma Foto",
    description: "Escolham uma foto antiga de voc\xEAs e tentem recri\xE1-la usando a mesma pose.",
    actionPrompt: "Comparem as duas depois.",
    tag: "Nostalgia",
    spicyLevel: 1
  },
  {
    id: "dn-23",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 23,
    title: "Carta de 1 Minuto",
    description: "Cada um tem um minuto para dizer tudo que gostaria que o parceiro soubesse naquele momento.",
    actionPrompt: "N\xE3o interrompam durante a fala do outro.",
    tag: "Declara\xE7\xE3o",
    spicyLevel: 1
  },
  {
    id: "dn-24",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 24,
    title: 'Jogo do "E se...?"',
    description: "Fa\xE7am perguntas come\xE7ando com \u201CE se...?\u201D.",
    actionPrompt: "Criem situa\xE7\xF5es divertidas, rom\xE2nticas ou inesperadas e respondam juntos.",
    tag: "Jogo",
    spicyLevel: 1
  },
  {
    id: "dn-25",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 25,
    title: "Noite Tem\xE1tica",
    description: "Escolham um tema para a noite: cinema, viagem, inf\xE2ncia, m\xFAsica ou qualquer outro.",
    actionPrompt: "Tentem fazer comida, m\xFAsica e conversa combinarem com ele.",
    tag: "Tem\xE1tico",
    spicyLevel: 1
  },
  {
    id: "dn-26",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 26,
    title: "Nosso Primeiro Apelido",
    description: "Relembrem os primeiros apelidos que deram um ao outro.",
    actionPrompt: "Escolham um deles para usar durante o restante da noite.",
    tag: "Carinho",
    spicyLevel: 1
  },
  {
    id: "dn-27",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 27,
    title: "Escolha uma Lembran\xE7a",
    description: "Cada um escolhe uma lembran\xE7a do relacionamento que gostaria de reviver.",
    actionPrompt: "Contem por que aquele momento foi importante.",
    tag: "Recorda\xE7\xE3o",
    spicyLevel: 1
  },
  {
    id: "dn-28",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 28,
    title: "Encontro \xE0s Escuras",
    description: "Apaguem as luzes principais e deixem o ambiente mais aconchegante.",
    actionPrompt: "Conversem ou escutem m\xFAsica juntos por alguns minutos.",
    tag: "Ambiente",
    spicyLevel: 2
  },
  {
    id: "dn-29",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 29,
    title: "Agora \xE9 Sua Vez",
    description: "Durante cinco minutos, uma pessoa decide o que o casal far\xE1.",
    actionPrompt: "Depois, troquem os pap\xE9is.",
    tag: "Lideran\xE7a",
    spicyLevel: 1
  },
  {
    id: "dn-30",
    categoryId: "date-night",
    categoryName: "Roleta do Date Night",
    cardNumber: 30,
    title: "Final Perfeito",
    description: "Cada um completa: \u201CPara terminar essa noite do jeito perfeito, eu gostaria de...\u201D.",
    actionPrompt: "Tentem realizar pelo menos uma das respostas.",
    tag: "Fechamento",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 2 — 🔥 ROLETA DO DESEJO (25 Cartas)
  // ==========================================
  {
    id: "rd-1",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 1,
    title: "O Olhar",
    description: "Fiquem frente a frente por 30 segundos sem desviar o olhar.",
    actionPrompt: "Depois, diga o que mais chamou sua aten\xE7\xE3o naquele momento.",
    tag: "Olhares",
    spicyLevel: 2
  },
  {
    id: "rd-2",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 2,
    title: "Chegue mais Perto",
    description: "Aproximem-se lentamente at\xE9 ficarem bem pr\xF3ximos.",
    actionPrompt: "Permane\xE7am assim por alguns segundos antes de se abra\xE7arem.",
    tag: "Proximidade",
    spicyLevel: 2
  },
  {
    id: "rd-3",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 3,
    title: "Um Beijo Diferente",
    description: "Cada um deve dar ao outro um beijo carinhoso de uma maneira que normalmente n\xE3o faz.",
    actionPrompt: "A ideia \xE9 desacelerar e aproveitar a proximidade.",
    tag: "Beijo",
    spicyLevel: 2
  },
  {
    id: "rd-4",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 4,
    title: "O que me Atrai",
    description: "Conte uma caracter\xEDstica do seu parceiro que continua despertando sua atra\xE7\xE3o.",
    actionPrompt: "Explique por que ela chama sua aten\xE7\xE3o.",
    tag: "Atra\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "rd-5",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 5,
    title: "Sussurro",
    description: "Aproxime-se e sussurre uma frase carinhosa no ouvido do parceiro.",
    actionPrompt: "Depois, simplesmente permane\xE7am abra\xE7ados.",
    tag: "Sussurro",
    spicyLevel: 2
  },
  {
    id: "rd-6",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 6,
    title: "Dan\xE7a Lenta",
    description: "Escolham uma m\xFAsica lenta e dancem bem pr\xF3ximos at\xE9 ela terminar.",
    actionPrompt: "N\xE3o importa se sabem dan\xE7ar.",
    tag: "Dan\xE7a",
    spicyLevel: 2
  },
  {
    id: "rd-7",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 7,
    title: "M\xE3os",
    description: "Segurem as m\xE3os um do outro durante um minuto.",
    actionPrompt: "Prestem aten\xE7\xE3o apenas \xE0 sensa\xE7\xE3o de estar pr\xF3ximos.",
    tag: "Toque",
    spicyLevel: 1
  },
  {
    id: "rd-8",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 8,
    title: "Massagem",
    description: "Fa\xE7a uma massagem suave nos ombros ou nas m\xE3os do parceiro durante tr\xEAs minutos.",
    actionPrompt: "Depois, troquem os pap\xE9is.",
    tag: "Massagem",
    spicyLevel: 2
  },
  {
    id: "rd-9",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 9,
    title: "Primeira Atra\xE7\xE3o",
    description: "Conte quando percebeu pela primeira vez que sentia atra\xE7\xE3o pelo seu parceiro.",
    actionPrompt: "Descubram se ele percebeu na mesma \xE9poca.",
    tag: "Mem\xF3ria",
    spicyLevel: 2
  },
  {
    id: "rd-10",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 10,
    title: "Um Desejo",
    description: "Abra seu cora\xE7\xE3o sobre algo que desperta sua vontade.",
    actionPrompt: "Complete sinceramente: \u201CUma coisa que eu gostaria de viver mais vezes com voc\xEA \xE9...\u201D.",
    tag: "Desejo",
    spicyLevel: 2
  },
  {
    id: "rd-11",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 11,
    title: "Abra\xE7o Longo",
    description: "Abracem-se por um minuto inteiro.",
    actionPrompt: "Durante o abra\xE7o, n\xE3o usem o celular nem conversem.",
    tag: "Abra\xE7o",
    spicyLevel: 1
  },
  {
    id: "rd-12",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 12,
    title: "Olhos Fechados",
    description: "Um de voc\xEAs fecha os olhos enquanto o outro conduz suavemente suas m\xE3os durante alguns segundos.",
    actionPrompt: "Depois, troquem os pap\xE9is.",
    tag: "Toque",
    spicyLevel: 2
  },
  {
    id: "rd-13",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 13,
    title: "O Detalhe",
    description: "Escolha um pequeno detalhe f\xEDsico ou comportamental do parceiro que voc\xEA considera especialmente atraente.",
    actionPrompt: "Conte qual \xE9.",
    tag: "Atra\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "rd-14",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 14,
    title: "Aproxima\xE7\xE3o",
    description: "Fiquem alguns passos afastados.",
    actionPrompt: "Caminhem lentamente um em dire\xE7\xE3o ao outro e terminem com um abra\xE7o.",
    tag: "Proximidade",
    spicyLevel: 2
  },
  {
    id: "rd-15",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 15,
    title: "A Mem\xF3ria",
    description: "Relembrem um momento em que sentiram uma conex\xE3o especialmente forte.",
    actionPrompt: "Cada um conta sua vers\xE3o.",
    tag: "Conex\xE3o",
    spicyLevel: 2
  },
  {
    id: "rd-16",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 16,
    title: "Escolha do Parceiro",
    description: "D\xEA espa\xE7o total para o parceiro expressar sua vontade.",
    actionPrompt: "Pergunte: \u201CO que voc\xEA gostaria que eu fizesse para deixar nossa noite mais especial?\u201D. Escute sem julgar.",
    tag: "Carinho",
    spicyLevel: 2
  },
  {
    id: "rd-17",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 17,
    title: "Carinho",
    description: "Durante cinco minutos, um escolhe como demonstrar carinho ao outro.",
    actionPrompt: "Depois, troquem.",
    tag: "Afeto",
    spicyLevel: 2
  },
  {
    id: "rd-18",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 18,
    title: "A Frase",
    description: "Expresse um desejo de ouvir algo afetuoso.",
    actionPrompt: "Cada um deve dizer uma frase que gostaria de ouvir mais vezes dentro do relacionamento.",
    tag: "Palavras",
    spicyLevel: 1
  },
  {
    id: "rd-19",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 19,
    title: "Nosso Clima",
    description: "Escolham uma m\xFAsica que combine com uma noite rom\xE2ntica.",
    actionPrompt: "Escutem juntos sem fazer mais nada durante alguns minutos.",
    tag: "M\xFAsica",
    spicyLevel: 2
  },
  {
    id: "rd-20",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 20,
    title: "Surpresa",
    description: "Cada um deve pensar em uma pequena surpresa que poderia preparar para o outro sem gastar dinheiro.",
    actionPrompt: "Contem apenas depois de pensarem.",
    tag: "Surpresa",
    spicyLevel: 1
  },
  {
    id: "rd-21",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 21,
    title: "O que Voc\xEA Sente?",
    description: "Aprofunde o sentimento de uni\xE3o.",
    actionPrompt: "Pergunte ao parceiro: \u201CEm qual momento voc\xEA mais sente que existe conex\xE3o entre n\xF3s?\u201D. Escute a resposta inteira.",
    tag: "Conex\xE3o",
    spicyLevel: 2
  },
  {
    id: "rd-22",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 22,
    title: "Proximidade",
    description: "Sentem-se lado a lado e permane\xE7am encostados por cinco minutos enquanto conversam sobre qualquer assunto.",
    actionPrompt: "Sinta o calor da pele.",
    tag: "Aconchego",
    spicyLevel: 2
  },
  {
    id: "rd-23",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 23,
    title: "Escolha uma Palavra",
    description: "Resumam o sentimento de estar juntos.",
    actionPrompt: "Cada um escolhe uma palavra que descreva a sensa\xE7\xE3o de estar perto do parceiro. Expliquem a escolha.",
    tag: "Significado",
    spicyLevel: 1
  },
  {
    id: "rd-24",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 24,
    title: "Mais uma Vez",
    description: "Escolham uma experi\xEAncia rom\xE2ntica que voc\xEAs j\xE1 viveram e gostariam de repetir.",
    actionPrompt: "Decidam como poderiam recri\xE1-la.",
    tag: "Recriar",
    spicyLevel: 2
  },
  {
    id: "rd-25",
    categoryId: "roleta-desejo",
    categoryName: "Roleta do Desejo",
    cardNumber: 25,
    title: "Por que Voc\xEA?",
    description: "Olhem um para o outro com sinceridade.",
    actionPrompt: "Respondam: \u201CO que faz voc\xEA continuar escolhendo estar comigo?\u201D. A resposta deve ser pessoal e sincera.",
    tag: "Amor Sincero",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 3 — 💗 BINGO ROMÂNTICO (20 Experiências / Cartela 5x4)
  // ==========================================
  {
    id: "br-1",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 1,
    title: "Abra\xE7o de 30 Segundos",
    description: "D\xEA um abra\xE7o apertado de 30 segundos no parceiro.",
    actionPrompt: "Sinta os batimentos do cora\xE7\xE3o.",
    tag: "Abra\xE7o",
    spicyLevel: 1
  },
  {
    id: "br-2",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 2,
    title: "Diga algo que Admira",
    description: "Diga algo especial que voc\xEA admira no parceiro.",
    actionPrompt: "Explique o motivo do seu orgulho.",
    tag: "Elogio",
    spicyLevel: 1
  },
  {
    id: "br-3",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 3,
    title: "Relembrar o 1\xBA Encontro",
    description: "Relembrem os detalhes e o nervosismo do primeiro encontro.",
    actionPrompt: "Riam das mem\xF3rias daquele dia.",
    tag: "Nostalgia",
    spicyLevel: 1
  },
  {
    id: "br-4",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 4,
    title: "Dan\xE7ar uma M\xFAsica",
    description: "Dancem juntos uma m\xFAsica especial.",
    actionPrompt: "Abra\xE7ados no meio da sala.",
    tag: "Dan\xE7a",
    spicyLevel: 1
  },
  {
    id: "br-5",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 5,
    title: "Foto Juntos",
    description: "Fa\xE7am uma foto juntos agora mesmo.",
    actionPrompt: "Guardem como lembran\xE7a.",
    tag: "Foto",
    spicyLevel: 1
  },
  {
    id: "br-6",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 6,
    title: "15 Minutos Sem Celular",
    description: "Fiquem 15 minutos sem mexer no celular.",
    actionPrompt: "Dediquem o tempo total ao parceiro.",
    tag: "Presen\xE7a",
    spicyLevel: 1
  },
  {
    id: "br-7",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 7,
    title: "Lembran\xE7a Favorita",
    description: "Conte uma lembran\xE7a favorita ao lado dele(a).",
    actionPrompt: "Descreva como se sentiu.",
    tag: "Mem\xF3ria",
    spicyLevel: 1
  },
  {
    id: "br-8",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 8,
    title: "Surpresa Simples",
    description: "Prepare uma surpresa simples (um bilhete, um drinque ou doce).",
    actionPrompt: "Entregue com um beijo.",
    tag: "Surpresa",
    spicyLevel: 1
  },
  {
    id: "br-9",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 9,
    title: "Assistir algo Escolhido",
    description: "Assistam a um v\xEDdeo ou filme escolhido pelo parceiro.",
    actionPrompt: "Sem reclama\xE7\xF5es.",
    tag: "Lazer",
    spicyLevel: 1
  },
  {
    id: "br-10",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 10,
    title: "Cafun\xE9 de 2 Minutos",
    description: "D\xEA um cafun\xE9 carinhoso por dois minutos.",
    actionPrompt: "Deite no colo para receber.",
    tag: "Carinho",
    spicyLevel: 1
  },
  {
    id: "br-11",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 11,
    title: "Gratid\xE3o",
    description: "Digam uma coisa pela qual s\xE3o profundamente gratos.",
    actionPrompt: "Agrade\xE7am pela companhia.",
    tag: "Gratid\xE3o",
    spicyLevel: 1
  },
  {
    id: "br-12",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 12,
    title: "M\xFAsica do Casal",
    description: "Escolham a m\xFAsica oficial do casal.",
    actionPrompt: "Escutem de olhos fechados.",
    tag: "M\xFAsica",
    spicyLevel: 1
  },
  {
    id: "br-13",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 13,
    title: "Planejar Passeio Futuro",
    description: "Planejem um passeio futuro juntos.",
    actionPrompt: "Anotem a ideia.",
    tag: "Planejamento",
    spicyLevel: 1
  },
  {
    id: "br-14",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 14,
    title: "Pergunta In\xE9dita",
    description: "Fa\xE7am uma pergunta que nunca fizeram antes.",
    actionPrompt: "Responda com sinceridade.",
    tag: "Di\xE1logo",
    spicyLevel: 1
  },
  {
    id: "br-15",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 15,
    title: "Recriar Foto Antiga",
    description: "Recriem uma foto antiga do casal.",
    actionPrompt: "Comparem as fotos.",
    tag: "Foto",
    spicyLevel: 1
  },
  {
    id: "br-16",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 16,
    title: "Na Cozinha a Dois",
    description: "Preparem algo juntos na cozinha.",
    actionPrompt: "Dividam as tarefas.",
    tag: "Cozinha",
    spicyLevel: 1
  },
  {
    id: "br-17",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 17,
    title: '"Eu Te Amo" Diferente',
    description: "Digam \u201Ceu te amo\u201D de uma maneira diferente e criativa.",
    actionPrompt: "Demonstrem com gestos ou palavras.",
    tag: "Amor",
    spicyLevel: 1
  },
  {
    id: "br-18",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 18,
    title: "Hist\xF3ria Engra\xE7ada",
    description: "Contem uma hist\xF3ria engra\xE7ada da trajet\xF3ria do casal.",
    actionPrompt: "Riam juntos do passado.",
    tag: "Humor",
    spicyLevel: 1
  },
  {
    id: "br-19",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 19,
    title: "Encontro em Casa",
    description: "Fa\xE7am um pequeno encontro dentro de casa.",
    actionPrompt: "Arrumem o espa\xE7o especial.",
    tag: "Encontro",
    spicyLevel: 1
  },
  {
    id: "br-20",
    categoryId: "bingo-romantico",
    categoryName: "Bingo Rom\xE2ntico",
    cardNumber: 20,
    title: "Abra\xE7o Longo de Fechamento",
    description: "Terminem a noite com um abra\xE7o longo e carinhoso.",
    actionPrompt: 'Desbloqueiem o t\xEDtulo de "Casal Impar\xE1vel"!',
    tag: "Casal Impar\xE1vel",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 4 — 💋 CARTAS DE SEDUÇÃO (25 Cartas)
  // ==========================================
  {
    id: "cs-1",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 1,
    title: "O Convite",
    description: "Convide seu parceiro para um encontro dentro de casa como se fosse a primeira vez que estivesse tentando conquist\xE1-lo.",
    actionPrompt: "Use todo o seu charme inicial.",
    tag: "Sedu\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "cs-2",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 2,
    title: "O Elogio",
    description: "Fa\xE7a um elogio que deixe claro que voc\xEA ainda sente atra\xE7\xE3o pelo seu parceiro.",
    actionPrompt: "Seja espec\xEDfico(a) no elogio.",
    tag: "Atra\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "cs-3",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 3,
    title: "Chegue Perto",
    description: "Aproxime-se lentamente e fique alguns segundos bem perto antes de dizer qualquer coisa.",
    actionPrompt: "Mantenha a tens\xE3o no ar.",
    tag: "Proximidade",
    spicyLevel: 2
  },
  {
    id: "cs-4",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 4,
    title: "A Mensagem",
    description: "Envie uma mensagem curta para o parceiro mesmo estando na mesma casa.",
    actionPrompt: "Escreva algo que desperte curiosidade.",
    tag: "Segredo",
    spicyLevel: 2
  },
  {
    id: "cs-5",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 5,
    title: "O Olhar",
    description: "Passe alguns segundos olhando para o parceiro sem falar.",
    actionPrompt: "Quando ele perguntar o que foi, apenas sorria.",
    tag: "Charmoso",
    spicyLevel: 2
  },
  {
    id: "cs-6",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 6,
    title: "Escolha",
    description: "Pergunte qual pequeno gesto seu faz o parceiro se sentir mais desejado.",
    actionPrompt: "Depois, fa\xE7a esse gesto.",
    tag: "Desejo",
    spicyLevel: 2
  },
  {
    id: "cs-7",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 7,
    title: "Dan\xE7a",
    description: "Escolha uma m\xFAsica e fa\xE7a uma pequena dan\xE7a apenas para o parceiro.",
    actionPrompt: "Pode ser divertida ou elegante.",
    tag: "Dan\xE7a",
    spicyLevel: 2
  },
  {
    id: "cs-8",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 8,
    title: "A Voz",
    description: "Diga uma frase carinhosa usando uma voz mais baixa e tranquila.",
    actionPrompt: "Depois, aproxime-se e abrace o parceiro.",
    tag: "Intimidade",
    spicyLevel: 2
  },
  {
    id: "cs-9",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 9,
    title: "O Detalhe",
    description: "Escolha uma caracter\xEDstica do parceiro que voc\xEA acha irresist\xEDvel e diga exatamente o que \xE9.",
    actionPrompt: "Olhe nos olhos ao falar.",
    tag: "Irresist\xEDvel",
    spicyLevel: 2
  },
  {
    id: "cs-10",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 10,
    title: "Surpresa",
    description: "Fa\xE7a algo inesperado para mudar o clima da noite.",
    actionPrompt: "Uma m\xFAsica, uma bebida, uma luz diferente ou um pequeno gesto.",
    tag: "Clima",
    spicyLevel: 2
  },
  {
    id: "cs-11",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 11,
    title: "O Primeiro Olhar",
    description: "Conte qual foi o momento em que voc\xEA percebeu que seu parceiro tinha algo diferente.",
    actionPrompt: "Relembre a fa\xEDsca inicial.",
    tag: "Mem\xF3ria",
    spicyLevel: 2
  },
  {
    id: "cs-12",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 12,
    title: "Aproxima\xE7\xE3o Lenta",
    description: "Caminhe lentamente at\xE9 seu parceiro e termine com um abra\xE7o.",
    actionPrompt: "N\xE3o tenha pressa.",
    tag: "Calmaria",
    spicyLevel: 2
  },
  {
    id: "cs-13",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 13,
    title: "A Escolha Dele(a)",
    description: "Pergunte: \u201CComo voc\xEA gostaria de receber carinho agora?\u201D.",
    actionPrompt: "Respeite a resposta e fa\xE7a exatamente o que foi pedido.",
    tag: "Carinho",
    spicyLevel: 2
  },
  {
    id: "cs-14",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 14,
    title: "S\xF3 N\xF3s",
    description: "Durante dez minutos, desliguem as distra\xE7\xF5es.",
    actionPrompt: "Concentrem-se exclusivamente um no outro.",
    tag: "Presen\xE7a",
    spicyLevel: 1
  },
  {
    id: "cs-15",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 15,
    title: "O Apelido",
    description: "Escolha um apelido carinhoso que combine com o parceiro e use-o durante a noite.",
    actionPrompt: "Sussurre com carinho.",
    tag: "Afeto",
    spicyLevel: 1
  },
  {
    id: "cs-16",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 16,
    title: "A Mem\xF3ria",
    description: "Conte qual momento do relacionamento mais despertou sua atra\xE7\xE3o pelo parceiro.",
    actionPrompt: "Reviva a emo\xE7\xE3o do momento.",
    tag: "Atra\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "cs-17",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 17,
    title: "O Desafio do Sorriso",
    description: "Tente fazer o parceiro sorrir apenas com express\xF5es, olhares e gestos.",
    actionPrompt: "Sem palavras.",
    tag: "Jogo",
    spicyLevel: 1
  },
  {
    id: "cs-18",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 18,
    title: "Uma Frase",
    description: "Elogie o encanto do outro.",
    actionPrompt: "Complete: \u201CVoc\xEA fica especialmente encantador(a) quando...\u201D.",
    tag: "Elogio",
    spicyLevel: 2
  },
  {
    id: "cs-19",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 19,
    title: "O Mist\xE9rio",
    description: "Prepare uma pequena surpresa e d\xEA apenas uma pista sobre o que est\xE1 planejando.",
    actionPrompt: "Deixe o mist\xE9rio no ar.",
    tag: "Mist\xE9rio",
    spicyLevel: 2
  },
  {
    id: "cs-20",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 20,
    title: "Devagar",
    description: "Escolham uma atividade simples e fa\xE7am tudo mais lentamente que o habitual.",
    actionPrompt: "Prestem aten\xE7\xE3o na companhia um do outro.",
    tag: "Calmaria",
    spicyLevel: 1
  },
  {
    id: "cs-21",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 21,
    title: "A Conquista",
    description: "Finja que voc\xEAs acabaram de se conhecer.",
    actionPrompt: "Cada um tem um minuto para tentar conquistar o outro com conversa.",
    tag: "Conquista",
    spicyLevel: 2
  },
  {
    id: "cs-22",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 22,
    title: "O que Voc\xEA Escolhe?",
    description: "Descubram os desejos de encontros.",
    actionPrompt: "Pergunte ao parceiro qual tipo de encontro faria ele se sentir especialmente desejado.",
    tag: "Encontro",
    spicyLevel: 2
  },
  {
    id: "cs-23",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 23,
    title: "A Dan\xE7a Lenta",
    description: "Escolham uma m\xFAsica rom\xE2ntica e dancem juntos sem conversar.",
    actionPrompt: "Apenas sintam a presen\xE7a.",
    tag: "Dan\xE7a",
    spicyLevel: 2
  },
  {
    id: "cs-24",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 24,
    title: "Segredo",
    description: "Conte algo pequeno que voc\xEA acha especialmente encantador no parceiro, mas que nunca tinha falado.",
    actionPrompt: "Surpreenda com a revela\xE7\xE3o.",
    tag: "Revela\xE7\xE3o",
    spicyLevel: 2
  },
  {
    id: "cs-25",
    categoryId: "cartas-seducao",
    categoryName: "Cartas de Sedu\xE7\xE3o",
    cardNumber: 25,
    title: "Repita",
    description: "Escolham o desafio desta categoria que mais gostaram.",
    actionPrompt: "Fa\xE7am novamente.",
    tag: "Favorito",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 5 — 🗺️ MAPA DO PRAZER (20 Cartas)
  // ==========================================
  {
    id: "mp-1",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 1,
    title: "O que me Relaxa",
    description: "Compartilhe suas fontes de relaxamento ao lado do parceiro.",
    actionPrompt: "Conte ao parceiro tr\xEAs coisas simples que fazem voc\xEA relaxar quando est\xE1 com ele.",
    tag: "Relaxamento",
    spicyLevel: 1
  },
  {
    id: "mp-2",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 2,
    title: "Meu Jeito Favorito",
    description: "Qual \xE9 sua maneira favorita de receber carinho?",
    actionPrompt: "Explique como seu parceiro pode perceber quando voc\xEA precisa disso.",
    tag: "Carinho",
    spicyLevel: 1
  },
  {
    id: "mp-3",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 3,
    title: "O Toque",
    description: "Qual tipo de carinho voc\xEA mais gosta: abra\xE7o, m\xE3os dadas, cafun\xE9 ou outro?",
    actionPrompt: "Conte por qu\xEA.",
    tag: "Toque",
    spicyLevel: 1
  },
  {
    id: "mp-4",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 4,
    title: "O Ambiente",
    description: "Descreva o ambiente em que voc\xEA se sente mais confort\xE1vel para uma noite rom\xE2ntica.",
    actionPrompt: "Ilumina\xE7\xE3o, sons ou aromas favoritos.",
    tag: "Ambiente",
    spicyLevel: 1
  },
  {
    id: "mp-5",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 5,
    title: "A M\xFAsica",
    description: "Que tipo de m\xFAsica ajuda voc\xEA a entrar em um clima mais tranquilo e conectado?",
    actionPrompt: "Coloque uma amostra para escutarem.",
    tag: "M\xFAsica",
    spicyLevel: 1
  },
  {
    id: "mp-6",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 6,
    title: "A Dist\xE2ncia",
    description: "Quando voc\xEA est\xE1 cansado(a), prefere espa\xE7o ou proximidade?",
    actionPrompt: "Explique ao parceiro para se entenderem melhor.",
    tag: "Compreens\xE3o",
    spicyLevel: 1
  },
  {
    id: "mp-7",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 7,
    title: "A Palavra",
    description: "Existe alguma palavra ou apelido que faz voc\xEA se sentir especialmente querido(a)?",
    actionPrompt: "Revele essa palavra ao parceiro.",
    tag: "Afeto",
    spicyLevel: 1
  },
  {
    id: "mp-8",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 8,
    title: "O Momento",
    description: "Em qual momento do dia voc\xEA mais gosta de receber carinho?",
    actionPrompt: "Pela manh\xE3, tarde ou noite?",
    tag: "Rotina",
    spicyLevel: 1
  },
  {
    id: "mp-9",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 9,
    title: "A Surpresa",
    description: "Voc\xEA prefere uma surpresa planejada ou um gesto espont\xE2neo?",
    actionPrompt: "Conte um exemplo que te agradaria.",
    tag: "Gostos",
    spicyLevel: 1
  },
  {
    id: "mp-10",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 10,
    title: "O Abra\xE7o",
    description: "Descreva como seria o abra\xE7o perfeito para voc\xEA.",
    actionPrompt: "Demonstre na pr\xE1tica.",
    tag: "Abra\xE7o",
    spicyLevel: 1
  },
  {
    id: "mp-11",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 11,
    title: "O Elogio",
    description: "Que tipo de elogio realmente faz voc\xEA acreditar que \xE9 valorizado(a)?",
    actionPrompt: "Compartilhe com o parceiro.",
    tag: "Elogio",
    spicyLevel: 1
  },
  {
    id: "mp-12",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 12,
    title: "A Aten\xE7\xE3o",
    description: "O que faz voc\xEA perceber que seu parceiro est\xE1 realmente prestando aten\xE7\xE3o em voc\xEA?",
    actionPrompt: "Contato visual, escuta ativa ou gestos?",
    tag: "Aten\xE7\xE3o",
    spicyLevel: 1
  },
  {
    id: "mp-13",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 13,
    title: "O Date",
    description: "Que tipo de encontro faz voc\xEA se sentir mais conectado(a)?",
    actionPrompt: "Aventura, jantar, filme, passeio ou ficar em casa?",
    tag: "Encontro",
    spicyLevel: 1
  },
  {
    id: "mp-14",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 14,
    title: "O Sil\xEAncio",
    description: "Como voc\xEA se sente quando est\xE1 ao lado de algu\xE9m e voc\xEAs n\xE3o precisam conversar?",
    actionPrompt: "Reflitam sobre o aconchego do sil\xEAncio c\xFAmplice.",
    tag: "Conex\xE3o",
    spicyLevel: 1
  },
  {
    id: "mp-15",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 15,
    title: "O Cuidado",
    description: "Qual pequeno gesto de cuidado significa muito para voc\xEA?",
    actionPrompt: "Pode ser preparar um caf\xE9 ou arrumar a cama.",
    tag: "Cuidado",
    spicyLevel: 1
  },
  {
    id: "mp-16",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 16,
    title: "O Momento Especial",
    description: "Qual situa\xE7\xE3o simples consegue transformar uma noite comum em uma noite especial para voc\xEA?",
    actionPrompt: "Comentem sobre essa magia.",
    tag: "Magia",
    spicyLevel: 1
  },
  {
    id: "mp-17",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 17,
    title: "Minha Prefer\xEAncia",
    description: "Conte algo que voc\xEA gostaria que seu parceiro fizesse com mais frequ\xEAncia no relacionamento.",
    actionPrompt: "Comunique com carinho.",
    tag: "Desejos",
    spicyLevel: 1
  },
  {
    id: "mp-18",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 18,
    title: "O Limite",
    description: "Existe alguma situa\xE7\xE3o em que voc\xEA prefere n\xE3o receber carinho ou aten\xE7\xE3o?",
    actionPrompt: "Converse sobre isso com tranquilidade e respeito.",
    tag: "Respeito",
    spicyLevel: 1
  },
  {
    id: "mp-19",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 19,
    title: "A Descoberta",
    description: "Pergunte ao parceiro: \u201CExiste alguma coisa que eu ainda n\xE3o descobri sobre como voc\xEA gosta de receber carinho?\u201D.",
    actionPrompt: "Escute a resposta com aten\xE7\xE3o.",
    tag: "Descoberta",
    spicyLevel: 1
  },
  {
    id: "mp-20",
    categoryId: "mapa-prazer",
    categoryName: "Mapa do Prazer",
    cardNumber: 20,
    title: "Nosso Mapa",
    description: "Cada um escolhe as tr\xEAs respostas deste deck que mais gostaria que o outro lembrasse.",
    actionPrompt: "Compartilhem e conversem sobre elas.",
    tag: "Mapa do Casal",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 6 — 🤫 CONFISSÕES DO CASAL (15 Cartas)
  // ==========================================
  {
    id: "cc-1",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 1,
    title: "Eu Nunca Contei",
    description: "Abra seu cora\xE7\xE3o sobre um segredo sutil.",
    actionPrompt: "Conte ao parceiro uma pequena coisa sobre voc\xEA que nunca teve oportunidade de compartilhar.",
    tag: "Segredo",
    spicyLevel: 1
  },
  {
    id: "cc-2",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 2,
    title: "Primeira Impress\xE3o",
    description: "Sinceridade sobre o in\xEDcio.",
    actionPrompt: "Conte sinceramente o que voc\xEA pensou quando conheceu seu parceiro.",
    tag: "In\xEDcio",
    spicyLevel: 1
  },
  {
    id: "cc-3",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 3,
    title: "Eu Tive Medo",
    description: "Compartilhe vulnerabilidade.",
    actionPrompt: "Conte uma inseguran\xE7a que voc\xEA sentiu em algum momento do relacionamento.",
    tag: "Vulnerabilidade",
    spicyLevel: 1
  },
  {
    id: "cc-4",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 4,
    title: "Eu Admirei",
    description: "Exalte um gesto marcante.",
    actionPrompt: "Revele um momento em que seu parceiro fez algo que aumentou sua admira\xE7\xE3o por ele.",
    tag: "Admira\xE7\xE3o",
    spicyLevel: 1
  },
  {
    id: "cc-5",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 5,
    title: "Eu Ri Sozinho(a)",
    description: "Alegria espont\xE2nea.",
    actionPrompt: "Conte uma situa\xE7\xE3o envolvendo seu parceiro que fez voc\xEA sorrir quando estava sozinho(a).",
    tag: "Sorrisos",
    spicyLevel: 1
  },
  {
    id: "cc-6",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 6,
    title: "Eu Senti Saudade",
    description: "Intensidade da falta.",
    actionPrompt: "Conte uma ocasi\xE3o em que sentiu muita falta do parceiro, mesmo que tenha sido por pouco tempo.",
    tag: "Saudade",
    spicyLevel: 1
  },
  {
    id: "cc-7",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 7,
    title: "Eu Gostaria",
    description: "Sonhos compartilhados.",
    actionPrompt: "Complete: \u201CUma coisa que gostaria que tiv\xE9ssemos feito juntos \xE9...\u201D.",
    tag: "Desejos",
    spicyLevel: 1
  },
  {
    id: "cc-8",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 8,
    title: "Eu Lembro",
    description: "Mem\xF3ria preciosa.",
    actionPrompt: "Conte uma lembran\xE7a que voc\xEA guarda com mais carinho do que seu parceiro provavelmente imagina.",
    tag: "Mem\xF3ria",
    spicyLevel: 1
  },
  {
    id: "cc-9",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 9,
    title: "Eu Percebi",
    description: "Reconhecimento do crescimento.",
    actionPrompt: "Conte uma mudan\xE7a positiva que percebeu em seu parceiro desde que voc\xEAs come\xE7aram a se relacionar.",
    tag: "Crescimento",
    spicyLevel: 1
  },
  {
    id: "cc-10",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 10,
    title: "Eu Agrade\xE7o",
    description: "Gratid\xE3o em palavras.",
    actionPrompt: "Diga algo pelo qual voc\xEA nunca agradeceu adequadamente ao seu parceiro.",
    tag: "Gratid\xE3o",
    spicyLevel: 1
  },
  {
    id: "cc-11",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 11,
    title: "Eu Aprendi",
    description: "Evolu\xE7\xE3o pessoal no amor.",
    actionPrompt: "Conte uma coisa que o relacionamento ensinou sobre voc\xEA mesmo.",
    tag: "Aprendizado",
    spicyLevel: 1
  },
  {
    id: "cc-12",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 12,
    title: "Eu Quero",
    description: "Constru\xE7\xE3o do amanh\xE3.",
    actionPrompt: "Conte algo que voc\xEA gostaria de construir junto no futuro.",
    tag: "Futuro",
    spicyLevel: 1
  },
  {
    id: "cc-13",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 13,
    title: "Eu Sinto",
    description: "Mapeamento do sentimento.",
    actionPrompt: "Complete: \u201CEu me sinto mais amado(a) quando...\u201D.",
    tag: "Amor",
    spicyLevel: 1
  },
  {
    id: "cc-14",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 14,
    title: "Eu Escolho",
    description: "Escolha consciente e di\xE1ria.",
    actionPrompt: "Explique por que, conhecendo seu parceiro como conhece hoje, voc\xEA ainda escolheria estar com ele.",
    tag: "Escolha",
    spicyLevel: 2
  },
  {
    id: "cc-15",
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: 15,
    title: "A mais Importante",
    description: "Garantia para o amanh\xE3.",
    actionPrompt: "Complete sem pensar demais: \u201CSe eu pudesse garantir uma coisa para o nosso futuro, seria...\u201D.",
    tag: "Compromisso",
    spicyLevel: 2
  },
  // ==========================================
  // DECK 7 — ✨ CARTAS DE ELOGIOS (15 Cartas)
  // ==========================================
  {
    id: "ce-1",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 1,
    title: "Sua For\xE7a",
    description: "Admira\xE7\xE3o pela resili\xEAncia.",
    actionPrompt: "Diga ao parceiro uma caracter\xEDstica que demonstra a for\xE7a dele e explique por que voc\xEA admira isso.",
    tag: "For\xE7a",
    spicyLevel: 1
  },
  {
    id: "ce-2",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 2,
    title: "Seu Cora\xE7\xE3o",
    description: "Elogio \xE0 bondade.",
    actionPrompt: "Conte uma atitude que demonstra o lado carinhoso do seu parceiro.",
    tag: "Bondade",
    spicyLevel: 1
  },
  {
    id: "ce-3",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 3,
    title: "Seu Sorriso",
    description: "O brilho do olhar.",
    actionPrompt: "Diga o que acontece com voc\xEA quando v\xEA seu parceiro sorrir.",
    tag: "Sorriso",
    spicyLevel: 1
  },
  {
    id: "ce-4",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 4,
    title: "Sua Intelig\xEAncia",
    description: "Brilho mental.",
    actionPrompt: "Elogie uma maneira espec\xEDfica como seu parceiro pensa, resolve problemas ou aprende.",
    tag: "Intelig\xEAncia",
    spicyLevel: 1
  },
  {
    id: "ce-5",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 5,
    title: "Sua Presen\xE7a",
    description: "A sensa\xE7\xE3o de seguran\xE7a.",
    actionPrompt: "Complete: \u201CQuando voc\xEA est\xE1 comigo, eu sinto...\u201D.",
    tag: "Presen\xE7a",
    spicyLevel: 1
  },
  {
    id: "ce-6",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 6,
    title: "Seu Jeito",
    description: "Manias encantadoras.",
    actionPrompt: "Escolha uma mania ou caracter\xEDstica peculiar do parceiro que voc\xEA secretamente adora.",
    tag: "Charmoso",
    spicyLevel: 1
  },
  {
    id: "ce-7",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 7,
    title: "Sua Coragem",
    description: "Exemplo de atitude.",
    actionPrompt: "Conte uma situa\xE7\xE3o em que voc\xEA viu seu parceiro sendo corajoso.",
    tag: "Coragem",
    spicyLevel: 1
  },
  {
    id: "ce-8",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 8,
    title: "Sua Gentileza",
    description: "Delicadeza no agir.",
    actionPrompt: "Relembre um pequeno gesto de gentileza que seu parceiro teve com voc\xEA.",
    tag: "Gentileza",
    spicyLevel: 1
  },
  {
    id: "ce-9",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 9,
    title: "Sua Beleza",
    description: "Encanto visual e f\xEDsico.",
    actionPrompt: "Diga uma caracter\xEDstica f\xEDsica do parceiro que voc\xEA considera especialmente bonita.",
    tag: "Beleza",
    spicyLevel: 1
  },
  {
    id: "ce-10",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 10,
    title: "Seu Cuidado",
    description: "Atos silenciosos de amor.",
    actionPrompt: "Conte uma maneira pela qual seu parceiro demonstra cuidado sem necessariamente dizer nada.",
    tag: "Cuidado",
    spicyLevel: 1
  },
  {
    id: "ce-11",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 11,
    title: "Sua Companhia",
    description: "Singularidade da parceria.",
    actionPrompt: "Complete: \u201CUma coisa que torna estar com voc\xEA diferente de estar com qualquer outra pessoa \xE9...\u201D.",
    tag: "Companheirismo",
    spicyLevel: 1
  },
  {
    id: "ce-12",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 12,
    title: "Seu Crescimento",
    description: "A evolu\xE7\xE3o conjunta.",
    actionPrompt: "Diga algo em que voc\xEA percebe que seu parceiro cresceu ou amadureceu.",
    tag: "Evolu\xE7\xE3o",
    spicyLevel: 1
  },
  {
    id: "ce-13",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 13,
    title: "Nosso Orgulho",
    description: "Orgulho genu\xEDno.",
    actionPrompt: "Conte uma coisa que seu parceiro fez e que deixou voc\xEA genuinamente orgulhoso(a).",
    tag: "Orgulho",
    spicyLevel: 1
  },
  {
    id: "ce-14",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 14,
    title: "O que Voc\xEA n\xE3o Percebe",
    description: "Tesouro escondido.",
    actionPrompt: "Diga uma qualidade sua que voc\xEA acha que o parceiro talvez n\xE3o perceba o quanto \xE9 especial.",
    tag: "Qualidades",
    spicyLevel: 1
  },
  {
    id: "ce-15",
    categoryId: "cartas-elogios",
    categoryName: "Cartas de Elogios",
    cardNumber: 15,
    title: "Tudo Junto",
    description: "Declara\xE7\xE3o completa.",
    actionPrompt: "Olhe para o parceiro e fa\xE7a um elogio que combine apar\xEAncia, personalidade e a forma como ele faz voc\xEA se sentir.",
    tag: "Amor Completo",
    spicyLevel: 2
  }
];

// server.ts
var import_dotenv = __toESM(require("dotenv"), 1);
var import_supabase_js = require("@supabase/supabase-js");
import_dotenv.default.config();
var supabaseUrl = process.env.VITE_SUPABASE_URL || "";
var supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "";
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var DB_FILE = import_path.default.join(process.cwd(), "users_db.json");
function loadUsers() {
  try {
    if (import_fs.default.existsSync(DB_FILE)) {
      const data = import_fs.default.readFileSync(DB_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error loading user DB:", e);
  }
  return {};
}
function saveUsers(users) {
  try {
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify(users, null, 2), "utf8");
  } catch (e) {
    console.error("Error saving user DB:", e);
  }
}
var usersDB = loadUsers();
function computeUserStats(user) {
  const normalizedEmail = (user.email || "").trim().toLowerCase();
  const isVIP = normalizedEmail === "victorsantosv32@gmail.com";
  if (isVIP) {
    const allCategoryIds = CATEGORIES.map((cat) => cat.id);
    return {
      user,
      daysElapsed: 7,
      unlockedCategoriesCount: 7,
      unlockedCategoryIds: allCategoryIds,
      nextUnlockDays: 0
    };
  }
  const now = (/* @__PURE__ */ new Date()).getTime();
  const created = new Date(user.createdAt).getTime();
  const diffTime = Math.max(0, now - created);
  const realDaysElapsed = Math.floor(diffTime / (1e3 * 60 * 60 * 24)) + 1;
  const effectiveDays = Math.max(1, Math.min(7, realDaysElapsed + (user.simulatedDayOffset || 0)));
  const unlockedCategoriesCount = effectiveDays;
  const unlockedCategoryIds = CATEGORIES.filter((cat) => cat.dayNumber <= unlockedCategoriesCount).map((cat) => cat.id);
  const nextUnlockDays = unlockedCategoriesCount >= 7 ? 0 : 1;
  return {
    user,
    daysElapsed: effectiveDays,
    unlockedCategoriesCount,
    unlockedCategoryIds,
    nextUnlockDays
  };
}
app.post("/api/auth/login", (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Por favor, insira um e-mail de compra v\xE1lido." });
  }
  const normalizedEmail = email.trim().toLowerCase();
  if (!usersDB[normalizedEmail]) {
    usersDB[normalizedEmail] = {
      email: normalizedEmail,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      simulatedDayOffset: 0,
      favorites: [],
      completedBingo: [],
      status: "active"
    };
    saveUsers(usersDB);
  }
  const user = usersDB[normalizedEmail];
  if (user.status === "refunded" || user.status === "inactive") {
    return res.status(403).json({
      error: "Acesso desativado ou reembolsado. Se voc\xEA acredita que isso \xE9 um erro, entre em contato com o suporte."
    });
  }
  const stats = computeUserStats(user);
  res.json({ success: true, stats });
});
app.get("/api/user/me", (req, res) => {
  const email = req.query.email;
  const normalizedEmail = (email || "").trim().toLowerCase();
  if (!normalizedEmail || !usersDB[normalizedEmail]) {
    return res.status(404).json({ error: "Usu\xE1rio n\xE3o encontrado." });
  }
  const user = usersDB[normalizedEmail];
  if (user.status === "refunded" || user.status === "inactive") {
    return res.status(403).json({
      error: "Acesso desativado ou reembolsado. Se voc\xEA acredita que isso \xE9 um erro, entre em contato com o suporte."
    });
  }
  const stats = computeUserStats(user);
  res.json(stats);
});
app.post("/api/user/simulate-days", (req, res) => {
  const { email, dayOffset } = req.body;
  const normalizedEmail = (email || "").trim().toLowerCase();
  if (!usersDB[normalizedEmail]) {
    return res.status(404).json({ error: "Usu\xE1rio n\xE3o encontrado." });
  }
  usersDB[normalizedEmail].simulatedDayOffset = Number(dayOffset) || 0;
  saveUsers(usersDB);
  const stats = computeUserStats(usersDB[normalizedEmail]);
  res.json({ success: true, stats });
});
app.post("/api/user/toggle-favorite", (req, res) => {
  const { email, cardId } = req.body;
  const normalizedEmail = (email || "").trim().toLowerCase();
  const user = usersDB[normalizedEmail];
  if (!user) {
    return res.status(404).json({ error: "Usu\xE1rio n\xE3o encontrado." });
  }
  if (!user.favorites) user.favorites = [];
  const idx = user.favorites.indexOf(cardId);
  if (idx >= 0) {
    user.favorites.splice(idx, 1);
  } else {
    user.favorites.push(cardId);
  }
  saveUsers(usersDB);
  res.json({ success: true, favorites: user.favorites });
});
app.post("/api/user/toggle-bingo", (req, res) => {
  const { email, index } = req.body;
  const normalizedEmail = (email || "").trim().toLowerCase();
  const user = usersDB[normalizedEmail];
  if (!user) {
    return res.status(404).json({ error: "Usu\xE1rio n\xE3o encontrado." });
  }
  if (!user.completedBingo) user.completedBingo = [];
  const idx = user.completedBingo.indexOf(index);
  if (idx >= 0) {
    user.completedBingo.splice(idx, 1);
  } else {
    user.completedBingo.push(index);
  }
  saveUsers(usersDB);
  res.json({ success: true, completedBingo: user.completedBingo });
});
app.get("/api/content/decks", (req, res) => {
  const email = req.query.email;
  const normalizedEmail = (email || "").trim().toLowerCase();
  const user = usersDB[normalizedEmail];
  let unlockedCategoryIds = ["date-night"];
  if (user) {
    const stats = computeUserStats(user);
    unlockedCategoryIds = stats.unlockedCategoryIds;
  }
  const categoriesWithStatus = CATEGORIES.map((cat) => ({
    ...cat,
    isUnlocked: unlockedCategoryIds.includes(cat.id),
    daysUntilUnlock: Math.max(0, cat.dayNumber - unlockedCategoryIds.length)
  }));
  const cards = CARDS_DATA.map((card) => {
    const isUnlocked = unlockedCategoryIds.includes(card.categoryId);
    if (!isUnlocked) {
      return {
        ...card,
        title: `Carta #${card.cardNumber} (Bloqueada)`,
        description: "Conte\xFAdo exclusivo liberado no dia correspondente de membro.",
        actionPrompt: "Aguarde a libera\xE7\xE3o do deck para visualizar esta carta.",
        tag: "Bloqueado"
      };
    }
    return card;
  });
  res.json({
    categories: categoriesWithStatus,
    cards,
    unlockedCategoryIds
  });
});
app.post("/api/roulette/spin", (req, res) => {
  const { email, categoryId } = req.body;
  const normalizedEmail = (email || "").trim().toLowerCase();
  const user = usersDB[normalizedEmail];
  let unlockedCategoryIds = ["date-night"];
  if (user) {
    const stats = computeUserStats(user);
    unlockedCategoryIds = stats.unlockedCategoryIds;
  }
  let allowedCards = [];
  if (categoryId && unlockedCategoryIds.includes(categoryId)) {
    allowedCards = CARDS_DATA.filter((c) => c.categoryId === categoryId);
  } else {
    allowedCards = CARDS_DATA.filter((c) => unlockedCategoryIds.includes(c.categoryId));
  }
  if (allowedCards.length === 0) {
    allowedCards = CARDS_DATA.filter((c) => c.categoryId === "date-night");
  }
  const randomIndex = Math.floor(Math.random() * allowedCards.length);
  const selectedCard = allowedCards[randomIndex];
  const category = CATEGORIES.find((cat) => cat.id === selectedCard.categoryId);
  res.json({
    card: selectedCard,
    category,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.post(["/api/webhook/cakto", "/api/cakto/webhook"], async (req, res) => {
  const body = req.body || {};
  console.log("Recebido Webhook Cakto:", JSON.stringify(body));
  let emailRaw = body.customer?.email || body.buyer?.email || body.client?.email || body.email;
  if (!emailRaw && Array.isArray(body.data) && body.data.length > 0) {
    const firstItem = body.data[0];
    emailRaw = firstItem?.customer?.email || firstItem?.buyer?.email || firstItem?.client?.email || firstItem?.email;
  }
  if (!emailRaw && body.data && !Array.isArray(body.data)) {
    emailRaw = body.data.customer?.email || body.data.buyer?.email || body.data.client?.email || body.data.email;
  }
  if (!emailRaw || typeof emailRaw !== "string") {
    return res.status(400).json({ error: "E-mail do comprador n\xE3o encontrado no payload do webhook." });
  }
  const normalizedEmail = emailRaw.trim().toLowerCase();
  let eventStr = String(body.event || body.event_type || body.status || "").toLowerCase();
  if (Array.isArray(body.data) && body.data.length > 0) {
    eventStr += " " + String(body.data[0]?.status || "").toLowerCase();
  } else if (body.data) {
    eventStr += " " + String(body.data.status || "").toLowerCase();
  }
  const isApproved = eventStr.includes("approved") || eventStr.includes("paid") || eventStr.includes("pago") || eventStr.includes("aprovad") || eventStr.includes("completed") || eventStr.includes("active");
  const isRefunded = eventStr.includes("refund") || eventStr.includes("reembols") || eventStr.includes("chargeback") || eventStr.includes("cancel") || eventStr.includes("devolu") || eventStr.includes("inactive");
  const newStatus = isRefunded ? "refunded" : "active";
  try {
    const { data: existingUser, error: selectError } = await supabase.from("users").select("*").eq("email", normalizedEmail).single();
    if (selectError && selectError.code !== "PGRST116") {
      console.error("Erro ao buscar usu\xE1rio no Supabase:", selectError);
      return res.status(500).json({ error: "Erro no banco de dados do Supabase." });
    }
    if (!existingUser) {
      const { error: insertError } = await supabase.from("users").insert({
        email: normalizedEmail,
        status: newStatus,
        favorites: [],
        completed_bingo: [],
        simulated_day_offset: 0
      });
      if (insertError) {
        console.error("Erro ao inserir usu\xE1rio no Supabase:", insertError);
        return res.status(500).json({ error: "Erro ao criar usu\xE1rio no Supabase." });
      }
    } else {
      const { error: updateError } = await supabase.from("users").update({ status: newStatus }).eq("email", normalizedEmail);
      if (updateError) {
        console.error("Erro ao atualizar status do usu\xE1rio no Supabase:", updateError);
        return res.status(500).json({ error: "Erro ao atualizar status no Supabase." });
      }
    }
    console.log(`[Cakto Webhook Supabase] E-mail: ${normalizedEmail} -> Status: ${newStatus}`);
    if (!usersDB[normalizedEmail]) {
      usersDB[normalizedEmail] = {
        email: normalizedEmail,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        simulatedDayOffset: 0,
        favorites: [],
        completedBingo: [],
        status: newStatus
      };
    } else {
      usersDB[normalizedEmail].status = newStatus;
    }
    saveUsers(usersDB);
    return res.json({
      success: true,
      email: normalizedEmail,
      status: newStatus,
      message: `Acesso do cliente ${normalizedEmail} atualizado para ${newStatus} no Supabase.`
    });
  } catch (err) {
    console.error("Erro inesperado no Webhook:", err);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
