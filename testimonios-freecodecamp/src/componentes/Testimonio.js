import React from 'react'

import '../stylesheets/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../img/Emma-5a662db9bcf55809a1fefb2ea17634bc.png')}
        alt='imagen de testimonio'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.name} en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo}en {props.empresa}</p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  )
}

export default Testimonio