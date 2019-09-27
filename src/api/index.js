import * as config from '../app-config';
import configs from './fetch-configs';

const Api = () => {
  return {
    get: Get,
    post: Post
  };

  function Get(path) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('get');
      fetch(serverPath, fetchConfigs).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return resolve(data);
      })
      .catch((err) => reject(err));
    });
    return promise;
  }

  function Post(path, payload) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('post', payload);
      console.log(fetchConfigs);
      fetch(serverPath, fetchConfigs).then((response) => response.json())
      .then((data) => {
        console.log(data);
        return resolve(data);
      })
      .catch((err) => reject(err));
    });
    return promise;
  }
};

export default Api;
