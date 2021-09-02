import { SET_TITLE } from "../../constants/feature";

import firebaseUpdateTitle from '../../../firebase/feature/updateTitle'

const setTitle = payload => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const state = getState();

    const { feature: { title: oldState } } = state
    const config = {
        ref: 'feature/title',
        payload,
        oldState,
        firebase,
        dispatch,
    }

    firebaseUpdateTitle(config)

    dispatch({
        type: SET_TITLE,
        payload
    })
}

export default setTitle;