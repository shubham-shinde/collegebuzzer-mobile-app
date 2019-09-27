import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions';
import loader from './loader.gif';

class Loader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props)
        return(
            <div style={{height:'100vh', width: '100vw', position: 'fixed', zIndex:'200', background:'rgb(34, 31, 55)',display: this.props.loader}}>
                <img 
                    src={loader} alt="loader" 
                    style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loader : state.loader
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Loader);