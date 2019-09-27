import * as types from './../type/message';

const initialState = {
    confs: [],
    isFetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_CONF_REDUCER : {
            const newState = { ...state };
            newState.confs = [...newState.confs, ...action.payload.posts];
            return newState;
        }
        case types.FETCHING_CONFS_POSTS : {
            const newState = { ...state };
            newState.isFetching = true;
            return newState;
        }
        case types.FETCHED_CONFS_POSTS : {
            const newState = { ...state };
            newState.isFetching = false;
            return newState;
        }
        case types.SUCCESFULLY_AUTH_CONF : {
            if (action.payload.index === null || action.payload.index === undefined) {
                return state;
            }
            const newState = { ...state };
            newState[action.payload.index].is_auth = true;
            return newState;
        }
        default : {
            return state;
        }
    }
};

