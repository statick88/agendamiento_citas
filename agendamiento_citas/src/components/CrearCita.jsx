import { useState, useEffect } from 'react';

function CrearCita() {
  console.log('Rendering CrearCita component');
  const [selectedDate, setSelectedDate] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/appointments') // Asegúrate de reemplazar esto con la URL de tu servidor
      .then(response => response.json())
      .then(data => setCitas(data.appointments));
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

const handleConfirmClick = () => {
  if (selectedDate) {
    // Crear el objeto cita con la información necesaria
    const newAppointment = {
      date: selectedDate,
      // Puedes añadir más campos si es necesario, como nombre o descripción
    };

    // Opciones para la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAppointment)
    };

    // Enviar la nueva cita al servidor
    fetch('http://localhost:3001/appointments', requestOptions)
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar la respuesta del servidor
        // Por ejemplo, puedes recargar las citas o añadir la nueva cita al estado local
        console.log(data);
        alert(`Cita creada para el día ${selectedDate}`);
        setCitas([...citas, data]);
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error al crear la cita:', error);
      });
  } else {
    // Si no se seleccionó una fecha, puedes mostrar una alerta o manejar este caso como consideres necesario
    alert('Por favor, selecciona una fecha para la cita.');
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
