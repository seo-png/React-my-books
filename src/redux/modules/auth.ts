import { call, put, takeEvery } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import { Action, createActions, handleActions } from "redux-actions";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { LoginReqType } from "../../types";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null; 
}

const initialState: AuthState = {
  token: null, 
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

export const { pending, success, fail } = createActions(
  'PENDING', 
  'SUCESS', 
  "FAIL", 
  { prefix } 
  );

  const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    })
  }, initialState, { prefix });

  export default reducer;

  // saga
  export const { login, logout } = createActions('LOGIN', 'LOGOUT', { prefix });

  function* loginSaga(action: Action<LoginReqType>) {
    try {
      yield put(pending());
      const token: string = yield call(UserService.login, action.payload);
      TokenService.set(token);
      // localstorage
      yield put(success(token));
      // push
      yield put(push("/"));
    } catch(error) {
      yield put(fail(new Error((error as any).response?.data?.error || 'UNKNOWN_ERROR')));
    }
  }
  function* logoutSaga() {
    
  }
  export function* authSaga() {
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
  }