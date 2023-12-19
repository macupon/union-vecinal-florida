import './Cover.css'
import casa from '../../assets/img/casa.png'

export const Cover = () => {
  return (
    <div className='cover-container'>
      <div className='text-cover'>
        <h1 className='titulo-cover'>Unidos por un <br/> barrio mejor</h1>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien erat, ornare <br/> in ex quis, maximus commodo nisi. Donec ut tortor ligula. Aenean imperdiet eget<br/> leo sit amet vulputate. Donec at laoreet magna. Nunc in.</p>
        </div>
      </div>
      <div className='img-cover'>
        <img src={casa} alt="" />
      </div>
    </div>
  )
}
