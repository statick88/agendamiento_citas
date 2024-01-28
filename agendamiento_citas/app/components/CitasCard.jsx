"use client";
import { useRouter } from "next/navigation";

function CitasCard({ cita }) {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{cita.name}</h2>
      <p className="text-gray-600 mb-4">{cita.description}</p>
      <p className="text-gray-500">
        Fecha: {new Date(cita.date).toLocaleDateString()}
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => router.push("/actualizar-cita/" + cita.id)}
          className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-400 transition duration-300"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default CitasCard;
