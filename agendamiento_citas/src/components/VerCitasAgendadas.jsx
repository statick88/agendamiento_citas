import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerCitasAgendadas() {
  console.log('Rendering VerCitasAgendadas component');
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments')
      .then(response => response.json())
      .then(data => setCitas(data));
  }, []);

  return (
    <div>
      <Link to="/crear-cita">Crear nueva cita</Link>
      <h2>Citas Agendadas:</h2>
      <div>
        {citas.map(cita => (
          <div key={cita.id}>
            <p>{cita.date} - {cita.name}</p>
            <p>{cita.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCitasAgendadas;
