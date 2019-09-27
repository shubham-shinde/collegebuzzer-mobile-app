import * as types from './../type/message';

const initialState = {
    mail: '',
    password: '',
    isFetching: false,
    success: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ONCHANGE_LOGIN_FORM: {
            const newState = { ...state };
            const { field, data } = action.payload;
            newState[field] = data;
            return newState;
        }
        case types.LOADING_LOGIN_FORM: {
            const newState = { ...state };
            newState.isFetching = true;
            return newState;
        }
        case types.TEXT_TO_SHOW_ON_DONE: {
            const newState = { ...state, text: action.payload };
            newState.isFetching = false;
            return newState;
        }
        case types.LOGIN_SUCCESS: {
            const newState = initialState;
            newState.success = true;
            return newState;
        }
        default: {
            return state;
        }
    }
};
