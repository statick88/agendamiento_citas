  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import CrearCita from './components/CrearCita';
  import VerCitasAgendadas from './components/VerCitasAgendadas';

  function App() {
    return (
      <Router>
        <div>
          <h1>Sistema de Agendamiento de Citas.</h1>
          <li><a href="/ver-citas">Ver Cita</a></li>
          <li><a href="/crear-cita">Crear Cita</a></li>
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