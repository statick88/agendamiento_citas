import Link from "next/link";

export default function Home() {
  return (
    <>
     <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Agendamiento de Citas Médicas</h1>
          <p className="mt-2">Tu salud es nuestra prioridad. Agenda tu cita hoy mismo.</p>
        </div>
      </header>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Fácil de Usar</h2>
              <p>Con nuestro sistema de agendamiento, reservar una cita médica es simple y rápido.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Variedad de Especialidades</h2>
              <p>Contamos con profesionales en diversas especialidades para cubrir todas tus necesidades de salud.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Recordatorios Automáticos</h2>
              <p>No te preocupes por olvidar tu cita. Recibirás recordatorios automáticos para estar siempre informado.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¡Agenda tu cita hoy mismo!</h2>
          <p className="mb-8">Cuida de tu salud con nosotros. Estamos aquí para ayudarte.</p>
          <Link href="/crear-cita" className="bg-white text-blue-500 py-2 px-6 rounded-full font-bold hover:bg-blue-400 transition duration-300">
           Agendar Cita
          </Link>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Agendamiento de Citas Médicas</p>
        </div>
      </footer>
    </div>
    </>
  );
}
