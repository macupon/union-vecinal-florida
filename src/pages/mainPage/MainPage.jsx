import './MainPage.css'
import { NavBar } from '../../components/navBar/NavBar'
import { Cover } from '../../components/cover/Cover'
import Footer from '../../components/footer/Footer'
import Grid from '../../components/grid/Grid'

export const MainPage = () => {
  return (
    <div>
      <NavBar/>
      <Cover/>
      <Grid/>
      <Footer/>
    </div>
  )
}
