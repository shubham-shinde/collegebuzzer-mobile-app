import * as types from './../type/message';
const initial_state =  []

export default (state = initial_state, action) => {
    switch (action.type) {
        case types.UPDATE_CONF_REDUCER: {
            let newState = [...state]
            newState = [...newState,...action.payload.posts]
            return newState;
            break;
        }
        case types.SUCCESFULLY_AUTH_CONF: {
            console.log(action)
            if(action.payload.index === null || action.payload.index === undefined) {
                return state
            }
            const newState = [...state]
            newState[action.payload.index].is_auth = true;
            return newState
        }
        default: {
            return state;
        }
            break;
    }
}
