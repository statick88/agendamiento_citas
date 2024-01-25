// AppointmentScheduler.js
import React from 'react';
import { Link } from 'react-router-dom';

class DatePicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const style = document.createElement('style');
    style.textContent = `
      /* Estilos específicos del Shadow DOM */
      input {
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 4px;
      }
    `;

    const datePickerInput = document.createElement('input');
    datePickerInput.type = 'date';
    datePickerInput.addEventListener('change', this.handleDateChange.bind(this));

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(datePickerInput);
  }

  handleDateChange(event) {
    // Manejar el cambio de fecha
    console.log(event.target.value);
  }
}

customElements.define('date-picker', DatePicker);

class AppointmentScheduler extends React.Component {
  render() {
    return (
      <div>
        <p>Seleccione la fecha para agendar una cita:</p>
        <date-picker></date-picker>
        <Link to="/appointments">Ver citas agendadas</Link>
      </div>
    );
  }
}

export default AppointmentScheduler;