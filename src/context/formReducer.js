import { types } from '../types/types.d'

const initialState = []
export const formReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case types.form1Type:
            return {
                ...state,
                formularioUno: {
                    ...payload
                }
            }
        case types.form2Type:
            return {
                ...state,
                formularioDos: {
                    ...payload
                }
            }
        case types.form3Type:
            return {
                ...state,
                formularioTres: {
                    ...payload
                }
            }
        case types.form4Type:
            return {
                ...state,
                formularioCuatro: {
                    ...payload
                }
            }
        case types.form5Type:
            return {
                ...state,
                formularioCinco: {
                    ...payload
                }
            }
        case types.percent:
            return {
                ...state,
                percent: payload
            }
        default:
            return state;
    }
}