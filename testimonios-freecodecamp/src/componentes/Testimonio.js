import React from 'react'

function Testimonio () {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../img/Emma-5a662db9bcf55809a1fefb2ea17634bc.png')}
        alt='imagen de testimonio'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Emma</p>
          <p className='cargo-testimonio'>Ingeniera</p>
          <p className='texto-testimonio'>dfsddfsdfsdfdsf</p>
        </div>
    </div>
  )
}

export default Testimonio