import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const gasistas = JSON.parse(readFileSync(join(__dirname, '../src/data/gasistas.json'), 'utf-8'));

const HOST = 'gasistasrosario.com.ar';
const KEY = 'cd466a86e1674bdb8332901a17871ed2';
const BASE_URL = `https://${HOST}`;

const urls = [
  `${BASE_URL}/`,
  ...gasistas.map(g => `${BASE_URL}/${g.slug}/`),
];

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `${BASE_URL}/${KEY}.txt`,
  urlList: urls,
});

console.log(`Enviando ${urls.length} URLs a IndexNow...`);
urls.forEach(u => console.log(' -', u));

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body,
});

console.log(`\nRespuesta: HTTP ${res.status}`);
if (res.status === 200) {
  console.log('OK — URLs enviadas correctamente.');
} else {
  const text = await res.text();
  console.log('Respuesta:', text);
}
