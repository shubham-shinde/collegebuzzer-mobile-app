import * as types from './../type/message';
import * as commonActions from './actions'
import fetch from './../api/';
import lsServices from '../services/ls-service'
import * as appConfigs from '../app-config'
import {redirectTo} from './actions'
const ls = lsServices();

export const redirect = (path) => (dispatch) => {
    dispatch(redirectTo(path))
}

export const changeLoginFrom = (payload) => {
    return {
        type: types.UPDATE_ONCHANGE_LOGIN_FORM,
        payload
    }
}

export const thisGayIsCompletedForm = (path) => {
    return (dispatch, getState) => {
        const form = {...getState().login}
        dispatch(commonActions.bringLoader());
        fetch().post('/'+path+'/login', form).then((data) => {
            console.log(data);
            if(data.code === 200) { 
                dispatch(commonActions.removeLoader())
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    data
                })
                dispatch(textToShowOnDone(data.msg))
                return dispatch(commonActions.redirectTo('/home'));
            }
            else {
                dispatch(textToShowOnDone('Error'))
            }
            return dispatch(commonActions.removeLoader())

        }).catch((err) => {

            console.log(err);
            dispatch(textToShowOnDone(err.toString()))
            dispatch(commonActions.removeLoader())

        })
    }
}

export const textToShowOnDone = (payload) => ({
    type: types.TEXT_TO_SHOW_ON_DONE,
    payload
})
