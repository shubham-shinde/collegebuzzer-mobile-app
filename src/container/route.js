import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions/actions';


import ClubPost from './postsLayout/clubPosts';
import StuPost from './postsLayout/stuPost';
// import Photo from './photo';
// import Register from './auth/register/';
import AddPost from './postsLayout/addpost';
// import Login from './auth/login/';
// import Header from './header/header';
import Profile from './profile/profile';
// import Confessions from './confessionCont/';
// import AddConf from './confessionCont/addConfessionCont';
// import EditProfile from './profile/editProfile';
// import Clubs from './clubs';
// import AuthHandler from '../handlers/authHandlers';
// import AddClubs from './addClub';
// import Home from './home/';

const RootBotNav = createBottomTabNavigator({
        Clubs: {
            screen: ClubPost,
            navigationOptions: {
                tabBarLable: 'Club',
                tabBarIcon: () => <Icon name='home' />
            }
        },
        Students: {
            screen: StuPost,
            navigationOptions: {
                tabBarLable: 'Students',
                tabBarIcon: () => <Icon name='school' />
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLable: 'Profile',
                tabBarIcon: () => <Icon name='person' />
            }
        },
        AddPost: {
            screen: AddPost,
            navigationOptions: {
                tabBarLable: 'Add Post',
                tabBarIcon: () => <Icon name='add' />
            }
        }
    },
    {
      initialRouteName: 'Profile',
    }
);
  
class App extends Component {
    componentWillMount() {
        if (!this.props.user.isLoggedIn) {
            this.props.getBasicInfo();
        }
    }
    render() {
        return <RootBotNav />;
    }
}

const mapStateToProps = (state) => ({ user: state.user });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);

// import NotificationService from './notification/notify';
// import Loader from './loader/'
// import Message from './messege/'

// class Root extends Component {
//     render() {
//         return (  
//         <div>
//             <Loader />
//             <Message />
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/register" component={Register} />
//                 <Route path="/home" component={AuthHandler((Header(ClubPost)))} />
//                 <Route path="/stupost" component={AuthHandler((Header(StuPost)))} />
//                 <Route path="/addPost" component={AuthHandler(Header(AddPost))} />
//                 <Route path="/profile" component={AuthHandler(Header(Profile))} />
//                 <Route path="/confessions" component={AuthHandler(Header(Confessions))} />
//                 <Route path="/addConfession" component={AuthHandler(Header(AddConf))} />
//                 <Route path="/editprofile" component={AuthHandler(Header(EditProfile))} />
//                 <Route path="/clubs" component={AuthHandler(Header(Clubs))} />
//                 <Route path="/adminaddclub" component={AuthHandler(Header(AddClubs))} />
//             </Switch>
//         </div>
//         );
//     }
// }

// App.propTypes = {
//   story: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }

// export default Nav;
