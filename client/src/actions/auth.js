import { AUTH } from '../constants/actionTypes';

const storeAuthData = (result, token) => ({
    type: AUTH,
    payload: { result, token },
  });
  
  export default storeAuthData;
  