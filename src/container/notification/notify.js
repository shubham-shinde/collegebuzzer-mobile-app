import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions';
import './notify.css';


class Notify extends React.Component {
    render() {
        const style={
            color: 'red',
            top: '-60px'
        }
        return (
            <div id="notification_service_main_div" style={style}>
                htlo sydjfd
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

export default connect(mapStateToProps, matchDispatchToProps)(Notify);