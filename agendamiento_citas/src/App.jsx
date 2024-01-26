import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Agendamiento de Citas.</h1>
        
        {/* Botones de navegación */}
        <div>
          <Link to="/crear-cita">
            <button>Crear Cita</button>
          </Link>
          
          <Link to="/ver-citas">
            <button>Ver Citas</button>
          </Link>
        </div>

        {/* Configuración de las rutas */}
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
