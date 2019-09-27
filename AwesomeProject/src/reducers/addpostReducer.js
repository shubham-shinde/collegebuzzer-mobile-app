import * as types from './../type/message';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FILE_TO_ADD_POST: {
            const newState = { ...state };
            const files = newState.files ? newState.files : [];
            newState.files = [...files, action.payload];
            return newState;
        }
        case types.ADD_TEXT_TO_ADD_POST: {
            const newState = { ...state };
            newState.text = action.payload;
            return newState;
        }
        case types.REMOVE_PHOTO_FROM_ADD_POST: {
            const newState = { ...state };
            newState.files.splice(action.payload, 1);
            return newState;
        }
        case types.ADD_POST_SUCCESS: {
            return {};
        }
        case types.ADD_PROBLEM_IN_ADD_POST: {
            const newState = { ...state };
            newState.p_text = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
};
