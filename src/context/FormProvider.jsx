import { useReducer } from "react"
import { FormContext } from "./FormContext";
import { formReducer } from "./formReducer";


const initialState = {};

const init = ()=>{
  const formStorage = JSON.parse( localStorage.getItem('formStorage'))|| {} ;
  return formStorage
}

const FormProvider = ({children}) => {
    const [ formState, dispatch ] = useReducer(formReducer, initialState, init );
    
  return (
    <FormContext.Provider value={ {formState, dispatch} }>
        { children }
    </FormContext.Provider>
  )
}

export default FormProvider
