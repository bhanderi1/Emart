import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./AuthContant";

const initialState = {
  users: [],
  currentUser: null,
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const exists = state.users.find(u => u.email === action.payload.email);
      if (exists) {
        return { ...state, error: "User already exists" };
      }
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
      };

    case LOGIN_USER:
      const user = state.users.find(
        u => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        return { ...state, currentUser: user, error: null };
      }
      return { ...state, error: "Invalid credentials" };

    case LOGOUT_USER:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default AuthReducer;
