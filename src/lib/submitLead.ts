const API_URL = "https://leads-client.digiconseil.fr/v1/leads";
const SITE_KEY = "pk_live_14a35b1df077f694";

export async function submitLead(form: string, fields: Record<string, string>) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Site-Key": SITE_KEY,
    },
    body: JSON.stringify({
      form,
      fields,
      meta: { page: window.location.pathname },
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) throw new Error(data.error ?? "Envoi impossible");
}
