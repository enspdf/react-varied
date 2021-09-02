import * as actinTypes from '../constants/feature';

const initialState = {
    title: null
}

const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case actinTypes.SET_TITLE:
            return {
                title: action.payload
            }
        default:
            return state;
    }
}

export default featureReducer;