# RayMax Netlify Project

Contenuto del pacchetto:
- `public/index.html` home con link rapidi
- `public/preventivo.html` preventivo mobile online
- `public/calendario.html` calendario aggiornabile manualmente
- `public/config.js` file configurazione modificabile
- `netlify/functions/*` funzioni per leggere/scrivere il calendario
- `netlify.toml` configurazione deploy

## Deploy su Netlify
1. Crea un nuovo sito da repository oppure trascina il progetto su Netlify.
2. Se usi un repository, lascia attivi:
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
3. Le date occupate vengono salvate in Netlify Blobs.
4. Dopo il deploy apri `/preventivo.html` o `/calendario.html`.

## Note
- Il preventivo salva automaticamente la data evento nel calendario quando generi l'immagine.
- Il calendario permette di inserire, modificare o eliminare note manualmente.
- `config.js` è un file di esempio: puoi sostituirlo con il tuo config completo.
- Questa versione non include protezione login della pagina calendario.
