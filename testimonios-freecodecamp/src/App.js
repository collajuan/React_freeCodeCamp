import Testimonio from './componentes/Testimonio'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

      <h1>Esto es el titulooooooooooooooooooooooo</h1>
      <Testimonio 
        name = 'Emmi'
        pais = ''
        imagen = ''
        cargo = ''
        empresa = ''
        testimonio = ''        
      />
      </div>
    </div>
  );
}

export default App;
