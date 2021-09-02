import { SET_TITLE } from "../../constants/feature";

const setupFirebaseListeners = (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const featureRef = firebase.database().ref("feature");

    featureRef.on("value", snapshot => {
        dispatch({
            type: SET_TITLE,
            payload: snapshot.val().title
        })
    })
}

export default setupFirebaseListeners;