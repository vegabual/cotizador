import React from 'react'; 
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {primerMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //extraer datos
    const {marca, anio, plan} = datos;

    if(marca === '' || anio === '' || plan === '') return null;
    
    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2> 
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año: {anio}</li>
            </ul>
        </ContenedorResumen>
    );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;