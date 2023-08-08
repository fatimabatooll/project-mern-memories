import { AUTH, LOGOUT } from '../constants/actionTypes';

const initialState = {
    result: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH:
        const newState = {
          ...state,
          result: action.payload.result,
          token: action.payload.token,
        };
        console.log('data:', newState);
        localStorage.setItem('profile', JSON.stringify(newState))
        return newState;

        case LOGOUT:
            localStorage.removeItem('profile')
          
            return initialState;

      default:
        return state;
    }
  };
  
  export default authReducer;
  