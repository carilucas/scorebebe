export const  useComorbilidadesList= (values)=>{
    const { asfixiaComorbilidad, malformacionesComorbilidad, infecciosasComorbilidad, prematuridadComorbilidad, otrosComorbilidad  } = values.formularioSeis;

    const asfixia = asfixiaComorbilidad ? Object.values(asfixiaComorbilidad).map( i=>i).includes(true) : false;
    const malformaciones = malformacionesComorbilidad? Object.values(malformacionesComorbilidad).map( i=>i).includes(true) :false;
    const infecciosas = infecciosasComorbilidad ? Object.values(infecciosasComorbilidad).map( i=>i).includes(true):false;
    const prematuridad = prematuridadComorbilidad ? Object.values(prematuridadComorbilidad).map( i=>i).includes(true):false;
    const otros = otrosComorbilidad ? Object.values(otrosComorbilidad).map( i=>i).includes(true):false;

    if (asfixia | malformaciones | infecciosas | prematuridad | otros) {
        return {
            asfixia,malformaciones,infecciosas,prematuridad,otros,sinComorbilidades:false
        }
    }

    return {
        sinComorbilidades:true
    }
}