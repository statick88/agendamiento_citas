import CitasCard from "../components/CitasCard";
async function loadCitas() {
  const res = await fetch("http://localhost:4000/appointments");
  const data = await res.json();
  return data;
}

async function VerCitasAgendadas() {
  const citas = await loadCitas();
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {citas.map((cita) => (
            <CitasCard key={cita.id} cita={cita} />
          ))}
        </div>
      </div>
    </>
  );
}

export default VerCitasAgendadas;
