import * as types from './../type/message';
import {redirectTo, bringLoader, removeLoader} from './actions'
import API from '../api/'
import lsServices from '../services/ls-service'
import * as appConfigs from '../app-config'
const ls = lsServices()


export const addFilesToForm = (file) => ({
    type : types.ADD_FILE_TO_ADD_POST,
    payload : file
})
export const addTextToForm = (payload) => ({
    type : types.ADD_TEXT_TO_ADD_POST,
    payload
})
export const removeThisPhotoFromAddPost = (payload) => ({
    type : types.REMOVE_PHOTO_FROM_ADD_POST,
    payload
})

export const uploadNewPost = () => (dispatch, getState) => {
    const post = getState().addpost;
    dispatch(bringLoader())
    const data = new FormData();

        data.append('text', post.text ? post.text : '');

        if(post.files)
            post.files.map((file) => {
                return data.append('pic', file);
            })

        const headers = new Headers();

        const authToken = ls.get(appConfigs.TOKEN_NAME);
        if (authToken) {
            headers.append(appConfigs.TOKEN_NAME, authToken);
        }
    
        fetch(appConfigs.SERVER_URL+'/addpost', {
          method: 'POST',
          headers: headers,
          body: data,
        }).then((response) => {
          response.json().then((body) => {
              if(body.code === 204) {
                dispatch({
                    type: types.ADD_POST_SUCCESS
                })
                dispatch(removeLoader())
                dispatch(redirectTo('/home'))
              }
              else {
                dispatch(removeLoader())
                dispatch({
                    type: types.ADD_PROBLEM_IN_ADD_POST,
                    payload: body.msg
                })
              }
          });
        }).catch((err) => {
            console.log(err);
            dispatch(commonActions.removeLoader())
        })
}