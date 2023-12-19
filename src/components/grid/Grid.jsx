import './Grid.css';
import { Cards } from '../cards/Cards';
import casa from '../../assets/img/casa.png'

export default function Grid() {
  return (
    <div className='grid-container'>
        <div className='grid-div'>
            <Cards title={"Mascotas"} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} img={casa} btnLink={'/mascotas'}/>
            <Cards title={"Teléfonos útiles"} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} img={casa} btnLink={'/telefonosUtiles'}/>
            <Cards title={"Seguridad"} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} img={casa} btnLink={'/seguridad'}/>
            <Cards title={"Servicios"} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} img={casa} btnLink={'/servicios'}/>
        </div>
    </div>

  )
}
