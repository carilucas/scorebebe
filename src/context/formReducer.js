import { types } from '../types/types.d'

const initialState = {};
export const formReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.form1Type:
            return {
                ...state,
                ...payload
            }
        case types.form2Type:
            return {
                ...state,
                ...payload
            }
        case types.form3Type:
            return {
                ...state,
                ...payload
            }
        case types.form4Type:
            return {
                ...state,
                ...payload
            }
        case types.form5Type:
            return {
                ...state,
                ...payload
            }
        case types.form6Type:
            return {
                ...state,
                ...payload
            }
        case types.form6ValuesType:
            return {
                ...state,
                ...payload
            }
        case types.opcionesComorbilidades:
            return {
                ...state,
                opciones: payload
            }
        case types.resetForm:
            return {}
        default:
            return state;
    }
}