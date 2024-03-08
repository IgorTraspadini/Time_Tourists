export async function getToken() {
  const url = "/.netlify/functions/tokenGet";
  try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.token);
      //const data = await response.json();
      return data.token;
  } catch (err) {
      console.log(err);
  }
}