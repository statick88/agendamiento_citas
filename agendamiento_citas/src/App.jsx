  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import CrearCita from './components/CrearCita';
  import VerCitasAgendadas from './components/VerCitasAgendadas';

  function App() {
    return (
      <Router>
        <div>
        <button>
            <a href="/">Home</a>
          </button>
          <hr />
          <h1>Sistema de Agendamiento de Citas.</h1>
          <hr />
          <button >
            <a href="/ver-citas">Ver Cita</a>
          </button>
          <button>
            <a href="/crear-cita">Crear Cita</a>
          </button>


          {/* <li><a href="/ver-citas">Ver Cita</a></li>
          <li><a href="/crear-cita">Crear Cita</a></li> */}
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