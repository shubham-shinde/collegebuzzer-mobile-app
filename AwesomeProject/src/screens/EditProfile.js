import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';

import * as action from '../actions/actions';
import * as editActions from '../actions/editProfileActions';
// import Post from '../components/postComponent/';
import ProfileComp from '../components/profileComponent/EditProfileComponent';

class EditProfile extends React.Component {  
    static navigationOptions = {
      title: 'Edit Profile',
    };
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    componentWillMount = () => {
        // console.log(this.props.state);
        //eslint-disable-next-line comma-spacing
        // const _id = this.props._id.slice(1,);
        // console.log(_id);
        this.props.getProfileOfThisMan('5b7340cbd7b9c7071e228c94');
    }
    onChangePpic = (e) => {
        this.props.setNewP_picProfileEdit(e.target.files[0]);
    }
    setNewTheme = () => {
        const themeArr = [
            'sunset',
            'kingYan',
            'rainbowBlue',
            'darkGray',
            'deepSpace',
            'scooter',
            'amin',
            'delicate',
            'dimigo',
            'dayTripper'
        ];
        this.props.setNewThemeProfileEdit({ 
            value: themeArr[this.state.index], 
            key: 'theme' 
        });        
        this.setState({ index: this.state.index < 9 ? this.state.index + 1 : 0 });
    }
    // bioEdit = (text) => {
    //     console.log(text);
    // }
    render() {
        // const post = (this.props.profile.posts) 
        // ? this.props.profile.posts.map((data, index) => (
        //     <Post 
        //         index={index} 
        //         key={data.post._id} 
        //         Id={data.post.Id} 
        //         role={data.role} 
        //         profile="profile" 
        //         _id={data.post._id} 
        //         p_pic={data.post.p_pic} 
        //         pics={data.pics} 
        //         time={data.time} 
        //         name={data.post.name} 
        //         userIntro={data.post.userIntro} 
        //         text={data.post.text} 
        //         likes={data.post.likes}
        //     />
        // ))
        // : null;
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
                    textEdit={this.bioEdit}
                    setNewTheme={this.setNewTheme}
                />
                {/* <View style={{ padding: 15 }}>
                    <Button 
                        color='teal' 
                        title='Edit Profile' 
                        onPress={this.loadmore}                                 
                    />
                </View> */}
                {/* {(post) ? (<Text 
                    style={{ 
                        textAlign: 'center', 
                        flex: 1, 
                        backgroundColor: 'white', 
                        fontSize: 17, 
                        padding: 8 
                    }}
                >
                    Posts
                </Text>) : null} */}
                {/* {post} */}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.editprofile
});

const matchDispatchToProps = (dispatch) => bindActionCreators(
    { ...action, ...editActions }, dispatch
);

export default connect(mapStateToProps, matchDispatchToProps)(EditProfile);
