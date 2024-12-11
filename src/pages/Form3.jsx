import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { useForm } from "react-hook-form";
import { types } from "../types/types.d";

const Form3 = () => {
    const navigate = useNavigate();

    const { formState, dispatch } = useContext(FormContext);

    const { setValue, register, formState: { isValid, errors }, handleSubmit, getValues } = useForm({
        defaultValues: {
            formularioTres: {
                polihidramnios: false,
                diabetes: false,
                hipertension: false,
                fallece: false,
                ivu: false,
                streptococus: false,
                menor15: false,
                mayor40: false,
                alcohol: false,
                cocaina: false,
                riesgoSocial: false,
                vih: false,
                sifilis: false,
                tuberculosis: false,
                discapacidades: false,
                partoDomicilio: false,
                controlPrenatal: false,
                reanimacion: false,
                embarazoMultiple: false,
            }
        }
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        localStorage.setItem('formStorage', JSON.stringify( formState ));
    }, [])

    useEffect(() => {
        if (formState.formularioTres) {
            setValue('formularioTres', { ...formState.formularioTres })
        }

    }, [])

    const handleBack = ()=>{
        navigate('/paso-dos');
        dispatch({
            type: types.form3Type,
            payload: getValues()
        })
    }

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({
                type: types.form3Type,
                payload: values
            })
        }
        navigate('/paso-cuatro')
    }


    return (
        <>
            <Container>
                <div className="w-full max-w-xl">
                    <h1 className='text-gray-900 mb-4 font-bold text-lg'>Factores que podrían incrementar el riesgo</h1>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)} >
                        <div className="mb-6 border-b border-gray-70">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="polihidramnios" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.polihidramnios')}
                                    />
                                </div>
                                <label htmlFor="polihidramnios" className="ms-2 text-sm text-gray-900 ">
                                    Madre tuvo polihidramnios u oligohidramnios
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="diabetes" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.diabetes')}
                                    />
                                </div>
                                <label htmlFor="diabetes" className="ms-2 text-sm text-gray-900 ">
                                    Madre diabética
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="hipertension" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.hipertension')}
                                    />
                                </div>
                                <label htmlFor="hipertension" className="ms-2 text-sm text-gray-900 ">
                                    Madre con trastornos hipertensivos o preeclámptica/eclámptica
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="fallece" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.fallece')}
                                    />
                                </div>
                                <label htmlFor="fallece" className="ms-2 text-sm text-gray-900 ">
                                    Madre fallece posterior al parto
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="ivu" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.ivu')}
                                    />
                                </div>
                                <label htmlFor="ivu" className="ms-2 text-sm text-gray-900 ">
                                    Madre tuvo IVU en el embarazo
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="streptococus" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.streptococus')}
                                    />
                                </div>
                                <label htmlFor="streptococus" className="ms-2 text-sm text-gray-900 ">
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
                                    <input id="menor15" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.menor15')}
                                    />
                                </div>
                                <label htmlFor="menor15" className="ms-2 text-sm text-gray-900 ">
                                    Menor de 15 años
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="mayor40" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.mayor40')}
                                    />
                                </div>
                                <label htmlFor="mayor40" className="ms-2 text-sm text-gray-900 ">
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
                                    <input id="alcohol" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.alcohol')}
                                    />
                                </div>
                                <label htmlFor="alcohol" className="ms-2 text-sm text-gray-900 ">
                                    Alcohol
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="cocaina" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.cocaina')}
                                    />
                                </div>
                                <label htmlFor="cocaina" className="ms-2 text-sm text-gray-900 ">
                                    Cocaína
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="riesgoSocial" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.riesgoSocial')}
                                    />
                                </div>
                                <label htmlFor="riesgoSocial" className="ms-2 text-sm text-gray-900 ">
                                    Madre con riesgo social (analfabetismo, adicciones, violencia doméstica, vivienda muy lejana a un establecimiento de salud, etc.)
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                                Madre presenta
                            </h3>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="vih" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.vih')}
                                    />
                                </div>
                                <label htmlFor="vih" className="ms-2 text-sm text-gray-900 ">
                                    VIH
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="sifilis" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.sifilis')}
                                    />
                                </div>
                                <label htmlFor="sifilis" className="ms-2 text-sm text-gray-900 ">
                                    Sífilis
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="tuberculosis" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.tuberculosis')}
                                    />
                                </div>
                                <label htmlFor="tuberculosis" className="ms-2 text-sm text-gray-900 ">
                                    Tuberculosis
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="discapacidades" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.discapacidades')}
                                    />
                                </div>
                                <label htmlFor="discapacidades" className="ms-2 text-sm text-gray-900 ">
                                    Discapacidades
                                </label>
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="partoDomicilio" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.partoDomicilio')}
                                    />
                                </div>
                                <label htmlFor="partoDomicilio" className="ms-2 text-sm text-gray-900 ">
                                    Parto en domicilio o por personal no entrenado
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="controlPrenatal" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.controlPrenatal')}
                                    />
                                </div>
                                <label htmlFor="controlPrenatal" className="ms-2 text-sm text-gray-900 ">
                                    Ningún control prenatal
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="reanimacion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.reanimacion')}
                                    />
                                </div>
                                <label htmlFor="reanimacion" className="ms-2 text-sm text-gray-900 ">
                                    Reanimación neonatal sin presión positiva ni masaje cardiaco
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="embarazoMultiple" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioTres.embarazoMultiple')}
                                    />
                                </div>
                                <label htmlFor="embarazoMultiple" className="ms-2 text-sm text-gray-900 ">
                                    Embarazo múltiple
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5">
                            <button type="submit" className="primary-Btn">Siguiente</button>
                            <button onClick={handleBack} className="secondary-Btn">Regresar al paso 2</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Form3
