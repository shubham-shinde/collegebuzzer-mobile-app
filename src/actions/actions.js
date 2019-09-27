import * as types from './../type/message';
// import {push, replace} from 'connected-react-router';
import API from '../api/';
// import lsServices from '../services/ls-service';
// import * as appConfigs from '../app-config';

// const api = API();
// const ls = lsServices()

// export const toggleAction = () => ({
//     type : types.TOGGLE_ON_CLICK
// })
// export const redirectTo = (url) => {
//     return push(url);
// }
// export const replaceTo = (url) => {
//     return replace(url);
// }

//loader
// export const bringLoader = () => ({
//     type : types.BRING_ON_LOADER
// })
// export const removeLoader = () => ({
//     type : types.FUCK_THE_LOADER
// })

//onscroll
// export const userScrolled = (payload) => ({
//     type : types.USER_SCROLLED,
//     payload
// })

export const getAllPosts = id => dispatch => API()
    .get(`/getclubposts/${id}`)
    .then((data) => dispatch({
        type: types.UPDATE_POST_REDUCER,
        payload: data
}));

export const getAllPoststu = (id) => (dispatch) => {
    API().get(`/getstuposts/${id}`).then((data) => {
        console.log(data);
        dispatch({
            type: types.UPDATE_STU_POST_REDUCER,
            payload: data
        });
    });
};

// export const deletePost = (_id) => (dispatch) => {
//     dispatch(bringLoader())
//     api.get("/delpost/"+_id).then((data) => {
//         if(data.code === 204) {
//             dispatch({type: types.DELETE_POST_FROM_CLUB_POST, payload: _id})
//             dispatch({type: types.DELETE_POST_FROM_PROFILE_POST, payload: _id})
//             dispatch({type: types.DELETE_POST_FROM_STUDENTS_POST, payload: _id})
//             dispatch(removeLoader())
//         }
//         else {
//             console.log(data)
//             dispatch(removeLoader())
//         }
//     }).catch((er) => {
//         console.log(er)
//         dispatch(removeLoader())
//     })
// }

// export const likeAPost = (id, index, Id, toDo, writer) => (dispatch) => {
//     console.log(id, writer)
//     api.post("/likepost", {_id: id, writer });
//     if(writer === 'club') {
//         (toDo === 'like')  ?   dispatch({
//                 type: types.SUCCESFULLY_LIKED_POST,
//                 payload: {
//                     index,
//                     Id
//                 }
//             })
//         :   dispatch({
//                 type: types.SUCCESFULLY_UNLIKED_POST,
//                 payload: {
//                     index,
//                     Id
//                 }
//             })
//     }
//     else {
//         (toDo === 'like')  ?   dispatch({
//             type: types.SUCCESFULLY_LIKED_STU_POST,
//             payload: {
//                 index,
//                 Id
//             }
//         })
//     :   dispatch({
//             type: types.SUCCESFULLY_UNLIKED_STU_POST,
//             payload: {
//                 index,
//                 Id
//             }
//         })
//     }
// }
// export const getAllConfs = (id, role) => (dispatch) => {
//     console.log(role)
//     if(role === 'admin') {
//         API().get("/admin/getconfs/"+id).then((data) => {
//             return dispatch({
//                 type: types.UPDATE_CONF_REDUCER,
//                 payload: data
//             })    
//         }) 
//     }
//     else {
//         API().get("/getconfs/"+id).then((data) => {
//             console.log(data)
//             return dispatch({
//                 type: types.UPDATE_CONF_REDUCER,
//                 payload: data
//             })    
//         })
//     }    
// }

export const getBasicInfo = () => (dispatch) => {
    API().get('/basic').then((data) => {
        dispatch({
            type: types.UPDATA_BASIC_INFORMATION,
            payload: data.basic
        });
        // return dispatch({
        //     type: types.FIRST_UPDATA_EDIT_PROFILE,
        //     payload: {
        //         p_pic: {
        //             new: null,
        //             old: data.basic.p_pic
        //         },
        //         bio: data.basic.bio,
        //         role: data.basic.role,
        //         name: data.basic.name,
        //         theme: data.basic.theme,
        //         _id: data.basic._id,
        //         userIntro: data.basic.userIntro
        //     }
        // });
    }).catch((err) => {
        console.log(err);
    });
};

// export const searchString = (toSearch) => (dispatch) => {
//     API().get('/search/'+toSearch).then((data) => {
//         dispatch({
//             type: types.UPDATA_SEARCH_BODY,
//             payload: data.data
//         })
//     })
// }

export const getProfileOfThisMan = (_id) => (dispatch) => {
    API().get(`/getprofile/${_id}`).then((data) => {
        console.log(data);
        dispatch({
            type: types.UPDATA_PROFILE_INFORMATION,
            payload: data.profile
        });
        const allPosts = data.profile.h_posts;
        return dispatch(loadThesePosts(allPosts, data.profile.role));
    });
};

export const loadThesePosts = (payload, role) => (dispatch) => {
    API().post('/gettheseposts', { ids: payload, role }).then((data) => {
        console.log(data);
        dispatch({
            type: types.UPDATA_PROFILE_POSTS,
            payload: data.posts
        });
    });
};

// export const logout = () => (dispatch) => {
//     ls.remove(appConfigs.TOKEN_NAME);
//     dispatch({
//         type : types.REMOVE_USER_ON_LOGOUT
//     })
//     dispatch(redirectTo('/'))
// }

// export const checkForTheToken = () => (dispatch) => {
//     const token = ls.get(appConfigs.TOKEN_NAME);
//     if(token) {
//         dispatch({
//             type : types.SET_LOGIN_STATE,
//             data: {
//                 isLoggedIn: true,
//                 token: token
//             }
//         })
//     }
// }

// export const authThisConf = (id, index, Id) => (dispatch) => {
//     API().get("/admin/authconf/"+id).then((reply) => {       
//         if(reply.code == 204) {
//             return dispatch({
//                 type: types.SUCCESFULLY_AUTH_CONF,
//                 payload: {
//                     index
//                 }
//             })
//         }
//     })
// }

// export const addThisConfession = (data) => (dispatch) => {
//     dispatch(bringLoader())
//     API().post("/addconf", data).then(() => {
//         dispatch(redirectTo('/home'))
//         dispatch(removeLoader())
//     })
// }

// export const addTextToAddConf = (payload) => ({
//     type : types.ADD_TEXT_TO_ADD_CONF,
//     payload
// })

// export const setNewthemeInAddConf = (payload) => ({
//     type : types.CHANGE_THEME_OF_ADD_CONF,
//     payload
// })

// export const changeaddClubFrom = (payload) => ({
//     type : types.CHANGE_IN_ADD_CLUB_FORM,
//     payload
// })

// export const shubhamHasCompletedAddClub = (data) => (dispatch) => {
//     dispatch(bringLoader())
//     API().post("/admin/addclub", data).then(() => {
//         dispatch(redirectTo('/home'))
//         dispatch(removeLoader())
//     })
// }
