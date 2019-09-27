import * as types from './../type/message';
import * as commonActions from './actions';
import fetch from '../services/api/';
import LS from '../services/ls-service';


export const changeLoginFrom = (payload) => ({
    type: types.UPDATE_ONCHANGE_LOGIN_FORM,
    payload
});

export const thisGayIsCompletedForm = (path) => (dispatch, getState) => {
    const form = { ...getState().login };
    dispatch({ type: types.LOADING_LOGIN_FORM });
    fetch().post(`/${path}/login`, form).then((data) => {
        // console.log(data);
        if (data.code === 200) {
            LS().set(data.token).then(() => {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    data
                });
                dispatch(textToShowOnDone(data.msg));
            });
        }
        else {
            dispatch(textToShowOnDone('Error'));
        }
    }).catch((err) => {
        console.log(err);
        dispatch(textToShowOnDone(err.toString()));
        dispatch(commonActions.removeLoader());
    });
};

export const textToShowOnDone = (payload) => ({
    type: types.TEXT_TO_SHOW_ON_DONE,
    payload
});
