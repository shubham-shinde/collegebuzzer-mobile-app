import * as types from './../type/message';
// import lsServices from '../services/ls-service'

// const ls = lsServices();

const initialState = {
    token: undefined,
    isLoggedIn: false,
    role: 'guest',
    isFetching: false
};  

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOGIN_STATE: {
            const newState = Object.assign({}, state);
            newState.isLoggedIn = action.data.isLoggedIn;
            newState.token = action.data.token;
            return newState;
        }
        case types.FETCHED_BASIC_INFO: {
            const newState = { ...state };
            newState.isFetching = false;
            return newState;
        }
        case types.FETCHING_BASIC_INFO: {
            const newState = { ...state };
            newState.isFetching = true;
            return newState;
        }
        // case types.LOGIN_SUCCESS: {
        //     const newState = Object.assign({}, state);
        //     if (action.data.token) {
        //         ls.set('xxx-kon-token', action.data.token);
        //         newState.isLoggedIn = true;
        //         newState.token = action.data.token;
        //     }
        //     return newState;
        // }
        case types.UPDATA_BASIC_INFORMATION : {
            let newState = { ...state };
            newState.role = (action.payload.role) ? action.payload.role : newState.role;
            newState = { ...action.payload, ...newState, isLoggedIn: true };
            return newState;
        }
        case types.REMOVE_USER_ON_LOGOUT : {
            return {
                token: undefined,
                isLoggedIn: false,
                role: 'guest'
            };
        }
      
        default:
            return state;
    }
};
