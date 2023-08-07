import { AUTH } from '../constants/actionTypes';

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
        console.log('New State:', newState);
        return newState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  