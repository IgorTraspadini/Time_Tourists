export default async (req, context) => {
  const apiKey = Netlify.env.get("APP_GREETING");
  return new Response(JSON.stringify({token: apiKey}));
};