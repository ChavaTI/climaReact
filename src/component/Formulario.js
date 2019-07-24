import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {

    // state del componente
    //busqueda = state , guardarBusqueda = setState
    const [busqueda,guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    });

    const handleChange = e => {
        // cambiar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    } 

    return ( 
        <form onSubmit={consultarClima}>
            <div className="input-field co s12">
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field co s12">
                <select name="pais" id="pais" onChange={handleChange}>
                    <option value="">-- Selecciona un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argetina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field co s12">
                <input type="submit" value="Buscar clima" className="waves-effect waves-light btn-large btn-block yellow accent-4"/>
            </div>
        </form>
     );
}
 
export default Formulario;