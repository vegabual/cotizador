//Obtiene la diferencia de años
export function obtenerDiferencia(anio){
    return new Date().getFullYear() - anio;
}

//Calcula total segun la marca
export function calcularMarca(marca){
    let incremento;
    switch (marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

//calcula el tipo de seguro
export function obtenerPlan(plan){
    return(plan === 'basico') ? 1.20 : 1.50;
}

//Muestra la primer letra mayuscula
export function primerMayuscula (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}