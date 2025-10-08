import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import Parser from 'rss-parser';
import { KEYWORDS_ALL, KEYWORDS } from './keywords.js';
import { matchesAnyKeyword } from './utils/matchesKeywords.js';

const app = express();
app.use(cors());
app.use(express.json());

const cache = {
  newsByCountry: new Map(),
  counts: {},
  lastUpdated: null
};

const NEWSAPI_KEY = process.env.NEWSAPI_KEY || '';
const PORT = process.env.PORT || 8787;
const COUNTRIES = ['ES', 'FR', 'DE', 'IT', 'NL', 'SE', 'GB', 'PT', 'NO', 'AT'];

const RSS_SOURCES = {
  // SPAIN (ES)
  ES: [
    'https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml',
    'https://www.abc.es/rss/feeds/abcPortada.xml',
    'https://www.larazon.es/rss/portada.xml',
    'https://www.lavanguardia.com/rss/home.xml',
    'https://www.elconfidencial.com/rss/espana/',
    'https://www.eldiario.es/rss/',
    'https://www.elespanol.com/rss/',
    'https://www.elperiodico.com/es/rss/rss_portada.xml',
    'https://www.europapress.es/rss/rss.aspx',
    'https://www.publico.es/rss/publico/rss/',
    'https://okdiario.com/feed',
    'https://www.infobae.com/espana/rss',
    'https://www.cope.es/rss/portada',
    'https://www.vozpopuli.com/feed/',
    'https://www.mediterraneodigital.com/rss/ultimas-noticias.feed?type=rss',
    'https://www.alertadigital.com/feed/',
    'https://www.periodistadigital.com/feed/',
    'https://gaceta.es/feed/',
    'https://www.esdiario.com/rss/portada',
    'https://elcorreodeespana.com/rss',
    'https://diariopatriota.com/feed/',
    'https://casoaislado.com/feed/',
    'https://ramblalibre.com/feed/',
    'https://adelanteespana.com/feed/',
    'https://infovaticana.com/feed/'
  ],

  // FRANCE (FR)
  FR: [
    'https://www.lemonde.fr/rss/une.xml',                       // Le Monde – portada
    'https://www.lemonde.fr/international/rss_full.xml',        // Le Monde – internacional
    'https://www.lemonde.fr/economie/rss_full.xml',             // Le Monde – economía
    'https://www.lemonde.fr/politique/rss_full.xml',            // Le Monde – política
    'https://www.lefigaro.fr/rss/figaro_actualites.xml',        // Le Figaro – actualidad
    'https://www.liberation.fr/arc/outboundfeeds/rss-all/ ',    // Libération – noticias
    'https://www.humanite.fr/rss.xml',                          // L’Humanité – izquierda
    'https://www.lopinion.fr/rss.xml',                          // L’Opinion – liberal-conservador
    'https://www.lesechos.fr/rss/rss_lesechos_a_la_une.xml',    // Les Échos – economía/finanzas
    'https://www.france24.com/fr/france/rss',                   // France 24 – noticias Francia
    'https://www.france24.com/fr/europe/rss',                   // France 24 – Europa
    'https://www.france24.com/fr/info/rss',                     // France 24 – info general
    'https://www.rfi.fr/fr/flux-rss',                           // RFI – internacional
    'https://www.cnews.fr/flux-rss',                            // CNews – cobertura general
    'https://www.lepoint.fr/24h-infos/rss.xml',                 // Le Point – noticias
    'https://www.mediapart.fr/articles/feed',                   // Mediapart – investigación
    'https://www.valeursactuelles.com/rss.xml',                 // Valeurs Actuelles – conservador/nacional
    'https://www.marianne.net/rss',                             // Marianne – izquierda republicana
    'https://www.slate.fr/rss.xml',                             // Slate France – actualidad/opinión
    'https://www.nouvelobs.com/rss.xml'                         // L’Obs (Nouvel Observateur) – progresista
  ],

  // GERMANY (DE)
  DE: [
    'https://www.spiegel.de/schlagzeilen/tops/index.rss',        // Der Spiegel – titulares
    'https://www.faz.net/rss/aktuell/',                          // FAZ – Frankfurter Allgemeine Zeitung
    'https://www.sueddeutsche.de/news/rss',                      // Süddeutsche Zeitung – noticias
    'https://www.welt.de/feeds/latest.rss',                      // Die Welt – noticias
    'https://www.zeit.de/index.rss',                             // Die Zeit – portada
    'https://www.handelsblatt.com/contentexport/feed/schlagzeilen', // Handelsblatt – economía
    'https://www.focus.de/feeds/rss',                            // Focus Online – general
    'https://www.tagesschau.de/xml/rss2',                        // Tagesschau (ARD) – noticias principales
    'https://www.dw.com/atom/rss-de-top',                        // Deutsche Welle – noticias en alemán
    'https://www.n-tv.de/rss',                                   // n-tv – general
    'https://www.t-online.de/rss.xml',                           // t-online – portada
    'https://www.heute.de/rss',                                  // ZDF Heute – noticias
    'https://www.berliner-zeitung.de/feed',                      // Berliner Zeitung
    'https://www.berliner-kurier.de/feed',                       // Berliner Kurier
    'https://www.merkur.de/rssfeed.rdf',                         // Merkur – noticias
    'https://www.fr.de/rssfeed.rdf',                             // Frankfurter Rundschau
    'https://www.bild.de/rssfeeds/rssfeed-16725560,feed=alles.bild.html', // Bild – todo Bild
    'https://jungefreiheit.de/feed/',                            // Junge Freiheit – conservador/derecha
    'https://taz.de/!p4608;rss/',                                // taz – die tageszeitung (izquierda)
    'https://www.neues-deutschland.de/rss.xml'                   // Neues Deutschland – izquierda
  ],

  // ITALY (IT)
  IT: [
    'https://www.corriere.it/rss/homepage.xml',
    'https://www.repubblica.it/rss/homepage/rss2.0.xml',
    'https://www.lastampa.it/rss.xml',
    'https://www.ilsole24ore.com/rss/ultimora.xml',
    'https://www.ilgiornale.it/rss.xml',
    'https://www.ilfattoquotidiano.it/feed/',
    'https://www.huffingtonpost.it/feed',
    'https://www.liberoquotidiano.it/rss/home.xml',
    'https://www.iltempo.it/rss.xml',
    'https://www.affaritaliani.it/rss.xml',
    'https://www.adnkronos.com/RSS_PrimaPagina.xml',
    'https://www.ansa.it/sito/ansait_rss.xml',
    'https://www.avvenire.it/RSSPages/AvvenireHomePage_RSS.xml',
    'https://www.ilmanifesto.it/feed/',
    'https://www.linkiesta.it/feed/',
    'https://www.secoloditalia.it/feed/',
    'https://www.lanazione.it/rss',
    'https://www.gazzetta.it/rss/home.xml',
    'https://www.quotidiano.net/rss',
    'https://www.tpi.it/feed/'
  ],

  // UNITED KINGDOM (GB)
  UK: [
    'https://www.theguardian.com/uk/rss',
    'https://www.telegraph.co.uk/rss.xml',
    'https://www.independent.co.uk/news/uk/rss',
    'https://www.thetimes.co.uk/environment/rss',
    'https://www.ft.com/?format=rss',
    'https://www.bbc.co.uk/news/10628494',
    'https://www.dailymail.co.uk/home/index.rss',
    'https://www.express.co.uk/posts/rss/1/uk',
    'https://www.mirror.co.uk/?service=rss',
    'https://metro.co.uk/feed/',
    'https://news.sky.com/feeds/rss/home.xml',
    'https://www.standard.co.uk/rss',
    'https://www.cityam.com/feed/',
    'https://www.thesun.co.uk/feed/',
    'https://www.newstatesman.com/feed',
    'https://www.spectator.co.uk/feed',
    'https://www.politicshome.com/rss',
    'https://www.theweek.co.uk/news/feed',
    'https://www.channel4.com/news/rss',
    'https://www.itv.com/news/feed.rss'
  ],

  // NETHERLANDS (NL)
 NL: [
  'https://www.nu.nl/rss/Algemeen',
  'https://www.volkskrant.nl/nieuws/rss.xml',
  'https://fd.nl/rss',
  'https://www.telegraaf.nl/rss',
  'https://www.trouw.nl/nieuws/rss.xml',
  'https://www.parool.nl/nieuws/rss.xml',
  'https://www.nrc.nl/rss/',
  'https://www.ad.nl/rss.xml',
  'https://www.rtlnieuws.nl/service/rss/nieuws/index.xml',
  'https://nos.nl/rss',
  'https://www.metronieuws.nl/rss.xml',
  'https://www.omroepbrabant.nl/rss',
  'https://www.rtvoost.nl/rss/nieuws',
  'https://www.rtvutrecht.nl/rss/nieuws',
  'https://www.rtvnoord.nl/rss/nieuws',
  'https://www.rtvdrenthe.nl/rss/nieuws',
  'https://www.omropfryslan.nl/rss/nieuws',
  'https://www.gelderlander.nl/nieuws/rss.xml',
  'https://www.bndestem.nl/nieuws/rss.xml',
  'https://www.pzc.nl/nieuws/rss.xml'
],

  // SWEDEN (SE)
  SE: [
    'https://www.dn.se/rss/',
    'https://www.svd.se/?service=rss',
    'https://www.aftonbladet.se/nyheter/rss.xml',
    'https://feeds.expressen.se/nyheter',
    'https://feeds.svt.se/nyheter',
    'https://sverigesradio.se/rssfeed.rss?programid=83',
    'https://www.gp.se/2.718/1.43803-nyheter.rss',
    'https://www.sydsvenskan.se/rss.xml',
    'https://feeds.kristianstadsbladet.se/rss.xml',
    'https://www.hd.se/rss.xml',
    'https://www.bt.se/rss.xml',
    'https://www.kvp.se/rss.xml',
    'https://www.nsk.se/rss.xml',
    'https://www.ystadsallehanda.se/rss.xml',
    'https://www.trelleborgsallehanda.se/rss.xml',
    'https://www.barometern.se/rss.xml',
    'https://www.nt.se/rss.xml',
    'https://www.corren.se/rss.xml',
    'https://www.vk.se/rss.xml',
    'https://www.norran.se/rss.xml'
  ],

  // NORWAY (NO)
  NO: [
    'https://www.nrk.no/toppsaker.rss',
    'https://www.vg.no/rss/feed/',
    'https://www.dagbladet.no/rss.xml',
    'https://www.aftenposten.no/rss',
    'https://www.dn.no/rss',
    'https://www.abcnyheter.no/rss',
    'https://www.tv2.no/rss/nyheter',
    'https://www.nettavisen.no/rss',
    'https://www.adressa.no/?service=rss',
    'https://www.bt.no/rss',
    'https://www.fvn.no/rss',
    'https://www.nationen.no/rss',
    'https://www.klassekampen.no/rss',
    'https://www.vl.no/rss',
    'https://www.ba.no/?service=rss',
    'https://www.itromso.no/rss',
    'https://www.nrk.no/urix.rss',
    'https://www.nrk.no/sport.rss',
    'https://www.hegnar.no/rss',
    'https://e24.no/rss'
  ],

  // PORTUGAL (PT)
  PT: [
    'https://www.publico.pt/rss',
    'https://www.dn.pt/rss',
    'https://www.jn.pt/rss',
    'https://expresso.pt/rss',
    'https://observador.pt/feed/',
    'https://sicnoticias.pt/rss',
    'https://rr.sapo.pt/rss/rssFeed.aspx?section=noticias',
    'https://sol.sapo.pt/rss',
    'https://www.cmjornal.pt/rss',
    'https://www.iol.pt/rss/',
    'https://eco.sapo.pt/feed/',
    'https://www.tsf.pt/rss',
    'https://www.rtp.pt/noticias/rss',
    'https://www.ojogo.pt/rss',
    'https://visao.pt/feed/',
    'https://expresso.pt/economia/rss',
    'https://www.dinheirovivo.pt/rss',
    'https://www.abrilabril.pt/rss',
    'https://www.noticiasaominuto.com/rss/ultima-hora',
    'https://zap.aeiou.pt/feed'
  ],

  // AUSTRIA (AT)
  AT: [
    'https://rss.orf.at/news.xml',
    'https://www.derstandard.at/rss',
    'https://www.diepresse.com/rss',
    'https://www.krone.at/rss',
    'https://www.kurier.at/feeds/rss',
    'https://www.oe24.at/rss.xml',
    'https://www.nachrichten.at/storage/rss/rss/nachrichtenat.xml'
  ]
};


