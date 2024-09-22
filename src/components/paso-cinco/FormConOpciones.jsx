import Form5 from "../../pages/Form5"
import ComorbilidadesSearch from "../comorbilidades/ComorbilidadesSearch"


export const FormConOpciones = ({handleSubmit, handleListaComorbilidades, handleGrupoComorbilidades, opciones, register}) => {
    return (
        <>
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
        </>
    )
}
