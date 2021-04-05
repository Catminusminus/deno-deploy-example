import render from 'https://esm.sh/preact-render-to-string@5.1.18';
import { h } from 'https://esm.sh/preact@10.5.13';


addEventListener("fetch", (event) => {
  const html = render(
    <html>
      <head>
        <title>Deno Deploy Example</title>
      </head>
      <body>
        Hello Deno Deploy!
      </body>
    </html>
  );

  event.respondWith(
    new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    }),
  );
});
