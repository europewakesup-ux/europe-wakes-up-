// server/keywords.js

// Country-specific keyword lists organized by categories
export const KEYWORDS = {
    // --- SPAIN ---
    ES: {
        NATIONALITIES: [
            // Árabe/Norteafricanos
            "marroquí", "marroquíes", "marroqui", "marroquies",
            "argelino", "argelina", "argelinos", "argelinas", 
            "tunecino", "tunecina", "tunecinos", "tunecinas",
            "libio", "libia", "libios", "libias",
            "egipcio", "egipcia", "egipcios", "egipcias",
            
            // Europeos del Este
            "rumano", "rumana", "rumanos", "rumanas",
            "búlgaro", "búlgara", "búlgaros", "búlgaras", 
            "ucraniano", "ucraniana", "ucranianos", "ucranianas",
            "ruso", "rusa", "rusos", "rusas",
            "albanés", "albanesa", "albaneses", "albanesas",
            "serbio", "serbia", "serbios", "serbias",
            
            // Latinoamericanos
            "colombiano", "colombiana", "colombianos", "colombianas",
            "venezolano", "venezolana", "venezolanos", "venezolanas", 
            "ecuatoriano", "ecuatoriana", "ecuatorianos", "ecuatorianas",
            "peruano", "peruana", "peruanos", "peruanas",
            "dominicano", "dominicana", "dominicanos", "dominicanas",
            "brasileño", "brasileña", "brasileños", "brasileñas",
            "mexicano", "mexicana", "mexicanos", "mexicanas",
            "hondureño", "hondureña", "hondureños", "hondureñas",
            "salvadoreño", "salvadoreña", "salvadoreños", "salvadoreñas",
            
            // Asiáticos
            "chino", "china", "chinos", "chinas",
            "pakistaní", "pakistaníes", "pakistani", "pakistanies",
            "bangladesí", "bangladesíes", "bangladesi", "bangladesies", 
            "indio", "india", "indios", "indias",
            
            // Africanos Subsaharianos
            "nigeriano", "nigeriana", "nigerianos", "nigerianas",
            "senegalés", "senegalesa", "senegaleses", "senegalesas",
            "ghanés", "ghanesa", "ghaneses", "ghanesas",
            "maliense", "malienses", "malí", "malis",
            "somalí", "somalíes", "somali", "somalies",
            "etíope", "etíopes", "etiope", "etiopes",
            
            // Oriente Medio
            "sirio", "siria", "sirios", "sirias",
            "afgano", "afgana", "afganos", "afganas",
            "iraquí", "iraquíes", "iraqui", "iraquies",
            "iraní", "iraníes", "irani", "iranies",
            "palestino", "palestina", "palestinos", "palestinas",
            
            // Grupos generales
            "magrebí", "magrebíes", "magrebi", "magrebies",
            "subsahariano", "subsahariana", "subsaharianos", "subsaharianas", 
            "latino", "latina", "latinos", "latinas",
            "gitano", "gitana", "gitanos", "gitanas",
            "musulmán", "musulmana", "musulmanes", "musulmanas"
        ],
        
        CRIMES: [
            // Robos y hurtos
            "robo", "roba", "roban", "robaron", "robó", "robar", "robos",
            "hurto", "hurtos", "hurta", "hurtan", "hurtaron", "hurtó",
            "asalto", "asaltos", "asalta", "asaltan", "asaltaron", "asaltó", 
            "atraco", "atracos", "atraca", "atracan", "atracaron", "atracó",
            "saqueo", "saqueos", "saquea", "saquean", "saquearon", "saqueó",
            
            // Violencia física
            "agresión", "agresiones", "agrede", "agreden", "agredieron", "agredió",
            "violencia", "violent", "pelea", "peleas", "pelearon", "peleó",
            "paliza", "palizas", "golpea", "golpean", "golpearon", "golpeó",
            "apuñala", "apuñalan", "apuñalaron", "apuñaló", "apuñalamiento",
            "navajazo", "navajazos", "cuchillada", "cuchilladas", "acuchilla", "acuchilló",
            "tiroteo", "tiroteos", "disparo", "disparos", "dispara", "dispararon", "disparó",
            
            // Homicidios
            "mata", "matan", "mataron", "mató", "muerte", "muertes", "mata",
            "asesinato", "asesinatos", "asesina", "asesinan", "asesinaron", "asesinó", 
            "homicidio", "homicidios", "homicida", "homicidas",
            
            // Delitos sexuales
            "violación", "violaciones", "viola", "violan", "violaron", "violó",
            "abuso sexual", "abusos sexuales", "abusa", "abusaron", "abusó",
            "acoso", "acosa", "acosan", "acosaron", "acosó",
            
            // Secuestros y amenazas
            "secuestro", "secuestros", "secuestra", "secuestran", "secuestraron", "secuestró",
            "extorsión", "extorsiones", "extorsiona", "extorsionan", "extorsionaron", "extorsionó",
            "amenaza", "amenazas", "amenaza", "amenazan", "amenazaron", "amenazó",
            "intimidación", "intimida", "intimidan", "intimidaron", "intimidó",
            
            // Drogas
            "droga", "drogas", "trafica", "trafican", "traficaron", "traficó",
            "narcotráfico", "narco", "narcomenudeo", "microtráfico",
            "venta de droga", "tráfico de drogas", "distribución de drogas",
            
            // Bandas y organizaciones
            "banda", "bandas", "pandilla", "pandillas", "clan", "clanes",
            "mafia", "mafias", "crimen organizado", "delincuencia organizada",
            "grupo criminal", "red criminal",
            
            // Otros delitos
            "okupación", "okupa", "okupan", "okuparon", "okupó",
            "allanamiento", "allana", "allanan", "allanaron", "allanó",
            "vandalismo", "vandaliza", "vandalizan", "vandalizaron", "vandalizó",
            "destrozo", "destrozos", "destroza", "destrozan", "destrozaron", "destrozó"
        ],
        
        RELIGIONS: [
            // Islam
            "islam", "islámico", "islámica", "islámicos", "islámicas",
            "musulmán", "musulmana", "musulmanes", "musulmanas",
            "islamista", "islamistas", "islamismo",
            "corán", "coránico", "coránica",
            "mezquita", "mezquitas",
            "yihad", "yihadista", "yihadistas",
            "sharia", "sharía", "ley islámica",
            "salafista", "salafistas", "salafismo",
            "wahhabista", "wahhabistas", "wahhabismo",
            "suní", "sunita", "sunní", "sunitas",
            "chií", "chiita", "chiíes", "chiitas",
            
            // Otras religiones (si las necesitas)
            "cristiano", "cristiana", "cristianos", "cristianas",
            "evangélico", "evangélica", "evangélicos", "evangélicas"
        ]
    },

    // --- FRANCE ---
    FR: {
        NATIONALITIES: [
            // Arabes / Nord-Africains
            "marocain", "marocaine", "marocains", "marocaines",
            "algérien", "algérienne", "algériens", "algériennes", 
            "tunisien", "tunisienne", "tunisiens", "tunisiennes",
            "libyen", "libyenne", "libyens", "libyennes",
            "égyptien", "égyptienne", "égyptiens", "égyptiennes",
            
            // Européens de l’Est
            "roumain", "roumaine", "roumains", "roumaines",
            "bulgare", "bulgare", "bulgares", "bulgares", 
            "ukrainien", "ukrainienne", "ukrainiens", "ukrainiennes",
            "russe", "russe", "russes", "russes",
            "albanais", "albanaise", "albanais", "albanaises",
            "serbe", "serbe", "serbes", "serbes",
            
            // Latino-Américains
            "colombien", "colombienne", "colombiens", "colombiennes",
            "vénézuélien", "vénézuélienne", "vénézuéliens", "vénézuéliennes", 
            "équatorien", "équatorienne", "équatoriens", "équatoriennes",
            "péruvien", "péruvienne", "péruviens", "péruviennes",
            "dominicain", "dominicaine", "dominicains", "dominicaines",
            "brésilien", "brésilienne", "brésiliens", "brésiliennes",
            "mexicain", "mexicaine", "mexicains", "mexicaines",
            "hondurien", "hondurienne", "honduriens", "honduriennes",
            "salvadorien", "salvadorienne", "salvadoriens", "salvadoriennes",
            
            // Asiatiques
            "chinois", "chinoise", "chinois", "chinoises",
            "pakistanais", "pakistanaise", "pakistanais", "pakistanaises",
            "bangladais", "bangladaise", "bangladais", "bangladaises", 
            "indien", "indienne", "indiens", "indiennes",
            
            // Africains Subsahariens
            "nigérian", "nigériane", "nigérians", "nigérianes",
            "sénégalais", "sénégalaise", "sénégalais", "sénégalaises",
            "ghanéen", "ghanéenne", "ghanéens", "ghanéennes",
            "malien", "malienne", "maliens", "maliennes",
            "somalien", "somalienne", "somaliens", "somaliennes",
            "éthiopien", "éthiopienne", "éthiopiens", "éthiopiennes",
            
            // Moyen-Orient
            "syrien", "syrienne", "syriens", "syriennes",
            "afghan", "afghane", "afghans", "afghanes",
            "irakien", "irakienne", "irakiens", "irakiennes",
            "iranien", "iranienne", "iraniens", "iraniennes",
            "palestinien", "palestinienne", "palestiniens", "palestiniennes",
            
            // Groupes généraux
            "maghrébin", "maghrébine", "maghrébins", "maghrébines",
            "subsaharien", "subsaharienne", "subsahariens", "subsahariennes", 
            "latino", "latina", "latinos", "latinas",
            "gitan", "gitane", "gitans", "gitanes",
            "musulman", "musulmane", "musulmans", "musulmanes"
        ],
        
    CRIMES: [
            // Vols
            "vol", "vole", "volent", "volèrent", "a volé", "voler", "vols",
            "larcin", "larcins", "dérobe", "dérober", "dérobaient", "a dérobé",
            "agression", "agressions", "agresse", "agressent", "ont agressé", "a agressé", 
            "braquage", "braquages", "braque", "braquent", "ont braqué", "a braqué",
            "saccage", "saccages", "saccage", "saccagent", "ont saccagé", "a saccagé",
            
            // Violence physique
            "violence", "violences", "frappe", "frappent", "ont frappé", "a frappé",
            "bagarre", "bagarres", "se battent", "se sont battus", "s’est battu",
            "correction", "corrections", "donne un coup", "ont donné des coups", "a donné un coup",
            "poignarde", "poignardent", "ont poignardé", "a poignardé", "poignardement",
            "coup de couteau", "coups de couteau", "coup de lame", "a poignardé",
            "fusillade", "fusillades", "coup de feu", "coups de feu", "tire", "ont tiré", "a tiré",
            
            // Homicides
            "tue", "tuent", "ont tué", "a tué", "mort", "morts",
            "assassinat", "assassinats", "assassine", "assassinent", "ont assassiné", "a assassiné", 
            "homicide", "homicides", "homicide", "homicides",
            
            // Crimes sexuels
            "viol", "viols", "viole", "violent", "ont violé", "a violé",
            "abus sexuel", "abus sexuels", "abuse", "ont abusé", "a abusé",
            "harcèlement", "harcèle", "harcèlent", "ont harcelé", "a harcelé",
            
            // Enlèvements et menaces
            "enlèvement", "enlèvements", "enlève", "enlèvent", "ont enlevé", "a enlevé",
            "extorsion", "extorsions", "extorque", "extorquent", "ont extorqué", "a extorqué",
            "menace", "menaces", "menace", "menacent", "ont menacé", "a menacé",
            "intimidation", "intimide", "intimident", "ont intimidé", "a intimidé",
            
            // Drogues
            "drogue", "drogues", "trafique", "trafiquent", "ont trafiqué", "a trafiqué",
            "narcotrafic", "narco", "microtrafic",
            "vente de drogue", "trafic de drogues", "distribution de drogues",
            
            // Bandes et organisations
            "bande", "bandes", "gang", "gangs", "clan", "clans",
            "mafia", "mafias", "crime organisé", "délinquance organisée",
            "groupe criminel", "réseau criminel",
            
            // Autres délits
            "squat", "squatte", "squattent", "ont squatté", "a squatté",
            "violation de domicile", "viole", "violent", "ont violé", "a violé",
            "vandalisme", "vandalisent", "ont vandalisé", "a vandalisé",
            "dégât", "dégâts", "détruit", "détruisent", "ont détruit", "a détruit"
        ],
        
    RELIGIONS: [
            // Islam
            "islam", "islamique", "islamiques",
            "musulman", "musulmane", "musulmans", "musulmanes",
            "islamiste", "islamistes", "islamisme",
            "coran", "coranique", "coraniques",
            "mosquée", "mosquées",
            "djihad", "djihadiste", "djihadistes",
            "charia", "loi islamique",
            "salafiste", "salafistes", "salafisme",
            "wahhabite", "wahhabites", "wahhabisme",
            "sunnite", "sunnites",
            "chiite", "chiites",
            
            // Autres religions
            "chrétien", "chrétienne", "chrétiens", "chrétiennes",
            "évangélique", "évangéliques"
        ]
    },

    // --- GERMANY / AUSTRIA ---
    DE: {
        NATIONALITIES: [
            // Arab/North African
            "marokkanisch", "Marokkaner", "Marokkanerin", "Marokkanerinnen",
            "algerisch", "Algerier", "Algerierin", "Algerierinnen", 
            "tunesisch", "Tunesier", "Tunesierin", "Tunesierinnen",
            "libysch", "Libyer", "Libyerin", "Libyerinnen",
            "ägyptisch", "Ägypter", "Ägypterin", "Ägypterinnen",
            
            // Eastern Europeans
            "rumänisch", "Rumäne", "Rumänin", "Rumänen",
            "bulgarisch", "Bulgare", "Bulgarin", "Bulgaren", 
            "ukrainisch", "Ukrainer", "Ukrainerin", "Ukrainerinnen",
            "russisch", "Russe", "Russin", "Russen",
            "albanisch", "Albaner", "Albanerin", "Albanerinnen",
            "serbisch", "Serbe", "Serbin", "Serben",
            
            // Latin Americans
            "kolumbianisch", "Kolumbianer", "Kolumbianerin", "Kolumbianerinnen",
            "venezolanisch", "Venezolaner", "Venezolanerin", "Venezolanerinnen", 
            "ecuadorianisch", "Ecuadorianer", "Ecuadorianerin", "Ecuadorianerinnen",
            "peruanisch", "Peruaner", "Peruanerin", "Peruanerinnen",
            "dominikanisch", "Dominikaner", "Dominikanerin", "Dominikanerinnen",
            "brasilianisch", "Brasilianer", "Brasilianerin", "Brasilianerinnen",
            "mexikanisch", "Mexikaner", "Mexikanerin", "Mexikanerinnen",
            "honduranisch", "Honduraner", "Honduranerin", "Honduranerinnen",
            "salvadorianisch", "Salvadorianer", "Salvadorianerin", "Salvadorianerinnen",
            
            // Asians
            "chinesisch", "Chinese", "Chinesin", "Chinesen",
            "pakistanisch", "Pakistaner", "Pakistanerin", "Pakistanerinnen",
            "bangladeschisch", "Bangladescher", "Bangladescherin", "Bangladescherinnen", 
            "indisch", "Inder", "Inderin", "Inderinnen",
            
            // Sub-Saharan Africans
            "nigerianisch", "Nigerianer", "Nigerianerin", "Nigerianerinnen",
            "senegalesisch", "Senegalesen", "Senegalesin", "Senegalesinnen",
            "ghanaisch", "Ghanaer", "Ghanaerin", "Ghanaerinnen",
            "malisch", "Mali", "Malier", "Malierin",
            "somalisch", "Somalier", "Somalierin", "Somalierinnen",
            "äthiopisch", "Äthiopier", "Äthiopierin", "Äthiopierinnen",
            
            // Middle East
            "syrisch", "Syrer", "Syrerin", "Syrerinnen",
            "afghanisch", "Afghane", "Afghanin", "Afghanen",
            "irakisch", "Iraker", "Irakerin", "Irakerinnen",
            "iranisch", "Iraner", "Iranerin", "Iranerinnen",
            "palästinensisch", "Palästinenser", "Palästinenserin", "Palästinenserinnen",
            
            // General groups
            "maghrebinisch", "Maghrebiner", "Maghrebinerin", "Maghrebinerinnen",
            "subsaharisch", "Subsaharier", "Subsaharierin", "Subsaharierinnen", 
            "lateinamerikanisch", "Lateinamerikaner", "Lateinamerikanerin", "Lateinamerikanerinnen",
            "zigeuner", "Zigeunerin", "Zigeuner", "Zigeunerinnen",
            "muslimisch", "Muslim", "Muslima", "Muslime"
        ],
        
    CRIMES: [
            // Theft and robbery
            "Diebstahl", "stiehlt", "stehlen", "stahl", "gestohlen", "rauben", "Raub",
            "Entwendung", "entwendet", "entwendeten", "entwendete",
            "Überfall", "Überfälle", "überfällt", "überfielen", "überfiel", 
            "Raubüberfall", "Raubüberfälle", "raubt", "raubten", "raubte",
            "Plünderung", "Plünderungen", "plündert", "plünderten", "plünderte",
            
            // Physical violence
            "Angriff", "Angriffe", "greift an", "griffen an", "griff an",
            "Gewalt", "Schlägerei", "Schlägereien", "kämpften", "kämpfte",
            "Prügel", "Schläge", "schlägt", "schlugen", "schlug",
            "ersticht", "erstachen", "erstach", "Messerstecherei",
            "Messerstich", "Messerstiche", "sticht", "stach",
            "Schießerei", "Schießereien", "Schuss", "Schüsse", "schießt", "schossen", "schoss",
            
            // Homicides
            "tötet", "töten", "töteten", "tötete", "Tod", "Tode",
            "Mord", "Morde", "ermordet", "ermordeten", "ermordete", 
            "Tötung", "Tötungen", "Täter", "Täterinnen",
            
            // Sexual crimes
            "Vergewaltigung", "Vergewaltigungen", "vergewaltigt", "vergewaltigten", "vergewaltigte",
            "sexueller Missbrauch", "sexuelle Übergriffe", "missbraucht", "missbrauchten", "missbrauchte",
            "Belästigung", "belästigt", "belästigten", "belästigte",
            
            // Kidnapping and threats
            "Entführung", "Entführungen", "entführt", "entführten", "entführte",
            "Erpressung", "Erpressungen", "erpresst", "erpressten", "erpresste",
            "Drohung", "Drohungen", "droht", "drohten", "drohte",
            "Einschüchterung", "schüchtert ein", "schüchterten ein", "schüchterte ein",
            
            // Drugs
            "Droge", "Drogen", "handelt", "handelten", "handelte",
            "Drogenhandel", "Drogenschmuggel", "Drogenverkauf", "Drogenverteilung",
            
            // Gangs and organizations
            "Bande", "Banden", "Gang", "Gangs", "Clan", "Clans",
            "Mafia", "Mafias", "organisierte Kriminalität", "kriminelle Gruppe", "kriminelles Netzwerk",
            
            // Other crimes
            "Hausbesetzung", "besetzt", "besetzten", "besetzte",
            "Hausfriedensbruch", "dringt ein", "drangen ein", "drang ein",
            "Vandalismus", "vandalisiert", "vandalisierten", "vandalisierte",
            "Zerstörung", "Zerstörungen", "zerstört", "zerstörten", "zerstörte"
        ],
        
    RELIGIONS: [
            // Islam
            "Islam", "islamisch", "islamische", "islamischen",
            "Muslim", "Muslima", "Muslime", "Musliminnen",
            "Islamist", "Islamisten", "Islamismus",
            "Koran", "koranisch", "koranische",
            "Moschee", "Moscheen",
            "Dschihad", "Dschihadist", "Dschihadisten",
            "Scharia", "islamisches Gesetz",
            "Salafist", "Salafisten", "Salafismus",
            "Wahhabit", "Wahhabiten", "Wahhabismus",
            "Sunnit", "Sunniten",
            "Schiit", "Schiiten",
            
            // Other religions
            "Christ", "Christin", "Christen", "Christinnen",
            "Evangelisch", "Evangelikale"
        ]
    },

    // --- ITALY ---
    IT: {
        NATIONALITIES: [
            // Arab/North African
            "marocchino", "marocchina", "marocchini", "marocchine",
            "algerino", "algerina", "algerini", "algerine", 
            "tunisino", "tunisina", "tunisini", "tunisine",
            "libico", "libica", "libici", "libiche",
            "egiziano", "egiziana", "egiziani", "egiziane",
            
            // Eastern Europeans
            "rumeno", "rumena", "rumeni", "rumene",
            "bulgaro", "bulgara", "bulgari", "bulgare", 
            "ucraino", "ucraina", "ucraini", "ucraine",
            "russo", "russa", "russi", "russe",
            "albanese", "albanesi",
            "serbo", "serba", "serbi", "serbe",
            
            // Latin Americans
            "colombiano", "colombiana", "colombiani", "colombiane",
            "venezuelano", "venezuelana", "venezuelani", "venezuelane", 
            "ecuadoriano", "ecuadoriana", "ecuadoriani", "ecuadoriane",
            "peruviano", "peruviana", "peruviani", "peruviane",
            "dominicano", "dominicana", "dominicanI", "dominicane",
            "brasiliano", "brasiliana", "brasiliani", "brasiliane",
            "messicano", "messicana", "messicani", "messicane",
            "honduregno", "honduregna", "honduregni", "honduregne",
            "salvadoregno", "salvadoregna", "salvadoregni", "salvadoregni",
            
            // Asians
            "cinese", "cinesi",
            "pakistano", "pakistana", "pakistani", "pakistane",
            "bangladese", "bangladesi",
            "indiano", "indiana", "indiani", "indiane",
            
            // Sub-Saharan Africans
            "nigeriano", "nigeriana", "nigeriani", "nigeriane",
            "senegalese", "senegalesi",
            "ghanese", "ghanesi",
            "maliano", "maliana", "maliani", "maliane",
            "somalo", "somala", "somali", "somale",
            "etiope", "etiopi",
            
            // Middle East
            "siriano", "siriana", "siriani", "siriane",
            "afghano", "afghana", "afghani", "afghane",
            "iracheno", "irachena", "iracheni", "irachene",
            "iraniano", "iraniana", "iraniani", "iraniane",
            "palestinese", "palestinesi",
            
            // General groups
            "magrebino", "magrebina", "magrebini", "magrebine",
            "subsahariano", "subsahariana", "subsahariani", "subsahariane", 
            "latino", "latina", "latini", "latine",
            "zingaro", "zingara", "zingari", "zingare",
            "musulmano", "musulmana", "musulmani", "musulmane"
        ],
        
    CRIMES: [
            // Theft and robbery
            "furto", "furti", "ruba", "rubano", "rubò", "rubare",
            "rapina", "rapine", "rapina", "rapinano", "rapinarono", "rapinò",
            "aggressione", "aggressioni", "aggredisce", "aggredito", "aggredì",
            "assalto", "assalti", "assalta", "assaltarono", "assaltò", 
            "saccheggio", "saccheggi", "saccheggia", "saccheggiarono", "saccheggiò",
            
            // Physical violence
            "violenza", "violente", "picchia", "picchiano", "picchiò",
            "rissa", "risse", "litigarono", "litigò",
            "pestaggio", "pestaggi", "colpisce", "colpirono", "colpì",
            "pugnalata", "pugnalate", "pugnalò", "accoltellamento",
            "coltellata", "coltellate", "accoltella", "accoltellò",
            "sparatoria", "sparatorie", "sparò", "sparano", "spararono",
            
            // Homicides
            "uccide", "uccidono", "uccisero", "uccise", "morte", "morti",
            "omicidio", "omicidi", "assassinio", "assassinii", "assassina", "assassinarono", "assassinò", 
            "omicida", "omicidi",
            
            // Sexual crimes
            "stupro", "stupri", "violenza sessuale", "violentò", "stuprarono",
            "abuso sessuale", "abusi sessuali", "abusa", "abusarono", "abusò",
            "molestia", "molestie", "molesta", "molestarono", "molestò",
            
            // Kidnapping and threats
            "sequestro", "sequestri", "sequestra", "sequestrarono", "sequestrò",
            "estorsione", "estorsioni", "estorsiona", "estorsionarono", "estorsionò",
            "minaccia", "minacce", "minacciò", "minacciarono", "minacciano",
            "intimidazione", "intimida", "intimidarono", "intimidò",
            
            // Drugs
            "droga", "droghe", "spaccia", "spacciarono", "spacciò",
            "narcotraffico", "narco", "microtraffico",
            "vendita di droga", "traffico di droga", "distribuzione di droga",
            
            // Gangs and organizations
            "banda", "bande", "gang", "gangs", "clan", "clan",
            "mafia", "mafie", "crimine organizzato", "delinquenza organizzata",
            "gruppo criminale", "rete criminale",
            
            // Other crimes
            "occupazione", "occupa", "occuparono", "occupò",
            "violazione di domicilio", "viola", "violarono", "violò",
            "vandalismo", "vandalismi", "vandalizza", "vandalizzarono", "vandalizzò",
            "danno", "danni", "distrugge", "distrussero", "distrusse"
        ],
        
    RELIGIONS: [
            // Islam
            "islam", "islamico", "islamica", "islamici", "islamiche",
            "musulmano", "musulmana", "musulmani", "musulmane",
            "islamista", "islamisti", "islamismo",
            "corano", "coranico", "coranici", "coraniche",
            "moschea", "moschee",
            "jihad", "jihadista", "jihadisti",
            "sharia", "legge islamica",
            "salafita", "salafiti", "salafismo",
            "wahhabita", "wahhabiti", "wahhabismo",
            "sunnita", "sunniti",
            "sciita", "sciiti",
            
            // Other religions
            "cristiano", "cristiana", "cristiani", "cristiane",
            "evangelico", "evangelica", "evangelici", "evangeliche"
        ]
    },

    // --- NETHERLANDS ---
    NL: {
        NATIONALITIES: [
            // Arab/North African
            "Marokkaans", "Marokkaan", "Marokkaanse", "Marokkanen",
            "Algerijns", "Algerijn", "Algerijnse", "Algerijnen", 
            "Tunesisch", "Tunesiër", "Tunesische", "Tunesiërs",
            "Libisch", "Libyer", "Libische", "Libiërs",
            "Egyptisch", "Egyptenaar", "Egyptische", "Egyptenaren",
            
            // Eastern Europeans
            "Roemeens", "Roemeen", "Roemeense", "Roemenen",
            "Bulgaars", "Bulgaar", "Bulgaarse", "Bulgaren", 
            "Oekraïens", "Oekraïner", "Oekraïense", "Oekraïners",
            "Russisch", "Rus", "Russin", "Russen",
            "Albanees", "Albanese", "Albanezen",
            "Servisch", "Serviër", "Servische", "Serviërs",
            
            // Latin Americans
            "Colombiaans", "Colombiaan", "Colombiaanse", "Colombianen",
            "Venezolaans", "Venezolaan", "Venezolaanse", "Venezolanen", 
            "Ecuadoraans", "Ecuadoraan", "Ecuadoraanse", "Ecuadoraanen",
            "Peruviaans", "Peruviaan", "Peruviaanse", "Peruvianen",
            "Dominicaans", "Dominicaan", "Dominicaanse", "Dominicanen",
            "Braziliaans", "Braziliaan", "Braziliaanse", "Brazilianen",
            "Mexicaans", "Mexicaan", "Mexicaanse", "Mexicanen",
            "Hondurees", "Hondurese", "Hondurezen",
            "Salvadoraans", "Salvadoraan", "Salvadoraanse", "Salvadoranen",
            
            // Asians
            "Chinees", "Chinese", "Chinezen",
            "Pakistaans", "Pakistaan", "Pakistaanse", "Pakistanen",
            "Bengalees", "Bengalese", "Bengalen",
            "Indiaas", "Indiaan", "Indiase", "Indianen",
            
            // Sub-Saharan Africans
            "Nigeriaans", "Nigeriaan", "Nigeriaanse", "Nigerianen",
            "Senegalees", "Senegalese", "Senegalezen",
            "Ghanees", "Ghanese", "Ghanen",
            "Malinees", "Malinese", "Malinezen",
            "Somalisch", "Somaliër", "Somalische", "Somaliërs",
            "Ethiopisch", "Ethiopiër", "Ethiopische", "Ethiopiërs",
            
            // Middle East
            "Syrisch", "Syriër", "Syrische", "Syriërs",
            "Afghaans", "Afghaan", "Afghaanse", "Afghanen",
            "Irakees", "Irakees", "Irakezen",
            "Iraans", "Iraniër", "Iraanse", "Iraniërs",
            "Palestijns", "Palestijn", "Palestijnse", "Palestijnen",
            
            // General groups
            "Maghrebijns", "Maghrebijn", "Maghrebijnse", "Maghrebijnen",
            "Sub-Saharaans", "Sub-Sahariaan", "Sub-Saharische", "Sub-Saharianen", 
            "Latino", "Latina", "Latinos", "Latina’s",
            "Zigeuner", "Zigeuners", "Zigeunerin", "Zigeunerinnen",
            "Moslim", "Moslims", "Moslima", "Moslimas"
        ],
        
    CRIMES: [
            // Theft and robbery
            "diefstal", "diefstallen", "steelt", "stelen", "stal", "gestolen",
            "beroving", "berovingen", "beroofde", "beroven",
            "overval", "overvallen", "overviel", "overvallen",
            "plundering", "plunderingen", "plundert", "plunderden", "plunderde",
            
            // Physical violence
            "aanval", "aanvallen", "valt aan", "vielen aan", "viel aan",
            "geweld", "vechtpartij", "vechtpartijen", "vochten", "vocht",
            "mishandeling", "mishandelingen", "slaat", "sloegen", "sloeg",
            "steekt neer", "neergestoken", "stak neer", "messteek", "messteken",
            "schietpartij", "schietpartijen", "schot", "schoten", "schoot",
            
            // Homicides
            "doodt", "doden", "doodde", "gedood", "dood", "doden",
            "moord", "moorden", "vermoordt", "vermoorden", "vermoorde", 
            "homicide", "homiciden",
            
            // Sexual crimes
            "verkrachting", "verkrachtingen", "verkracht", "verkrachtten", "verkrachtte",
            "seksueel misbruik", "misbruiken", "misbruikt", "misbruikte",
            "intimidatie", "intimideert", "intimideerden", "intimideerde",
            
            // Kidnapping and threats
            "ontvoering", "ontvoeringen", "ontvoert", "ontvoerden", "ontvoerde",
            "afpersing", "afpersingen", "perst af", "persten af", "perste af",
            "bedreiging", "bedreigingen", "bedreigt", "bedreigden", "bedreigde",
            
            // Drugs
            "drugs", "drugshandel", "drugshandelaar", "deal", "dealden", "dealde",
            "narcotica", "narcotica-handel", "drugverkoop", "drugdistributie",
            
            // Gangs and organizations
            "bende", "bendes", "gang", "gangs", "clan", "clans",
            "maffia", "maffia’s", "georganiseerde misdaad", "criminele groep", "crimineel netwerk",
            
            // Other crimes
            "kraken", "kraker", "krakers", "gekraakt",
            "huisvredebreuk", "dringt binnen", "drongen binnen", "drong binnen",
            "vandalisme", "vandaliseert", "vandaliseerden", "vandaliseerde",
            "vernieling", "vernielingen", "vernielt", "vernielden", "vernielde"
        ],
        
    RELIGIONS: [
            // Islam
            "islam", "islamitisch", "islamitische",
            "moslim", "moslims", "moslima", "moslima’s",
            "islamist", "islamisten", "islamisme",
            "koran", "koranisch",
            "moskee", "moskeeën",
            "jihad", "jihadist", "jihadisten",
            "sharia", "islamitische wet",
            "salafist", "salafisten", "salafisme",
            "wahhabit", "wahhabieten", "wahhabisme",
            "soenniet", "soennieten",
            "sjiiet", "sjiieten",
            
            // Other religions
            "christen", "christenen", "christelijk",
            "evangelisch", "evangelischen"
        ]
    },

    // --- SWEDEN ---
    SE: {
        NATIONALITIES: [
            // Arab/North African
            "marockan", "marockaner", "marockansk", "marockanska",
            "algerier", "algerisk", "algeriska", "algeriska kvinnor",
            "tunisier", "tunisisk", "tunisierna", "tunisiska",
            "libyer", "libysk", "libyerna", "libysiska",
            "egyptier", "egyptisk", "egyptierna", "egyptiska",
            
            // Eastern Europeans
            "rumän", "rumänsk", "rumäner", "rumänska",
            "bulgar", "bulgarisk", "bulgarer", "bulgariska",
            "ukrainare", "ukrainsk", "ukrainare", "ukrainska",
            "ryss", "rysk", "ryssar", "ryska",
            "alban", "albansk", "albaner", "albanska",
            "serb", "serbisk", "serber", "serbiska",
            
            // Latin Americans
            "colombian", "colombiansk", "colombianer", "colombianska",
            "venezuelan", "venezuelansk", "venezuelaner", "venezuelanska",
            "ecuadorian", "ecuadoriansk", "ecuadorianer", "ecuadorianska",
            "peruan", "peruansk", "peruaner", "peruanska",
            "dominikansk", "dominikanska", "dominikanska män", "dominikanska kvinnor",
            "brasiliansk", "brasilianska", "brasilianer", "brasilianska kvinnor",
            "mexikan", "mexikansk", "mexikaner", "mexikanska",
            "honduran", "honduransk", "honduraner", "honduranska",
            "salvadorian", "salvadoriansk", "salvadorianer", "salvadorianska",
            
            // Asians
            "kines", "kinesisk", "kineser", "kinesiska",
            "pakistanier", "pakistansk", "pakistaner", "pakistanska",
            "bangladeshier", "bangladeshisk", "bangladeshierna", "bangladeshiska",
            "indier", "indisk", "indierna", "indiska",
            
            // Sub-Saharan Africans
            "nigerian", "nigeriansk", "nigerianer", "nigerianska",
            "senegales", "senegalesisk", "senegaleser", "senegalesiska",
            "ghanes", "ghanesisk", "ghaneser", "ghanesiska",
            "malier", "malisk", "malierna", "maliska",
            "somalier", "somalisk", "somalierna", "somaliska",
            "etiopier", "etiopisk", "etiopierna", "etiopiska",
            
            // Middle East
            "syrier", "syriansk", "syrierna", "syrianska",
            "afghan", "afghansk", "afghaner", "afghanska",
            "irakier", "irakisk", "irakierna", "irakiska",
            "iranier", "iransk", "iranierna", "iranska",
            "palestinier", "palestinsk", "palestinierna", "palestinska",
            
            // General groups
            "maghrebinsk", "maghrebiner", "maghrebinska", "maghrebinerna",
            "subsaharisk", "subsaharier", "subsahariska", "subsaharierna",
            "latino", "latina", "latinos", "latinas",
            "zigenare", "zigenerska", "romer", "romska",
            "muslim", "muslimsk", "muslimer", "muslimska"
        ],
        
    CRIMES: [
            // Theft and robbery
            "stöld", "stölder", "stjäl", "stal", "stulit",
            "rån", "rånare", "rånar", "rånade", "rånade",
            "överfall", "överfallit", "överföll", "överfaller",
            "plundring", "plundringar", "plundrar", "plundrade",
            
            // Physical violence
            "angrepp", "angrepp", "angriper", "angrep", "angripit",
            "våld", "slagsmål", "slagsmål", "slåss", "slogs",
            "misshandel", "misshandlar", "misshandlade", "misshandlat",
            "knivhugger", "knivhögg", "knivhugg", "knivhuggning",
            "skottlossning", "skott", "sköt", "skjuter", "sköt",
            
            // Homicides
            "dödar", "dödade", "dödats", "död", "dödsfall",
            "mord", "morden", "mördar", "mördade", "mördat", 
            "dråp", "dråp", "dråpare", "dråpare",
            
            // Sexual crimes
            "våldtäkt", "våldtäkter", "våldtar", "våldtog", "våldtagit",
            "sexuella övergrepp", "övergrepp", "sexuellt ofredande",
            "trakasserier", "trakasserar", "trakasserade", "trakasserat",
            
            // Kidnapping and threats
            "kidnappning", "kidnappar", "kidnappade", "kidnappat",
            "utpressning", "utpressar", "utpressade", "utpressat",
            "hot", "hotar", "hotade", "hotat",
            "skrämma", "skrämde", "skrämts",
            
            // Drugs
            "drog", "droger", "narkotika", "narkotikahandel", "narkotikasmuggling",
            "droghandel", "drogförsäljning", "drogdistribution",
            
            // Gangs and organizations
            "gäng", "gängmedlem", "gängkriminalitet",
            "klan", "klaner",
            "maffia", "maffior", "organiserad brottslighet", "kriminell grupp", "kriminellt nätverk",
            
            // Other crimes
            "ockupation", "ockuperar", "ockuperade", "ockuperat",
            "hemfridsbrott", "tränger in", "trängde in", "trängt in",
            "vandalism", "vandaliserar", "vandaliserade", "vandaliserat",
            "förstörelse", "förstörelser", "förstör", "förstörde", "förstört"
        ],
        
    RELIGIONS: [
            // Islam
            "islam", "islamisk", "islamiska",
            "muslim", "muslimsk", "muslimer", "muslimska",
            "islamist", "islamister", "islamism",
            "koran", "koranisk",
            "moské", "moskéer",
            "jihad", "jihadist", "jihadister",
            "sharia", "islamsk lag",
            "salafist", "salafister", "salafism",
            "wahhabit", "wahhabiter", "wahhabism",
            "sunni", "sunniter",
            "shia", "shiiter",
            
            // Other religions
            "kristen", "kristna", "kristendom",
            "evangelisk", "evangeliska"
        ]
    },

    // --- NORWAY ---
    NO: {
        NATIONALITIES: [
            // Arab/North African
            "marokkaner", "marokkansk", "marokkanere", "marokkanske",
            "algerier", "algerisk", "algeriere", "algeriske",
            "tunisier", "tunisiske", "tunisere", "tunisiske kvinner",
            "libyer", "libysk", "libyere", "libyske",
            "egyptisk", "egypter", "egyptiske", "egyptiske kvinner",
            
            // Eastern Europeans
            "rumener", "rumensk", "rumenere", "rumenske",
            "bulgarer", "bulgarsk", "bulgarere", "bulgarske",
            "ukrainer", "ukrainsk", "ukrainere", "ukrainske",
            "russer", "russisk", "russere", "russiske",
            "albaner", "albansk", "albanere", "albanske",
            "serber", "serbisk", "serbere", "serbiske",
            
            // Latin Americans
            "colombianer", "colombiansk", "colombianere", "colombianske",
            "venezuelaner", "venezuelansk", "venezuelanere", "venezuelanske",
            "ecuadorianer", "ecuadoriansk", "ecuadorianere", "ecuadorianske",
            "peruaner", "peruansk", "peruanere", "peruanske",
            "dominikansk", "dominikanske", "dominikanske menn", "dominikanske kvinner",
            "brasiliansk", "brasilianske", "brasilianere", "brasilianske kvinner",
            "mexikaner", "mexikansk", "mexikanere", "mexikanske",
            "honduraner", "honduransk", "honduranere", "honduranske",
            "salvadorianer", "salvadoriansk", "salvadorianere", "salvadorianske",
            
            // Asians
            "kineser", "kinesisk", "kinesere", "kinesiske",
            "pakistaner", "pakistansk", "pakistanere", "pakistanske",
            "bangladesher", "bangladeshisk", "bangladeshere", "bangladeshiske",
            "inder", "indisk", "indere", "indiske",
            
            // Sub-Saharan Africans
            "nigerianer", "nigeriansk", "nigerianere", "nigerianske",
            "senegaleser", "senegalesisk", "senegalesere", "senegalesiske",
            "ghaneser", "ghanesisk", "ghanesere", "ghanesiske",
            "malier", "malisk", "maliere", "maliske",
            "somalier", "somalisk", "somaliere", "somaliske",
            "etioper", "etiopisk", "etiopere", "etiopiske",
            
            // Middle East
            "syrier", "syrisk", "syrere", "syriske",
            "afghaner", "afghansk", "afghanere", "afghanske",
            "iraker", "irakisk", "irakere", "irakiske",
            "iraner", "iransk", "iranere", "iranske",
            "palestiner", "palestinsk", "palestinere", "palestinske",
            
            // General groups
            "maghrebiner", "maghrebinsk", "maghrebinerne", "maghrebinske",
            "subsaharisk", "subsaharere", "subsahariske", "subsaharerne", 
            "latino", "latina", "latinos", "latinas",
            "sigøyner", "sigøynerkvinne", "sigøynere", "sigøynerske",
            "muslim", "muslimsk", "muslimer", "muslimske"
        ],
        
    CRIMES: [
            // Theft and robbery
            "tyveri", "tyverier", "stjeler", "stjal", "stjålet",
            "ran", "raner", "ranere", "ranet",
            "overfall", "overfalt", "overfalt", "overfaller",
            "plyndring", "plyndringer", "plyndrer", "plyndret",
            
            // Physical violence
            "angrep", "angriper", "angrep", "angrepet",
            "vold", "slåsskamp", "slåsskamper", "slåss", "sloss",
            "mishandling", "mishandler", "mishandlet",
            "knivstikker", "knivstakk", "knivstikking",
            "skyting", "skudd", "skøt", "skyter", "skutt",
            
            // Homicides
            "dreper", "drepte", "drept", "død", "dødsfall",
            "mord", "mordene", "morder", "myrdet", 
            "drap", "drapsmann", "drapsmenn",
            
            // Sexual crimes
            "voldtekt", "voldtekter", "voldtar", "voldtok", "voldtatt",
            "seksuelt misbruk", "misbruk", "misbrukte", "misbrukt",
            "trakassering", "trakasserer", "trakasserte", "trakassert",
            
            // Kidnapping and threats
            "kidnapping", "kidnapper", "kidnappet",
            "utpressing", "utpresser", "utpresset",
            "trussel", "trusler", "truer", "truet",
            "skremming", "skremmer", "skremte", "skremt",
            
            // Drugs
            "narkotika", "narkotika", "narkotikahandel", "narkotikasmugling",
            "narkotikadistribusjon", "salgs av narkotika",
            
            // Gangs and organizations
            "gjeng", "gjenger", "gjengmedlem", "gjenger",
            "klan", "klaner",
            "mafia", "mafiaer", "organisert kriminalitet", "kriminell gruppe", "kriminelt nettverk",
            
            // Other crimes
            "okkupasjon", "okkuperer", "okkuperte", "okkupert",
            "husfredsbrudd", "trenger inn", "trengte inn", "trengt inn",
            "hærverk", "hærverker", "hærverkene", "hærverket",
            "ødeleggelse", "ødeleggelser", "ødelegger", "ødelagt"
        ],
        
    RELIGIONS: [
            // Islam
            "islam", "islamsk", "islamske",
            "muslim", "muslimsk", "muslimer", "muslimske",
            "islamist", "islamister", "islamisme",
            "koran", "koransk",
            "moské", "moskeer",
            "jihad", "jihadist", "jihadister",
            "sharia", "islamsk lov",
            "salafist", "salafister", "salafisme",
            "wahhabitt", "wahhabitter", "wahhabisme",
            "sunni", "sunnimuslim", "sunnimuslimer",
            "shia", "shiamuslim", "shiamuslimer",
            
            // Other religions
            "kristen", "kristne", "kristendom",
            "evangelisk", "evangeliske"
        ]
    },

    // --- PORTUGAL ---
    PT: {
        NATIONALITIES: [
            // Arab/North African
            "marroquino", "marroquina", "marroquinos", "marroquinas",
            "argelino", "argelina", "argelinos", "argelinas", 
            "tunisiano", "tunisiana", "tunísianos", "tunísianas",
            "líbio", "líbia", "líbios", "líbias",
            "egípcio", "egípcia", "egípcios", "egípcias",
            
            // Eastern Europeans
            "romeno", "romena", "romenos", "romenas",
            "búlgaro", "búlgara", "búlgaros", "búlgaras", 
            "ucraniano", "ucraniana", "ucranianos", "ucranianas",
            "russo", "russa", "russos", "russas",
            "albanês", "albanesa", "albaneses", "albanesas",
            "sérvio", "sérvia", "sérvios", "sérvias",
            
            // Latin Americans
            "colombiano", "colombiana", "colombianos", "colombianas",
            "venezuelano", "venezuelana", "venezuelanos", "venezuelanas", 
            "equatoriano", "equatoriana", "equatorianos", "equatorianas",
            "peruano", "peruana", "peruanos", "peruanas",
            "dominicano", "dominicana", "dominicanos", "dominicanas",
            "brasileiro", "brasileira", "brasileiros", "brasileiras",
            "mexicano", "mexicana", "mexicanos", "mexicanas",
            "hondurenho", "hondurenha", "hondurenhos", "hondurenhas",
            "salvadorenho", "salvadorenha", "salvadorenhos", "salvadorenhas",
            
            // Asians
            "chinês", "chinesa", "chineses", "chinesas",
            "paquistanês", "paquistanesa", "paquistaneses", "paquistanesas",
            "bangladês", "bangladesa", "bangladeses", "bangladesas", 
            "indiano", "indiana", "indianos", "indianas",
            
            // Sub-Saharan Africans
            "nigeriano", "nigeriana", "nigerianos", "nigerianas",
            "senegalês", "senegalesa", "senegaleses", "senegalesas",
            "ganês", "ganesa", "ganeses", "ganesas",
            "maliano", "maliana", "malianos", "malianas",
            "somali", "somalis", "somália", "somalianos",
            "etíope", "etíopes",
            
            // Middle East
            "sírio", "síria", "sírios", "sírias",
            "afegão", "afegã", "afegãos", "afegãs",
            "iraquiano", "iraquiana", "iraquianos", "iraquianas",
            "iraniano", "iraniana", "iranianos", "iranianas",
            "palestino", "palestina", "palestinos", "palestinas",
            
            // General groups
            "magrebino", "magrebina", "magrebinos", "magrebinas",
            "subsaariano", "subsaariana", "subsaarianos", "subsaarianas", 
            "latino", "latina", "latinos", "latinas",
            "cigano", "cigana", "ciganos", "ciganas",
            "muçulmano", "muçulmana", "muçulmanos", "muçulmanas"
        ],
        
    CRIMES: [
            // Theft and robbery
            "roubo", "roubos", "rouba", "roubaram", "roubou", "roubar",
            "furto", "furtos", "furta", "furtaram", "furtou",
            "assalto", "assaltos", "assalta", "assaltaram", "assaltou", 
            "arrastão", "arrastões", "arrasta", "arrastaram", "arrastou",
            "saque", "saques", "saqueia", "saquearam", "saqueou",
            
            // Physical violence
            "agressão", "agressões", "agride", "agrediram", "agrediu",
            "violência", "violento", "briga", "brigas", "brigaram", "brigou",
            "espancamento", "espancamentos", "espanca", "espancaram", "espancou",
            "esfaqueia", "esfaquearam", "esfaqueou", "esfaqueamento",
            "facada", "facadas", "acuchilha", "acuchilharam", "acuchilhou",
            "tiroteio", "tiroteios", "disparo", "disparos", "atira", "atiraram", "atirou",
            
            // Homicides
            "mata", "matam", "mataram", "matou", "morte", "mortes",
            "assassinato", "assassinatos", "assassina", "assassinaram", "assassinou", 
            "homicídio", "homicídios", "homicida", "homicidas",
            
            // Sexual crimes
            "violação", "violações", "viola", "violaram", "violou",
            "abuso sexual", "abusos sexuais", "abusa", "abusaram", "abusou",
            "assédio", "assedia", "assediaram", "assediou",
            
            // Kidnapping and threats
            "sequestro", "sequestros", "sequestra", "sequestraram", "sequestrou",
            "extorsão", "extorsões", "extorque", "extorquiram", "extorquiu",
            "ameaça", "ameaças", "ameaça", "ameaçaram", "ameaçou",
            "intimidação", "intimida", "intimidaram", "intimidou",
            
            // Drugs
            "droga", "drogas", "tráfico de drogas", "traficante", "traficar",
            "narcotráfico", "narco", "microtráfico",
            "venda de drogas", "distribuição de drogas",
            
            // Gangs and organizations
            "banda", "bandas", "gangue", "gangues", "clã", "clãs",
            "máfia", "máfias", "crime organizado", "delinquência organizada",
            "grupo criminoso", "rede criminosa",
            
            // Other crimes
            "ocupação", "ocupa", "ocuparam", "ocupou",
            "invasão de domicílio", "invade", "invadiram", "invadiu",
            "vandalismo", "vandaliza", "vandalizaram", "vandalizou",
            "destruição", "destruições", "destrói", "destruíram", "destruiu"
        ],
        
    RELIGIONS: [
            // Islam
            "islão", "islâmico", "islâmica", "islâmicos", "islâmicas",
            "muçulmano", "muçulmana", "muçulmanos", "muçulmanas",
            "islamista", "islamistas", "islamismo",
            "alcorão", "corânico", "corânica",
            "mesquita", "mesquitas",
            "jihad", "jihadista", "jihadistas",
            "sharia", "lei islâmica",
            "salafista", "salafistas", "salafismo",
            "wahhabita", "wahhabitas", "wahhabismo",
            "sunita", "sunitas",
            "xiita", "xiitas",
            
            // Other religions
            "cristão", "cristã", "cristãos", "cristãs",
            "evangélico", "evangélica", "evangélicos", "evangélicas"
        ]
    }
};

// Flattened lists for each category across all countries
export const KEYWORDS_ALL = {
    NATIONALITIES: Array.from(new Set(Object.values(KEYWORDS).flatMap(country => country.NATIONALITIES || []))),
    CRIMES: Array.from(new Set(Object.values(KEYWORDS).flatMap(country => country.CRIMES || []))),
    RELIGIONS: Array.from(new Set(Object.values(KEYWORDS).flatMap(country => country.RELIGIONS || []))),
    IMMIGRATION_TERMS: Array.from(new Set(Object.values(KEYWORDS).flatMap(country => country.IMMIGRATION_TERMS || [])))
};

// Complete flattened list for simple searches (like you had before)
export const KEYWORDS_ALL_FLAT = Array.from(new Set([
    ...KEYWORDS_ALL.NATIONALITIES,
    ...KEYWORDS_ALL.CRIMES,
    ...KEYWORDS_ALL.RELIGIONS,
    ...KEYWORDS_ALL.IMMIGRATION_TERMS
]));