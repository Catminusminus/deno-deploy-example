import React from 'https://esm.sh/react';
import { renderToString } from 'https://esm.sh/react-dom/server';


addEventListener("fetch", (event) => {
  const html = renderToString(
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
