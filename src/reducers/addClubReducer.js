import * as types from './../type/message';

const initialState = {};

export default (state=initialState, action) => {
    switch (action.type) {
        case types.CHANGE_IN_ADD_CLUB_FORM:
        {
            const newState = {...state}
            const { field, data } = action.payload
            newState[field] = data
            return newState
            break;
        }
        default:
        {
            return state;
        }
            break;
    }
}