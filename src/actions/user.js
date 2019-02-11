import {auth, googleProviderObject} from '../firebase';
import {AUTH_USER, AUTHED_USER, AUTH_ERROR} from './types';

const userLoading = id => ({ type: AUTH_USER, payload: id });
const userLoaded = user => ({ type: AUTHED_USER, payload: user });
const userLoadError = () => ({ type: AUTH_ERROR });

export const fetchUser = () => (
  (dispatch) => {
    dispatch(userLoading);
    return auth.signInWithPopup(googleProviderObject)
      .then(user => {
        dispatch( userLoaded(user) );
        return user;
      })
      .catch(err => {
        dispatch( userLoadError() );
      });
  }
);
