import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => ( 
    <div className="cita">
        <p>Mascoya:<span>{cita.mascota}</span></p>
        <p>Mascoya:<span>{cita.nombreDueño}</span></p>
        <p>Mascoya:<span>{cita.fecha}</span></p>
        <p>Mascoya:<span>{cita.hora}</span></p>
        <p>Mascoya:<span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;