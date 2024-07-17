import { parametrosCentil } from "../data/parametrosCentil";
import { calculoCentil } from "./calculoCentil";


export const score = (formState) => {
    const { formularioUno, formularioDos, formularioTres, formularioCuatro, formularioCinco, formularioSeis, } = formState;

    const { apgar, edadGestacional1, edadGestacional2, peso, sexo, tipoParto } = formularioUno;

    let apgarN, edad, edadN, pesoN, tipoPartoN, asfixiaN, infecciosasN,malformacionesN,prematuridadN,otrosN;

    edad = Number(`${edadGestacional1}.${edadGestacional2}`);

    edad < 28 ? edadN = 15 : (edad >= 28 && edad < 32) ? edadN = 13 : (edad >= 32 && edad < 37) ? edadN = 12 : (edad >= 37 && edad < 39) ? edadN = 11 : (edad >= 39 && edad < 41) ? edadN = 12 : edadN = 14;

    (Number(peso)) < 750 ? pesoN = 15 : (Number(peso) >= 750 && Number(peso) < 1500) ? pesoN = 12 : (Number(peso) >= 1500 && Number(peso) < 4000) ? pesoN = 11 : pesoN = 12;

    const percentilN = calculoCentil(parametrosCentil, edad, peso, sexo);

    (Number(apgar)) <= 3 ? apgarN = 35 : (Number(apgar) > 3 && Number(apgar)) <= 6 ? apgarN = 19 : apgarN = 15;

    (tipoParto === 'cesarea') ? tipoPartoN = 15 : (tipoParto === 'vaginalEutocico') ? tipoPartoN = 15 : tipoPartoN = 19;

    if (formularioCinco) {
        const {asfixia,infecciosas,malformaciones,prematuridad,otros} = formularioCinco;
        asfixia ? asfixiaN = 15 : asfixiaN = 0;
        infecciosas ? infecciosasN = 9 : infecciosasN = 0;
        malformaciones ? malformacionesN = 14 : malformacionesN = 0;
        prematuridad ? prematuridadN = 13 : prematuridadN = 0;
        otros ? otrosN = 11 : otrosN = 0;
    }
    if (formularioSeis) {
        const {asfixia,infecciosas,malformaciones,prematuridad,otros} = formularioSeis;
        asfixia ? asfixiaN = 15 : asfixiaN = 0;
        infecciosas ? infecciosasN = 9 : infecciosasN = 0;
        malformaciones ? malformacionesN = 14 : malformacionesN = 0;
        prematuridad ? prematuridadN = 13 : prematuridadN = 0;
        otros ? otrosN = 11 : otrosN = 0;
    }
    if (!formularioCinco && !formularioSeis) {
        asfixiaN = 0;
        infecciosasN = 0;
        malformacionesN = 0;
        prematuridadN = 0;
        otrosN = 0
    }
    return edadN + pesoN + percentilN + apgarN + tipoPartoN + asfixiaN + infecciosasN + malformacionesN + prematuridadN + otrosN;
    
}