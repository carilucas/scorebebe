import React from "react"


const ComorbilidadesInput = React.memo(({ codigo, grupo, id, diagnostico, register,handleReset  }) => {

    return (
        <div className="flex items-center mb-4">
            <div className="min-w-6 flex items-center">
                <input id={ `${codigo}${grupo}` } type="checkbox" className=" w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    {...register(`formularioSeis.${grupo}Comorbilidad.${codigo}`)}
                    onChange={handleReset}
                />
            </div>
            <label htmlFor={ `${codigo}${grupo}` } className="ms-2 text-sm text-gray-900 ">
                { diagnostico }
            </label>
        </div>
    )
})

export default ComorbilidadesInput
