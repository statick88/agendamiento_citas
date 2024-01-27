"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function CrearCita({ params }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (params.id) {
      fetch("http://localhost:4000/appointments/" + params.id)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setDescription(data.description);
        });
    }
  }, []);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      fetch("http://localhost:4000/appointments/" + params.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });
    } else {
      await fetch("http://localhost:4000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });
    }

    router.push("/ver-citas");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">Crear Nueva Cita Médica</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Nombre
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            value={name}
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
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            placeholder="Descripción"
            value={description}
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
        >
          {params.id ? "Actualizar Cita" : "Crear Cita"}
        </button>
        {params.id && (
          <button
            onClick={async () => {
              const res = fetch(
                "http://localhost:4000/appointments/" + params.id,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              router.push("/ver-citas");
            }}
            className="bg-red-500 text-white py-2 px-6 rounded-full font-bold hover:bg-red-400 transition duration-300 ml-4"
          >
            Eliminar cita
          </button>
        )}
      </form>
    </>
  );
}

export default CrearCita;
