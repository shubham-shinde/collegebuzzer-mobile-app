import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions'
import { Input, Segment } from 'semantic-ui-react';

const style = {
    background: '#f7a53cc7',
    fontSize: '2vh',
    margin: '1rem'
}

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    onChange = (e , obj) => {
        this.props.searchString(obj.value)
    }
    result = (data) => {
        const {name, p_pic, userIntro, _id } = data
        return (
            <Segment fluid style={{margin: '1rem',}}>
            <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center',color:'black'}} onClick={() => {this.props.redirectTo('/profile?'+_id)}}>
                <div circular style={{height: '60px', width: '60px', borderRadius: '50%',background:`url(${p_pic}) center center / cover`}} />
                <div style={{textAlign:'center'}} className="name">
                <h4 style={{margin:0}}>{name}</h4>
                <h6 style={{margin:0}}> {userIntro} </h6>
                </div>
            </div>
            </Segment>
        )
    }
    render() {
        const small = this.props.device.greaterThan.small;
        return(
            <div>
                <Input style={style} placeholder='Search...' fluid onChange={this.onChange}/>
                {this.props.search.length > 0 ? this.props.search.map(this.result) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        device: state.device,
        user : state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);