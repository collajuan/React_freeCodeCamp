import React from 'react';

import '../stylesheets/Boton.css'


class Boton extends React.Component {
    render() {
        return (
            <button 
                className={ this.props.esBotonDeClick ? 'boton-click' :'boton-reiniciar' }
                onClick={this.props.manejarClick} >
                {this.props.text}
            </button>
        )
    }
}

//props con desestructuración



export default Boton