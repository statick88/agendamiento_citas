import { useState, useEffect } from 'react';

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState('');
  const [citas, setCitas] = useState([]);
  const [newCita, setNewCita] = useState({
    date: '',
    name: '',
    description: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/appointments')
      .then(response => response.json())
      .then(data => setCitas(data));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setNewCita({
      ...newCita,
      date: event.target.value
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCita({
      ...newCita,
      [name]: value
    });
  };

  const handleConfirmClick = () => {
    if (selectedDate && newCita.name && newCita.description) {
      fetch('http://localhost:3001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCita),
      })
        .then(response => response.json())
        .then(data => {
          setCitas([...citas, data]);
          setNewCita({
            date: '',
            name: '',
            description: ''
          });
          setSelectedDate('');
        })
        .catch(error => console.error('Error creating appointment:', error));
    }
  };

  return (
    <div>
      <form>
      <p>Elija la fecha para agendar una cita:</p>
      <input type="date" onChange={handleDateChange} value={selectedDate} />
      <br />
      <p>Ingrese los detalles de la cita:</p>
      
        <label>Ingrese el nombre del paciente:</label>
        <input type="text" name="name" value={newCita.name} onChange={handleInputChange} />
        <br /><br />
        <label>Descripción:</label>
        <textarea name="description" value={newCita.description} onChange={handleInputChange} />
        <br /><br />
        <button type="button" onClick={handleConfirmClick}>Confirmar cita</button>
      </form>
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