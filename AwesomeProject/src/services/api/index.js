import * as config from '../../../app-config';
import configs from './fetch-configs';

const Api = () => {
    const Get = async (path) => {
        try {
            const serverPath = config.SERVER_URL + path;
            const fetchConfigs = await configs('get');
            const data = await fetch(serverPath, fetchConfigs);
            return data.json();
        }
        catch (err) {
            console.log('error from fetch', err);
        }
    };

    const Post = async (path, payload) => {
        const serverPath = config.SERVER_URL + path;
        const fetchConfigs = await configs('post', payload);
        const data = await fetch(serverPath, fetchConfigs);
        return data.json();
    };

    return {
        get: Get,
        post: Post
    };
};

export default Api;
