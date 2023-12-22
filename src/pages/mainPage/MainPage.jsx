import './MainPage.css'
import { NavBar } from '../../components/navBar/NavBar'
import { Cover } from '../../components/cover/Cover'
import Footer from '../../components/footer/Footer'
import Grid from '../../components/grid/Grid'

import casa from '../../assets/img/casa.png'

export const MainPage = () => {

  return (
    <div>
      <NavBar/>
      <Cover title={"Unidos por un barrio mejor"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien erat, ornare. in ex quis, maximus commodo nisi. Donec ut tortor ligula. Aenean imperdiet eget leo sit amet vulputate. Donec at laoreet magna. Nunc in."} img={casa}/>
      <Grid/>
      <Footer/>
    </div>
  )
}
