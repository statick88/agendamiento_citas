import { useState, useEffect } from 'react';

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedDate && name && description) {
      const newAppointment = { date: selectedDate, name, description };
      fetch('http://localhost:3001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      })
      .then(response => response.json())
      .then(data => {
        alert(`Cita creada con éxito para el día ${selectedDate}`);
        setCitas([...citas, data]);
      })
      .catch(error => {
        console.error('Error al crear la cita:', error);
      });
    } else {
      alert('Por favor, complete todos los campos para agendar la cita.');
    }
  };

  return (
    <div className="padre">
      <div className="formulario">
        <h2>Agendar Nueva Cita</h2>
        <div className="campo">
          <label>Seleccione la fecha para agendar una cita:</label>
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="campo">
          <label>Nombre:</label>
          <input type="text" onChange={handleNameChange} />
        </div>
        <div className="campo">
          <label>Descripción:</label>
          <textarea onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="campo">
          <button className="botonfinal" onClick={handleConfirmClick}>Confirmar cita</button>
        </div>
      </div>
    </div>
  );
}

export default CrearCita;
