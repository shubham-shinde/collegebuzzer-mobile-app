import * as types from './../type/message';
import * as commonActions from './actions'
import fetch from './../api/';

export const changeRegisterFrom = (payload) => {
    return {
        type: types.UPDATE_ONCHANGE_REGISTER_FORM,
        payload
    }
}

export const redirect = (path) => dispatch => {
    return dispatch(commonActions.redirectTo(path))
}

export const thisGayIsCompletedForm = (path) => {
    return (dispatch, getState) => {
        const form = {...getState().register}
        dispatch(commonActions.bringLoader());
        if(path === 'student') {
            form['dob'] = new Date([form.bob]).toISOString();
        }
        fetch().post('/'+path+'/register', form).then((data) => {

            console.log(data);
            if(data.msg) {
                dispatch(textToShowOnDone(data.msg))
            }
            else {
                dispatch(textToShowOnDone('Error'))
            }
            dispatch(commonActions.removeLoader())

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

export const changTypeOfRgistrationForm = (payload) => ({
    type: types.CHANDE_TYPE_OF_REGISTRATION_FORM,
    payload
})

export const clickOnDone = () => (dispatch) => {
    return dispatch(commonActions.redirectTo('/login'));
}