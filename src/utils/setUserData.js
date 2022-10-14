export default async function setUserData({cuil, nombre, contraseña, correo}) {
  try {
    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify({ query: `
      mutation {
        insertUsuario(cuil: ${cuil}, nombre: "${nombre}", contrasenia: "${contraseña}", correo: "${correo}") {
          nombre
        }
      }
      `  }),
      headers: { "Content-type": "application/json" },
    });
    const content = await response.json();
    return content
  } catch (error) {
    console.log("Error al transmitir los datos ", error);
  }
}
