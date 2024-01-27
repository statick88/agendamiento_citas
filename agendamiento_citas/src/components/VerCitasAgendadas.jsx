import { useState, useEffect } from 'react';
import './VerCitasAgendadas.css'; // Importa el CSS

function VerCitasAgendadas() {
  console.log('Rendering VerCitasAgendadas component');
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments') // Asegúrate de reemplazar esto con la URL de tu servidor
      .then(response => response.json())
      .then(data => setCitas(data)); // Eliminar .appointment para actualizar el estado de citas
  }, []);

  return (
    <div className="ver-citas-container"> {/* Añade la clase al contenedor principal */}
      <h2>Citas Agendadas:</h2>
      <table className="ver-citas-table"> {/* Utiliza una tabla HTML */}
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {citas && citas.map(cita => (
            <tr key={cita.id}>
              <td>{cita.date}</td>
              <td>{cita.name}</td>
              <td>{cita.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerCitasAgendadas;
