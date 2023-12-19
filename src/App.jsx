import './App.css'
import { MainPage } from './pages/mainPage/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mascotas from './pages/mascotas/Mascotas';
import TelefonosUtiles from './pages/telefonosUtiles/TelefonosUtiles';
import Servicios from './pages/servicios/Servicios';
import Seguridad from './pages/seguridad/seguridad';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/mascotas' element={<Mascotas/>}/>
          <Route path='/telefonosUtiles' element={<TelefonosUtiles/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/seguridad' element={<Seguridad/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
