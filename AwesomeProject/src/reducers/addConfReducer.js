import * as types from './../type/message';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TEXT_TO_ADD_CONF: {
            const newState = { ...state };
            newState.text = action.payload;
            return newState;
        }
        case types.CHANGE_THEME_OF_ADD_CONF: {
            const newState = { ...state };
            newState.theme = action.payload;
            return newState;
        }
        
        default: {
            return state;
        }
    }
};
