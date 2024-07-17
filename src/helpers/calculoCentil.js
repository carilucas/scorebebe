

export const calculoCentil = (parametrosCentil, edad, peso, sexo )=>{
    let percentil;
    const parametros = parametrosCentil.filter( parametro => parametro.sexo === sexo);

    const busquedaEdad = parametros.find( parametro => Number(parametro.edadGestacional) === edad );
    const {cincoKg,noventaYCincoKg} = busquedaEdad;

    const pesoGramos = peso / 1000;

    pesoGramos < Number(cincoKg) ? percentil = 17 : pesoGramos > Number(noventaYCincoKg) ? percentil = 14 : percentil = 15;
    return percentil;
}