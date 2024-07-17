import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'

const Instrucciones = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div className='flex justify-center'>
        <div className='w-full max-w-3xl'>
          <h1 className='text-gray-900 mb-4 font-bold text-lg'>Instrucciones</h1>
          <p className='text-gray-500 mb-4'>
            Para llenar el cuestionario haga clic en cada formulario que se presenta a continuación, y marque con una marca (X) en la casilla  que mejor describa el estado actual del neonato. Al finalizar, podrá visualizar el puntaje total del Score Bebé, su categoría de riesgo y sugerencias de manejo.
          </p>
          <button onClick={ ()=>navigate('/paso-uno') } className='primary-Btn'>Comenzar evaluación</button>
        </div>

      </div>
    </Container>
  )
}

export default Instrucciones
