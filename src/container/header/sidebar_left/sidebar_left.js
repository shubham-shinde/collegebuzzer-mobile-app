import React from 'react';
import './sidebar_left.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Segment, Image, Button } from 'semantic-ui-react'
import * as action from './../../../actions/actions';

const style = {
    div:{
        background: 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',
        position: 'relative',
        boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
        padding: '1em',
        height: '100%',
        borderRadius: '.28571429rem',
        textAlign: 'center',  
    },
    img: {
        borderRadius:"50%",
        // backgroundPosition:'center',
        // backgroundSize:'cover',
        height: '140px',
        width:'140px',
        border:"10px solid white"
    },
    center: {         
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '75vh',
        maxHeight: '700px'
    }
}

const allTheme = {
    sunset : {
        background: 'linear-gradient(to right,#0b486b,#f56217)',
        color: 'white',
    },
    kingYan : {
        background: 'linear-gradient(to right,#1a2a6c,#b21f1f,#fdbb2d)',
        color: 'white',
    },
    rainbowBlue : {
        background: 'linear-gradient(to right,#00f260,#0575e6)',
        color: 'white',
    },
    darkGray : {         
        background: 'linear-gradient(to right,#0f2027,#2c5364,#203a43)',
        color: 'white',
    },
    deepSpace : {
        background: 'linear-gradient(to right,#000000,#434343)',
        color: 'white',
    },
    scooter : {
        background: 'linear-gradient(to right,#36d1dc,#5b86e5)',
        color: 'white',
    },
    amin : {
        background: 'linear-gradient(to right,#8e2de2,#4a00e0)',
        color: 'white',
    },
    delicate : {
        background: 'linear-gradient(to right,#d3cce3,#e9e4f0)',
        color: 'black'
    },
    dimigo : {
        background: 'linear-gradient(to right,#cc2b5e,#753a88)',
        color: 'white'
    },
    dayTripper : {
        background: 'linear-gradient(to right,#f857a6,#ff5858)',
        color: 'white'
    }
}
class SidebarLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        if(!this.props.user._id) {
            this.props.getBasicInfo()
        }
    }
    routeTo = (route) => () => {
        this.props.redirectTo(route)
    } 
    render() {
        console.log(this.props)
        const {p_pic, name, userIntro, theme , _id} = this.props.user
        const role = this.props.user.role

        const ro = (role !== 'guest')
        const rc = (role !== 'club')
        const ra = (role !== 'admin')
        console.log('role', ro, role)
        return(
            <div style={{...style.div, ...allTheme[theme]}}>
            <center style={style.center}>                
                { p_pic 
                    ? (<div style={{background: `url(${p_pic}) center center / cover`,...style.img}}/>) 
                    : (
                        <div>
                        <h1 style={{fontSize:'2.5rem'}}>Hello!</h1>
                        { ro ? <h2>Please update your profile first</h2> : null} 
                        </div>
                    )}
                <div className="name"><h5 style={{padding: '5px'}}>{name}</h5></div>
                <div className="intro" style={{padding: '5px'}}>{userIntro}</div>
                { ro ? (<div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={this.routeTo('/profile?'+_id)}>View profile</Button></div>) : null}
                { ro ? (<div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={this.routeTo('/editprofile')}>Update profile</Button></div>) : null}
                <div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={this.routeTo('/clubs')}>Clubs</Button></div>
                { ro ? (<div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={this.routeTo('/confessions')}>Confessions</Button></div>) : null}
                { ro && rc && ra ? (<div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={this.routeTo('/addconfession')}>Write Confession</Button></div>) : null}
                <div style={{padding: '5px'}}><Button inverted color='teal' style={{width:'100%'}} onClick={() => this.props.logout('/logout')}>Logout</Button></div>
            </center>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SidebarLeft);