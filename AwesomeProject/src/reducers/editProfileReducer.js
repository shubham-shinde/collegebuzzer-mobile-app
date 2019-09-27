import * as types from './../type/message';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FIRST_UPDATA_EDIT_PROFILE: {
            return action.payload;
        }
        case types.PREVIEW_NEW_EDIT_PROFILE: {
            const newState = { ...state };
            newState[action.payload.key] = action.payload.value;
            return newState;
        }
        case types.PREVIEW_NEW_EDIT_PROFILE_PIC: {
            const newState = { ...state };
            newState.p_pic.new = action.payload;
            return newState;
        }
        
        default: {
            return state;
        }
    }
};
