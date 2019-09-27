import * as types from './../type/message';

const initialState = {
    mail: '',
    password: ''
};

export default (state=initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ONCHANGE_LOGIN_FORM:
        {
            const newState = {...state}
            const { field, data } = action.payload
            newState[field] = data
            return newState
            break;
        }
        case types.TEXT_TO_SHOW_ON_DONE:
        {
            const newState = { ...state,
                text: action.payload
            }
            return newState;
            break;
        }
        case types.LOGIN_SUCCESS:
        {
            const newState = initialState
            return newState;
            break;
        }
        default:
        {
            return state;
        }
            break;
    }
}