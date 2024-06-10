import { useNavigate } from "react-router-dom"
import Container from "../components/Container"

const Form4 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <h1 className='text-gray-900 mb-4 font-bold text-lg'>Factores que podrían reducir el riesgo del neonato</h1>
                <form className="w-full max-w-lg" >
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="maduracionPulmonar" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="maduracionPulmonar" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Es prematuro y recibió dosis completa de maduración pulmonar
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="uteroinhibicion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="uteroinhibicion" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Es prematuro y recibió tratamiento de uteroinhibición hasta alcanzar maduración pulmonar
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => navigate('/paso-cinco')} type="submit" className="primary-Btn">Siguiente</button>
                        <button onClick={() => navigate('/paso-tres')} className="secondary-Btn">Regresar al paso 3</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form4
