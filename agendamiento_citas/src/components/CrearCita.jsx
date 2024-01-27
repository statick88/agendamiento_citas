import { useState, useEffect } from 'react';
import './CrearCita.css'; // Importa el CSS

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState(null);
  const [citaName, setCitaName] = useState('');
  const [citaDescription, setCitaDescription] = useState(''); 
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments')
      .then(response => response.json())
      .then(data => setCitas(data));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleNameChange = (event) => { 
    setCitaName(event.target.value);
  };

  const handleDescriptionChange = (event) => { 
    setCitaDescription(event.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedDate && citaName && citaDescription) {
      fetch('http://localhost:3001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          name: citaName, 
          description: citaDescription, 
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert(`Se creó una cita el día ${selectedDate}, confirma tu cita`);
          setCitas([...citas, data]); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="crear-cita-container"> {/* Añade la clase al contenedor principal */}
      <p>Seleccione la fecha para agendar una cita:</p>
      <input type="date" onChange={handleDateChange} />
      <input type="text" placeholder="Nombre de la cita" onChange={handleNameChange} />
      <input type="text" placeholder="Descripción de la cita" onChange={handleDescriptionChange} />
      <button onClick={handleConfirmClick}>Confirmar cita</button>
    </div>
  );
}

export default CrearCita;

