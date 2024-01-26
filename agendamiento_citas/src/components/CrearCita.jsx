import { useState, useEffect } from 'react';

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState(null);
  const [citas, setCitas] = useState([]);
  const [citaName, setCitaName] = useState('');
  const [citaDescription, setCitaDescription] = useState(''); 

  useEffect(() => {
    fetch('http://localhost:3001/appointments') // Asegúrate de reemplazar esto con la URL de tu servidor
      .then(response => response.json())
      //.then(data => setCitas(data.appointments));
      .then(data => setCitas(data));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleConfirmClick = () => {
    /*
    if (selectedDate) {
      alert(`Se creará una cita el día ${selectedDate}, confirma tu cita`);
      // Aquí puedes enviar la cita al servidor o almacenarla en el estado global de la aplicación
    }*/
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
    <div>
      <p>Seleccione la fecha para agendar una cita:</p>
      <input type="date" onChange={handleDateChange} />
      <input type="text" placeholder="Nombre de la cita" onChange={handleNameChange} /> {/* Nuevo campo de entrada para el nombre de la cita */}
      <input type="text" placeholder="Descripción de la cita" onChange={handleDescriptionChange} /> {/* Nuevo campo de entrada para la descripción de la cita */}
      <button onClick={handleConfirmClick}>Confirmar cita</button>
      <div>
      {citas && citas.map(cita => (
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
