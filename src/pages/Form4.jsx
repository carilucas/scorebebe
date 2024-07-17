import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { types } from "../types/types.d";

const Form4 = () => {
    const navigate = useNavigate();
    const { formState, dispatch } = useContext(FormContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        localStorage.setItem('formStorage', JSON.stringify( formState ));
    }, [])

    useEffect(() => {
        if (formState.formularioCuatro) {
            const { maduracionPulmonar, uteroinhibicion } = formState.formularioCuatro;
            setValue('formularioCuatro', {
                maduracionPulmonar, uteroinhibicion
            })
        }
    }, [])


    const { formState: { isValid }, register, handleSubmit, setValue, getValues } = useForm({
        defaultValues: {
            formularioCuatro: {
                maduracionPulmonar: false,
                uteroinhibicion: false,
            }
        }
    });

    const handleBack = ()=>{
        navigate('/paso-tres');
        dispatch({
            type: types.form4Type,
            payload: getValues()
        })
    }

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({
                type: types.form4Type,
                payload: values
            })
        }

        navigate('/paso-cinco')
    }

    return (
        <>
            <Container>
                <div className="w-full max-w-xl">
                    <h1 className='text-gray-900 mb-4 font-bold text-lg'>Factores que podrían reducir el riesgo del neonato</h1>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="maduracionPulmonar" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioCuatro.maduracionPulmonar')}
                                    />
                                </div>
                                <label htmlFor="maduracionPulmonar" className="ms-2 text-sm text-gray-900 ">
                                    Es prematuro y recibió dosis completa de maduración pulmonar
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="min-w-6 flex items-center">
                                    <input id="uteroinhibicion" type="checkbox" value="" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        {...register('formularioCuatro.uteroinhibicion')}
                                    />
                                </div>
                                <label htmlFor="uteroinhibicion" className="ms-2 text-sm text-gray-900 ">
                                    Es prematuro y recibió tratamiento de uteroinhibición hasta alcanzar maduración pulmonar
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5">
                            <button type="submit" className="primary-Btn">Siguiente</button>
                            <button onClick={handleBack} className="secondary-Btn">Regresar al paso 3</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Form4
