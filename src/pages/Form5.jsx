import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { types } from "../types/types.d";
import { useComorbilidadesGroup } from "../hooks/useComorbilidadesGroup";


const Form5 = () => {
    const navigate = useNavigate();
    const { formState, dispatch } = useContext(FormContext);

    const [showSinComorbilidades, setShowSinComorbilidades] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        localStorage.setItem('formStorage', JSON.stringify( formState ));
    }, [])

    useEffect(() => {
        if (formState.formularioCinco) {
            setValue('formularioCinco', { ...formState.formularioCinco });
        }

    }, []);

    useEffect(() => {
      if (formState.formularioUno.edadGestacional1 < 37 ) {
        setValue('formularioCinco.prematuridad', true);
        const prematuridad = document.querySelector('#prematuridad');
        prematuridad.addEventListener('click', e => e.preventDefault());
        setShowSinComorbilidades(false)
      } else { setValue('formularioCinco.prematuridad', false); }

      if (formState.formularioUno.peso < 2500 || formState.formularioUno.edadGestacional1 >= 41) {
        setValue('formularioCinco.otros', true);
        const otros = document.querySelector('#otros');
        otros.addEventListener('click', e => e.preventDefault());
        setShowSinComorbilidades(false)
      } else{ setValue('formularioCinco.otros', false );}
      if (formState.formularioUno.apgar < 7) {
        setValue('formularioCinco.asfixia', true);
        const asfixia = document.querySelector('#asfixia');
        asfixia.addEventListener('click', e => e.preventDefault());
        setShowSinComorbilidades(false)
      } else{ setValue('formularioCinco.asfixia', false );}
    }, [])
    

    const handleSinComorbilidades = () => {
        const [sinComorbilidades] = getValues(['formularioCinco.sinComorbilidades'])
        if (sinComorbilidades === false) {
            setValue('formularioCinco', {
                asfixia: false,
                malformaciones: false,
                prematuridad: false,
                infecciosas: false,
                otros: false,
                sinComorbilidades: true
            })
        }
    }

    const handleComorbilidades = () => {
        setValue('formularioCinco.sinComorbilidades', false);
    }


    const { formState: { isValid }, register, handleSubmit, setValue, getValues, watch } = useForm({
        defaultValues: {
            formularioCinco: {
                asfixia: false,
                malformaciones: false,
                prematuridad: false,
                infecciosas: false,
                otros: false,
                sinComorbilidades: true,
            }
        }
    });

    const handleBack = ()=>{
        navigate('/paso-cuatro');
        dispatch({
            type: types.form5Type,
            payload: getValues()
        })
    }

    const onSubmit = (values) => {

        const resultado = useComorbilidadesGroup(values)
        if (isValid) {
            dispatch({
                type: types.form5Type,
                payload: { formularioCinco: resultado }
            })
            dispatch({
                type:types.form6Type,
                payload:{formularioSeis:false}
            })
        }
        navigate('/resultados')
        
    }

    return (
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <h1 className='text-gray-900 mb-4 font-bold text-lg'>A continuación elija el grupo de comorbilidades neonatales adicionales identificado :</h1>
                    <div className="flex items-center mb-4">
                        <div className="min-w-6 flex items-center">
                            <input id="asfixia" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.asfixia')}
                                onChange={handleComorbilidades}
                            />
                        </div>
                        <label htmlFor="asfixia" className="ms-2 text-sm text-gray-900 ">
                            Trastornos relacionados con la asfixia
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="min-w-6 flex items-center">
                            <input id="malformaciones" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.malformaciones')}
                                onChange={handleComorbilidades}
                            />
                        </div>
                        <label htmlFor="malformaciones" className="ms-2 text-sm text-gray-900 ">
                            Malformaciones
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="min-w-6 flex items-center">
                            <input id="prematuridad" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.prematuridad')}
                                onChange={handleComorbilidades}
                            />
                        </div>
                        <label htmlFor="prematuridad" className="ms-2 text-sm text-gray-900 ">
                            Enfermedades relacionadas  con la prematuridad
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="min-w-6 flex items-center">
                            <input id="infecciones" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.infecciosas')}
                                onChange={handleComorbilidades}
                            />
                        </div>
                        <label htmlFor="infecciones" className="ms-2 text-sm text-gray-900 ">
                            Enfermedades infecciosas
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="min-w-6 flex items-center">
                            <input id="otros" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.otros')}
                                onChange={handleComorbilidades}
                            />
                        </div>
                        <label htmlFor="otros" className="ms-2 text-sm text-gray-900 ">
                            Cualquier otro trastorno no clasificado en categorías anteriores
                        </label>
                    </div>
                    {
                        showSinComorbilidades &&
                    <div className="flex items-center mb-8">
                        <div className="min-w-6 flex items-center">
                            <input id="sinComorbilidades" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register('formularioCinco.sinComorbilidades')}
                                onChange={handleSinComorbilidades}
                            />
                        </div>
                        <label htmlFor="sinComorbilidades" className="ms-2 text-sm text-gray-900 ">
                            Sin comorbilidades
                        </label>
                    </div>
                    }
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <button type="submit" className="primary-Btn">Ver Resultado</button>
                    <button onClick={ handleBack } className="secondary-Btn">Regresar al paso 4</button>
                </div>
            </form>
        </>
    )
}

export default Form5
