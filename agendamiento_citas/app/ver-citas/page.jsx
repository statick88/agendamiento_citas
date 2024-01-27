async function loadCitas(){
  const res = await fetch("http://localhost:4000/appointments")
  const data = await res.json();
  return data;
}

async function VerCitasAgendadas() {
  const citas = await loadCitas();
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {citas.map((cita) => (
          <div key={cita.id} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{cita.name}</h2>
            <p className="text-gray-600 mb-4">{cita.description}</p>
            <p className="text-gray-500">Fecha: {new Date(cita.date).toLocaleString()}</p>

            {/* Botones de Actualizar y Eliminar Cita */}
            <div className="flex justify-between mt-4">
              <button
      
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-400 transition duration-300"
              >
                Actualizar Cita
              </button>
              <button
                
                className="bg-red-500 text-white py-2 px-6 rounded-md font-bold hover:bg-red-400 transition duration-300"
              >
                Eliminar Cita
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerCitasAgendadas