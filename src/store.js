import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { routerMiddleware, connectRouter } from 'connected-react-router';
import postReducer from './reducers/postReducer';
import stuPostReducer from './reducers/stuPostReducer';
// import confReducer from './reducers/confReducer';
import profileReducer from './reducers/profileReducer';
// import registerFormReducer from './reducers/registerPageReducer';
// import loaderReducer from './reducers/loaderReducer';
import user from './reducers/userReducer';
// import login from './reducers/loginReducer';
// import search from './reducers/searchReducer';
// import addpost from './reducers/addpostReducer';
// import editprofile from './reducers/editProfileReducer';
// import addconf from './reducers/addConfReducer';
// import addclub from './reducers/addClubReducer';

// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import history from './history';
// import { responsiveStateReducer, responsiveStoreEnhancer} from 'redux-responsive'

const reducer = combineReducers({
    posts: postReducer,
    profile: profileReducer,
    // register : registerFormReducer,
    // login : login,
    // loader: loaderReducer,
    // device: responsiveStateReducer,
    // confs: confReducer,
    user,
    // search,
    stupost: stuPostReducer,
    // addpost,
    // editprofile,
    // addconf,
    // addclub
});
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
