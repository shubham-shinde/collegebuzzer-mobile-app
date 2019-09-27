import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, ScrollView } from 'react-native';

import * as action from './../../actions/actions';
import Post from '../../components/postComponent/';
import ProfileComp from '../../components/profileComponent/';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount = () => {
        // console.log(this.props.state);
        //eslint-disable-next-line comma-spacing
        // const _id = this.props._id.slice(1,);
        // console.log(_id);
        this.props.getProfileOfThisMan('5b7340cbd7b9c7071e228c94');
    }
    render() {
        const post = (this.props.profile.posts) 
        ? this.props.profile.posts.map((data, index) => (
            <Post 
                index={index} 
                key={data.post._id} 
                Id={data.post.Id} 
                role={data.role} 
                profile="profile" 
                _id={data.post._id} 
                p_pic={data.post.p_pic} 
                pics={data.pics} 
                time={data.time} 
                name={data.post.name} 
                userIntro={data.post.userIntro} 
                text={data.post.text} 
                likes={data.post.likes}
            />
        ))
        : null;
        const profile = this.props.profile;
        return (
            <ScrollView id="profile">
                <ProfileComp 
                    _id={profile._id} 
                    heads={profile.heads} 
                    themeshow={profile.theme} 
                    p_pic={profile.p_pic} 
                    name={profile.name} 
                    userIntro={profile.userIntro} 
                    bio={profile.bio} 
                />
                {(post) ? (<Text style={{ textAlign: 'center' }}>
                    Posts
                </Text>) : null}
                {post}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    // _id : state.router.location.search,
    // state : state
});

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
