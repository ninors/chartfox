export default {
  async fetch(request) {
    const target = new URL(request.url).searchParams.get("url");
    if (!target) return new Response("Missing url parameter", { status: 400 });

    const resp = await fetch(target, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const body = await resp.text();
    return new Response(body, {
      status: resp.status,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
