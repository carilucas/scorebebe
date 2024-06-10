import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Inicio = () => {
  return (
    <Container>
      <div className='flex justify-center'>
        <div className='w-full max-w-3xl'>
          <p className='text-gray-500 mb-4'>
            El <strong>Score Bebé</strong> es una  puntuación numérica que permite estimar el riesgo de muerte neonatal en el Ecuador. Este cuestionario le ayudará a medir el riesgo potencial de eventos adversos neonatales.
          </p>
          <p className='text-gray-500 mb-4'>
            Sus respuestas y la puntuación del Score Bebé servirán para facilitar la categorización del riesgo (alto, moderado, bajo, muy bajo) y adecuar las intervenciones más apropiadas y oportunas para el beneficio del neonato.
          </p>
          <p className='text-gray-500 mb-4'>
            El personal de salud debe manejar a los neonatos tal y como señalan las normas de atención neonatal vigentes.
          </p>
          <p className='text-gray-500 mb-4'>
            Para revisar las normativas de  atención infantil vigentes, consulte: <a className='text-blue-300' href="https://salud.gob.ec" target="_blank" rel="noopener noreferrer">www.salud.gob.ec</a>
          </p>
          <Link to={"instrucciones"} className='primary-Btn mt-10'>Siguiente</Link>
        </div>

      </div>
    </Container>
  )
}

export default Inicio
