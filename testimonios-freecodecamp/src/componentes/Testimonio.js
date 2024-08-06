import React from 'react'

import '../stylesheets/Testimonio.css';

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
          <p className='texto-testimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."

</p>
        </div>
    </div>
  )
}

export default Testimonio