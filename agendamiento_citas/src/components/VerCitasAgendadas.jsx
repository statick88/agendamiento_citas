import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerCitasAgendadas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments')
      .then(response => response.json())
      .then(data => setCitas(data));
  }, []);

  const handleUpdateCita = (id) => {
    // Implementa la lógica para abrir un formulario modal o redirigir a una página de actualización
    console.log(`Actualizar cita con ID: ${id}`);
    // Puedes abrir un formulario modal, redirigir a una página de actualización, etc.
  };

  return (
    <div>
      <Link to="/crear-cita">Crear nueva cita</Link>
      <h2>Citas Agendadas:</h2>
      <div>
        {citas.map(cita => (
          <div key={cita.id}>
            <p>{cita.date}</p>
            <p>{cita.name}</p>
            <p>{cita.description}</p>
            {/* Agrega un botón para actualizar la cita */}
            <button onClick={() => handleUpdateCita(cita.id)}>Actualizar Cita</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCitasAgendadas;
