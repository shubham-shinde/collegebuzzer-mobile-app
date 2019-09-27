import * as types from './../type/message';

const initialState = {
    profile: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATA_PROFILE_INFORMATION: {
            return action.payload;
        }
        case types.UPDATA_PROFILE_POSTS: {
            const newState = { ...state };
            newState.posts = action.payload;
            return newState;
        }
        case types.DELETE_POST_FROM_PROFILE_POST: {
            const newState = { ...state };
            const _id = action.payload;
            if (newState.h_posts) {
                if (newState.h_posts.indexOf(_id) > -1) {
                    // console.log(newState.h_posts.indexOf(_id), _id);
                    newState.h_posts.splice(newState.h_posts.indexOf(_id), 1);
                    newState.posts.splice(
                        newState.posts.findIndex((item) => _id === item.post._id), 1
                    );
                }
            }
            return newState;
        }
        default: {
            return state;
        }
    }
};
