import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { TextArea , Form, Segment, Button, Image} from 'semantic-ui-react'
import { Text, ScrollView, TextInput } from 'react-native';
import { Header } from '../../components/style/';
import * as action from './../../actions/actions';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         files: [],
    //         text: ''
    //     }
    // }
    // onChange = (e) => {
    //     const target = e.target;
    //     if (target.getAttribute('data-id') === 'file') {
    //         this.props.addFilesToForm(target.files[0]);
    //     }
    //     else {
    //         this.props.addTextToForm(target.value);
    //     }
    // }
    // upload = () => {
    //     if (this.props.addpost.text || this.props.addpost.files) {
    //         this.props.uploadNewPost();
    //     }
    // }
    // pics = (data, index) => (
    //         <Header fluid>
    //         <Image fluid src={window.URL.createObjectURL(data)} key={index} alt=""/>
    //         <Button 
    //fluid color='red' onClick={() => this.props.removeThisPhotoFromAddPost(index)}>REMOVE</Button>
    //         </Header>
    //     )
    // }
    render() {
        return (
            <ScrollView>
                <Header>ADD POST</Header>
                <Text style={{ flex: 1, textAlign: 'center', color: 'teal' }}>
                    Write something
                </Text>
                <TextInput multiline />
                <Text style={{ flex: 1, textAlign: 'center', color: 'teal' }}>
                    Add photos
                </Text>
                    {/* {this.props.addpost.files ? this.pr
                    ops.addpost.files.map(this.pics): null} */}
                {/* <label htmlFor='file' style={{width:'100%'}}>
            <Segment fluid inverted color="teal" textAlign='center' 
            style={{margin: "20px 20px"}}>CLICK TO ADD PHOTOS</Segment></label> */}
                {/* <input id='file' data-id='file' 
            type="file" accept='image/jpeg,image/jpg,image/JPEG,image/JPG' 
            onChange={this.onChange} style={{display: "none"}}/> */}
                {/* <center>{this.props.addpost.p_text ? 
                this.props.addpost.p_text: null}</center> */}
                {/* <Button style={{margin: '0 20px 20px 20px', 
            width:'calc( 100% - 40px )'}} fluid color='blue' 
            onClick={this.upload}>upload</Button> */}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({ addpost: state.addpost });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);
