import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/userTypes"

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        default:
            return state
    }
}