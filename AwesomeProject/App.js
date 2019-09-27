import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import App1 from './provide';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <App1 />
        </Provider>
    );
  }
}
