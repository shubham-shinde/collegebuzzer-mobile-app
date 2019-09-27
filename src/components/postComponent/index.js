import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-native-slick';
import { Icon, Divider } from 'react-native-elements';
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
        const bk = () => pics.map((dat, index) => (
                <Image 
                    source={{ uri: dat.pic }} 
                    style={{ height: 400, width: 'auto' }} 
                    resizeMode="contain"
                    key={index}
                />
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
                <Slider {...settings} style={{ height: 'auto' }}>
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
            // Id, 
            time, 
            userIntro, 
            text, 
            likes, 
            // _id, 
            // index, 
            // role, 
            // profile 
        } = this.props;
        // const color = (likes.indexOf(this.props.user._id) > -1) ? 'red' : '';
        console.log(likes);
        // const user = this.props.user;
        return (
            <Section key={key}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View>
                        {/* <View/> */}
                        <Image
                            source={{ uri: pPic }}
                            style={{ width: 70, height: 70, borderRadius: 50, marginRight: 20 }}
                        />
                    </View>
                    <View >
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{name}</Text>
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
                    <Divider />
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
        // posts: state.posts,
        user: state.user,
        stuPost: state.stupost
});

export default connect(mapStateToProps, matchDispatchToProps)(Post);


// class ReplysForComments extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             visibility: 0
//         }
//     }
//     openAllReplys() {
//         const newState = Object.assign({}, this.state);
//         newState.visibility = !newState.visibility;
//         this.setState(newState);
//     }
//     showAllReply(data, index) {
//         return(
//             <View key={index} className="prv_comments_all_replys">
//                 <View className="prv_comments_all_replys_name">
//                     <span>
//                         {data.firstName} {data.surname} 
//                     </span>
//                     <span>
//                         {data.branch} {data.year}nd year
//                     </span>
//                 </View >
//                 <View className="prv_comments_all_replys_rply">{data.reply}</View>            
//             </View>
//         )
//     }
//     render() {
//         let rply = null;
//         if (this.state.visibility) {
//             rply = this.props.data.map(this.showAllReply.bind(this))
//         }
//          return(
//             <View>
//                 <View 
//                      onClick={this.openAllReplys.bind(this)}  
//                      style={{color: 'blue'}}>show all Reply</View>                
//                 {rply}
//             </View>
//         );
//     }
// }

// class CommentsOfPosts extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             visibility: 0
//         }
//     }
//     openAllComments() {
//         const newState = Object.assign({}, this.state);
//         newState.visibility = !newState.visibility;
//         this.setState(newState);
//     }
//     showAllComments(comment, index) {
//         return (
//             <View key={index} className="comment_grid_container">
//                 <View className="prv_comment_name">
//                     <span>
//                     {comment.firstName} {comment.surname} 
//                     </span>
//                     <span>
//                         {comment.branch} {comment.year}nd year
//                     </span>
//                 </View>
//                 <View className="prv_comment_comment"><View>{comment.comment}</View></View>
//                 <View className="prv_comment_replys">
//                     <ReplysForComments data={comment.reply}/>
//                     <View className="your_rply">
//                         <View className="prv_comment_input" contentEditable="true"></View>
//                         <View className="prv_comment_reply_button">reply</View>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
//     render() {
//         let cmt = null;
//         if (this.state.visibility) {
//             cmt = this.props.comments.map(this.showAllComments.bind(this));
//         }
//         return (
//             <View>
//                 <View className="likes_and_shares">
//                     <View>{this.props.data.likes} Likes & {this.props.data.shares} shares</View>
//                     <View 
//                          onClick={this.openAllComments.bind(this)} 
//                          style={{color:"blue"}}>comments</View>
//                 </View>
//                 {cmt}
//             </View>
//         );
//     }
// }
