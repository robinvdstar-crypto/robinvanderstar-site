# robinvanderstar-site

Persoonlijke professionele profielsite van Robin van der Star. De site is een moderne onepager voor profiel, ervaring, projecten, skills, cases, persoonlijke drive en contact, met daarnaast een compacte printbare cv-pagina.

## Techniek

- HTML
- CSS
- JavaScript

De website is volledig statisch. Er is geen buildproces nodig.

## Deployment

- Platform: Cloudflare Pages
- GitHub repo: https://github.com/robinvdstar-crypto/robinvanderstar-site
- Production branch: main

Cloudflare Pages instellingen:

- Framework preset: None
- Build command: leeg laten
- Build output directory: /
- Production branch: main

Elke push naar `main` kan automatisch een nieuwe Cloudflare Pages-deploy triggeren.

## Pagina's

- `index.html`: onepage profielsite
- `cv.html`: compacte printbare cv-pagina

## Indexering

`noindex, nofollow` staat tijdelijk actief in `index.html` en `cv.html`. Ook blokkeert `robots.txt` crawlers voorlopig met `Disallow: /`.

Verwijder dit pas zodra `robinvanderstar.nl` definitief gekoppeld is en de site geindexeerd mag worden.

## Domein

Het eigen domein `robinvanderstar.nl` kan later aan Cloudflare Pages worden gekoppeld. `sitemap.xml` verwijst alvast naar `https://robinvanderstar.nl/` en klopt definitief zodra dat domein actief is.
