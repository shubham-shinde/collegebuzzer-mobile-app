import * as types from './../type/message';
const initial_state =  {}

export default (state = initial_state, action) => {
    switch (action.type) {
        case types.ADD_FILE_TO_ADD_POST: {
            let newState = {...state}
            const files = newState.files ? newState.files : [];
            newState.files = [...files, action.payload]
            return newState
            break;
        }
        case types.ADD_TEXT_TO_ADD_POST: {
            let newState = {...state}
            newState.text = action.payload
            return newState
            break;
        }
        case types.REMOVE_PHOTO_FROM_ADD_POST: {
            const newState = {...state}
            newState.files.splice(action.payload, 1);
            return newState;
        }
        case types.ADD_POST_SUCCESS: {
            return {}
        }
        case types.ADD_PROBLEM_IN_ADD_POST: {
            let newState = {...state}
            newState.p_text = action.payload
            return newState
            break;
        }
        default: {
            return state;
        }
            break;
    }
}
