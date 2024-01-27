import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Agendamiento de Citas.</h1>
        <nav>
              <Link to="/crear-cita">
                <button>Crear Cita</button><br/><br/>
              </Link>

              <Link to="/ver-citas">
                <button>Ver Citas Agendadas</button>
              </Link>
        </nav><br/>
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
