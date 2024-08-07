import React from 'react';

//props con desestructuración
function Boton({ text, esBotonDeClick, manejarClick }) {
    return (
        <button 
            className={ esBotonDeClick ? 'boton-click' :'boton-reiniciar' }
            onClick={manejarClick} >
            {text}
        </button>
    )
}


export default Boton