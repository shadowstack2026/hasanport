# PRODUCT – Hasan Hamzis portfolio

## Målgrupp
Rekryterare och tekniska chefer som söker en junior datateknikingenjör eller praktikant inom mjukvara, inbyggda system och dataanalys.

## Ton
Saklig, ödmjuk och personlig. Texten är på engelska (som originalet); koden, kommentarerna och identifierarna är på svenska.

## Designprinciper
- Mörkt tema med cyan accent; färgkoder skrivs direkt i varje CSS-regel (inga CSS-variabler).
- Bara information som finns – inga påhittade sektioner eller procentbetyg.
- Små steg: en komponent per sektion, varje komponent = X.jsx + X.css.
- Data som upprepas (projekt, kompetenser, utbildning, fakta) ligger i src/data/ och visas med .map().
- Delade konstanter (namn, e-post, länkar) ligger i src/data/Settings.js.
- Tillgänglighet: semantisk HTML, aria-etiketter, riktiga alt-texter, respekt för reduced-motion, utskriftsstil för "Save as PDF".

## Struktur
Originalet är en enda sida med ankarnavigering (#about, #skills …), därför finns en enda route (`/`).
Här finns plats för ett kommande hub-projekt (läggs i src/data/projekt.json).
