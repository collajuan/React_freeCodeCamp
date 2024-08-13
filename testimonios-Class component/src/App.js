import React from 'react';
import Testimonio from './componentes/Testimonio'

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='contenedor-principal'>
  
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          name = 'Shawn'
          pais = 'Singapore'
          img = 'Shawn'
          cargo = 'Software Engineer'
          empresa = 'Amazon'
          testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."        
        />
        <Testimonio 
          name = 'Sarah'
          pais = 'Nigeria'
          img = 'Sarah'
          cargo = 'Software Engineer'
          empresa = 'ChatDesk'
          testimonio = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimonio 
          name = 'Emma'
          pais = 'Sweden'
          img = 'Emma'
          cargo = 'Software Engineer'
          empresa = 'Spotify'
          testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."        
        />
        </div>
      </div>
    );  
  }
}


export default App;
