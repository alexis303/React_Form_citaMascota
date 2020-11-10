import React, {Fragment, useState} from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        nombreDueño: '',
        fecha: '',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError] = useState(false)

    //funcion q se ejecuta cada que el usuario escribe en un input
    const actualizarState = evento => {
        actualizarCita({
            ...cita,
            [evento.target.name] : evento.target.value
        })
    }

    const {mascota, nombreDueño, fecha, hora, sintomas} = cita;

    // cuando el usuario presiona agregar cita

    const submitCita = e => {
        e.preventDefault();
        
        //validar
        if(mascota.trim() === '' || nombreDueño.trim() === '' || 
        fecha.trim() === '' ||  hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true)
            return;
        }

        //eliminar el mensaje previo
        actualizarError(false)
        
        //Ingresar un ID
        cita.id = uuid();
        
        //Crear la cita

        crearCita(cita);
        //Reiniciar el form

        actualizarCita({
            mascota: '',
            nombreDueño: '',
            fecha: '',
            hora:'',
            sintomas:''
        })
    }
     
   

    return ( 
        <Fragment>

            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form 
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Del Dueño</label>
                <input 
                    type="text"
                    name="nombreDueño"
                    className="u-full-width"
                    placeholder="Dueño de la Mascota"
                    onChange={actualizarState}
                    value={nombreDueño}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button 
                
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;