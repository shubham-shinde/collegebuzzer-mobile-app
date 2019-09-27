import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Button, ScrollView, ActivityIndicator } from 'react-native';
// import { Header } from '../components/style/index';

import * as action from '../actions/actions';
import Post from '../components/postComponent';

class App extends React.Component {
    static navigationOptions = {
        title: 'Club Posts',
    };
    // constructor(props) {
    //     super(props);
    // }
    componentWillMount = () => {
        if (this.props.posts.posts.length === 0) {
            this.props.getAllPosts(0);
        }
    }
    loadmore = () => {
        const posts = this.props.posts.posts;
        const lastpostId = posts[posts.length - 1].post._id;
        this.props.getAllPosts(lastpostId);
    }
    openProfile = (id) => {
        this.props.navigation.navigate('Profile', { id });
    }
    render() {
        const post = this.props.posts.posts && this.props.posts.posts.map((data, index) => (
                <Post 
                    index={index} 
                    key={data.post._id} 
                    role={data.role} 
                    Id={data.post.Id} 
                    _id={data.post._id} 
                    time={data.time} 
                    pPic={data.post.p_pic} 
                    pics={data.pics} 
                    name={data.post.name} 
                    userIntro={data.post.userIntro} 
                    text={data.post.text} 
                    likes={data.post.likes}
                    profile={this.openProfile}
                />
            )
        );
        return (
            <View>
                <ScrollView>
                    {/* <Header>
                        <Text style={{ fontSize: 20 }}>Club posts</Text>
                    </Header> */}                   
                    {post}
                    {
                        this.props.posts.isFetching 
                        ? <ActivityIndicator size="large" style={{ padding: 20 }} />
                        : <View style={{ padding: 15 }}>
                            <Button 
                                color='teal' 
                                title='LOAD MORE...' 
                                onPress={this.loadmore}                                 
                            />
                        </View>
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ posts: state.posts });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);
