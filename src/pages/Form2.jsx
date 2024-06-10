import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { FormContext } from "../context/FormContext";
import { useContext } from "react";


const Form2 = () => {
    const navigate = useNavigate();
    const  {formState,dispatch}  = useContext(FormContext);
    console.log(formState)
    return (
        <>
            <Container>
                <h1 className='text-gray-900 mb-4 font-bold text-lg max-w-lg'>
                    Antesde empezar, haga click, seleccione cadacaracterística o antecedente que el neonato presente.
                </h1>
                <form className="w-full max-w-lg" >
                    <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                        Factores de riesgo inminente para el neonato que requieren estabilización inmdiata y/o transferencia urgente
                    </h3>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="respiracion" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="respiracion" className=" ms-2 text-sm text-gray-900">
                                El niño respira débilmente o tiene dificultad respiratoria severa (utilizar la escala de Silverman o Downes segun la referencia) <a className="font-bold text-blue-500" href="http://" target="_blank" rel="noopener noreferrer">Ver referencia</a>
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Porcentaje de saturación
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="saturacion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="saturacion" className="ms-2 text-sm text-gray-900 ">
                                Menor a 92%
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="alteracionRespiratoria" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="alteracionRespiratoria" className="ms-2 text-sm text-gray-900 ">
                                Tiene alguna alteración de su frecuencia respiratoria {`(<40 o >60 rpm)`}
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="alteracionRectal" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="alteracionRectal" className="ms-2 text-sm text-gray-900 ">
                                Tiene alguna alteración de su temperatura rectal {`(<36.6 o >38 `}<sup>o</sup>C) o temperatura axilar {`(<36.6 o >37.5 `}<sup>o</sup>C)
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Se encuentra hipnótico
                        </h3>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="convulsiones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="convulsiones" className="ms-2 text-sm text-gray-900 ">
                                Presencia de convulsiones
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="icterico" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="icterico" className="ms-2 text-sm text-gray-900 ">
                                Se encuentra ictérico antes de las 24 horas o después del cuarto día de vida
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="hipoglucemia" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="hipoglucemia" className="ms-2 text-sm text-gray-900 ">
                                Hipoglucemia {`(<50 mg/dL)`}
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="succionDebil" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="succionDebil" className="ms-2 text-sm text-gray-900 ">
                                Tiene succión débil
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="hidrorrea" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="hidrorrea" className="ms-2 text-sm text-gray-900 ">
                                Madre tuvo hidrorrea mayor a 18 horas
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="reanimacion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="reanimacion" className="ms-2 text-sm text-gray-900 ">
                                Fue necesario reanimación básica o avanzada
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="malformaciones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="malformaciones" className="ms-2 text-sm text-gray-900 ">
                                Malformaciones severas
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="lesionesSeveras" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="lesionesSeveras" className="ms-2 text-sm text-gray-900 ">
                                Lesiones severas  debido al parto
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => navigate('/paso-tres')} type="submit" className="primary-Btn">Siguiente</button>
                        <button onClick={() => navigate('/paso-uno')} className="secondary-Btn">Regresar al paso 1</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form2
