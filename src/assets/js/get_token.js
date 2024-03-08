export async function getToken() {
  const url = "/.netlify/functions/tokenGet";
  try {
      const response = await fetch(url);
      console.log(response);
      const data = await JSON.parse("'"+ response +"'");
      //const data = await response.json();
      return data;
  } catch (err) {
      console.log(err);
  }
}