// server/keywords.js

// Country-specific keyword lists
export const KEYWORDS = {
    // --- SPAIN ---
    ES: [
      "delincuencia inmigrante", "pateras", "cayucos", "menas",
      "okupas", "bandas latinas", "magrebí", "magrebíes",
      "subsahariano", "subsaharianos", "salto de la valla",
      "Ceuta", "Melilla", "inseguridad ciudadana",
      "mafias de trata", "devoluciones en caliente",
      // nationalities often used in headlines
      "marroquí", "marroquíes", "argelino", "argelinos",
      "tunecino", "tunecinos", "nigeriano", "nigerianos",
      "colombiano", "colombianos", "venezolano", "venezolanos",
      "rumano", "rumanos", "búlgaro", "búlgaros",
      "albanés", "albaneses", "kosovar", "kosovares",
      "dominicano", "dominicanos", "cubano", "cubanos"
    ],
  
    // --- FRANCE ---
    FR: [
      "insécurité migratoire", "banlieues chaudes", "zones de non-droit",
      "islamisme radical", "terrorisme islamiste", "violence des migrants",
      "clandestins", "passeurs", "Jungle de Calais", "submersion migratoire",
      "grand remplacement", "délinquance étrangère", "rétention administrative",
      // ethnonyms
      "marocain", "marocains", "algérien", "algériens",
      "tunisien", "tunisiens", "malien", "maliens",
      "sénégalais", "ivoirien", "camerounais",
      "pakistanais", "afghan", "afghans",
      "roumain", "russes", "albanais"
    ],
  
    // --- GERMANY / AUSTRIA ---
    DE: [
      "Migrantenkriminalität", "Ausländerkriminalität", "Clankriminalität",
      "No-Go-Area", "Parallelgesellschaft", "Asylkriminalität",
      "Messerattacke", "Ehrenmord", "Zwangsheirat",
      // ethnonyms
      "Marokkaner", "Algerier", "Tunesier", "Syrer",
      "Afghane", "Iraker", "Iraner", "Pakistaner",
      "Somalier", "Eritreer", "Nigerianer",
      "Rumäne", "Bulgare", "Pole", "Albaner", "Kosovare",
      "Tschetschene", "Türke", "Kurden"
    ],
  
    // --- ITALY ---
    IT: [
      "criminalità immigrata", "clandestini", "sbarchi", "Lampedusa",
      "centri di accoglienza", "rotta balcanica", "invasione migratoria",
      "rimpatri", "trafficanti", "ONG taxi del mare",
      // ethnonyms
      "marocchino", "marocchini", "algerino", "algerini",
      "tunisino", "tunisini", "nigeriano", "nigeriani",
      "ghanese", "gambiano", "pakistano", "pakistani",
      "rumeno", "rumeni", "bulgaro", "bulgari",
      "albanese", "albanesi", "kosovaro", "kosovari"
    ],
  
    // --- NETHERLANDS ---
    NL: [
      "migrantencriminaliteit", "asielzoekersoverlast", "parallelle samenleving",
      "massa-immigratie", "no-go zone",
      // ethnonyms
      "Marokkaan", "Marokkanen", "Turk", "Turken",
      "Afghaan", "Irakees", "Syriër", "Syriërs",
      "Somaliër", "Eritreeër", "Nigerianen", "Ghanese",
      "Roemeen", "Roemenen", "Bulgaar", "Albanees", "Albanezen"
    ],
  
    // --- SWEDEN ---
    SE: [
      "invandrarkriminalitet", "no-go-zoner", "utsatta områden",
      "gängkriminalitet", "skjutningar", "sprängningar",
      "hederskultur", "parallellsamhällen", "massinvandring",
      // ethnonyms
      "marockaner", "algerier", "afghaner", "irakier",
      "syrier", "somalier", "eritreaner",
      "rumäner", "bulgarer", "albaner", "kosovoalbaner"
    ],
  
    // --- NORWAY ---
    NO: [
      "innvandringskriminalitet", "parallellsamfunn", "asylpolitikk",
      "masseinnvandring", "grensekontroll",
      // ethnonyms
      "marokkaner", "algerier", "afghaner", "irakere",
      "syrier", "somaliere", "eritreere",
      "rumenere", "bulgarere", "albanere", "kosovoalbanere"
    ],
  
    // --- PORTUGAL ---
    PT: [
      "imigração ilegal", "crise migratória", "pedido de asilo",
      "controlo de fronteiras", "deportação",
      // ethnonyms
      "marroquino", "marroquinos", "argelino", "argelinos",
      "nigeriano", "nigerianos", "guineense", "cabo-verdiano",
      "romeno", "romenos", "búlgaro", "búlgaros",
      "ucraniano", "ucranianos", "brasileiro", "brasileiros"
    ]
};

// Flattened unique list of all keywords for broad queries
export const KEYWORDS_ALL = Array.from(new Set(Object.values(KEYWORDS).flat()));