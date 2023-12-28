import './Mascotas.css'

import { Cover } from '../../components/cover/Cover'
import { NavBar } from '../../components/navBar/NavBar'
import petCover from '../../assets/img/pet-services.png'

// import FormMascotasEncontradas from '../../components/formMascotasEncontradas/FormMascotasEncontradas'
// import FormMascotasPerdidas from '../../components/formMascotasPerdidas/FormMascotasPerdidas'
import MascotasEncontradas from '../../components/mascotasEncontradas/MascotasEncontradas'
import MascotasPerdidas from '../../components/MascotasPerdidas/MascotasPerdidas'
import { useState } from 'react'


export default function Mascotas() {
  const [whatToShow, setWhatToShow] = useState("");

  const handleClickShowMascotasPerdidas = () => {
    setWhatToShow("showMascotasPerdidas")
  }

  const handleClickShowMascotasEncontradas = () => {
    setWhatToShow("showMascotasEncontradas")
  }




  return (
    <div className="mascotas-container">
      <NavBar/>
      <div className='mascota-cover-container'>
        <Cover 
          title={"Reporte de mascotas perdidas"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien erat, ornare. in ex quis, maximus commodo nisi. Donec ut tortor ligula. Aenean imperdiet eget leo sit amet vulputate. Donec at laoreet magna. Nunc in."}  
          img={petCover}/>
      </div>

      <div className='btns-mascota-container'>
        <button onClick={handleClickShowMascotasPerdidas}>Perdí mi mascota</button> 
        <button onClick={handleClickShowMascotasEncontradas}>Mascotas Encontradas</button>
      </div>

      {whatToShow === "showMascotasPerdidas" && <MascotasPerdidas/>} 
      {whatToShow === "showMascotasEncontradas" && <MascotasEncontradas/>}
    
    </div>
  )
}
