import { put, takeLatest } from "redux-saga/effects";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
} from "./AuthContant";

function* registerUserSaga(action) {
  const { email, password } = action.payload;
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = storedUsers.find((user) => user.email === email);

  if (existingUser) {
    yield put({ type: REGISTER_FAILED, payload: "User already exists" });
  } else {
    const updatedUsers = [...storedUsers, action.payload];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    yield put({ type: REGISTER_SUCCESS, payload: action.payload });
  }
}

function* loginUserSaga(action) {
  const { email, password } = action.payload;
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = storedUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    yield put({ type: LOGIN_SUCCESS, payload: user });
  } else {
    yield put({ type: LOGIN_FAILED, payload: "Invalid credentials" });
  }
}

function* logoutUserSaga() {
  localStorage.removeItem("currentUser");
  yield put({ type: LOGOUT_SUCCESS });
}

export default function* authSaga() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
  yield takeLatest(LOGIN_USER, loginUserSaga);
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
