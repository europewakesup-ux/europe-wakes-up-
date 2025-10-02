import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import Parser from 'rss-parser';
import { KEYWORDS_ALL_FLAT as KEYWORDS_ALL } from './keywords.js';

// --- Filtro local por keywords ---
// Devuelve true si el título o el resumen contienen alguna keyword.
function matchesAnyKeyword(article) {
  const haystack = `${article.title || ''} ${article.summary || ''}`.toLowerCase();
  return Array.isArray(KEYWORDS_ALL) && KEYWORDS_ALL.some(k => {
    if (!k) return false;
    return haystack.includes(String(k).toLowerCase());
  });
}

const app = express();
app.use(cors());
app.use(express.json());

// In-memory cache
const cache = {
  newsByCountry: new Map(), // ISO2 -> array of articles
  counts: {}, // ISO2 -> number
  lastUpdated: null
};

// Config
const NEWSAPI_KEY = process.env.NEWSAPI_KEY || '';
const PORT = process.env.PORT || 8787;
const COUNTRIES = ['ES', 'FR', 'DE', 'IT', 'NL', 'SE', 'GB', 'PT', 'NO', 'AT'];
// OUTLETS (RSS / XML feeds only). Grouped by ISO country code.
// IMPORTANT: UK uses ISO2 "GB" to match your SVG IDs.

