

export const rangoCentil = (parametrosCentil, semanas, dias, peso, sexo )=>{
    let rango;
    const parametros = parametrosCentil.filter( parametro => parametro.sexo === sexo);

    const edad = Number(`${semanas}.${dias}`);


    const busquedaEdad = parametros.find( parametro => Number(parametro.edadGestacional) === edad );



    const {cincoKg,noventaYCincoKg} = busquedaEdad;

    const pesoGramos = peso / 1000;

    pesoGramos < Number(cincoKg) ? rango = '< Percentil 5' : pesoGramos > Number(noventaYCincoKg) ? rango = '> Percentil 95' : rango = 'Percentil 5 al 95';
    return rango;
}