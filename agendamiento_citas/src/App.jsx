import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Agendamiento de Citas.</h1>

        {/* Botones para navegar */}
        <nav>
          <Link to="/crear-cita">
            <button style={{ marginBottom: '10px' }}>Crear Cita</button>
          </Link>
          <Link to="/ver-citas">
            <button style={{ marginBottom: '10px' }}>Ver Citas Agendadas</button>
          </Link>
        </nav>

        <Switch>
          <Route path="/crear-cita">
            <CrearCita />
          </Route>
          <Route path="/ver-citas">
            <VerCitasAgendadas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
