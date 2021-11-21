import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultados';

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;
    this.setState({
      pagina
    }, () => {this.consultarApi()
    });
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=24447077-15a91dd01e18b7d53c4e8c90f&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits }))
      .catch(error => console.log(error));
    console.log(url);
  }
  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  render() {
    return ( 
      <div className = "container-fluid" >
        <div className = "app container" >
          <div className = "jumbotron bg-secondary">
            <p className = "lead text-center text-light"> Buscador de imagenes </p> 
            <Buscador
              // Con props pasamos del padre a hijo informacion
              datosBusqueda = {this.datosBusqueda}
            />
          </div> 
        </div> 
        <div className = "container">
          <Resultado 
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
