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
      <h2>Citas Agendadas:</h2>
      <div>
        {citas.map(cita => (
          <div key={cita.id} className="cita-container">
            <p className="cita-date">{cita.date} - {cita.name}</p>
            <p className="cita-description">{cita.description}</p>
            <Link to={`/editar-cita/${cita.id}`}>Editar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCitasAgendadas;