const DOMAIN_TO_ISO = {
  // ES
  'elmundo.es':'ES','elpais.com':'ES','abc.es':'ES','larazon.es':'ES',
  'lavanguardia.com':'ES','elconfidencial.com':'ES','eldiario.es':'ES',
  'elespanol.com':'ES','elperiodico.com':'ES','rtve.es':'ES',
  'europapress.es':'ES','publico.es':'ES','okdiario.com':'ES',
  'huffingtonpost.es':'ES','infobae.com':'ES','cope.es':'ES',
  'cadenaser.com':'ES','lasexta.com':'ES','telemadrid.es':'ES',

  // FR
  'lemonde.fr':'FR','lefigaro.fr':'FR','liberation.fr':'FR','lepoint.fr':'FR',
  'lexpress.fr':'FR','francetvinfo.fr':'FR','france24.com':'FR','leparisien.fr':'FR',
  'bfmtv.com':'FR','rfi.fr':'FR','marianne.net':'FR','valeursactuelles.com':'FR',
  'mediapart.fr':'FR','huffingtonpost.fr':'FR','20minutes.fr':'FR',

  // DE
  'tagesschau.de':'DE','spiegel.de':'DE','zeit.de':'DE','faz.net':'DE',
  'welt.de':'DE','sueddeutsche.de':'DE','bild.de':'DE','handelsblatt.com':'DE',
  'dw.com':'DE','t-online.de':'DE',

  // IT
  'ansa.it':'IT','repubblica.it':'IT','corriere.it':'IT','lastampa.it':'IT',
  'ilfattoquotidiano.it':'IT','ilgiornale.it':'IT','ilmessaggero.it':'IT',
  'iltempo.it':'IT','rainews.it':'IT','adnkronos.com':'IT','huffingtonpost.it':'IT',
  'linkiesta.it':'IT',

  // GB (UK)
  'bbc.co.uk':'GB','theguardian.com':'GB','telegraph.co.uk':'GB',
  'news.sky.com':'GB','sky.com':'GB','independent.co.uk':'GB','ft.com':'GB',
  'dailymail.co.uk':'GB','express.co.uk':'GB','thesun.co.uk':'GB',
  'standard.co.uk':'GB','newstatesman.com':'GB','spectator.co.uk':'GB',
  'gbnews.com':'GB',

  // NL
  'nos.nl':'NL','nu.nl':'NL','telegraaf.nl':'NL','nrc.nl':'NL','volkskrant.nl':'NL',
  'parool.nl':'NL','rtlnieuws.nl':'NL','trouw.nl':'NL','ad.nl':'NL',

  // SE
  'svt.se':'SE','aftonbladet.se':'SE','expressen.se':'SE','dn.se':'SE',
  'svd.se':'SE','gp.se':'SE','sverigesradio.se':'SE','omni.se':'SE',

  // NO
  'nrk.no':'NO','vg.no':'NO','aftenposten.no':'NO','dagbladet.no':'NO',
  'tv2.no':'NO','abcnyheter.no':'NO','nettavisen.no':'NO',

  // PT
  'publico.pt':'PT','expresso.pt':'PT','observador.pt':'PT','rtp.pt':'PT',
  'sicnoticias.pt':'PT','cmjornal.pt':'PT','jn.pt':'PT',

  // AT
  'orf.at':'AT','derstandard.at':'AT','diepresse.com':'AT','krone.at':'AT',
  'kurier.at':'AT','oe24.at':'AT','nachrichten.at':'AT'
};

