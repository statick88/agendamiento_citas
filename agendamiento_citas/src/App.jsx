import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';
import './App.css'; // Importa el CSS

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Añade la clase al contenedor principal */}
        <h1>📅 Sistema de Agendamiento de Citas 📅</h1>
        <ul>
          <li><a href="/ver-citas">🔍 Ver Cita</a></li>
          <li><a href="/crear-cita">➕ Crear Cita</a></li>
        </ul>
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

