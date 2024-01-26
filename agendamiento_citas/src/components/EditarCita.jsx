import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function EditarCita() {
  const { id } = useParams();
  const history = useHistory();
  const [cita, setCita] = useState({});
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    description: ''
  });

  useEffect(() => {
    const apiUrl = `http://localhost:3001/appointments/${id}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCita(data);
        setFormData({
          date: data.date,
          name: data.name,
          description: data.description
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos de la cita:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/appointments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(updatedCita => {
      console.log('Cita actualizada:', updatedCita);
      alert(`Cita actualizada con éxito.`);
      // Puedes redirigir a la página de citas agendadas o realizar otras acciones
      history.push('/ver-citas');
    })
    .catch(error => {
      console.error(`Error al actualizar la cita:`, error);
      alert('Error al actualizar la cita. Inténtalo de nuevo.');
    });
  };
  return (
    <div className="editar-cita-container">
      <h2>Editar Cita</h2>
      <form onSubmit={handleSubmit} className="editar-cita-form">
        <label htmlFor="date">Fecha:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} />

        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="description">Descripción:</label>
        <input id="description" name="description" value={formData.description} onChange={handleInputChange} />

        <button type="submit">Actualizar Cita</button>
      </form>
    </div>
  );
}

export default EditarCita;
