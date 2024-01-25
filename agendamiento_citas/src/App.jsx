  import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
  import CrearCita from './components/CrearCita';
  import VerCitasAgendadas from './components/VerCitasAgendadas';

  function App() {
    return (
       <Router>
        <Link to="/crear-cita">-- Crear nueva cita ---</Link>
        <Link to="/ver-citas">--- Vercitas -</Link>

        <a href="/crear-cita"></a>
         <div>
          <h1>Sistema de Agendamiento de Citas.</h1>
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