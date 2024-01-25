import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerCitasAgendadas() {
  console.log('Rendering VerCitasAgendadas component');
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments') 
      .then(response => response.json())
      .then(data => setCitas(data)); //Borrar .appointments
  }, []);

  return (
    <div>
      <Link to="/ver-cita">Crear nueva cita</Link>
      <h2>Citas Agendadas:</h2>
      <div>
      {citas && citas.map(cita => (
        <div key={cita.id}>
          <p>Fecha     -     Nombre</p>
          <p>{cita.date} - {cita.name}</p>
          Descripcion
          <p>{cita.description}</p>
          <p>------------------------------</p>
        </div>
         
      ))}
      </div>
    </div>
  );
}

export default VerCitasAgendadas;
