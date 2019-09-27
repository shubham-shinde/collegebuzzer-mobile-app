import { AsyncStorage } from 'react-native';

const ls = () => {
  return {
    get: Get,
    set: Sete,
    remove: Remove
  };

  function Get(key) {
    const value = AsyncStorage.getItem(key);
    return value;
  }

  function Sete(key, value) {
    AsyncStorage.setItem(key, value);
  }

  function Remove(key) {
    AsyncStorage.removeItem(key);
  }
};

ls().set(
  'xxx-kon-token', 
  //eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjViNzM0MGNiZDdiOWM3MDcxZTIyOGM5NCIsInJvbGUiOiJzdHVkZW50IiwiYnJhbmNoIjoiSVQiLCJ5ZWFyIjoxNiwiaWF0IjoxNTM0NTEyMDQyfQ.CdTiPtEUFAAgqw4hu2wZkolE5i1rbniCJCcTKkAWswo'
);

export default ls;
