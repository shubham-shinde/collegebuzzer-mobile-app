import lService from '../services/ls-service';
import * as appConfigs from '../app-config';

const ls = lService();

const fetchConfig = (method, load) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const authToken = ls.get(appConfigs.TOKEN_NAME);
  console.log(authToken);
  // if (true) {
    //eslint-disable-next-line max-len
    headers.append(appConfigs.TOKEN_NAME, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjViNzM0MGNiZDdiOWM3MDcxZTIyOGM5NCIsInJvbGUiOiJzdHVkZW50IiwiYnJhbmNoIjoiSVQiLCJ5ZWFyIjoxNiwiaWF0IjoxNTM0NTEyMDQyfQ.CdTiPtEUFAAgqw4hu2wZkolE5i1rbniCJCcTKkAWswo');
  // }

  const config = {
    method,
    // credentials: 'include',
    headers
  };
  if (method === 'post') {
    const payload = JSON.stringify(load);
    config.body = payload;
  }

  return Object.assign({}, config);
};

export default fetchConfig;
