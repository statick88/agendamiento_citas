import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';

function App() {
  return (
    <Router>
      <div>
        <h2>ESCOBAR JULIANA - ESPIN MARCO</h2>
        <h1>Sistema de Agendamiento de Citas.</h1>
        <Switch>
          <Route path="/crear-cita">
            <h2>Crear Cita</h2>
            <CrearCita />
          </Route>
          <Route path="/ver-cita">
            <h2>Ver Cita</h2>
            <VerCitasAgendadas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;