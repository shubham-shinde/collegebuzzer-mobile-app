import * as types from './../type/message';
// import API from '../services/api/';
import lsServices from '../services/ls-service';
import * as appConfigs from '../../app-config';
// import { redirectTo, bringLoader, removeLoader } from './actions';
const ls = lsServices();

export const setNewThemeProfileEdit = (payload) => ({
    type: types.PREVIEW_NEW_EDIT_PROFILE,
    payload
});

export const setNewPpicProfileEdit = (payload) => ({
    type: types.PREVIEW_NEW_EDIT_PROFILE_PIC,
    payload
});

export const updateProfile = () => (dispatch, getState) => {
    // dispatch(bringLoader());
    const post = getState().editprofile;
    const data = new FormData();

    data.append('bio', post.bio);
    data.append('theme', post.theme);

    if (post.p_pic.new) {
        data.append('pic', post.p_pic.new);
    }
    

    const headers = new Headers();

    const authToken = ls.get(appConfigs.TOKEN_NAME);
    if (authToken) {
        headers.append(appConfigs.TOKEN_NAME, authToken);
    }

    fetch(`${appConfigs.SERVER_URL}/updateprofile`, {
        method: 'POST',
        headers,
        body: data,
    }).then((response) => {
        response.json().then(() => {
        // dispatch(removeLoader());
        // dispatch(redirectTo('/home'));
        });
    });
};
