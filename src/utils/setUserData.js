export default async function setUserData(data = {}) {
  try {
    const response = await fetch("http://localhost:8081/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const content = await response.json();
    console.log(content);
  } catch (error) {
    console.log("Error al transmitir los datos ", error);
  }
}
