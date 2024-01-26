import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CrearCita from './components/CrearCita';
import VerCitasAgendadas from './components/VerCitasAgendadas';
import './index.css';
import EditarCita from './components/EditarCita'; 

function App() {
  return (
    <Router>
      <div>
        <h1>Sistema de Agendamiento de Citas</h1>
        <h2>Grupo 02</h2>
        <h3>Daniel Enriquez, Cristian Idrobo, Jonathan Toapanta</h3>
        
        {/* Botones de navegación */}
        <nav className='navegador'>
          <ul className='lista'>
            <li className='listas'>
              <Link to="/crear-cita" className="link crear">Crear Cita</Link>
            </li>
            <li className='listas'>
              <Link to="/ver-citas" className="link ver">Ver Citas</Link>
            </li>
          </ul>
        </nav>

        {/* Contenido dinámico basado en la ruta */}
        <Switch>
          <Route path="/crear-cita">
            <CrearCita />
          </Route>
          <Route path="/ver-citas">
            <VerCitasAgendadas />
          </Route>
          {/* Nueva ruta para editar cita */}
          <Route path="/editar-cita/:id">
            <EditarCita />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;