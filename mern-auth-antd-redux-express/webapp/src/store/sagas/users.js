import { call, put, takeEvery } from "redux-saga/effects";
import { signIn, signUp } from "../../api/users";
import { userActions, notificationActions } from "../actions";
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from "../actions/types";
import { decode } from "jsonwebtoken";

function* signInRequest(action) {
  try {
    const user = yield call(signIn, action.payload);
    const { data } = user;

    localStorage.setItem("token", data.info);

    yield put(userActions.signInSuccess(decode(data.info)));
  } catch (error) {
    yield put(notificationActions.addNotification(error.response.data));
    yield put(userActions.signInSuccess({}));
  }
}

function* signUpRequest(action) {
  try {
    const user = yield call(signUp, action.payload);
    const { data } = user;

    yield put(userActions.signUpSuccess(data));
  } catch (error) {
    yield put(notificationActions.addNotification(error.response.data));
    yield put(userActions.signInSuccess({}));
  }
}

function* userWatcher() {
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
  yield takeEvery(SIGNUP_REQUEST, signUpRequest);
}

export { userWatcher };
