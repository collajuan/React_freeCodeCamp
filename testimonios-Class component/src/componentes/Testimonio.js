import React from 'react'

import '../stylesheets/Testimonio.css';

class Testimonio extends React.Component {

  render () {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../img/${this.props.img}.png`)}
          alt={`Fot de ${this.props.name}`} />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{this.props.name}</strong> en {this.props.pais}
              </p>
            <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
            <p className='texto-testimonio'>{this.props.testimonio}</p>
          </div>
      </div>
    )
  }
}




export default Testimonio