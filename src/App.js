import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Error from './component/Error';


function App() {

  const [ciudad,guardarCiudad] = useState('');
  const [pais,guardarPais] = useState('');
  const [error,guardarError] = useState(false);
  const [resultado,guardarResultado] = useState({});

  useEffect(()=>{

    const consultarAPI = async () => {
      const apiId = '728eba52479046fbf109684136b58307';
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`; 
      const respuesta = await fetch(url);
      const res = await respuesta.json();
      guardarResultado(res);
    }

    if(ciudad === '') return;
    consultarAPI();
  },[ciudad,pais]);

  const datosConsulta = datos => {
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  let componente;
  if(error){
    componente = <Error mensaje = 'Ambos campos son obligatorios'/>
  }else {
    componente = null;
  }

  return (
    <div className="App">
      <Header
        titulo = "Clima react"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta = {datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
