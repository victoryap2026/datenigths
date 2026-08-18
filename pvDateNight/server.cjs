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
    title: "Cards de Date",
    subtitle: "Encontros e experi\xEAncias",
    description: "Ideias criativas e propostas de atividades simples para fazer a dois e sair da rotina.",
    icon: "Sparkles",
    gradient: "from-amber-500 via-rose-500 to-red-600",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    cardsCount: 30,
    previewTeaser: "Liberado no seu 1\xBA dia! 30 ideias de encontros pr\xE1ticos."
  },
  {
    id: "roleta-desejo",
    dayNumber: 2,
    title: "Cards de Desejo",
    subtitle: "Clima e intimidade",
    description: "Desafios estimulantes e propostas intensas para aproximar o casal e apimentar a rela\xE7\xE3o.",
    icon: "Flame",
    gradient: "from-red-600 via-pink-600 to-purple-700",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    cardsCount: 30,
    previewTeaser: "Libera no Dia 2! 30 propostas sensuais e provocantes."
  },
  {
    id: "cartas-seducao",
    dayNumber: 3,
    title: "Cards de Sedu\xE7\xE3o",
    subtitle: "Charme e atra\xE7\xE3o",
    description: "Din\xE2micas de aproxima\xE7\xE3o, flertes e toques f\xEDsicos para reacender a chama da sedu\xE7\xE3o.",
    icon: "HeartHandshake",
    gradient: "from-rose-600 via-red-700 to-amber-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    cardsCount: 30,
    previewTeaser: "Libera no Dia 3! 30 din\xE2micas de flerte e paix\xE3o."
  },
  {
    id: "confissoes-casal",
    dayNumber: 4,
    title: "Confiss\xF5es do Casal",
    subtitle: "Di\xE1logo e intimidade",
    description: "Perguntas profundas e reflex\xF5es sinceras para voc\xEAs se conhecerem ainda melhor.",
    icon: "MessageCircleHeart",
    gradient: "from-indigo-600 via-purple-700 to-pink-600",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    cardsCount: 30,
    previewTeaser: "Libera no Dia 4! 30 perguntas profundas para conversar a dois."
  },
  {
    id: "cartas-elogios",
    dayNumber: 5,
    title: "Cards de Elogios",
    subtitle: "Palavras de afirma\xE7\xE3o",
    description: "Frases marcantes e din\xE2micas de valoriza\xE7\xE3o para demonstrar carinho, amor e admira\xE7\xE3o.",
    icon: "Heart",
    gradient: "from-amber-400 via-rose-500 to-pink-600",
    badgeColor: "bg-amber-400/20 text-amber-200 border-amber-400/30",
    cardsCount: 30,
    previewTeaser: "Libera no Dia 5! 30 cartas de gratid\xE3o e carinho."
  },
  {
    id: "cartas-reconexao",
    dayNumber: 6,
    title: "Cards de Reconex\xE3o",
    subtitle: "Aproxima\xE7\xE3o e cumplicidade",
    description: "Sugest\xE3o Extra: Din\xE2micas e reflex\xF5es para casais vencerem a dist\xE2ncia da rotina di\xE1ria.",
    icon: "RefreshCw",
    gradient: "from-teal-500 via-emerald-600 to-cyan-600",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    cardsCount: 30,
    previewTeaser: "Libera no Dia 6! 30 din\xE2micas de reconex\xE3o e cumplicidade."
  }
];
var diceCombinations = [
  "1+1",
  "1+2",
  "1+3",
  "1+4",
  "1+5",
  "1+6",
  "2+1",
  "2+2",
  "2+3",
  "2+4",
  "2+5",
  "2+6",
  "3+1",
  "3+2",
  "3+3",
  "3+4",
  "3+5",
  "3+6",
  "4+1",
  "4+2",
  "4+3",
  "4+4",
  "4+5",
  "4+6",
  "5+1",
  "5+2",
  "5+3",
  "5+4",
  "5+5",
  "5+6"
];
var CARDS_DATA = [
  // ==========================================
  // DECK 1 — 💌 CARDS DE DATE (30 Cartas)
  // ==========================================
  ...[
    { title: "Jantar Venda", desc: "Vende um dos olhos de voc\xEAs e tente adivinhar a comida que seu parceiro colocar na sua boca.", action: "A cada acerto, troquem quem est\xE1 com os olhos vendados." },
    { title: "Piquenique na Sala", desc: "Estenda um len\xE7ol no ch\xE3o da sala, apague as luzes e coma petiscos conversando sobre momentos engra\xE7ados.", action: "Usem almofadas e velas artificiais para dar um clima." },
    { title: "Playlist do Amor", desc: "Crie uma lista com 5 m\xFAsicas que marcaram o in\xEDcio da hist\xF3ria de voc\xEAs e escutem abra\xE7ados.", action: "Fechem os olhos enquanto escutam e tentem lembrar onde estavam na primeira vez que ouviram." },
    { title: "Cine Pipoca", desc: "Escolham um filme que nenhum de voc\xEAs assistiu, preparem pipoca e assistam juntinhos.", action: "Deixem os celulares em outro c\xF4modo durante toda a exibi\xE7\xE3o." },
    { title: "Cozinheiros por um Dia", desc: "Preparem uma receita simples juntos, dividindo as tarefas de forma divertida.", action: "Um fica respons\xE1vel pelos ingredientes e o outro pela execu\xE7\xE3o." },
    { title: "Dan\xE7a Improvisada", desc: "Coloque uma m\xFAsica lenta e dance abra\xE7ado na sala por 3 minutos.", action: "Aproveite para sussurrar algo no ouvido do seu parceiro." },
    { title: "Date de R$ 15", desc: "Planejem um encontro usando apenas o que t\xEAm em casa ou gastando no m\xE1ximo R$ 15.", action: "A criatividade vale mais do que o valor gasto." },
    { title: "Spa em Casa", desc: "Preparem um escalda-p\xE9s morno ou fa\xE7am uma massagem r\xE1pida um no outro.", action: "Usem cremes ou \xF3leos corporais perfumados." },
    { title: "Recriando a Foto", desc: "Escolham uma foto antiga de voc\xEAs e tentem tirar uma nova imitando a pose.", action: "Tentem usar roupas parecidas com as da foto original." },
    { title: "Pergunta do Destino", desc: "Fa\xE7a uma pergunta curiosa que voc\xEA nunca fez antes sobre a inf\xE2ncia do parceiro.", action: "Ou\xE7a sem interromper at\xE9 ele concluir a hist\xF3ria." },
    { title: "Acampamento de Cobertores", desc: "Montem uma cabana de len\xE7\xF3is na sala com travesseiros e fiquem conversando l\xE1 dentro.", action: "Levem lanternas ou a luz do celular para iluminar o espa\xE7o." },
    { title: "Noite de Jogos", desc: "Escolham um jogo de tabuleiro ou cartas simples e joguem valendo uma massagem.", action: "O perdedor deve cumprir o combinado logo ap\xF3s a partida." },
    { title: "Massagem nos P\xE9s", desc: "Dedique 5 minutos para fazer uma massagem relaxante nos p\xE9s do seu parceiro.", action: "Use movimentos circulares suaves e firmes." },
    { title: "Banho Relaxante", desc: "Preparem um banho morno com m\xFAsica suave para relaxarem juntos.", action: "Usem sabonetes arom\xE1ticos para ambientar." },
    { title: "Ch\xE1 e Conversa", desc: "Preparem um ch\xE1 ou chocolate quente e conversem sem nenhuma tela por perto.", action: "Falem sobre as coisas simples que aconteceram na semana." },
    { title: "Carta de Gratid\xE3o", desc: "Escreva em um papel 3 coisas pelas quais \xE9 grato no seu parceiro e leia para ele.", action: "Entregue o papel dobrado ao final para ele guardar." },
    { title: "Olhar Profundo", desc: "Fiquem se olhando nos olhos em sil\xEAncio por 1 minuto inteiro.", action: "Permitam-se apenas sorrir e sentir a conex\xE3o sem falar nada." },
    { title: "Noite de Massas", desc: "Preparem um macarr\xE3o simples juntos, caprichando no molho e na apresenta\xE7\xE3o do prato.", action: "Comam \xE0 luz de velas se poss\xEDvel." },
    { title: "Caminhada Noturna", desc: "D\xEAem uma volta r\xE1pida pelo quarteir\xE3o conversando de m\xE3os dadas sob as estrelas.", action: "Deixem os celulares em casa para prestar aten\xE7\xE3o no caminho." },
    { title: "Karaok\xEA a Dois", desc: "Escolham suas m\xFAsicas favoritas e cantem juntos usando o celular como microfone.", action: "Cantem um para o outro em tom divertido." },
    { title: "Sess\xE3o de Desenhos", desc: "Tentem desenhar um ao outro em um papel sem olhar para a folha.", action: "Mostrem o resultado final ao mesmo tempo e riam do resultado." },
    { title: "Sorvete e Risadas", desc: "Dividam um pote de sorvete contando a hist\xF3ria mais engra\xE7ada que j\xE1 viveram juntos.", action: "Vale lembrar micos ou situa\xE7\xF5es inusitadas de viagens." },
    { title: "Planos de Viagem", desc: "Planejem os detalhes de uma viagem dos sonhos, mesmo que seja para o futuro.", action: "Escolham o destino, hospedagem e principais passeios." },
    { title: "Desafio do Beijo", desc: "D\xEAem um beijo de 1 minuto sem interrup\xE7\xF5es ou distra\xE7\xF5es.", action: "Mantenham os olhos fechados e sintonizem a respira\xE7\xE3o." },
    { title: "Caf\xE9 na Cama", desc: "Combine quem vai preparar o caf\xE9 da manh\xE3 de surpresa para o outro amanh\xE3.", action: "Adicione um bilhete carinhoso na bandeja." },
    { title: "Abra\xE7o de Urso", desc: "Fiquem abra\xE7ados apertados em sil\xEAncio por 2 minutos, sentindo a respira\xE7\xE3o do outro.", action: "Sinta o calor do corpo e relaxe os ombros." },
    { title: "Ca\xE7a ao Tesouro", desc: "Esconda um pequeno bilhete rom\xE2ntico pela casa e d\xEA pistas para o parceiro encontrar.", action: "Crie pistas simples baseadas em objetos de uso di\xE1rio." },
    { title: "Massagem nas Costas", desc: "Fa\xE7a uma massagem relaxante nas costas do parceiro usando hidratante ou \xF3leo.", action: "Foque nos ombros e na regi\xE3o do pesco\xE7o." },
    { title: "Noite de Queijos", desc: "Organizem uma pequena t\xE1bua com frios e frutas que tiverem na geladeira.", action: "Aproveitem para saborear conversando sobre gostos pessoais." },
    { title: "Promessa de Encontro", desc: "Agendem agora o dia e local do pr\xF3ximo encontro de voc\xEAs fora de casa.", action: "Comprometam-se a n\xE3o desmarcar por nada na agenda." }
  ].map((card, i) => ({
    id: `date-${i + 1}`,
    categoryId: "date-night",
    categoryName: "Cards de Date",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Date",
    spicyLevel: 1,
    diceCombination: diceCombinations[i]
  })),
  // ==========================================
  // DECK 2 — 🔥 CARDS DE DESEJO (30 Cartas)
  // ==========================================
  ...[
    { title: "Massagem \xE0s Cegas", desc: "Massageie seu parceiro enquanto ele permanece com os olhos vendados ou fechados.", action: "Varie a intensidade do toque nas costas e ombros." },
    { title: "Frase no Ouvido", desc: "Aproxime-se e sussurre um desejo secreto no ouvido do seu parceiro.", action: "Fa\xE7a isso em tom baixo e pausado." },
    { title: "Beijo Lent\xEDssimo", desc: "D\xEAem um beijo longo focando apenas na textura dos l\xE1bios.", action: "Mantenham as m\xE3os no rosto do parceiro." },
    { title: "Toque Guiado", desc: "Guie a m\xE3o do seu parceiro pelos locais onde voc\xEA mais gostaria de receber carinho.", action: "Mantenha os olhos fechados para focar nas sensa\xE7\xF5es." },
    { title: "Provoca\xE7\xE3o Visual", desc: "Olhem um para o outro em sil\xEAncio mantendo uma dist\xE2ncia de apenas 5 cent\xEDmetros.", action: "N\xE3o \xE9 permitido se tocar at\xE9 o tempo acabar." },
    { title: "Sussurros do Desejo", desc: "Compartilhe uma fantasia simples que voc\xEA gostaria de realizar com ele(a).", action: "Seja sincero e direto." },
    { title: "Banho Perfumado", desc: "Lavem os cabelos ou as costas um do outro no banho com calma.", action: "Aproveitem a \xE1gua quente para relaxar." },
    { title: "Desafio do Toque Sutil", desc: "Use apenas as pontas dos dedos para desenhar formas imagin\xE1rias na pele do outro.", action: "Deixe o parceiro adivinhar o que voc\xEA desenhou." },
    { title: "Massagem com Creme", desc: "Fa\xE7am uma massagem relaxante usando um hidratante perfumado ou \xF3leo arom\xE1tico.", action: "Foque nos bra\xE7os e panturrilhas." },
    { title: "M\xFAsica Sensual", desc: "Coloque uma playlist de clima intimista e deitem juntos apenas ouvindo.", action: "Fiquem abra\xE7ados sob o cobertor." },
    { title: "Beijo Arrepiante", desc: "D\xEA leves beijos e sopros no pesco\xE7o e nuca do seu parceiro.", action: "Fa\xE7a isso de surpresa por tr\xE1s." },
    { title: "Car\xEDcias de Olhos Fechados", desc: "Fechem os olhos e explorem o rosto um do outro apenas com as m\xE3os.", action: "Preste aten\xE7\xE3o em cada contorno e express\xE3o." },
    { title: "Foco no Abra\xE7o", desc: "Fiquem abra\xE7ados sem roupas ou com roupas leves por 3 minutos seguidos.", action: "Sintam a temperatura corporal um do outro." },
    { title: "Segredo Revelado", desc: "Confesse qual parte do corpo do parceiro mais atrai a sua aten\xE7\xE3o visualmente.", action: "Explique o porqu\xEA de forma rom\xE2ntica." },
    { title: "Beijo na Palma", desc: "Segure a m\xE3o do parceiro e d\xEA um beijo demorado na palma de sua m\xE3o.", action: "Mantenha o contato visual enquanto faz isso." },
    { title: "Massagem Capilar", desc: "Fa\xE7a um cafun\xE9 ou massagem capilar caprichada no couro cabeludo do outro.", action: "Use a ponta dos dedos de forma circular." },
    { title: "Toque Aquecido", desc: "Esfregue suas m\xE3os para aquec\xEA-las e depois posicione-as sobre as bochechas ou pesco\xE7o do outro.", action: "Mantenha a posi\xE7\xE3o por 30 segundos." },
    { title: "Provoca\xE7\xE3o na Cintura", desc: "Puxe o parceiro pela cintura para um abra\xE7o repentino e firme.", action: "Termine com um beijo r\xE1pido no canto da boca." },
    { title: "Voz Baixa", desc: "Durante os pr\xF3ximos 5 minutos, falem apenas usando tons de voz sussurrados.", action: "Mesmo para assuntos comuns." },
    { title: "Sensa\xE7\xE3o T\xE9rmica", desc: "Passe uma pedrinha de gelo ou um copo com bebida quente perto da pele do outro.", action: "Observe a rea\xE7\xE3o f\xEDsica." },
    { title: "Ritmo da Respira\xE7\xE3o", desc: "Encostem os peitos e tentem sincronizar a respira\xE7\xE3o por 1 minuto.", action: "Fechem os olhos para concentrar." },
    { title: "Massagem nas M\xE3os", desc: "Massageie a m\xE3o do parceiro dedo por dedo usando um creme hidratante.", action: "Alivie a tens\xE3o dos dedos." },
    { title: "Elogio \xCDntimo", desc: "Diga algo que voc\xEA acha extremamente atraente no comportamento \xEDntimo do outro.", action: "Seja sincero e direto." },
    { title: "Beijo com Pausa", desc: "D\xEA tr\xEAs beijos lentos no parceiro, pausando 5 segundos entre cada um.", action: "Mantenha a proximidade f\xEDsica." },
    { title: "Provoca\xE7\xE3o Ocular", desc: "Fiquem se encarando sem piscar pelo m\xE1ximo de tempo que conseguirem.", action: "Quem piscar primeiro deve dar um beijo no outro." },
    { title: "Toque de Cabelo", desc: "Afaste delicadamente os fios de cabelo do rosto ou nuca do parceiro.", action: "Aproveite para fazer um carinho leve no local exposto." },
    { title: "Promessa de Carinho", desc: "Prometa e agende uma massagem completa de 20 minutos para o parceiro neste final de semana.", action: "Cumpra sem falta." },
    { title: "Cheiro Marcante", desc: "Aproxime-se do pesco\xE7o do parceiro e sinta o perfume natural de sua pele.", action: "Diga o que sente." },
    { title: "Toque na Perna", desc: "Descanse sua m\xE3o sobre a coxa do parceiro enquanto assistem ou conversam.", action: "Fa\xE7a carinho de leve com o polegar." },
    { title: "Beijo na Testa", desc: "Termine o momento com um beijo terno e demorado na testa do outro.", action: "Demonstre cuidado e prote\xE7\xE3o." }
  ].map((card, i) => ({
    id: `desejo-${i + 1}`,
    categoryId: "roleta-desejo",
    categoryName: "Cards de Desejo",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Desejo",
    spicyLevel: 2,
    diceCombination: diceCombinations[i]
  })),
  // ==========================================
  // DECK 3 — 💗 CARDS DE SEDUÇÃO (30 Cartas)
  // ==========================================
  ...[
    { title: "Flertes no Olhar", desc: "Olhe para o seu parceiro como se estivesse tentando conquist\xE1-lo pela primeira vez.", action: "Sustente o olhar com um sorriso misterioso." },
    { title: "Sussurrar com Toque", desc: "Coloque a m\xE3o na nuca do parceiro e sussurre uma palavra que descreva atra\xE7\xE3o.", action: "Fa\xE7a movimentos leves com os dedos no cabelo dele." },
    { title: "Passo Atr\xE1s", desc: "D\xEA um passo para tr\xE1s e pe\xE7a para o parceiro se aproximar lentamente de voc\xEA.", action: "Receba-o com um abra\xE7o quente." },
    { title: "Beijo Roubado", desc: "Aproveite um momento de distra\xE7\xE3o do parceiro para dar um beijo r\xE1pido.", action: "Sorria logo em seguida e continue o que estava fazendo." },
    { title: "Flerte por Mensagem", desc: "Envie uma mensagem curta e picante para o celular do parceiro mesmo estando na mesma sala.", action: "Observe a rea\xE7\xE3o dele ao ler." },
    { title: "Massagem no Ombro", desc: "Aproxime-se por tr\xE1s e comece a massagear os ombros dele de surpresa.", action: "Sussurre algo relaxante no ouvido." },
    { title: "Toque de Dedos", desc: "Entrelace seus dedos nos dele de forma lenta e firme enquanto conversam.", action: "N\xE3o solte at\xE9 terminar o assunto." },
    { title: "Beijo de Cinema", desc: "Segure o rosto do parceiro com as duas m\xE3os e d\xEA um beijo apaixonado.", action: "Incline levemente a cabe\xE7a para dar mais intensidade." },
    { title: "Elogio Atraente", desc: "Diga qual roupa ou estilo visual do seu parceiro voc\xEA acha mais atraente.", action: "Explique o motivo do seu gosto." },
    { title: "Sedu\xE7\xE3o na Cozinha", desc: "Abrace o parceiro por tr\xE1s enquanto ele estiver de p\xE9 fazendo alguma tarefa.", action: "D\xEA um beijo leve no ombro dele." },
    { title: "Jogo do Toque Proibido", desc: "Toque v\xE1rias partes do corpo do parceiro, exceto as m\xE3os e o rosto.", action: "Use toques leves e demorados." },
    { title: "Car\xEDcia no Rosto", desc: "Passe as costas dos dedos suavemente pela bochecha do parceiro.", action: "Mantenha o olhar fixo nos olhos dele." },
    { title: "Sussurro Misterioso", desc: "Diga algo que voc\xEA admira fisicamente no parceiro de forma muito baixa.", action: "Chegue bem perto da orelha." },
    { title: "Flerte Nost\xE1lgico", desc: "Relembrem o primeiro flerte ou a primeira troca de olhares de voc\xEAs.", action: "Discutam quem teve mais iniciativa." },
    { title: "Desafio do Sorriso", desc: "Tente fazer o parceiro sorrir olhando fixamente para ele em sil\xEAncio.", action: "N\xE3o fale nada, use apenas express\xF5es faciais." },
    { title: "Toque de Pernas", desc: "Sentem-se pr\xF3ximos o suficiente para que suas pernas fiquem se encostando.", action: "Mantenham o contato f\xEDsico durante a conversa." },
    { title: "Beijo na Nuca", desc: "Afaste o cabelo do parceiro e d\xEA um beijo suave e demorado na nuca dele.", action: "Aproveite para acariciar as costas." },
    { title: "Cumplicidade no Sil\xEAncio", desc: "Fiquem de m\xE3os dadas em sil\xEAncio absoluto durante 1 minuto.", action: "Apenas sintam a presen\xE7a um do outro." },
    { title: "Massagem com Aroma", desc: "Use um perfume ou col\xF4nia marcante nas m\xE3os antes de fazer carinho no outro.", action: "Deixe o aroma envolver o ambiente." },
    { title: "Flerte Surpresa", desc: "Fa\xE7a um elogio inesperado sobre o charme natural do parceiro no meio da conversa.", action: "Continue falando normalmente logo em seguida." },
    { title: "Abra\xE7o Protetor", desc: "Envolva o parceiro em um abra\xE7o forte, cobrindo-o com seus bra\xE7os.", action: "Fiquem assim por alguns momentos." },
    { title: "Toque no Pulso", desc: "Segure delicadamente o pulso do parceiro enquanto fala algo importante.", action: "Transmita seguran\xE7a e afeto." },
    { title: "Beijo Suave no Nariz", desc: "D\xEA um beijo r\xE1pido e carinhoso no topo do nariz do parceiro.", action: "Sorria logo em seguida." },
    { title: "Car\xEDcia no Cabelo", desc: "Passe os dedos pelos cabelos do parceiro, desembara\xE7ando-os com carinho.", action: "Foque na raiz do cabelo." },
    { title: "Olhar de Cumplicidade", desc: "Troquem um olhar demorado que expresse carinho e desejo m\xFAtuo.", action: "Tentem se comunicar apenas com os olhos." },
    { title: "Toque na M\xE3o Fechada", desc: "Abra suavemente os dedos da m\xE3o fechada do parceiro e acaricie a palma.", action: "Use movimentos circulares lentos." },
    { title: "Abra\xE7o de Lado", desc: "Sentem-se de lado e abracem-se de forma aconchegante no sof\xE1.", action: "Descanse a cabe\xE7a no ombro do outro." },
    { title: "Beijo Estalado", desc: "D\xEA um beijo estalado e divertido na bochecha do parceiro.", action: "Fa\xE7a barulho para descontrair." },
    { title: "Toque de Ombros", desc: "Encostem os ombros enquanto andam ou est\xE3o sentados lado a lado.", action: "Mantenham a postura relaxada." },
    { title: "Sopro de Carinho", desc: "Sopre levemente o rosto ou pesco\xE7o do parceiro ap\xF3s um beijo carinhoso.", action: "Sinta a rea\xE7\xE3o dele." }
  ].map((card, i) => ({
    id: `seducao-${i + 1}`,
    categoryId: "cartas-seducao",
    categoryName: "Cards de Sedu\xE7\xE3o",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Sedu\xE7\xE3o",
    spicyLevel: 2,
    diceCombination: diceCombinations[i]
  })),
  // ==========================================
  // DECK 4 — 💬 CONFISSÕES DO CASAL (30 Cartas)
  // ==========================================
  ...[
    { title: "Primeira Impress\xE3o", desc: "Qual foi a primeira coisa que voc\xEA pensou ao me ver pela primeira vez?", action: "Seja sincero sobre a apar\xEAncia ou comportamento." },
    { title: "Momento Especial", desc: "Qual momento da nossa hist\xF3ria voc\xEA gostaria de reviver exatamente como aconteceu?", action: "Descreva os detalhes que mais te marcaram." },
    { title: "Maior Orgulho", desc: "O que eu fa\xE7o que te d\xE1 mais orgulho de estar ao meu lado?", action: "Fale de uma conquista recente ou caracter\xEDstica pessoal." },
    { title: "Medo Compartilhado", desc: "Existe algum medo bobo que voc\xEA tem e nunca me contou por vergonha?", action: "Compartilhe para aliviar a mente." },
    { title: "Sonho a Dois", desc: "Se pud\xE9ssemos realizar um grande sonho juntos este ano, qual voc\xEA escolheria?", action: "Pensem em algo realista ou grandioso." },
    { title: "Mudan\xE7a Positiva", desc: "De que forma voc\xEA acha que nosso relacionamento melhorou sua vida pessoal?", action: "Cite pelo menos duas mudan\xE7as claras." },
    { title: "Momento Dif\xEDcil", desc: "Como voc\xEA acha que lidamos com os momentos dif\xEDceis no relacionamento?", action: "Proponham uma forma de melhorar a comunica\xE7\xE3o." },
    { title: "Gesto Inesquec\xEDvel", desc: "Qual pequeno gesto simples que fiz no passado fez voc\xEA se sentir muito amado(a)?", action: "Lembre de algo que n\xE3o custou dinheiro." },
    { title: "H\xE1bito Engra\xE7ado", desc: "Qual h\xE1bito meu que voc\xEA acha engra\xE7ado ou fofo, mesmo que seja estranho?", action: "Riam juntos dos pequenos detalhes." },
    { title: "Aprendizado M\xFAtuo", desc: "O que voc\xEA aprendeu comigo que leva para a sua vida di\xE1ria?", action: "Fale sobre atitudes ou pensamentos." },
    { title: "Segredo de Inf\xE2ncia", desc: "Conte uma hist\xF3ria boba ou travessura da sua inf\xE2ncia que quase ningu\xE9m sabe.", action: "Descreva a sua idade e onde estava." },
    { title: "Futuro Pr\xF3ximo", desc: "Onde voc\xEA se imagina morando ou o que imagina fazendo conosco daqui a 3 anos?", action: "Foquem na estabilidade e cumplicidade." },
    { title: "Defini\xE7\xE3o de Amor", desc: "Se voc\xEA tivesse que explicar o nosso amor para uma crian\xE7a, o que diria?", action: "Use palavras simples e sinceras." },
    { title: "Supera\xE7\xE3o do Casal", desc: "Qual obst\xE1culo do nosso relacionamento voc\xEA tem mais orgulho de termos superado?", action: "Lembrem de como se apoiaram m\xFAtuamente." },
    { title: "Admira\xE7\xE3o Secreta", desc: "Qual talento ou habilidade minha voc\xEA admira em sil\xEAncio?", action: "Diga por que acha isso especial." },
    { title: "Primeiro Beijo", desc: "O que passou pela sua cabe\xE7a segundos antes do nosso primeiro beijo?", action: "Lembrem do cen\xE1rio e da expectativa." },
    { title: "Maior Aprendizado", desc: "Qual foi a maior li\xE7\xE3o que voc\xEA aprendeu sobre amor desde que come\xE7amos?", action: "Reflita sobre paci\xEAncia ou parceria." },
    { title: "Qualidade Oculta", desc: "Que qualidade minha voc\xEA demorou para perceber, mas hoje valoriza muito?", action: "Explique como percebeu essa caracter\xEDstica." },
    { title: "Dia Perfeito", desc: "Como seria a rotina de um dia perfeito ideal para n\xF3s dois juntos?", action: "Do acordar ao dormir, descreva os detalhes." },
    { title: "Sensa\xE7\xE3o de Casa", desc: 'O que eu fa\xE7o ou digo que faz voc\xEA se sentir "em casa" e seguro?', action: "Descreva o sentimento de acolhimento." },
    { title: "Inseguran\xE7a Boba", desc: "Existe alguma inseguran\xE7a sobre o relacionamento que voc\xEA gostaria de esclarecer?", action: "Conversem abertamente com carinho." },
    { title: "Nosso Abra\xE7o", desc: "Como voc\xEA descreveria a sensa\xE7\xE3o f\xEDsica do meu abra\xE7o para algu\xE9m?", action: "Use met\xE1foras de conforto e calor." },
    { title: "Surpresa Favorita", desc: "Qual foi a melhor surpresa que voc\xEA j\xE1 recebeu no nosso relacionamento?", action: "Lembre do sentimento daquele dia." },
    { title: "M\xFAsica Tema", desc: "Qual m\xFAsica voc\xEA gostaria que tocasse sempre que pensasse em n\xF3s dois?", action: "Escolham uma que defina a vibe de voc\xEAs." },
    { title: "Expectativa Superada", desc: "O que no nosso relacionamento acabou sendo muito melhor do que voc\xEA imaginava?", action: "Seja sincero sobre suas expectativas iniciais." },
    { title: "Coisa Simples", desc: "Qual momento simples do cotidiano ao meu lado voc\xEA mais valoriza?", action: "Como assistir TV, cozinhar ou dormir juntos." },
    { title: "Apoio Emocional", desc: "Lembre de uma vez em que se sentiu muito apoiado por mim em uma decis\xE3o.", action: "Agrade\xE7a pelo apoio prestado." },
    { title: "Sonho Secreto", desc: "Compartilhe um desejo ou sonho pessoal que voc\xEA tem medo de n\xE3o conseguir realizar.", action: "Ou\xE7am com empatia e deem apoio." },
    { title: "Melhor Viagem", desc: "Qual foi a melhor viagem ou passeio r\xE1pido que j\xE1 fizemos juntos?", action: "Relembrem as aventuras e risadas do trajeto." },
    { title: "Promessa de Futuro", desc: "Fa\xE7a uma pequena promessa sincera para o futuro do nosso relacionamento hoje.", action: 'Pode ser algo simples como "ouvir mais" ou "fazer mais surpresas".' }
  ].map((card, i) => ({
    id: `confissoes-${i + 1}`,
    categoryId: "confissoes-casal",
    categoryName: "Confiss\xF5es do Casal",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Di\xE1logo",
    spicyLevel: 1,
    diceCombination: diceCombinations[i]
  })),
  // ==========================================
  // DECK 5 — 💌 CARDS DE ELOGIOS (30 Cartas)
  // ==========================================
  ...[
    { title: "Te Acho Lindo(a)", desc: 'Olhe nos olhos do seu parceiro e diga: "Eu te acho lindo(a), especialmente quando...".', action: "Complete a frase com total sinceridade." },
    { title: "Sua Intelig\xEAncia", desc: "Elogie a forma de pensar ou a intelig\xEAncia do seu parceiro em alguma \xE1rea espec\xEDfica.", action: "Mostre admira\xE7\xE3o genu\xEDna pelo conhecimento dele." },
    { title: "Sorriso Contagiante", desc: "Diga ao parceiro como o sorriso dele impacta o seu dia a dia.", action: "Aproveite para faz\xEA-lo sorrir agora." },
    { title: "Seu Cuidado", desc: "Agrade\xE7a e elogie o cuidado que o parceiro demonstra ter com voc\xEA nas pequenas coisas.", action: "Cite um exemplo pr\xE1tico recente." },
    { title: "Parceria Fiel", desc: "Elogie a lealdade e a parceria constante do outro na sua vida.", action: "Aperte a m\xE3o dele como sinal de uni\xE3o." },
    { title: "Dono(a) do Abra\xE7o", desc: 'Diga ao parceiro: "Voc\xEA tem o melhor abra\xE7o do mundo porque...".', action: "Complete a frase e demonstre o carinho." },
    { title: "Sua Persist\xEAncia", desc: "Elogie a for\xE7a de vontade e a persist\xEAncia do parceiro diante dos desafios dele.", action: "Mostre que voc\xEA reconhece o esfor\xE7o dele." },
    { title: "Voz Confortante", desc: "Diga como a voz ou as palavras do parceiro ajudam a te acalmar nos dias dif\xEDceis.", action: "Chegue perto e fa\xE7a um carinho no ombro." },
    { title: "Seu Estilo", desc: "Elogie o bom gosto ou o estilo pessoal do seu parceiro hoje.", action: "Foque nos cabelos, roupas ou perfume." },
    { title: "Bom Cora\xE7\xE3o", desc: "Destaque e elogie a bondade ou a generosidade do parceiro com as outras pessoas.", action: "Mostre que se orgulha do car\xE1ter dele." },
    { title: "Mestre da Cozinha", desc: "Elogie a comida ou o cuidado dele ao preparar ou escolher refei\xE7\xF5es para voc\xEAs.", action: "Lembre do prato mais gostoso que ele j\xE1 fez." },
    { title: "Humor \xDAnico", desc: "Diga como o senso de humor do parceiro torna a sua vida mais leve e divertida.", action: "Lembre de uma piada interna de voc\xEAs." },
    { title: "Trabalho Duro", desc: "Reconhe\xE7a e elogie a dedica\xE7\xE3o profissional do parceiro no trabalho ou estudos.", action: "Transmita apoio e orgulho." },
    { title: "Calmaria no Caos", desc: "Diga como a presen\xE7a do parceiro te traz paz em momentos de estresse.", action: "Segure a m\xE3o dele enquanto fala." },
    { title: "Parceiro(a) de Risadas", desc: "Elogie a facilidade que voc\xEAs t\xEAm de se divertirem juntos com coisas simples.", action: "Sorriam e lembrem de um momento engra\xE7ado." },
    { title: "Sua Determina\xE7\xE3o", desc: "Diga que admira a determina\xE7\xE3o do parceiro em alcan\xE7ar os objetivos dele.", action: "Mostre que voc\xEA acredita no sucesso dele." },
    { title: "Beleza Natural", desc: "Elogie a apar\xEAncia do parceiro quando ele est\xE1 descontra\xEDdo e sem produ\xE7\xE3o.", action: "Ao acordar ou em casa de pijama." },
    { title: "Olhar Expressivo", desc: "Diga o que voc\xEA l\xEA nos olhos do parceiro que te traz felicidade.", action: "Mantenha o contato visual por 10 segundos." },
    { title: "Paci\xEAncia Admir\xE1vel", desc: "Elogie a paci\xEAncia e a compreens\xE3o que o parceiro demonstra no cotidiano.", action: "Reconhe\xE7a esse esfor\xE7o carinhoso." },
    { title: "Cheiro Inconfund\xEDvel", desc: "Diga que o perfume ou o cheiro da pele do parceiro \xE9 o seu favorito.", action: "Abrace-o para sentir o aroma." },
    { title: "Conversa Agrad\xE1vel", desc: "Elogie a facilidade que t\xEAm de conversar sobre qualquer assunto sem julgamentos.", action: "Mostre gratid\xE3o por essa abertura." },
    { title: "Seu Apoio", desc: "Agrade\xE7a pelo apoio emocional que ele te deu em um momento de des\xE2nimo.", action: "Seja espec\xEDfico sobre o acontecimento." },
    { title: "Presen\xE7a Marcante", desc: "Diga como a aus\xEAncia dele faz falta na sua rotina di\xE1ria.", action: "Valorize o tempo que passam juntos." },
    { title: "Pequenos Detalhes", desc: "Elogie um pequeno detalhe f\xEDsico que voc\xEA adora (ex: m\xE3os, pintas, cabelos).", action: "Toque levemente no local elogiado." },
    { title: "Sua Criatividade", desc: "Elogie a imagina\xE7\xE3o ou a criatividade do parceiro para resolver problemas.", action: "Cite uma solu\xE7\xE3o recente que ele encontrou." },
    { title: "Jeito de Falar", desc: "Diga que adora o tom de voz calmo ou a forma carinhosa como ele fala com voc\xEA.", action: "Aproveite para responder com o mesmo carinho." },
    { title: "Energia Positiva", desc: "Elogie a energia boa e contagiante que o parceiro traz para a casa.", action: "D\xEA um beijo na bochecha dele." },
    { title: "Cumplicidade Rara", desc: "Diga que a conex\xE3o de voc\xEAs \xE9 \xFAnica e rara no mundo hoje.", action: "Reforce o compromisso de cuidarem um do outro." },
    { title: "Seu Abra\xE7o Forte", desc: "Elogie a sensa\xE7\xE3o de seguran\xE7a que o abra\xE7o forte dele te proporciona.", action: "Pe\xE7a esse abra\xE7o agora mesmo." },
    { title: "O Melhor Elogio", desc: "Diga qual \xE9 a maior virtude moral que voc\xEA v\xEA no seu parceiro hoje.", action: "Fale com o cora\xE7\xE3o e termine com um abra\xE7o." }
  ].map((card, i) => ({
    id: `elogio-${i + 1}`,
    categoryId: "cartas-elogios",
    categoryName: "Cards de Elogios",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Elogio",
    spicyLevel: 1,
    diceCombination: diceCombinations[i]
  })),
  // ==========================================
  // DECK 6 — 💚 CARDS DE RECONEXÃO (30 Cartas)
  // ==========================================
  ...[
    { title: "Reconectar o Olhar", desc: "Sentem-se de frente um para o outro e segurem as m\xE3os em sil\xEAncio por 1 minuto.", action: "Deixem as preocupa\xE7\xF5es do dia l\xE1 fora." },
    { title: "Desacelerar Juntos", desc: "Respirem fundo juntos tr\xEAs vezes seguidas para alinhar o ritmo de voc\xEAs.", action: "Mantenham os corpos encostados." },
    { title: "O que Nos Uniu?", desc: "Relembrem o exato momento em que decidiram que queriam namorar ou casar.", action: "O que pesou na decis\xE3o de cada um?" },
    { title: "Nosso Ref\xFAgio", desc: "Diga o que voc\xEA mais valoriza no nosso relacionamento nos dias dif\xEDceis.", action: "Como nos apoiamos emocionalmente?" },
    { title: "Tempo de Qualidade", desc: "Definam uma noite na semana que ser\xE1 sagrada para o casal, sem compromissos externos.", action: "Escrevam na agenda de voc\xEAs agora." },
    { title: "Ouvir de Verdade", desc: 'Pergunte: "Como voc\xEA est\xE1 se sentindo em rela\xE7\xE3o a n\xF3s ultimamente?".', action: "Apenas ou\xE7a, sem tentar se defender ou justificar." },
    { title: "Carinho nas M\xE3os", desc: "Massageie a m\xE3o do parceiro suavemente enquanto planejam a pr\xF3xima semana.", action: "Use movimentos calmos e cont\xEDnuos." },
    { title: "Afirma\xE7\xE3o Di\xE1ria", desc: "Digam um ao outro uma frase de apoio para as tarefas de amanh\xE3.", action: "Mostrem que s\xE3o um time unido." },
    { title: "Espa\xE7o Confort\xE1vel", desc: "Deitem no sof\xE1 com a cabe\xE7a no colo do parceiro recebendo cafun\xE9.", action: "Joguem conversa fora sem rumo definido." },
    { title: "Lembran\xE7a do Riso", desc: "Lembrem de um dia em que riram tanto juntos que chegaram a chorar.", action: "Recontem os detalhes dessa situa\xE7\xE3o." },
    { title: "Sonho Simples", desc: "Qual pequena atividade simples voc\xEA gostaria de fazer comigo no pr\xF3ximo s\xE1bado?", action: "Como uma caminhada ou tomar um sorvete." },
    { title: "Toque de Apoio", desc: "Coloque a m\xE3o sobre o peito do parceiro e sinta a respira\xE7\xE3o dele por 30 segundos.", action: "Transmita paz e presen\xE7a." },
    { title: "Agradecimento Justo", desc: "Agrade\xE7a ao parceiro por algo simples que ele fez hoje e passou despercebido.", action: "Como arrumar a cama ou preparar o caf\xE9." },
    { title: "Nosso Primeiro Ano", desc: "O que mudou em n\xF3s desde o primeiro ano de relacionamento que voc\xEA mais gosta?", action: "Foquem no amadurecimento m\xFAtuo." },
    { title: "Superar a Rotina", desc: "O que podemos fazer para que a rotina di\xE1ria n\xE3o desgaste o nosso carinho?", action: "Decidam uma pequena a\xE7\xE3o di\xE1ria preventiva." },
    { title: "Abra\xE7o Protetor", desc: "Fiquem abra\xE7ados em sil\xEAncio absoluto no escuro por 2 minutos.", action: "Foquem na sensa\xE7\xE3o f\xEDsica de estarem protegidos juntos." },
    { title: "Gestos de Amor", desc: "Qual o principal gesto que eu fa\xE7o que te faz sentir amado(a) no dia a dia?", action: "Preste aten\xE7\xE3o para repetir esse gesto mais vezes." },
    { title: "Perd\xE3o e Leveza", desc: "Existe alguma pequena chatea\xE7\xE3o recente que podemos perdoar e deixar para tr\xE1s hoje?", action: "Zere as pend\xEAncias emocionais com um abra\xE7o." },
    { title: "Passeio Simples", desc: "Planejem dar uma volta r\xE1pida de m\xE3os dadas sem destino no final de semana.", action: "Deixem as telas em casa." },
    { title: "Palavra de Carinho", desc: "Escolha uma palavra bonita para definir a parceria de voc\xEAs hoje.", action: "Explique por que escolheu essa palavra." },
    { title: "Olhar de Gratid\xE3o", desc: "Olhe fixamente para o parceiro com gratid\xE3o profunda por ele existir na sua vida.", action: 'Diga "obrigado por estar aqui".' },
    { title: "Apoio na Mudan\xE7a", desc: "Como posso te apoiar melhor em alguma \xE1rea que voc\xEA queira melhorar em si mesmo(a)?", action: "Mostre que est\xE1 do lado dele." },
    { title: "Nossa Maior For\xE7a", desc: "O que voc\xEAs consideram a maior for\xE7a do relacionamento de voc\xEAs?", action: "Foquem nas virtudes de voc\xEAs como casal." },
    { title: "Quebra de Rotina", desc: "Proponha uma atividade completamente nova que voc\xEAs nunca tentaram fazer juntos.", action: "Agendem para as pr\xF3ximas semanas." },
    { title: "Sentimento de Paz", desc: "Qual lugar ou momento ao meu lado te traz mais paz interior?", action: "Explique o motivo desse sentimento." },
    { title: "Massagem nos Ombros", desc: "Fa\xE7a uma massagem firme nos ombros do parceiro para tirar o estresse do dia.", action: "Depois troquem os pap\xE9is." },
    { title: "Promessa de Cuidado", desc: "Fa\xE7am um pacto de cuidar mais da sa\xFAde e bem-estar de voc\xEAs mutuamente.", action: "Combine um h\xE1bito saud\xE1vel a dois." },
    { title: "O que Aprendemos", desc: "Qual foi o aprendizado mais valioso que tivemos com as crises passadas?", action: "Valorizem a resili\xEAncia do casal." },
    { title: "Cumplicidade Di\xE1ria", desc: "Como podemos demonstrar mais cumplicidade na frente das outras pessoas?", action: "Foquem na uni\xE3o e respeito p\xFAblico." },
    { title: "Olhar no Espelho", desc: "Fiquem de p\xE9 em frente ao espelho abra\xE7ados, olhando para o reflexo de voc\xEAs.", action: 'Sorriam e digam: "N\xF3s somos um belo casal".' }
  ].map((card, i) => ({
    id: `reconexao-${i + 1}`,
    categoryId: "cartas-reconexao",
    categoryName: "Cards de Reconex\xE3o",
    cardNumber: i + 1,
    title: card.title,
    description: card.desc,
    actionPrompt: card.action,
    tag: "Reconex\xE3o",
    spicyLevel: 1,
    diceCombination: diceCombinations[i]
  }))
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
      daysElapsed: CATEGORIES.length,
      unlockedCategoriesCount: CATEGORIES.length,
      unlockedCategoryIds: allCategoryIds,
      nextUnlockDays: 0
    };
  }
  const now = (/* @__PURE__ */ new Date()).getTime();
  let createdTime = now;
  if (user.createdAt) {
    const parsed = new Date(user.createdAt).getTime();
    if (!isNaN(parsed) && parsed > 0) {
      createdTime = parsed;
    }
  }
  const diffTime = Math.max(0, now - createdTime);
  const realDaysElapsed = Math.floor(diffTime / (1e3 * 60 * 60 * 24)) + 1;
  const effectiveDays = Math.max(1, Math.min(CATEGORIES.length, realDaysElapsed + (user.simulatedDayOffset || 0)));
  const unlockedCategoriesCount = effectiveDays;
  const unlockedCategoryIds = CATEGORIES.filter((cat) => cat.dayNumber <= unlockedCategoriesCount).map((cat) => cat.id);
  const nextUnlockDays = unlockedCategoriesCount >= CATEGORIES.length ? 0 : 1;
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
        simulated_day_offset: 0,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
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
