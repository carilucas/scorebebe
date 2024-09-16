import { useContext, useEffect, useState } from "react";
import Container from "./../components/Container";
import { FormContext } from "../context/FormContext";
import { score } from "../helpers/score";
import { useNavigate } from "react-router-dom";
import { types } from "../types/types.d";
import { useForm } from "react-hook-form";
import RiesgoInminente from "../pdfs/RiesgoInminente";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { rangoCentil } from "../helpers/rangoCentil";
import { parametrosCentil } from "../data/parametrosCentil";
import RiesgoA from "../pdfs/RiesgoA";
import RiesgoB from "../pdfs/RiesgoB";
import RiesgoC from "../pdfs/RiesgoC";
import RiesgoD from "../pdfs/RiesgoD";
import Datos from "../components/resultados/Datos";
import Score from "../components/resultados/Score";


const Resultados = () => {

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

  const handleNuevaEvaluacion = () => {

    localStorage.removeItem('formStorage');
    dispatch({
      type: types.resetForm
    })
    navigate('/paso-uno')
  }

  return (
    <Container>
      <div>
        <div className="resultados-container flex flex-col-reverse md:flex-row justify-center gap-[3rem]">
          <Datos resultado={resultado} formularioCinco={formularioCinco} formularioSeis={formularioSeis}/>
          <Score resultado={resultado}  formularioCinco={formularioCinco} formularioSeis={formularioSeis}/>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-5">
          {
            (!formularioCinco && !formularioSeis)
              ?
              <PDFDownloadLink className="flex-1" document={<RiesgoInminente formularioUno={formularioUno} score={resultado} rango={rango} formularioDos={formularioDos} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-Inminente.pdf`}>
                <button type="submit" className="primary-Btn w-full" >Reporte neonatal completo</button>
              </PDFDownloadLink>
              : resultado >= 77
                ?
                <PDFDownloadLink className="flex-1" document={<RiesgoA formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-A.pdf`}>
                  <button type="submit" className="primary-Btn w-full" >Reporte neonatal completo</button>
                </PDFDownloadLink>
                : (resultado >= 72 && resultado < 77)
                  ?
                  <PDFDownloadLink className="flex-1" document={<RiesgoB formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-B.pdf`}>
                    <button type="submit" className="primary-Btn w-full" >Reporte neonatal completo</button>
                  </PDFDownloadLink>
                  : (resultado >= 64 && resultado < 72)
                    ?
                    <PDFDownloadLink className="flex-1" document={<RiesgoC formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-C.pdf`}>
                      <button type="submit" className="primary-Btn w-full" >Reporte neonatal completo</button>
                    </PDFDownloadLink>
                    :
                    <PDFDownloadLink className="flex-1" document={<RiesgoD formularioUno={formularioUno} formularioTres={formularioTres} formularioCuatro={formularioCuatro} formularioCinco={formularioCinco} formularioSeis={formularioSeis} score={resultado} rango={rango} />} fileName={`Score-${formularioUno.apellidoMaterno}-Riesgo-D.pdf`}>
                      <button type="submit" className="primary-Btn w-full" >Reporte neonatal completo</button>
                    </PDFDownloadLink>
          }
          <button onClick={handleBack} className="secondary-Btn flex-1">Regresar para revisar/ajustar el score</button>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
          <button onClick={handleNuevaEvaluacion} className="primary-Btn-Wide">Nueva Evaluación</button>
        </div>
      </div>
    </Container>
  )
}

export default Resultados
