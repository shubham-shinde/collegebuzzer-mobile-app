import * as types from './../type/message';

const initialState = {
    isFetching: false,
    result: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATA_SEARCH_BODY : {
            const newState = { ...state };
            newState.isFetching = false;
            newState.result = action.payload;
            return newState;
        }
        case types.SEARCH_RESULT_IF_FETCHING : {
            const newState = { ...state };
            newState.isFetching = true;
            return newState;
        }
        default:
            return state;
    }
};
