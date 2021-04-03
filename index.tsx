// @deno-types="https://servestjs.org/@v1.1.7/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@v1.1.7/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

addEventListener("fetch", (event) => {
  const e = React.createElement;

  const html = ReactDOMServer.renderToString(
    e("html", null, [
      e("head", { key: "head" }, e("title", null, "Deno Deploy Example")),
      e("body", { key: "body" }, "Hello Deno Deploy!"),
    ]),
  );

  event.respondWith(
    new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    }),
  );
});
