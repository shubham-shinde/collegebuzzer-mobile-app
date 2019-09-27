import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-native-slick';
import { Icon } from 'react-native-elements';
import { Video } from 'expo';
// import { Icon } from 'expo';
// import AutoLink from 'react-native-autolink';
import { 
    View,
    Image, 
    Text
 } from 'react-native';

import * as action from './../../actions/actions';
import { Section } from '../style/';
// import './posts.css';
// import { Segment, Image, Icon, Viewider, Dropdown } from 'semantic-ui-react';
// import LazyLoadImage from '../lazyImageLoad/lazyload'

// import './slick-theme.css'
// import './slick.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: null
        };
    }
    // openProfile = () => {
    //     this.props.redirectTo(`/profile?${this.props.Id}`);
    // }
    flex(pics) {
        const bk = () => pics.map((dat, index) => (dat.type === 'pic' 
                ? <Image 
                    key={dat.pic}
                    source={{ uri: dat.pic }} 
                    style={{ height: 400, width: 'auto' }} 
                    resizeMode="contain"
                    key={index}
                />
                : <Video
                    key={dat.vid}
                    source={{ uri: dat.vid }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    // onClick={(data) => console.log(data)}
                    isLooping
                    style={{ width: 'auto', height: 400 }}
                />
                // : <Text>{ dat.vid }</Text>
            )
        );

        if (pics) {
            const settings = {
                dots: true,
                infinite: false,
                auto: false,
                speed: 500,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                loop: false
            };
            return (
                <Slider {...settings}>
                    {bk()}
                </Slider>
            );
        }
    }
    render() {
        const { 
            key, 
            pPic, 
            pics, 
            name, 
            Id, 
            time, 
            userIntro, 
            text, 
            likes,
            // index, 
            // role, 
            profile 
        } = this.props;
        // const color = (likes.indexOf(this.props.user._id) > -1) ? 'red' : '';
        // const user = this.props.user;
        return (
            <Section key={key}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View>
                        {/* <View/> */}
                        <Image
                            source={{ uri: pPic }}
                            style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }}
                        />
                    </View>
                    <View >
                        <Text 
                            style={{ fontSize: 20, fontWeight: 'bold' }}
                            onPress={() => profile(Id)}
                        >{name}</Text>
                        <Text>{userIntro}</Text>
                        <Text >{time}</Text>
                    </View>
                </View>

                <View>
                    {/* <View> */}
                    <Text style={{ paddingBottom: 10, paddingTop: 10 }}>
                        {text}
                    </Text>
                    {/* </View> */}
                </View>
                <View>
                        {this.flex(pics)}
                </View>
                <View>
                    {/* {(profile === 'profile') 
                        ? null 
                        : (<
                            Icon onClick={() => (color === 'red') 
                                ? this.props.likeAPost(
                                    _id, index, 
                                    this.props.user._id, 
                                    'unlike', 
                                    role
                                ) 
                                : this.props.likeAPost(
                                    _id, index, 
                                    this.props.user._id, 
                                    'like', 
                                    role
                                )} 
                            name="heart outline" 
                            size="large" color={color}
                        />)
                    } */}
                    <View 
                        style={{ 
                            flex: 1, 
                            flexDirection: 'row', 
                            justifyContent: 'space-evenly', 
                            marginTop: 10 
                        }}
                    >
                        <Icon 
                            name='favorite-border' 
                            // type='font-awesome' 
                            color={this.state.like ? 'red' : 'red'}
                        />
                        <Text> {likes.length} likes </Text>
                    </View>
                    {/* {(Id === user._id || user.role === 'admin') 
                    ? <Dropdown 
                        trigger 
                        options= {[{ 
                            key: 'delete', 
                            text: 'Delete', 
                            color:'red' , 
                            onClick: () => this.props.deletePost(_id) 
                        }]}
                    /> 
                    : null} */}
                </View>
                {/* <View className="comment_grid">
                    <View className="prv_comment" ref="comment">
                        <CommentsOfPosts 
                            comments={data.comments} 
                            visibility={this.state.commentVisibility} 
                            data={data}
                        />
                    </View>   
                    <View className="new_comment">
                        <View className="new_comment_grid_container">
                            <View className="comment_input" contentEditable="true"></View>
                            <View className="comment_button">
                                comment
                            </View>
                        </View>
                    </View>
                </View> */}
            </Section>
        );
    }
}

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

const mapStateToProps = (state) => ({
        user: state.user,
        stuPost: state.stupost
});

export default connect(mapStateToProps, matchDispatchToProps)(Post);
