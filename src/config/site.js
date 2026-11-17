/* =====================================================================
   KAROL CUNHA — ESTÉTICA E MASSOTERAPIA
   Arquivo único de configuração do site.
   Tudo que muda com o tempo (telefone, endereço, horários, depoimentos,
   fotos) é editado AQUI. Nenhum outro arquivo precisa ser tocado.
   ===================================================================== */

export const site = {
  nome: "Karol Cunha Estética e Massoterapia",
  nomeCurto: "Karol Cunha",
  assinatura: "Estética & Massoterapia",
  descricao:
    "Estética facial, estética corporal e massoterapia com atendimento personalizado. Protocolos individualizados, técnicas especializadas e Cursos VIP de capacitação profissional.",

  /* ---------------------------------------------------------------
     1. CONTATO  —  PREENCHER ANTES DE PUBLICAR
     --------------------------------------------------------------- */
  contato: {
    // Número oficial do WhatsApp em formato internacional, só dígitos.
    // 55 (Brasil) + 91 (PA) + 991284944
    whatsapp: "5591991284944",

    // Como o número aparece escrito na tela ("" oculta).
    whatsappVisivel: "(91) 99128-4944",

    instagram: "https://www.instagram.com/esteticista.karolcunha/",
    instagramHandle: "@esteticista.karolcunha",

    // E-mail opcional. "" oculta a linha.
    email: "",

    // Link do perfil no Google — ler as avaliações. "" oculta o botão.
    googleReviews: "https://share.google/UJMLGqjwOsJgTF8YH",

    // Link que abre direto a tela de escrever avaliação no Google.
    googleAvaliar: "https://share.google/lYeSWIu54M11dvK55",
  },

  /* ---------------------------------------------------------------
     2. ENDEREÇO
     ⚠ Existe um segundo registro cadastral na Estrada do Icuí-Guajará,
     302. Confirmar com a clínica se é um endereço antigo ou uma
     segunda unidade. Se forem duas unidades ativas, me avise para
     exibir as duas na seção Localização.
     --------------------------------------------------------------- */
  endereco: {
    linha1: "Prédio JVS Office Center — Av. Arterial, 18, Sala 10",
    linha2: "Coqueiro — Ananindeua / PA · CEP 67030-325",
    referencia: "", // Ex.: "Em frente à praça central"

    // Texto que o Google Maps usa para localizar a clínica.
    // "" faz o mapa exibir o cartão de localização discreto.
    buscaMaps: "JVS Office Center, Av. Arterial, 18, Coqueiro, Ananindeua - PA, 67030-325",

    // Usado só pelo Google (dados estruturados / busca local).
    estruturado: {
      rua: "Av. Arterial, 18, Sala 10 — Prédio JVS Office Center",
      bairro: "Coqueiro",
      cidade: "Ananindeua",
      uf: "PA",
      cep: "67030-325",
      pais: "BR",
    },
  },

  /* ---------------------------------------------------------------
     3. HORÁRIOS DE ATENDIMENTO
     --------------------------------------------------------------- */
  horarios: [
    { dias: "Segunda a sexta", horas: "A confirmar" },
    { dias: "Sábado", horas: "A confirmar" },
    { dias: "Domingo", horas: "Fechado" },
  ],
  horariosNota: "Atendimento exclusivamente com hora marcada.",

  /* ---------------------------------------------------------------
     4. SOBRE A PROFISSIONAL
     Campos preparados para inclusão posterior. Nada é exibido
     enquanto estiver vazio — nenhuma informação é presumida.
     --------------------------------------------------------------- */
  sobre: {
    // Ex.: ["Formação em Estética e Cosmética", "Especialização em Massoterapia"]
    credenciais: [],

    // Ex.: [{ numero: "+10", rotulo: "anos de atuação" }] — só se confirmado.
    marcos: [],
  },

  /* ---------------------------------------------------------------
     5. AVALIAÇÕES DO GOOGLE
     Preencher somente com dados reais e verificáveis.
     Com a lista vazia, a seção exibe o convite de avaliação.

     ⚠ Os dois textos abaixo são TRECHOS: no Google eles continuam
     depois do "… Mais", e a parte cortada não estava legível. Nada foi
     completado nem reescrito — cada frase está como a cliente escreveu.
     Para publicar a avaliação inteira, abra a ficha no Google, clique
     em "Mais" e cole o texto completo no lugar.
     --------------------------------------------------------------- */
  avaliacoes: {
    nota: 5.0,
    quantidade: 124,

    depoimentos: [
      {
        nome: "Amanda De Cassia Pereira Dos Santos",
        estrelas: 5,
        texto:
          "Quero deixar aqui o meu mais sincero agradecimento por todo o conhecimento que você compartilhou comigo. Seu profissionalismo, dedicação, paciência e paixão pelo que faz fizeram toda a diferença na minha trajetória.",
        truncado: true,
      },
      {
        nome: "natasha goncalves",
        estrelas: 5,
        texto:
          "Excelente profissional! Além de muito dedicada e atenciosa, realiza um trabalho impecável com muito cuidado e profissionalismo. O atendimento é acolhedor, ela transmite confiança e realmente se preocupa com o bem-estar e a satisfação das",
        truncado: true,
      },
      {
        nome: "Ana Heloisa",
        estrelas: 5,
        texto:
          "Atendimento excelente! A profissional é muito atenciosa, competente e passa muita confiança. O ambiente é agradável e acolhedor, e o resultado ficou incrível. Recomendo muito!!! 🥰",
      },
      {
        nome: "DLOUHS Ribeiro",
        estrelas: 5,
        quando: "há 4 meses",
        texto:
          "Hoje quero compartilhar minha experiência com a excelente profissional Karol. Desde o primeiro atendimento, fui recebida com muito carinho, atenção e profissionalismo. É nítido o cuidado que ela tem em cada detalhe e o compromisso em",
        truncado: true,
      },
      {
        nome: "Talita Miranda",
        estrelas: 5,
        quando: "há 3 meses",
        texto:
          "Tive uma experiência maravilhosa! Desde o primeiro momento fui muito bem atendida, com muito carinho, atenção e profissionalismo. Fiz uma massagem relaxante e uma limpeza de pele profunda com microagulhamento, e fiquei encantada com o",
        truncado: true,
      },
      {
        nome: "Deyse Teixeira",
        estrelas: 5,
        texto:
          "Super indico essa grande profissional Karol Cunha, ela trabalha com seriedade e dedicação e sem falar que ela tem mãos de fada! Continue sempre essa profissional excepcional 🥰",
      },
      {
        nome: "Wendy Teles Damasceno",
        estrelas: 5,
        texto:
          "A Karol é maravilhosa, fui muito bem recebida e ela me acompanhou desde o momento em que eu decidi qual procedimento fazer, foi me explicando como funcionava cada etapa do procedimento. Me senti super segura, principalmente no pós porque",
        truncado: true,
      },
      {
        nome: "Wellisse Carla",
        estrelas: 5,
        texto: "Profissional excelente.",
        truncado: true,
      },
    ],
  },

  /* ---------------------------------------------------------------
     6. INSTAGRAM (integração futura)
     Com um endpoint de feed (Behold, EmbedSocial, Instagram Basic
     Display…), a galeria passa a ser montada a partir do feed,
     mantendo exatamente o mesmo layout. "" usa a galeria local.
     --------------------------------------------------------------- */
  instagramFeed: {
    endpoint: "", // Ex.: "https://feeds.behold.so/XXXXXXXX"
    limite: 8,
  },

  /* ---------------------------------------------------------------
     7. MENSAGENS PRONTAS DO WHATSAPP
     --------------------------------------------------------------- */
  mensagens: {
    geral: "Olá, Karol! Vim pelo site e gostaria de agendar um horário.",
    facial: "Olá, Karol! Vim pelo site e gostaria de saber mais sobre os tratamentos faciais.",
    corporal: "Olá, Karol! Vim pelo site e gostaria de saber mais sobre os tratamentos corporais.",
    massoterapia: "Olá, Karol! Vim pelo site e gostaria de saber mais sobre as massagens.",
    cursos: "Olá, Karol! Vim pelo site e tenho interesse nos Cursos VIP.",
  },
};

/* =====================================================================
   DERIVADOS — não precisam ser editados
   ===================================================================== */

const digitos = String(site.contato.whatsapp || "").replace(/\D/g, "");

/** O número já foi trocado pelo real? */
export const whatsappConfigurado = digitos.length >= 12 && !/^550+/.test(digitos);

/** Telefone em formato internacional, para dados estruturados e links tel:. */
export const telefoneE164 = whatsappConfigurado ? `+${digitos}` : "";

/** Link de WhatsApp com mensagem pronta. Sem número válido, cai no Instagram. */
export function waLink(chave = "geral") {
  const texto = site.mensagens[chave] ?? site.mensagens.geral;
  if (!whatsappConfigurado) return site.contato.instagram || "#";
  return `https://wa.me/${digitos}?text=${encodeURIComponent(texto)}`;
}

/** Linhas de endereço já confirmadas. */
export const linhasEndereco = [
  site.endereco.linha1,
  site.endereco.linha2,
  site.endereco.referencia,
].filter(Boolean);
