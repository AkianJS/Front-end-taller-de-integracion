export default async function getAllUsers() {
    try {
      const response = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: ` 
           {
            getAllUsuarios {
                nombre
            }
           }
    `  }),
      });
      const content = await response.json();
      console.log(content.data.getAllUsuarios);
    } catch (error) {
      console.log("Error al transmitir los datos ", error);
    }
  }