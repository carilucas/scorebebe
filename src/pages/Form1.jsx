import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { types } from "../types/types.d";



const Form1 = () => {
    const { formState, dispatch } = useContext(FormContext);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({
                type: types.form1Type,
                payload: values
            })
            navigate('/paso-dos')
        }
    }
    return (
        <>
            <Container>
                <h1 className='text-gray-900 mb-4 font-bold text-lg'>Ingrese los siguientes datos para continuar</h1>
                <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sexo">
                            Sexo
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="sexo" {...register('sexo', {
                                    required: {
                                        value: true,
                                        message: 'Debe seleccionar una opción para le campo sexo.'
                                    }
                                })}
                            >
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {
                            errors.sexo &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">El campo no puede estar vacío.</span>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fechaNacimiento">
                            Seleccione la fecha de Nacimiento
                        </label>
                        <input
                            className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fechaNacimiento"
                            type="date"
                            {...register('fechaNacimiento', {
                                required: {
                                    value: true,
                                    message: 'Por favor ingrese la fecha de nacimiento del neonato'
                                }
                            })}
                        />
                        {
                            errors.fechaNacimiento &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.fechaNacimiento.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="horaNacimiento">
                            Hora de nacimiento:(Ingrese o seleccione en formato de 24 horas)
                        </label>
                        <input
                            className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="horaNacimiento"
                            type="time"
                            {...register('horaNacimiento', {
                                required: {
                                    value: true,
                                    message: 'Por favor ingrese lahora de nacimiento del neonato.'
                                }
                            })}
                        />
                        {
                            errors.horaNacimiento &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.horaNacimiento.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="apellido">
                            Apellido Materno
                        </label>
                        <input
                            className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="apellido"
                            type="text"
                            placeholder="Apellido Materno del Neonato"
                            {...register('apellidoMaterno', {
                                required: {
                                    value: true,
                                    message: 'Por favor ingrese el apellido materno del neonato.'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El apellido debe contener al menos 2 caracteres.'
                                }
                            })}
                        />
                        {
                            errors.apellidoMaterno &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.apellidoMaterno.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="peso">
                            Peso al nacer (En Gramos)
                        </label>
                        <input
                            className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="peso"
                            type="text"
                            placeholder="Ej: 3000"
                            {...register('peso', {
                                required: {
                                    value: true,
                                    message: 'Por favor ingrese el peso del neonato.'
                                },
                                pattern: {
                                    value: /^([0-9])*$/,
                                    message: 'Por favor ingrese solo números sin el (.)'
                                },
                                maxLength: {
                                    value: 4,
                                    message: 'El peso no puede contener más e 4 cifras.'
                                },
                                validate: (value) => {
                                    if (value <= 1000) {
                                        return 'El peso del neonato deb ser mayor.'
                                    }
                                    return true
                                }
                            })}
                        />
                        {
                            errors.peso &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.peso.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="edadGestacional">
                            Edad Gestacional
                        </label>
                        <input
                            className="appearance-none border border-gray-200 rounded w-55 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="edadGestacional"
                            type="text"
                            placeholder="Semanas"
                            {...register('edadGestacional1', {
                                required: {
                                    value: true,
                                    message: 'Ingrese el número de semanas del neonato'
                                },
                                pattern: {
                                    value: /^([0-9])*$/,
                                    message: 'Por favor ingrese solo números sin el (.)'
                                },
                                maxLength: {
                                    value: 2,
                                    message: 'El número de semanas no puede contener 3 cifras.'
                                },
                            })}
                        />
                        <span className="text-[50px] leading-[10px]"> . </span>
                        <input
                            className="appearance-none border border-gray-200 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="edadGestacionalDias"
                            type="text"
                            placeholder="dias"
                            {...register('edadGestacional2',{
                                pattern: {
                                    value: /^([0-9])*$/,
                                    message: 'Por favor ingrese solo números sin el (.)'
                                },
                                maxLength: {
                                    value: 1,
                                    message: 'El número de días no puede contener 2 cifras.'
                                },
                            })}
                        />
                        {
                            errors.edadGestacional1 &&
                            <span className="text-[11px] tstar vacío.ext-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.edadGestacional1.message}</span>
                        }
                        {
                            errors.edadGestacional2 &&
                            <span className="text-[11px] tstar vacío.ext-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.edadGestacional2.message}</span>
                        }
                    </div>
                    <div className="w-full mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="apgar">
                            apgar a los 5'
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="apgar" {...register('apgar',{
                                required:{
                                    value:true,
                                    message:'Por favor seleccione una opción para el apgar.'
                                }
                            })}
                            >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {
                            errors.apgar && 
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{ errors.apgar.message }</span>
                        }
                    </div>
                    <div className="w-full mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipoParto">
                            Tipo de parto
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipoParto" {...register('tipoParto',{
                                required:{
                                    value:true,
                                    message:'Por favor seleccione una opción para el tipo de parto.'
                                }
                            })}
                            >
                                <option>Cesárea</option>
                                <option>Otra</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {
                            errors.tipoParto && 
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{ errors.tipoParto.message }</span>
                        }
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="primary-Btn">Siguiente</button>
                        <button onClick={() => navigate('/instrucciones')} className="secondary-Btn">Regresar a las instrucciones</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form1
