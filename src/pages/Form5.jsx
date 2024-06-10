import { useNavigate } from "react-router-dom"
import Container from "../components/Container"

const Form5 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <h1 className='text-gray-900 mb-4 font-bold text-lg'>Comorbilidades</h1>
                <form className="w-full max-w-lg" >
                    <div className="mb-6 ">
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigos">
                                Ingrese los códigos de acuerdo al CIE10 (Separe cada código con una COMA).
                            </label>
                            <textarea id="codigos" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ej.: P24,P241,P48"></textarea>
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">El campo no puede estar vacío.</span>
                            <div className="flex justify-between mt-6">
                                <button onClick={() => navigate('/paso-dos')} type="submit" className="primary-Btn">Aceptar</button>
                                <button onClick={() => navigate('/paso-cuatro')} className="primary-Btn">Ver lista de códigos CIE10</button>
                            </div>
                        </div>
                        <h1 className='text-gray-900 mb-4 font-bold text-lg'>O elija el grupo de comorbilidades neonatales a continuación:</h1>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="asfxia" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="asfxia" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Trastonos relacionados con  laasfixia
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="malformaciones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="malformaciones" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Malformaciones
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="prematuridad" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="prematuridad" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Enfermedades relacionadas  con laprematuridad
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="infecciones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="infecciones" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Enfermedades infeccioneas
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="otros" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="otros" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Cualquier otro trastorno no clasificado en categorías anteriores
                            </label>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="min-w-6 flex items-center">
                                <input id="sinComorbilidades" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="sinComorbilidades" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Si comorbilidades
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => navigate('/paso-dos')} type="submit" className="primary-Btn">Ver Resultado</button>
                        <button onClick={() => navigate('/paso-cuatro')} className="secondary-Btn">Regresar al paso 4</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form5
