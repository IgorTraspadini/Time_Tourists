export async function getToken() {
  const url = "/.netlify/functions/tokenGet";
  try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      //const data = await response.json();
      return data;
  } catch (err) {
      console.log(err);
  }
}