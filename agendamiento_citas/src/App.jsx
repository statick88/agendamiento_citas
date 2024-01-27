import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/crear-cita">Crear nueva cita</Link>
            </li>
            <li>
              <Link to="/ver-citas">Ver Citas</Link>
            </li>
          </ul>
        </nav>

        <h1>Sistema de Agendamiento de Citas</h1>

        <Switch>
          <Route path="/crear-cita" component={CrearCita} />
          <Route path="/ver-citas" component={VerCitasAgendadas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
