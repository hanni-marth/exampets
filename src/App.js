import { useEffect, useState } from "react";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pets") //api
      .then((res) => res.json())
      .then((data) => setPets(data.pets))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Mascotas</h1>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
            {pet.nombre} - {pet.raza} - {pet.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
