import { useState, useEffect } from 'react';
import './VerCitasAgendadas.css'; // Importa el CSS

function VerCitasAgendadas() {
  console.log('Rendering VerCitasAgendadas component');
  const [citas, setCitas] = useState([]);
  const [editingCita, setEditingCita] = useState(null); // Estado para controlar la edición de una cita

  useEffect(() => {
    fetch('http://localhost:3001/appointments') // Asegúrate de reemplazar esto con la URL de tu servidor
      .then(response => response.json())
      .then(data => setCitas(data)); // Eliminar .appointment para actualizar el estado de citas
  }, []);

  const handleEditClick = (id) => {
    // Configurar el estado de editingCita con la cita que se está editando
    const citaToEdit = citas.find(cita => cita.id === id);
    setEditingCita(citaToEdit);
  };

  const handleCancelEdit = () => {
    // Cancelar la edición estableciendo editingCita a null
    setEditingCita(null);
  };

  const handleSaveEdit = () => {
    // Implementar la lógica para guardar los cambios de edición en la cita
    // Enviar una solicitud PUT al servidor con los datos actualizados
    fetch(`http://localhost:3001/appointments/${editingCita.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingCita),
    })
      .then(response => response.json())
      .then(updatedCita => {
        const updatedCitas = citas.map(cita =>
          cita.id === updatedCita.id ? updatedCita : cita
        );
        setCitas(updatedCitas);
        setEditingCita(null); // Completa la edición y vuelve a la vista de lista de citas
      })
      .catch(error => {
        console.error('Error al guardar la edición:', error);
      });
  };

  const handleInputChange = (e, field) => {
    // Actualizar el campo correspondiente en la cita que se está editando
    setEditingCita({
      ...editingCita,
      [field]: e.target.value,
    });
  };

  const handleDeleteClick = (id) => {
    // Implementa la lógica para eliminar la cita con el ID proporcionado
    fetch(`http://localhost:3001/appointments/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Eliminar la cita del estado local
          setCitas(citas.filter(cita => cita.id !== id));
          return response.json();
        }
        throw new Error('Error al eliminar la cita');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="ver-citas-container"> {/* Añade la clase al contenedor principal */}
      <h2>Citas Agendadas:</h2>
      <table className="ver-citas-table"> {/* Utiliza una tabla HTML */}
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas && citas.map(cita => (
            <tr key={cita.id}>
              <td>
                {editingCita && editingCita.id === cita.id ? (
                  <input type="date" value={editingCita.date} onChange={(e) => handleInputChange(e, 'date')} />
                ) : (
                  cita.date
                )}
              </td>
              <td>
                {editingCita && editingCita.id === cita.id ? (
                  <input type="text" value={editingCita.name} onChange={(e) => handleInputChange(e, 'name')} />
                ) : (
                  cita.name
                )}
              </td>
              <td>
                {editingCita && editingCita.id === cita.id ? (
                  <input type="text" value={editingCita.description} onChange={(e) => handleInputChange(e, 'description')} />
                ) : (
                  cita.description
                )}
              </td>
              <td>
                {editingCita && editingCita.id === cita.id ? (
                  <>
                    <button onClick={handleSaveEdit}>Guardar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button  onClick={() => handleEditClick(cita.id)}>✎</button>
                    <button onClick={() => handleDeleteClick(cita.id)}>✖</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerCitasAgendadas;
