import axios from 'axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types/userTypes'

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const loginConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/login', { email, password }, loginConfig)

        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAIL, payload: error.message })
    }
}