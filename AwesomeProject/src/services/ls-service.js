import { AsyncStorage } from 'react-native';
import { TOKEN_NAME } from '../../app-config';

const key = TOKEN_NAME;

const ls = () => {
  return {
    get: Get,
    set: Sete,
    remove: Remove
  };

  function Get() {
    return AsyncStorage.getItem(key);
  }

  function Sete(value) {
    return AsyncStorage.setItem(key, value);
  }

  function Remove() {
    return AsyncStorage.removeItem(key);
  }
};

// ls().set(
//   'xxx-kon-token', 
  //eslint-disable-next-line max-len
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjViNzM0MGNiZDdiOWM3MDcxZTIyOGM5NCIsInJvbGUiOiJzdHVkZW50IiwiYnJhbmNoIjoiSVQiLCJ5ZWFyIjoxNiwiaWF0IjoxNTM0NTEyMDQyfQ.CdTiPtEUFAAgqw4hu2wZkolE5i1rbniCJCcTKkAWswo'
// );

export default ls;
