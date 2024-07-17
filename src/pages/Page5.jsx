import { useContext, useEffect } from "react"
import Container from "../components/Container"
import ComorbilidadesSearch from "../components/comorbilidades/ComorbilidadesSearch";
import Form5 from "./Form5";
import { FormContext } from "../context/FormContext";
import { types } from "../types/types.d";
import { useForm } from "react-hook-form";


const Page5 = () => {

    const { formState, dispatch } = useContext(FormContext);

    const { opciones } = formState;
    
    useEffect(() => {
      if (formState.opciones) {
        const {listaComorbilidades,grupoComorbilidades} = formState.opciones;
        setValue('opcionesComorbilidades',{
            listaComorbilidades,grupoComorbilidades
        })
      }
    }, [])
    
    
    const { setValue, register, handleSubmit } = useForm();
    

    

    const handleListaComorbilidades = () => {
        setValue('opcionesComorbilidades', {
            grupoComorbilidades: false,
            listaComorbilidades: true,
        })

        dispatch({
            type:types.opcionesComorbilidades,
            payload: {
                grupoComorbilidades: false,
                listaComorbilidades: true,
            }
        })
    }
    const handleGrupoComorbilidades = () => {
        setValue('opcionesComorbilidades', {
            listaComorbilidades:false,
            grupoComorbilidades: true,
        })
        dispatch({
            type:types.opcionesComorbilidades,
            payload: {
                listaComorbilidades: false,
                grupoComorbilidades: true,
            }
        })
    }

    return (
        <>
            <Container>
                <div className="w-full max-w-xl">
                    <h1 className='text-gray-900 mb-4 font-bold text-lg'>Comorbilidades</h1>
                    <h3 className="text-md text-gray-900"> Seleccione una de las siguientes opciones:</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-4 mt-6">
                            <div className="min-w-6 flex items-center">
                                <input id="listaComorbilidades" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register('opcionesComorbilidades.listaComorbilidades')}
                                    onChange={handleListaComorbilidades}
                                />
                            </div>
                            <label htmlFor="listaComorbilidades" className="ms-2 text-sm text-gray-900 ">
                                Busqueda por comorbilidades de acruerdo al CIE10.
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="grupoComorbilidades" type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register('opcionesComorbilidades.grupoComorbilidades')}
                                    onChange={handleGrupoComorbilidades}
                                />
                            </div>
                            <label htmlFor="grupoComorbilidades" className="ms-2 text-sm text-gray-900 ">
                                Seleccionar grupos de comorbilidades del neonato.
                            </label>
                        </div>
                    </form>
                    {
                        opciones?.listaComorbilidades ? <ComorbilidadesSearch />
                            : opciones?.grupoComorbilidades ? <Form5 />
                                : ''

                    }
                </div>

            </Container>
        </>
    )
}

export default Page5
