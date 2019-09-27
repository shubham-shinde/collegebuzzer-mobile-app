import * as types from './../type/message';
const initial_state =  {}

export default (state = initial_state, action) => {
    switch (action.type) {
        case types.ADD_TEXT_TO_ADD_CONF: {
            let newState = {...state}
            newState['text'] = action.payload
            return newState
            break;
        }
        case types.CHANGE_THEME_OF_ADD_CONF: {
            let newState = {...state}
            newState['theme'] = action.payload
            return newState
            break;
        }
        
        default: {
            return state;
        }
            break;
    }
}