const DOMAIN_TO_ISO = {
  'elmundo.es':'ES','abc.es':'ES','lavanguardia.com':'ES',
  'lemonde.fr':'FR','spiegel.de':'DE','corriere.it':'IT',
  'theguardian.com':'GB','nu.nl':'NL','dn.se':'SE',
  'nrk.no':'NO','publico.pt':'PT','orf.at':'AT'
};

const parser = new Parser({
  requestOptions: {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Bot/1.0)' },
    timeout: 15000
  }
});

function normalizeArticle(raw, fallbackISO) {
  const url = raw.link || raw.url || '';
  let domain = '';
  try { domain = new URL(url).hostname.replace(/^www\./, ''); } catch {}
  
  const source = raw.source?.name || domain || 'Unknown';
  const country = DOMAIN_TO_ISO[domain] || fallbackISO || null;

  return {
    title: raw.title || '',
    url,
    source,
    publishedAt: raw.pubDate || raw.publishedAt || new Date().toISOString(),
    summary: raw.contentSnippet || raw.description || '',
    domain,
    country
  };
}

async function fetchFromRSS(countryISO) {
  const feeds = RSS_SOURCES[countryISO] || [];
  const items = [];

  for (const feedUrl of feeds) {
    try {
      const feed = await parser.parseURL(feedUrl);
      for (const it of feed.items || []) {
        const art = normalizeArticle(it, countryISO);
        if (!art.country) art.country = countryISO;
        
        if (matchesAnyKeyword(art, art.country)) {
          items.push(art);
        }
      }
    } catch (e) {
      console.warn(`RSS error: ${feedUrl}:`, e.message);
    }
  }
  return items;
}

