export default async function handler(req, res) {
  const NB_URL = "https://api.nb.com.ar/v1/priceListCsv/2d1945bf4fe8628da36c74fb426b9059";

  try {
    const resp = await fetch(NB_URL);
    const text = await resp.text();
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "public, max-age=43200");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
