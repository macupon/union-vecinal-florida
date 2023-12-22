import './FormPetsPerdido.css'

export default function FormPetsPerdido() {
  return (
    <div className='form-perdido-container'>
        <form action="" className='form-perdido-div'>

          <div className='input-form'>
            <h3>Información de tu mascota</h3>
            <label htmlFor="">Nombre: <input type='text'/></label> 
            <label htmlFor="">Raza: <input type='text'/></label> 
            <label htmlFor="">Color del collar: <input type='text'/></label>
            <label htmlFor="">Subi una foto <input type='text'/></label>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={""} onChange={""}/>
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}
