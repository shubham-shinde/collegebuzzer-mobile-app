import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions';
import { Button } from 'semantic-ui-react'
import Confession from '../../components/confessionsComponent/';

class App extends React.Component{
    componentWillMount = () => {
        console.log(this.props.user)
        if(this.props.confs.length === 0)
            this.props.getAllConfs(0, this.props.user.role)
    }
    loadmore = () => {
        const confs = this.props.confs
        const lastconfId = confs[confs.length - 1]._id
        this.props.getAllConfs(lastconfId, this.props.user.role)
    }
    addThisConf = (id, index) => {
        this.props.authThisConf(id, index);
    }
    render() {
        let click = null;
        if(this.props.user.role === 'admin') {
            click = this.addThisConf
        } 
        const conf = this.props.confs.map((text,index) => (
                <Confession data={text} index={index} click={click}/>
            )
        );
        return (
            <div>
                {conf}
                <Button fluid color="teal" style={{marginBottom: '15px',}} onClick={this.loadmore}>load more</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        confs : state.confs,
        user: state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

