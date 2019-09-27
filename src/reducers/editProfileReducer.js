import * as types from './../type/message';
const initial_state = {}

export default (state = initial_state, action) => {
    switch (action.type) {
        case types.FIRST_UPDATA_EDIT_PROFILE: {
            return action.payload;
            break;
        }
        case types.PREVIEW_NEW_EDIT_PROFILE: {
            const newState = {...state}
            newState[action.payload.key] = action.payload.value
            return newState
        }
        case types.PREVIEW_NEW_EDIT_PROFILE_PIC: {
            const newState = {...state}
            newState.p_pic.new = action.payload
            return newState
        }
        
        default:{
            return state;
        }
            break;
    }
}