import { Cover } from '../../components/cover/Cover'
import { NavBar } from '../../components/navBar/NavBar'
import './Mascotas.css'
import petCover from '../../assets/img/pet-services.png'
import FormPetsPerdido from '../../components/formPetsPerdido/FormPetsPerdido'
import { useState } from 'react'


export default function Mascotas() {
  const [showFormPerdido, setShowFormPerdido] = useState(false);

  const handleClickPerdido = () => {
    setShowFormPerdido(!showFormPerdido);
  }


  return (
    <div className="mascotas-container">
      <NavBar/>
      <div className='pet-cover-container'>
        <Cover 
          title={"Reporte de mascotas perdidas"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien erat, ornare. in ex quis, maximus commodo nisi. Donec ut tortor ligula. Aenean imperdiet eget leo sit amet vulputate. Donec at laoreet magna. Nunc in."}  
          img={petCover}/>
      </div>
      <div className='btns-pet-container'>
        <button>Encontré una mascota </button>
        <button onClick={handleClickPerdido}>Perdí mi mascota</button>
        {showFormPerdido && <FormPetsPerdido/>}
      </div>
    </div>
  )
}
