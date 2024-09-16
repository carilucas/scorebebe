import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Inicio = () => {
  return (
    <Container>
      <div className='flex justify-center'>
        <div className='w-full max-w-3xl'>
          <p className='text-gray-500 mb-4'>
            El Score Bebé estima el riesgo de muerte neonatal en Ecuador, diseñado para uso por parte de médicos en establecimientos de salud de primer y segundo nivel sin UCI neonatal ni especialistas en neonatología.
          </p>
          <p className='text-gray-500 mb-4'>
            Este cuestionario ayuda a medir el riesgo de muerte neonatal y categoriza el riesgo (alto, moderado, bajo, muy bajo) para facilitar intervenciones oportunas. El personal de salud debe seguir las normas de atención neonatal vigentes. Consulte las normativas <a className='text-blue-300' href="https://salud.gob.ec" target="_blank" rel="noopener noreferrer">www.salud.gob.ec</a>
          </p>
          <Link to={"instrucciones"} className='primary-Btn mt-10'>Siguiente</Link>
        </div>

      </div>
    </Container>
  )
}

export default Inicio
