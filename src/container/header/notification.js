import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions'
import { Icon, Grid, Segment } from 'semantic-ui-react';

class Notify extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const notify = this.props.notify.map((data) => (
            <Segment>{data}</Segment>
        ));
        return(
            <div>
                <div style={{overflow:'hidden', clear:'both'}}>
                    <span style={{float: 'left'}}>Notifications</span>
                    <span style={{float: 'right', color:'blue'}}>5</span>
                </div>
                {notify}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notify: state.notify
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Notify);