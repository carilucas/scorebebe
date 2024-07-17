export const  useComorbilidadesGroup= (values)=>{
    const { asfixia, malformaciones, infecciosas, prematuridad, otros  } = values.formularioCinco;

    if (asfixia | malformaciones | infecciosas | prematuridad | otros) {
        return {
            asfixia,malformaciones,infecciosas,prematuridad,otros,sinComorbilidades:false
        }
    }
    return {
        sinComorbilidades:true
    }
}