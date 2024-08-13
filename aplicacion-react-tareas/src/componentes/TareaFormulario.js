import React, { useState } from 'react'
import '../stylesheet/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('')

    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }     
        // La propiedad onSubmit en realidad es una funcion callBack definida en quien renderiza a Tareaformulario
        // y a esa funcion se le pasa el parametro tareaNueva. La funcion es agregarTarea en el componente
        // ListaDeTareas
        props.onSubmit(tareaNueva)
    }

    return (
        <form
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe tarea'
                name='texto'
                onChange={manejarCambio}
            />

            <button
                className='tarea-boton' >
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario