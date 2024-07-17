import { useContext, useEffect, useState } from "react";
import Container from "./../components/Container";
import { FormContext } from "../context/FormContext";
import { score } from "../helpers/score";
import { useNavigate } from "react-router-dom";
import { types } from "../types/types.d";
import { useForm } from "react-hook-form";
import RiesgoInminente from "../pdfs/RiesgoInminente";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { rangoCentil } from "../helpers/rangoCentil";
import { parametrosCentil } from "../data/parametrosCentil";
import RiesgoA from "../pdfs/RiesgoA";
import RiesgoB from "../pdfs/RiesgoB";
import RiesgoC from "../pdfs/RiesgoC";
import RiesgoD from "../pdfs/RiesgoD";


const Resultados = () => {
  const [showNuevaEvaluacion, setShowNuevaEvaluacion] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    localStorage.setItem('formStorage', JSON.stringify(formState));
  }, [])
  const { formState, dispatch } = useContext(FormContext);
  const { formularioUno, formularioDos, formularioTres, formularioCuatro, formularioCinco, formularioSeis, } = formState;

  const navigate = useNavigate();

  let resultado;

  useEffect(() => {
    if (formularioUno) {
      resultado = score(formState);
    } else {
      navigate('/paso-uno')
    }

  }, [])
  resultado = score(formState);


  const dias = formularioUno.edadGestacional2 === '' ? 0 : formularioUno.edadGestacional2;
  const rango = rangoCentil(parametrosCentil, formularioUno?.edadGestacional1, dias, formularioUno?.peso, formularioUno?.sexo);


  const { getValues } = useForm();

  const handleBack = () => {
    if (!formularioCinco && !formularioSeis) {
      navigate('/paso-dos');
      return;
    }
    navigate('/paso-cinco');
    dispatch({
      type: types.form6Type,
      payload: getValues()
    })
  }

  const handleNuevaEvaluacion = ()=>{
    setShowNuevaEvaluacion(false);
    localStorage.removeItem('formStorage');
    dispatch({
      type:types.resetForm
    })
    navigate('/paso-uno')
  }

  return (
    <Container>
      <div>
        <div className="resultados-container flex flex-col-reverse md:flex-row justify-center gap-[3rem]">
          <div className="datos">
            <h1 className='text-gray-900 mb-4 font-bold text-lg'>Datos del Neonato</h1>
            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Apellido Materno: <span className="font-normal tracking-wide text-gray-700">{formularioUno?.apellidoMaterno}</span></p>
            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Sexo: <span className="font-normal tracking-wide text-gray-700">{formularioUno?.sexo}</span></p>
            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Peso: <span className="font-normal tracking-wide text-gray-700">{formularioUno?.peso} gr.</span></p>
            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Edad Gestacional: <span className="font-normal tracking-wide text-gray-700">{formularioUno?.edadGestacional1}.{dias}</span></p>
            <p className="block tracking-wide text-gray-700 text-sm font-bold mb-2">Fecha y hora de nacimiento: <span className="font-normal tracking-wide text-gray-700">{formularioUno?.fechaNacimiento} {formularioUno?.horaNacimiento}</span> </p>
          </div>
          <div className="score">
            <h1 className='text-gray-900 mb-4 font-bold text-lg'>Score del Neonato</h1>
            <div className="score-circle text-7xl font-bold text-center border-4 border-blue-400 rounded-full w-[150px] h-[150px] flex justify-center items-center">
              <span className="text-blue-400">{resultado}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-5">
          {
            (!formularioCinco && !formularioSeis)
              ?
              <PDFDownloadLink document={<RiesgoInminente formulario={formularioUno} score={resultado} rango={rango} formularioDos={formularioDos} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-Inminente.pdf`}>
                <button type="submit" className="primary-Btn" onClick={()=>setShowNuevaEvaluacion(true)}>Descargar PDF completo Inminente</button>
              </PDFDownloadLink>
              :resultado >= 77
              ?
              <PDFDownloadLink document={<RiesgoA formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-A.pdf`}>
                <button type="submit" className="primary-Btn" onClick={()=>setShowNuevaEvaluacion(true)}>Descargar PDF completo A</button>
              </PDFDownloadLink>
              : (resultado >= 72 && resultado < 77)
              ?
              <PDFDownloadLink document={<RiesgoB formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-B.pdf`}>
                <button type="submit" className="primary-Btn" onClick={()=>setShowNuevaEvaluacion(true)}>Descargar PDF completo B</button>
              </PDFDownloadLink>
              : (resultado >= 64 && resultado < 72)
              ?
              <PDFDownloadLink document={<RiesgoC formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-C.pdf`}>
                <button type="submit" className="primary-Btn" onClick={()=>setShowNuevaEvaluacion(true)}>Descargar PDF completo C</button>
              </PDFDownloadLink>
              :
              <PDFDownloadLink document={<RiesgoD formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-D.pdf`}>
                <button type="submit" className="primary-Btn" onClick={()=>setShowNuevaEvaluacion(true)}>Descargar PDF completo D</button>
              </PDFDownloadLink>
          }
          <button onClick={handleBack} className="secondary-Btn">Regresar al formulario</button>
        </div>
        {
          showNuevaEvaluacion &&
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
          <button  onClick={handleNuevaEvaluacion} className="primary-Btn-Wide">Nueva Evaluación</button>
        </div>
        }
      </div>
    </Container>
  )
}

export default Resultados
