import * as types from '../type/message.js';
import { push, replace } from 'react-router-redux';
import Api from '../api';
// import * as toastrActions from './toastr-actions';
// import qs from 'query-string';

const api = Api();


export const set_login_status = (data) => {
  return { type: types.SET_LOGIN_STATE, data }
}


export const on_change_login_form = (data) => {
  return { type: types.ON_CHANGE_LOGIN_FORM, data }
}

export const login_success = (data) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_SUCCESS, data });
    return dispatch(login_success_route())
  }
}

// export const show_error_msg = (data) => {
//   return (dispatch) => {
//     return dispatch(toastrActions.pop_toast({ msg: data.msg, status: false }));
//   }
// }

export const login_success_route = () => {
  return (dispatch, getState) => {
    const newState = getState();
    // const paramQuery = qs.parse(newState.routing.location.search);
    // if (paramQuery.redirect) {
    //   return dispatch(replace(paramQuery.redirect));
    // }
    return dispatch(replace('/'));
  }
}

export const go_to_auth_page = (data) => {
  return (dispatch) => {
    return dispatch(push('/login'));
  }
}

export const login = (data) => {
  return (dispatch) => {
    return api.post('/author/account/login', data).then((response) => {
      if (!response.status) {
        return dispatch(toastrActions.pop_toast({ msg: response.msg, status: false }));
      }
      dispatch(toastrActions.pop_toast({ msg: response.msg, status: true }));
      return dispatch(login_success({ token: response.token }));
    }).catch((err) => {
      return dispatch(toastrActions.pop_toast({ msg: err, status: false }));
    })
  }
}
