import debounce from "../../utils/debounce";
import { SET_TITLE } from "../../store/constants/feature";

const updateTitle = ({ ref, payload, oldState, firebase, dispatch }) => {
    firebase
        .ref(ref)
        .set(payload)
        .then(error => {
            if (error) {
                dispatch({
                    type: SET_TITLE,
                    payload: oldState
                });

                alert("There was an error performing the request.")
            }
        })
}

export default debounce(updateTitle, 500);