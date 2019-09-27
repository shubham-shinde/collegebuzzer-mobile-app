import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';
import jic from 'j-i-c';
// import {postPhotofetch} from './../API/api';



class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        }
    }
    photoUpdate(e) {
        const photo = e.target.files[0];
        const reader = new FormData();
        reader.append('avatar',photo);
        console.log(reader);
        // postPhotofetch(reader).then((data) => {
        //     console.log(data);
        // }).catch((err) => {
        //     console.log(err);
        // })
        // this.setState({img: photo})
    }
    render() {
        return (
            <div>
                <input type='file' id="photo_upload" onChange={this.photoUpdate.bind(this)} style={{display:'none'}}/>
                <label htmlFor='photo_upload'>
                <h1>upload</h1>
                </label>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.posts
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Photo);