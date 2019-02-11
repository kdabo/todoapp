import { AUTHED_USER, AUTH_ERROR } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case AUTHED_USER:
      console.log('2', state, action.payload);
      return action.payload;
    case AUTH_ERROR:
      return action.payload;
    default:
      console.log('1', state)
      return state;
  }
}
