import { useContext, useEffect, useState } from "react"
import Container from "../components/Container"
import ComorbilidadesSearch from "../components/comorbilidades/ComorbilidadesSearch";
import Form5 from "./Form5";
import { FormContext } from "../context/FormContext";
import { types } from "../types/types.d";
import { useForm } from "react-hook-form";
import { FormConOpciones } from "../components/paso-cinco/FormConOpciones";
import { FormSinOpciones } from "../components/paso-cinco/FormSinOpciones";


const Page5 = () => {

    const [showOpciones, setShowOpciones] = useState(true)
    const { formState, dispatch } = useContext(FormContext);

    const { opciones, formularioUno } = formState;

    const { setValue, register, handleSubmit } = useForm();

    useEffect(() => {
        if (formState.opciones) {
            const { listaComorbilidades, grupoComorbilidades } = formState.opciones;
            setValue('opcionesComorbilidades', {
                listaComorbilidades, grupoComorbilidades
            })
        }
    }, []);

    useEffect(() => {
        if (
            formularioUno.edadGestacional1 < 37 ||
            formularioUno.edadGestacional1 >= 41 ||
            formularioUno.peso < 2500 ||
            formularioUno.apgar < 7
        ) {
            setShowOpciones(false)
        }


    }, [])



    const handleListaComorbilidades = () => {
        setValue('opcionesComorbilidades', {
            grupoComorbilidades: false,
            listaComorbilidades: true,
        })

        dispatch({
            type: types.opcionesComorbilidades,
            payload: {
                grupoComorbilidades: false,
                listaComorbilidades: true,
            }
        })
    }

    const handleGrupoComorbilidades = () => {
        setValue('opcionesComorbilidades', {
            listaComorbilidades: false,
            grupoComorbilidades: true,
        })
        dispatch({
            type: types.opcionesComorbilidades,
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
                    {
                        showOpciones ?
                            <FormConOpciones
                                handleSubmit={handleSubmit}
                                handleGrupoComorbilidades={handleGrupoComorbilidades}
                                handleListaComorbilidades={handleListaComorbilidades}
                                opciones={opciones}
                                register={register}
                            />
                            :
                            <FormSinOpciones />
                    }
                </div>

            </Container>
        </>
    )
}

export default Page5
