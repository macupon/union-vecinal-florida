import './MascotasEncontradas.css';
import MascotasEncontradasCard from '../mascotasEncontradasCard/MascotasEncontradasCard';
import { useEffect, useState } from 'react';
import FormMascotasEncontradas from '../formMascotasEncontradas/FormMascotasEncontradas'

export default function MascotasEncontradas() {
    const [showFormMascotrasEncontradas, setShowFormMascotrasEncontradas] = useState("")
    const [arrayMascotas, setArrayMascotas] = useState([])

    const handleClickShowFormEncontradas =()=>{
        setShowFormMascotrasEncontradas("formMascotasEncontradas")
    }

    useEffect(()=>{
        const jasonPath = 'src/mascotasLibreria/mascotasLibreria.json'
        const promise = fetch(jasonPath)
            .then(response => response.json())
            .then(data => setArrayMascotas(data))
            console.log(arrayMascotas)
    },[])

    // useEffect(() => {
    //     console.log(arrayMascotas)
    // }, arrayMascotas)

    return (
        <div>
            <div className='btn-showForm'>
                <button onClick={handleClickShowFormEncontradas}>Encontré una mascota </button>
                {
                showFormMascotrasEncontradas === "formMascotasEncontradas" && <FormMascotasEncontradas/>
                }
            </div>
            <div className='map-mascotasEncontradas-container'>
                {
                arrayMascotas && arrayMascotas.map((mascota) => <MascotasEncontradasCard key={mascota.id} mascotas={mascota} />)
                }
            </div>
        </div>
    )
}