const RSS_SOURCES = {
  // SPAIN (ES)
  ES: [
    'https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml',
    'https://ep00.epimg.net/rss/elpais/portada.xml',
    'https://www.abc.es/rss/feeds/abcPortada.xml',
    'https://www.larazon.es/rss/portada.xml',
    'https://www.lavanguardia.com/rss/home.xml',
    'https://www.elconfidencial.com/rss/espana/',
    'https://www.eldiario.es/rss/',
    'https://www.elespanol.com/rss/',
    'https://www.elperiodico.com/es/rss/rss_portada.xml',
    'https://www.rtve.es/api/rss/portada',
    'https://www.europapress.es/rss/rss.aspx',
    'https://www.publico.es/rss/publico/rss/',
    'https://okdiario.com/feed',
    'https://www.huffingtonpost.es/feeds/index.xml',
    'https://www.infobae.com/espana/rss',
    'https://www.cope.es/rss/portada',
    'https://cadenaser.com/rss/cadena_ser/portada.xml',
    'https://www.lasexta.com/rss/2849-00001.xml',
    'https://www.telemadrid.es/rss/portada.xml'
  ],

  // FRANCE (FR)
  FR: [
    'https://www.lemonde.fr/rss/une.xml',
    'https://www.lefigaro.fr/rss/figaro_actualites.xml',
    'https://www.liberation.fr/arc/outboundfeeds/rss/',
    'https://www.lepoint.fr/24h-infos/rss.xml',
    'https://www.lexpress.fr/rss.xml',
    'https://www.francetvinfo.fr/titres.rss',
    'https://www.france24.com/fr/rss',
    'https://www.leparisien.fr/arc/outboundfeeds/rss/',
    'https://www.bfmtv.com/rss/',
    'https://www.rfi.fr/fr/rss',
    'https://www.marianne.net/rss.xml',
    'https://www.valeursactuelles.com/feed',
    'https://www.mediapart.fr/articles/feed',
    'https://www.huffingtonpost.fr/feeds/index.xml',
    'https://www.20minutes.fr/feeds/rss-une.xml'
  ],

  // GERMANY (DE)
  DE: [
    'https://www.tagesschau.de/index~rss2.xml',
    'https://www.spiegel.de/international/index.rss',
    'https://www.spiegel.de/schlagzeilen/tops/index.rss',
    'https://www.zeit.de/index.xml',
    'https://www.faz.net/rss/aktuell/',
    'https://www.welt.de/feeds/topnews.rss',
    'https://www.sueddeutsche.de/contentlayout/rss',
    'https://www.bild.de/rssfeeds/rss-16725492,feed=bild.xml',
    'https://www.handelsblatt.com/contentexport/feed/schlagzeilen',
    'https://www.dw.com/rssfeed',
    'https://www.t-online.de/rss'
  ],

  // ITALY (IT)
  IT: [
    'https://www.ansa.it/sito/ansait_rss.xml',
    'https://www.repubblica.it/rss/homepage/rss2.0.xml',
    'https://xml2.corriereobjects.it/rss/homepage.xml',
    'https://www.lastampa.it/rss.xml',
    'https://www.ilfattoquotidiano.it/feed/',
    'https://www.ilgiornale.it/feed.xml',
    'https://www.ilmessaggero.it/rss/home.xml',
    'https://www.iltempo.it/rss/home.xml',
    'https://www.rainews.it/feeds/news.rss',
    'https://www.adnkronos.com/rss/',
    'https://www.huffingtonpost.it/feeds/index.xml',
    'https://www.linkiesta.it/feed/'
  ],

  // UNITED KINGDOM (GB)
  GB: [
    'http://feeds.bbci.co.uk/news/rss.xml',
    'https://www.theguardian.com/uk-news/rss',
    'https://www.telegraph.co.uk/news/rss.xml',
    'https://feeds.skynews.com/feeds/rss/home.xml',
    'https://www.independent.co.uk/news/uk/rss',
    'https://www.ft.com/?format=rss',
    'https://www.dailymail.co.uk/news/index.rss',
    'https://www.express.co.uk/posts/rss/1/news',
    'https://www.thesun.co.uk/news/feed/',
    'https://www.standard.co.uk/rss',
    'https://www.newstatesman.com/feed',
    'https://www.spectator.co.uk/feed',
    'https://news.sky.com/uk/rss',
    'https://www.gbnews.com/rss'
  ],

  // NETHERLANDS (NL)
  NL: [
    'https://feeds.nos.nl/nosnieuwsalgemeen',
    'https://www.nu.nl/rss/Algemeen',
    'https://www.telegraaf.nl/rss',
    'https://www.nrc.nl/rss/',
    'https://www.volkskrant.nl/voorpagina/rss.xml',
    'https://www.parool.nl/voorpagina/rss.xml',
    'https://www.rtlnieuws.nl/service/rss',
    'https://www.trouw.nl/voorpagina/rss.xml',
    'https://www.ad.nl/nieuws/rss.xml'
  ],

  // SWEDEN (SE)
  SE: [
    'https://www.svt.se/nyheter/rss.xml',
    'https://www.aftonbladet.se/nyheter/rss.xml',
    'https://feeds.expressen.se/nyheter',
    'https://www.dn.se/rss/',
    'https://www.svd.se/?service=rss',
    'https://www.gp.se/2.135/1.222.rss',
    'https://www.sverigesradio.se/rss/nyheter',
    'https://omni.se/rss'
  ],

  // NORWAY (NO)
  NO: [
    'https://www.nrk.no/toppsaker.rss',
    'https://feeds.vg.no/vgartikkel',
    'https://www.aftenposten.no/rss',
    'https://www.dagbladet.no/feed',
    'https://www.tv2.no/rss',
    'https://www.abcnyheter.no/node/feeds/rss',
    'https://www.nettavisen.no/rss'
  ],

  // PORTUGAL (PT)
  PT: [
    'https://www.publico.pt/rss',
    'https://expresso.pt/api/feed',
    'https://observador.pt/feed/',
    'https://www.rtp.pt/rss/',
    'https://sicnoticias.pt/feed/',
    'https://feeds.feedburner.com/correiodamanha-ultimas',
    'https://www.jn.pt/rss/'
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

const parser = new Parser();

function normalizeArticle(raw, fallbackISO) {
  const url = raw.link || raw.url || '';
  let domain = '';
  try { domain = new URL(url).hostname.replace(/^www\./, ''); } catch {}
  const source = raw.source?.name || domain || 'Unknown';

  // decide country
  const mappedISO = DOMAIN_TO_ISO[domain];
  const country = mappedISO || fallbackISO || null;

  return {
    title: raw.title || '',
    url,
    source,
    publishedAt: raw.pubDate || raw.publishedAt || new Date().toISOString(),
    summary: raw.contentSnippet || raw.description || raw.summary || '',
    domain,
    country
  };
}

async function fetchFromNewsAPI(fallbackISO, q) {
  if (!NEWSAPI_KEY) return [];
  const query =
    q && q.trim()
      ? q
      : (Array.isArray(KEYWORDS_ALL) && KEYWORDS_ALL.length
          ? KEYWORDS_ALL.slice(0, 15).map(t => `"${t}"`).join(' OR ')
          : 'Europe news');

  try {
    const resp = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 50
      },
      headers: { 'X-Api-Key': NEWSAPI_KEY }
    });
    const articles = resp.data?.articles || [];
    // Let normalizeArticle decide country via DOMAIN_TO_ISO; fallback to block ISO
    return articles.map(a => normalizeArticle(a, fallbackISO));
  } catch {
    return [];
  }
}