function dedupe(articles) {
  const seen = new Set();
  const out = [];
  for (const a of articles) {
    const key = a.url || `${a.title}|${a.source}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(a);
  }
  return out;
}

async function fetchCountry(countryISO) {
  const rss = await fetchFromRSS(countryISO);
  const merged = dedupe(rss).sort((a,b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  cache.newsByCountry.set(countryISO, merged.slice(0, 200));
}

async function refreshAll() {
  console.log('🔄 Refreshing...');
  await Promise.all(COUNTRIES.map(fetchCountry));

  const counts = {};
  for (const list of cache.newsByCountry.values()) {
    for (const a of list || []) {
      if (a.country) counts[a.country] = (counts[a.country] || 0) + 1;
    }
  }
  cache.counts = counts;
  cache.lastUpdated = new Date().toISOString();
  console.log('✅ Done:', counts);
}

refreshAll().catch(console.error);
setInterval(refreshAll, 5 * 60 * 1000);

app.get('/api/ping', (_, res) => res.json({ ok: true, ts: new Date().toISOString() }));
app.get('/api/counts', (_, res) => res.json({ counts: cache.counts, lastUpdated: cache.lastUpdated }));

app.get('/api/news', (req, res) => {
  const country = (req.query.country || '').toUpperCase();
  let items = [];
  
  if (country && country !== 'ALL') {
    items = cache.newsByCountry.get(country) || [];
  } else {
    for (const arr of cache.newsByCountry.values()) items = items.concat(arr || []);
  }
  
  res.json(items.slice(0, 200));
});

app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
});