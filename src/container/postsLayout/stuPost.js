import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Button, Text, ScrollView } from 'react-native';
import { Header } from '../../components/style/index';

import * as action from './../../actions/actions';
import Post from '../../components/postComponent/';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentWillMount = () => {
        if (this.props.posts.length === 0) {
            this.props.getAllPoststu(0);
        }
    }
    loadmore = () => {
        const posts = this.props.posts;
        const lastpostId = posts[posts.length - 1].post._id;
        this.props.getAllPoststu(lastpostId);
    }
    render() {
        const post = this.props.posts.map((data, index) => (
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
                />
            )
        );
        return (
            <View>
                <ScrollView>
                    <Header>
                        <Text style={{ fontSize: 20 }}>Students posts</Text>
                    </Header>
                    {post}
                    <Button 
                        color='teal' 
                        style={{ margin: '20px', width: 'calc( 100% - 40px )' }} 
                        title='LOAD MORE...' 
                        onPress={this.loadmore} 
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ posts: state.stupost });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);

