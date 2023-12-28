import './MascotasEncontradasCard.css'

export default function MascotasEncontradasCard({mascotas}) {
  const { nombre, raza, color, dia, hora, img, chapa } = mascotas;

  const chapaText = "Tiene Chapa";
  const sinChapaText = "";
  const noTieneChapa = "No tiene chapa";



  return (
    <div className='mascotasEncontradasCard-container'>
      <div className='mascotasEncontradasCard-div'>
        <div className='img-MascotasEncontradasCard'>
          <img src={img} alt="imagen perro" />
        </div>
        <div className='text-mascotasEncontradasCard'>
            {
              !chapa
                ? <h3>{noTieneChapa}</h3>
                : <h3>Encontré a {nombre}</h3>
            }
            <p>Raza: {raza}</p>
            <p>Color: {color}</p>

            {/* { 
              chapa
                ? <p>{chapaText}</p>
                : <p>{sinChapaText}</p>
            } */}

            {/* {chapa && <p>{chapaText}</p>}
            {!chapa && <p>{sinChapaText}</p>} 
             */}

          <div className='diaHora-div'>
            <p>Dia: {dia}</p>
            <p>Hora: {hora}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
