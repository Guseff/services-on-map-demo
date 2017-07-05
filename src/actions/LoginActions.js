import {
  USER_LOGIN,
  NO_LOGIN,
} from '../constants/constants';

const usersURL = 'http://localhost:3001/users/';


export function loginUser(user) {
  const url = usersURL;

  Object.assign(user, {phone: ''});

  return dispatch =>
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(Object.keys(user).length ? { body: JSON.stringify(user) } : {}),
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.status === 404 || resp.status === 401) {
        throw resp.error;
      }
      localStorage.setItem('token', resp.token);
      dispatch({
        type: USER_LOGIN,
        payload: resp.user,
      })
    })
    .catch((error) => {
      dispatch({
        type: NO_LOGIN,
        payload: error,
      })
    });
}

export function logOutUser() {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: USER_LOGIN,
      payload: null,
    });
  }
}

export function checkLogin(token) {
  const url = usersURL + token;

  return dispatch => {
    if (token === null) return;

    fetch(url)
      .then(resp => resp.json())
      .then((resp) => {
        if (resp.status === 404 || resp.status === 401) {
          throw resp.error;
        }
        dispatch({
          type: USER_LOGIN,
          payload: resp,
        });
      })
      .catch((error) => {
        logOutUser();
      });
    }
}