import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { FormContext } from "../context/FormContext";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { types } from "../types/types.d";


const Form2 = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();
    const { formState, dispatch } = useContext(FormContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        localStorage.setItem('formStorage', JSON.stringify( formState ));
    }, [])
    

    useEffect(() => {
        if (formState.formularioDos) {
            setValue('formularioDos', {...formState.formularioDos})
        }
    }, [])


    const { register, handleSubmit, setValue, formState: { errors, isValid } , getValues,   watch} = useForm({
        defaultValues: {
            formularioDos: {
                respiracion: false,
                saturacion: false,
                alteracionRespiratoria: false,
                alteracionCardiaca: false,
                alteracionRectal: false,
                hipotonico: false,
                convulsiones: false,
                icterico: false,
                hipoglucemia: false,
                succionDebil: false,
                hidrorrea: false,
                reanimacion: false,
                malformaciones: false,
                lesionesSeveras: false,
            }
        }
    });

    const handleBack = ()=>{
        navigate('/paso-uno');
        dispatch({
            type: types.form2Type,
            payload: getValues()
        })
    }

    const onSubmit = (values) => {
        if (showButton) {
            dispatch({
                type: types.form2Type,
                payload: values
            })
            dispatch({
                type:types.form3Type,
                payload:{formularioTres:false}
            })
            dispatch({
                type:types.form4Type,
                payload:{formularioCuatro:false}
            })
            dispatch({
                type:types.form5Type,
                payload:{formularioCinco:false}
            })
            dispatch({
                type:types.form6Type,
                payload:{formularioSeis:false}
            })
            navigate('/resultados')
            return;
        }
        dispatch({
            type: types.form2Type,
            payload: values
        })
        navigate('/paso-tres');
    }
    
    

    const [formularioDos] = watch(['formularioDos']);
    
    useEffect(() => {
        setShowButton( Object.values(formularioDos).find(value => value === true ))
    }, [watch()])


    
    return (
        <>
            <Container>
                <div className="w-full max-w-xl">
                    <h1 className='text-gray-900 mb-4 font-bold text-lg max-w-lg'>
                        Antes de empezar, haga click, seleccione cada característica o antecedente que el neonato presente.
                    </h1>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                            Factores de riesgo inminente para el neonato que requieren estabilización inmediata y/o transferencia urgente
                        </h3>
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="respiracion" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.respiracion")}
                                    />
                                </div>
                                <label htmlFor="respiracion" className=" ms-2 text-sm text-gray-900">
                                    El niño respira débilmente o tiene dificultad respiratoria severa (utilizar la escala de Silverman o Downes según la referencia (pp. 48 y 49)) <a className="font-bold text-blue-500" href="https://www.dropbox.com/scl/fi/182w0atejwe0ddlyrzhy4/SILVERMAN.pdf?rlkey=exesvyvoom6ejqob91hjez7cs&st=5axrmwb7&dl=0" target="_blank" rel="noopener noreferrer">Ver referencia</a>
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            <h3 className='text-gray-900 mb-4  text-md max-w-lg font-medium'>
                                Porcentaje de saturación
                            </h3>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="saturacion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.saturacion")} />
                                </div>
                                <label htmlFor="saturacion" className="ms-2 text-sm text-gray-900 ">
                                    Menor a 92%
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="alteracionCardiaca" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.alteracionCardiaca")} />
                                </div>
                                <label htmlFor="alteracionCardiaca" className="ms-2 text-sm text-gray-900 ">
                                    Tiene una frecuencia cardíaca alterada {`(<100 o >160 lpm)`}
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="alteracionRespiratoria" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.alteracionRespiratoria")} />
                                </div>
                                <label htmlFor="alteracionRespiratoria" className="ms-2 text-sm text-gray-900 ">
                                    Tiene alguna alteración de su frecuencia respiratoria {`(<40 o >60 rpm)`}
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 border-b border-gray-70">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="alteracionRectal" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.alteracionRectal")}
                                    />
                                </div>
                                <label htmlFor="alteracionRectal" className="ms-2 text-sm text-gray-900 ">
                                    Tiene alguna alteración de su temperatura rectal {`(<36.6 o >38 `}<sup>o</sup>C) o temperatura axilar {`(<36.6 o >37.5 `}<sup>o</sup>C)
                                </label>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="hipotonico" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.hipotonico")}
                                    />
                                </div>
                                <label htmlFor="hipotonico" className="ms-2 text-sm text-gray-900 ">
                                    Se encuentra hipotónico: tiene un pobre tono muscular o sus reflejos son débiles 
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="convulsiones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.convulsiones")}
                                    />
                                </div>
                                <label htmlFor="convulsiones" className="ms-2 text-sm text-gray-900 ">
                                    Presencia de convulsiones
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="icterico" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.icterico")}
                                    />
                                </div>
                                <label htmlFor="icterico" className="ms-2 text-sm text-gray-900 ">
                                    Se encuentra ictérico antes de las 24 horas o después del cuarto día de vida
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="hipoglucemia" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.hipoglucemia")}
                                    />
                                </div>
                                <label htmlFor="hipoglucemia" className="ms-2 text-sm text-gray-900 ">
                                    Hipoglucemia {`(<40 mg/dL)`}
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="succionDebil" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.succionDebil")}
                                    />
                                </div>
                                <label htmlFor="succionDebil" className="ms-2 text-sm text-gray-900 ">
                                    Tiene succión débil o vomita todo lo que come.
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="hidrorrea" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.hidrorrea")}
                                    />
                                </div>
                                <label htmlFor="hidrorrea" className="ms-2 text-sm text-gray-900 ">
                                    Madre tuvo hidrorrea mayor a 18 horas
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="reanimacion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.reanimacion")}
                                    />
                                </div>
                                <label htmlFor="reanimacion" className="ms-2 text-sm text-gray-900 ">
                                    Fue necesario reanimación básica o avanzada
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="malformaciones" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.malformaciones")}
                                    />
                                </div>
                                <label htmlFor="malformaciones" className="ms-2 text-sm text-gray-900 ">
                                    Malformaciones severas
                                </label>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="min-w-6 flex items-center">
                                    <input id="lesionesSeveras" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register("formularioDos.lesionesSeveras")}
                                    />
                                </div>
                                <label htmlFor="lesionesSeveras" className="ms-2 text-sm text-gray-900 ">
                                    Lesiones severas  debido al parto
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5">
                            {
                                showButton
                                ? <button type="submit" className="primary-Btn">Finalizar</button>
                                : <button type="submit" className="primary-Btn">Siguiente</button>
                            }
                            <button onClick={handleBack} className="secondary-Btn">Regresar al paso 1</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Form2
