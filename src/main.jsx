import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Instrucciones from './pages/Instrucciones.jsx'
import Form1 from './pages/Form1.jsx'
import Form2 from './pages/Form2.jsx'
import Form3 from './pages/Form3.jsx'
import Form4 from './pages/Form4.jsx'
import Page5 from './pages/Page5.jsx'
import FormProvider from './context/FormProvider.jsx'
import Resultados from './pages/Resultados.jsx'

const router = createBrowserRouter([
  {
    path: '', element: <App />, children: [
      { path: '', element: <Inicio /> },
      { path: 'instrucciones', element: <Instrucciones /> },
      { path: 'paso-uno', element: <Form1 /> },
      { path: 'paso-dos', element: <Form2 /> },
      { path: 'paso-tres', element: <Form3 /> },
      { path: 'paso-cuatro', element: <Form4 /> },
      { path: 'paso-cinco', element: <Page5 /> },
      { path: 'resultados', element: <Resultados /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </FormProvider>

)
