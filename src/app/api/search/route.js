// app/api/search/route.js
import fetch from "node-fetch";

export async function GET(request) {
  // Get query parameters from the URL
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const orderBy = url.searchParams.get("orderBy") || "relevance";

  try {
    // Fetch data from the Guardian API
    const apiUrl = `https://content.guardianapis.com/search?api-key=d77d446f-226e-48ad-a551-0fb9631653bf&q=${q}&order-by=${orderBy}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Return the API data as a response
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Guardian API" }),
      { status: 500 }
    );
  }
}
