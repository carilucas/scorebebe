import { useNavigate } from "react-router-dom"
import Container from "../components/Container"

const Form3 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <h1 className='text-gray-900 mb-4 font-bold text-lg'>Factores que podrían incrementar el riesgo</h1>
                <form className="w-full max-w-lg" >
                    <div className="mb-6 border-b border-gray-70">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="polihidramnios" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="polihidramnios" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre tuvo polihidramnios
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="diabetes" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="diabetes" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre diabética
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="hipertension" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="hipertension" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre con trastornos hipertensivos
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="fallece" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="fallece" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre fallece posterior al parto
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="ivu" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="ivu" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre tuvo IVU en el embarazo
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="streptococus" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="streptococus" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre tuvo cultivo positivo para Streptococus
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Edad de la madre
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="menor15" type="radio" value="" name="edadMadre" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="menor15" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Menor de 15 años
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="mayor40" type="radio" value="" name="edadMadre" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="mayor40" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Mayor de 40 años
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Madre con adicciones
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="alcohol" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="alcohol" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Alcohol
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="cocaina" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="cocaina" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Cocaína
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="ninoMasculino" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="ninoMasculino" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Niño de sexo masculino
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="riesgoSocial" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="riesgoSocial" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Madre con riesgo soial (analfabetism, adicciones, violencia doméstica, vivieda muy lejana a un establecimiento de salud, etc.)
                            </label>
                        </div>
                    </div>
                    <div className="mb-6 border-b border-gray-70">
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Madre presenta
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="vih" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="vih" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                VIH
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="sifilis" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="sifilis" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Sífilis
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="tuberculosis" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="tuberculosis" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Tuberculosis
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="discapacidades" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="discapacidades" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Discapacidades
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="partoDomicilio" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="partoDomicilio" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Parto en domicilio o por personal no entrenado
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="controlPrenatal" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="controlPrenatal" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Ningún control prenatal
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="embarazoMultiple" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <label htmlFor="embarazoMultiple" className="ms-2 text-sm text-gray-900 dark:text-gray-300">
                                Embarazo múltiple
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => navigate('/paso-cuatro')} type="submit" className="primary-Btn">Siguiente</button>
                        <button onClick={() => navigate('/paso-dos')} className="secondary-Btn">Regresar al paso 2</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form3
