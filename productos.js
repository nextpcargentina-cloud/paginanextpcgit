export default async function handler(request, context) {
  const NB_URL = "https://api.nb.com.ar/v1/priceListCsv/2d1945bf4fe8628da36c74fb426b9059";

  try {
    const resp = await fetch(NB_URL);
    const text = await resp.text();
    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=43200",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = { path: "/api/productos" };
