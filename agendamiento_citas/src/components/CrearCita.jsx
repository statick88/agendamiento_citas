import { useState, useEffect } from 'react';

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments')
      .then(response => response.json())
      .then(data => setCitas(data));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedDate) {
      alert(`Se creará una cita el día ${selectedDate}, confirma tu cita`);
      // Aquí puedes enviar la cita al servidor o almacenarla en el estado global de la aplicación
    }
  };

  return (
    <div>
      <p>Seleccione la fecha para agendar una cita:</p>
      <input type="date" onChange={handleDateChange} />
      <button onClick={handleConfirmClick}>Confirmar cita</button>
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

export default CrearCita;
