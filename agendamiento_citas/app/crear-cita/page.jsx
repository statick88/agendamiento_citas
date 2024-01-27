'use client'
import { useRouter } from "next/navigation";
function CrearCita() {
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const res = await fetch("http://localhost:4000/appointments", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, description}),
    })
    const data = await res.json();
    console.log(data);
  }
  const router = useRouter();
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Crear Nueva Cita Médica</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Descripción"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Fecha
          </label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            pattern="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-400 transition duration-300"
          onClick={() => router.push("/ver-citas")}
        >
          Crear Cita
        </button>
      </form>
    </>
  );
}

export default CrearCita;
