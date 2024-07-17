import { useForm } from 'react-hook-form'
import { cie10 } from '../../data/cie10'
import ComorbilidadesInput from './ComorbilidadesInput'
import { types } from '../../types/types.d';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import { useComorbilidadesList } from '../../hooks/useComorbilidadesList';



export default function ComorbilidadesSearch() {

    // Filtro
    const [search, setSearch] = useState('');
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const handleReset = (e)=>{
        setSearch('')
    }
    let resultadosBusqueda = [];
    if (!search) {
        resultadosBusqueda = cie10;
    }else{
       resultadosBusqueda = cie10.filter( c => c.codigo.toLowerCase().includes(search.toLowerCase()) || c.diagnostico.toLowerCase().includes(search.toLowerCase()) )
    }

    const navigate = useNavigate();
    const {formState, dispatch} = useContext(FormContext);

    const { register, setValue, handleSubmit, formState: { isValid }, watch, getValues } = useForm();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
      if (formState.formularioSeisValues) {
        const { asfixiaComorbilidad, malformacionesComorbilidad, prematuridadComorbilidad, infecciosasComorbilidad,  otrosComorbilidad } = formState.formularioSeisValues.formularioSeis;
        setValue(`formularioSeis.asfixiaComorbilidad`, asfixiaComorbilidad);
        setValue(`formularioSeis.malformacionesComorbilidad`, malformacionesComorbilidad);
        setValue(`formularioSeis.prematuridadComorbilidad`, prematuridadComorbilidad);
        setValue(`formularioSeis.infecciosasComorbilidad`, infecciosasComorbilidad);
        setValue(`formularioSeis.otrosComorbilidad`, otrosComorbilidad);
      }
    }, [])
    

    const handleBack = ()=>{
        dispatch({
            type: types.form6ValuesType,
            payload: {formularioSeisValues:getValues()}
        })
        navigate('/paso-cuatro');
    }

    const onSubmit = (values) => {

        const resultado = useComorbilidadesList(values);
        if (isValid) {
            dispatch({
                type:types.form5Type,
                payload:{formularioCinco:false}
            })
            dispatch({
                type: types.form6Type,
                payload: {formularioSeis:resultado}
            })
            dispatch({
                type: types.form6ValuesType,
                payload: {formularioSeisValues:values}
            })
            
        }
        navigate('/resultados');
    }


    return (
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-6">
                    <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="search">
                        Búsqueda de comorbilidades.
                    </label>
                    <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Seleccione las opciones de los resultados de búsqueda y luego presione el  botón Ver Resultado al final de la página.</p>
                    <input
                        className="appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search"
                        type="text"
                        placeholder="Ingrese el código o texto que desea buscar."
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                {
                    resultadosBusqueda.map(data => (
                        <ComorbilidadesInput key={data.id} codigo={data.codigo} grupo={data.grupo} diagnostico={data.diagnostico} id={data.id} register={register} setValue={setValue} handleReset={handleReset} />
                    ))
                }
                <div className="flex flex-col md:flex-row justify-between mt-6 gap-5">
                    <button type="submit" className="primary-Btn">Ver Resultado</button>
                    <button onClick={handleBack} className="secondary-Btn">Regresar al paso 4</button>
                </div>
            </form>
        </>
    )
}
