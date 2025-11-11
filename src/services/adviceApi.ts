export const fetchAdvice = async () => {
  const base = "https://api.adviceslip.com";

  const res = await fetch(`${base}/advice?t=${Date.now()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("API Error");

  return res.json();
};
