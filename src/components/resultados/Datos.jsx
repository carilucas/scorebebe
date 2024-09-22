

const Datos = ({ resultado, formularioCinco, formularioSeis }) => {
    
    return (
        <div className="datos flex-1">
            {
                (!formularioCinco && !formularioSeis) ?
                    <>
                        <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Riesgo inminente para el neonato, requiere estabilización inmediata y/o transferencia urgente</h1>
                        <img src="/01-warning.svg" alt="" className='max-w-[160px] block mx-auto mb-5' />
                        <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Alto riesgo <span className="font-normal tracking-wide text-gray-700">requiere estabilización inmediata y/o transferencia urgente</span>
                        </p>
                    </>

                    : resultado >= 79 ?
                        <>
                            <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Categoría de riesgo A</h1>
                            <img src="/01-warning.svg" alt="" className='max-w-[160px] block mx-auto mb-5' />
                            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Alto riesgo <span className="font-normal tracking-wide text-gray-700">de muerte neonatal pues tiene un puntaje ≥ 77 puntos.</span>
                            </p>
                            <p className="block tracking-wide text-gray-700 text-sm font-normal mb-2">
                                Tiene más de cuatro veces más probabilidades de muerte neonatal que los niños de la categoría C (de bajo riesgo).
                            </p>
                        </>

                    : (resultado >= 72 && resultado < 77) ?
                        <>
                            <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Categoría de riesgo B</h1>
                            <img src="/02-caution.svg" alt="" className='max-w-[160px] block mx-auto mb-5' />
                            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Riesgo moderado <span className="font-normal tracking-wide text-gray-700">de muerte neonatal pues tiene un puntaje ≥ 72 y &lt; 77 puntos.</span>
                            </p>
                            <p className="block tracking-wide text-gray-700 text-sm font-normal mb-2">
                                Tiene más de un 77% más probabilidades de muerte neonatal que los niños de la categoría C (bajo riesgo).
                            </p>
                        </>
                    : (resultado >= 67 && resultado < 72) ?
                        <>
                            <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Categoría de riesgo C</h1>
                            <img src="/02-caution.svg" alt="" className='max-w-[160px] block mx-auto mb-5' />
                            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Riesgo bajo <span className="font-normal tracking-wide text-gray-700">de muerte neonatal pues tiene un puntaje ≥ 67 y &lt; 72 puntos.</span>
                            </p>
                        </>
                        :
                        <>
                            <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Categoría de riesgo D</h1>
                            <img src="/03-safety.svg" alt="" className='max-w-[160px] block mx-auto mb-5' />
                            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                                Riesgo muy bajo <span className="font-normal tracking-wide text-gray-700">de muerte neonatal pues tiene un puntaje &lt; 67 puntos.</span>
                            </p>
                        </>
            }

        </div >
    )
}

export default Datos
