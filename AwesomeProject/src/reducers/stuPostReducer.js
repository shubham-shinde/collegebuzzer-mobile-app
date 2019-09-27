import * as types from './../type/message';

const initialState = {
    isFetching: false,
    posts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_STU_POST_REDUCER: {
            const newState = { ...state };
            newState.posts = [...newState.posts, ...action.payload.posts];
            return newState;
        }
        case types.FETCHING_STU_POSTS : {
            const newState = { ...state };
            newState.isFetching = true;
            return newState;
        }
        case types.FETCHED_STU_POSTS : {
            const newState = { ...state };
            newState.isFetching = false;
            return newState;
        }
        // case types.SUCCESFULLY_LIKED_STU_POST: {
        //     console.log(action.payload)
        //     const newState = [...state];
        //     newState[action.payload.index].post.likes.push(action.payload.Id);
        //     return newState;
        // }
        // case types.SUCCESFULLY_UNLIKED_STU_POST: {
        //     const newState = [...state];
        //     newState[action.payload.index].post.likes
        //      .splice(newState[action.payload.index]
        //      .post.likes.indexOf(action.payload.Id),1);
        //     return newState;
        // }
        // case types.DELETE_POST_FROM_STUDENTS_POST: {
        //     const newState = [...state]
        //     const _id = action.payload
        //     if( newState.length > 0) {
        //         if(newState.findIndex((item) => _id === item.post._id) > -1) {
        //             newState.splice(newState.findIndex((item) => _id === item.post._id),1)
        //         }
        //     }
        //     return newState
        // }
        default: {
            return state;
        }
    }
};