async function fetchFromRSS(countryISO) {
  const feeds = RSS_SOURCES[countryISO] || [];
  const items = [];

  for (const feedUrl of feeds) {
    try {
      const feed = await parser.parseURL(feedUrl);
      for (const it of feed.items || []) {
        const art = normalizeArticle(it, countryISO);

        // Asigna país por dominio si existe en el mapa; si no, usa el del bloque
        if (!art.country) {
          let domain = '';
          try { domain = new URL(art.url).hostname.replace(/^www\./,''); } catch {}
          art.country = DOMAIN_TO_ISO[domain] || countryISO || null;
        }

        // --- FILTRO POR KEYWORDS AQUÍ ---
        if (matchesAnyKeyword(art)) items.push(art);
      }
    } catch (e) {
      // opcional: log
      // console.warn(`RSS error for ${countryISO} ${feedUrl}:`, e.message);
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
  const [rss, api] = await Promise.all([
    fetchFromRSS(countryISO),
    fetchFromNewsAPI(countryISO)
  ]);
  const merged = dedupe([...rss, ...api]).sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  cache.newsByCountry.set(countryISO, merged.slice(0, 200));
}

async function refreshAll() {
  await Promise.all(COUNTRIES.map(fetchCountry));

  const counts = {};
  for (const list of cache.newsByCountry.values()) {
    for (const a of list || []) {
      if (!a.country) continue;
      counts[a.country] = (counts[a.country] || 0) + 1;
    }
  }
  cache.counts = counts;
  cache.lastUpdated = new Date().toISOString();
}

// Initial load and schedule
refreshAll().catch(()=>{});
setInterval(refreshAll, 5 * 60 * 1000); // every 5 minutes

// Endpoints
app.get('/api/counts', (req, res) => {
  res.json({ counts: cache.counts, lastUpdated: cache.lastUpdated });
});

app.get('/api/news', (req, res) => {
  const country = (req.query.country || '').toString().toUpperCase();
  const q = (req.query.q || '').toString().trim().toLowerCase();

  let items = [];
  if (country && country !== 'ALL') {
    items = cache.newsByCountry.get(country) || [];
  } else {
    for (const arr of cache.newsByCountry.values()) items = items.concat(arr || []);
  }

  if (q) {
    const hay = (a) =>
      `${a.title} ${a.summary} ${a.source} ${a.domain}`.toLowerCase();
    items = items.filter(a => hay(a).includes(q));
  }

  res.json(items.slice(0, 200));
});

// SOLO PARA DIAGNÓSTICO: devuelve noticias sin filtrar por keywords (RSS + NewsAPI)
app.get('/api/news-unfiltered', async (req, res) => {
  const country = (req.query.country || '').toString().toUpperCase();

  // versión sin filtro: clon simple de fetchCountry
  async function fetchCountryUnfiltered(countryISO) {
    const feeds = RSS_SOURCES[countryISO] || [];
    const items = [];

    for (const feedUrl of feeds) {
      try {
        const feed = await parser.parseURL(feedUrl);
        for (const it of feed.items || []) {
          const art = normalizeArticle(it, countryISO);
          if (!art.country) {
            let domain = '';
            try { domain = new URL(art.url).hostname.replace(/^www\./,''); } catch {}
            art.country = DOMAIN_TO_ISO[domain] || countryISO || null;
          }
          items.push(art); // SIN matchesAnyKeyword
        }
      } catch {}
    }

    // + NewsAPI (si hay KEY)
    const api = await fetchFromNewsAPI(countryISO);
    return dedupe([...items, ...api]).sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  try {
    if (country && country !== 'ALL') {
      const list = await fetchCountryUnfiltered(country);
      res.json(list.slice(0,200));
    } else {
      // todas
      const all = [];
      for (const iso of Object.keys(RSS_SOURCES)) {
        const list = await fetchCountryUnfiltered(iso);
        all.push(...list);
      }
      res.json(dedupe(all).slice(0,200));
    }
  } catch (e) {
    res.status(500).json({error:'debug failed', message: String(e)});
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

