# robinvanderstar-site

Professionele persoonlijke profielsite voor Robin van der Star. De site presenteert ervaring, projecten, skills, cases en contactgegevens in een moderne professionele hub, zonder klassieke cv-uitstraling.

## Techniek

- HTML
- CSS
- JavaScript

De website is een volledig statische HTML/CSS/JS-site. Er is geen buildproces nodig en er worden geen externe libraries of framework-builds gebruikt.

## Lokaal bekijken

Open `index.html` direct in de browser, of gebruik een lokale Live Server-extensie in je editor.

## Deployment via Cloudflare Pages

Gebruik Cloudflare Pages als voorkeursroute voor deployment vanuit GitHub.

Cloudflare Pages instellingen:

- Platform: Cloudflare Pages
- Git provider: GitHub
- Repository: robinvanderstar-site
- Production branch: main
- Framework preset: None
- Build command: leeg laten
- Build output directory: /
- Environment variables: geen

Elke push naar `main` moet automatisch een nieuwe Cloudflare Pages-deploy triggeren. De tijdelijke live URL wordt door Cloudflare Pages aangemaakt, bijvoorbeeld `robinvanderstar-site.pages.dev`.

De huidige Cloudflare Workers-deploy mag voorlopig blijven bestaan, maar is niet de voorkeursroute voor deze statische website.

## Indexering

De site bevat tijdelijk `noindex, nofollow` in `index.html` en blokkeert crawlers via `robots.txt`, omdat de site nog in opbouw is.

Verwijder dit pas zodra `robinvanderstar.nl` definitief live mag en geïndexeerd mag worden.

## Sitemap

`sitemap.xml` verwijst voorlopig naar `https://robinvanderstar.nl/`. Deze sitemap klopt pas definitief zodra het eigen domein `robinvanderstar.nl` is gekoppeld.
