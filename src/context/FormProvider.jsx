import { useReducer } from "react"
import { FormContext } from "./FormContext"
import { formReducer } from "./formReducer";

const initialState = [];

const FormProvider = ({children}) => {
    const [ formState, dispatch ] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={ {formState, dispatch} }>
        { children }
    </FormContext.Provider>
  )
}

export default FormProvider
