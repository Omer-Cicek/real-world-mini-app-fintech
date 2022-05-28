const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
