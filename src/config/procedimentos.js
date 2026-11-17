/* Categorias de procedimentos exibidas na seção "Procedimentos".
   Para incluir ou remover um item, basta editar as listas abaixo —
   a contagem exibida ao lado de cada categoria é calculada sozinha. */

export const categorias = [
  {
    id: "facial",
    nome: "Estética Facial",
    chaveWhatsApp: "facial",
    cta: "Agendar avaliação facial",
    imagem:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
    alt: "Procedimento de estética facial em andamento",
    texto:
      "Cuidado de pele conduzido por etapas, do preparo à finalização. Os protocolos faciais são definidos após avaliação, respeitando o tipo de pele, a rotina de cada pessoa e o tempo de recuperação de cada técnica.",
    itens: [
      "Limpeza de pele",
      "Microagulhamento",
      "Peeling químico e de algas",
      "Jato de plasma",
      "BB Glow",
      "Clareamento de áreas",
    ],
  },
  {
    id: "corporal",
    nome: "Estética Corporal",
    chaveWhatsApp: "corporal",
    cta: "Agendar avaliação corporal",
    imagem:
      "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?auto=format&fit=crop&w=900&q=80",
    alt: "Atendimento de estética corporal",
    texto:
      "Trabalho corporal com recursos combinados e acompanhamento ao longo das sessões. Cada plano é montado de forma individual, com orientação sobre os cuidados entre um atendimento e outro.",
    itens: [
      "Tratamento para estrias",
      "Tratamento para celulite",
      "Gordura localizada",
      "Flacidez",
      "Aplicação de enzimas",
      "BCAA",
      "Hidrolipoclasia não aspirativa",
      "Lipo de papada",
    ],
  },
  {
    id: "massoterapia",
    nome: "Massoterapia",
    chaveWhatsApp: "massoterapia",
    cta: "Agendar uma massagem",
    imagem:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80",
    alt: "Sessão de massagem corporal",
    texto:
      "Técnicas manuais escolhidas conforme o objetivo da sessão — relaxar, aliviar tensões, apoiar a recuperação física ou simplesmente reservar um tempo para si. Ritmo, pressão e duração são ajustados a você.",
    itens: [
      "Drenagem linfática",
      "Massagem relaxante",
      "Massagem desportiva",
      "Massagem terapêutica",
      "Massagem com pedras quentes",
      "Massagem ayurvédica",
    ],
  },
];

/* Cursos VIP */
export const cursos = [
  { nome: "Massoterapia", desc: "Técnicas manuais, condução da sessão e leitura do corpo." },
  { nome: "Limpeza de pele", desc: "Protocolo completo, do preparo à finalização." },
  { nome: "Microagulhamento", desc: "Indicação, execução e cuidados pós-procedimento." },
  { nome: "Jato de plasma", desc: "Manejo do equipamento e condução do atendimento." },
];

/* Diferenciais da experiência */
export const diferenciais = [
  {
    titulo: "Atendimento personalizado",
    texto: "Cada agendamento é individual. O horário é seu, sem sobreposição e sem pressa.",
  },
  {
    titulo: "Avaliação antes do protocolo",
    texto: "A conversa inicial orienta a escolha das técnicas e o que esperar de cada etapa.",
  },
  {
    titulo: "Técnicas especializadas",
    texto: "Recursos faciais, corporais e manuais aplicados conforme a indicação de cada caso.",
  },
  {
    titulo: "Ambiente acolhedor",
    texto: "Espaço pensado para o silêncio, a privacidade e o conforto durante toda a sessão.",
  },
  {
    titulo: "Acompanhamento contínuo",
    texto: "Orientações de cuidado entre as sessões e retorno sobre a evolução do protocolo.",
  },
  {
    titulo: "Capacitação profissional",
    texto: "Formação de novos profissionais em turmas VIP, com prática orientada.",
  },
];

/* Galeria — troque pelas fotos reais da clínica quando disponíveis.
   Para usar arquivos locais: coloque-os em src/assets/ e importe aqui. */
export const galeria = [
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=80", alt: "Ambiente de atendimento com iluminação suave", legenda: "Ambiente" },
  { src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=80", alt: "Procedimento facial em andamento", legenda: "Protocolo facial" },
  { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1100&q=80", alt: "Massagem corporal com óleos", legenda: "Massoterapia" },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1100&q=80", alt: "Detalhe de pedras quentes preparadas", legenda: "Pedras quentes" },
  { src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1100&q=80", alt: "Produtos e cosméticos organizados", legenda: "Cosmecêuticos" },
  { src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1100&q=80", alt: "Toalhas e flores sobre a maca", legenda: "Preparação" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=80", alt: "Cliente em momento de relaxamento", legenda: "Bem-estar" },
  { src: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1100&q=80", alt: "Aplicação de ativos no rosto", legenda: "Cuidado facial" },
];
