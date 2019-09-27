import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';
import ProfileComp from '../components/profileComponent/'
import { Segment, Button } from 'semantic-ui-react'
class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const clubs= (this.props.clubs) 
        ? this.props.clubs.map((data, index) => (
            <div onClick={() => this.props.redirectTo('/profile?'+data._id)}>
            <ProfileComp _id={data._id} themeshow={data.theme} p_pic={data.p_pic} name={data.name} userIntro={data.userIntro} bio={data.bio} />
            </div>
        ))
        : null;
        console.log(this.props)
        const profile = this.props.profile;
        return(
            <div id="profile">
                {clubs}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clubs : state.user.clubs
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);