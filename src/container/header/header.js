import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './header.css';

import SidebarLeft from './sidebar_left/sidebar_left';
import Search from './search'
import Notify from './notification';

import * as action from './../../actions/actions'
import Headroom from 'react-headroom'
import { Icon, Grid, Segment, Button } from 'semantic-ui-react';

console.log(window);

function headerHandler(Comp) { 
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: {
                display: 'none',
                active: 'false',
                color: 'transparent'
            },
            notify: {
                display: 'none',
                active: 'false',
                color: 'transparent'
            }
        }
    }

    OpenDiv = (element, reverse) => {
        console.log(element)
        const newState = {...this.state}

        newState[reverse].display = 'none' 
        newState[reverse].color = 'transparent' 
        newState[reverse].active = false
       
        newState[element].display = (newState[element].active) ? 'none':'block';
        newState[element].color = (newState[element].active) ? 'transparent':'#00B5AD';
        newState[element].active = (newState[element].active) ? false:true;
        this.setState(newState);
    }

    render() {
        const small = this.props.device.greaterThan.small;
        const ro = (this.props.user.role !== 'guest')
        if(small) {
            return(
                <div>
                    <div className="headerlpy" style={{padding:'5px 5px 5px 30px'}}>
                        <h1>CollegeBuzzer</h1>
                    </div>
                    <div className="threeDivslpy">
                        <div>
                            <div className="fixedply">
                            <div className='madeSegmentside'>
                            <SidebarLeft/>
                            </div>
                            </div>
                        </div>
                        <div className="dataDisplaylpy">
                        <Comp/>
                        </div>
                        <div>
                            <div className="fixedply">
                            <Button color='teal' fluid onClick={() => this.props.redirectTo('/home')}>
                                <h3>Home</h3>
                            </Button>
                            <Button color='teal' style={{marginTop: '10px'}} fluid onClick={() => this.props.redirectTo('/stupost')}>
                                <h3>Student Posts</h3>
                            </Button>
                            {/* { ro ? (<Button color='teal' style={{marginTop: '10px'}} fluid onClick={() => this.props.redirectTo('/confessions')}>
                                <h3>Confessions</h3>
                            </Button>) : null} */}
                            { ro ? (<Button color='teal' style={{marginTop: '10px'}} fluid onClick={() => this.props.redirectTo('/addpost')}>
                                <h3>Add new post</h3>
                            </Button>) : null}
                            <Segment style={{padding:'0'}}>
                                <Search/>
                            </Segment>
                            {/* <Segment color='red' style={{overflow: 'scroll'}}>
                                <Notify/>
                            </Segment> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div>
            <Headroom style={{
                webkitTransition: 'all .5s ease-in-out',
                mozTransition: 'all .5s ease-in-out',
                oTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out',
                position: "fixed"
            }}>
            <div>
                <input type="checkbox" id="sidebar_toggel_checkbox_left"/>
                <div id='header_and_sidebar'>                    
                        <div id="sidebar_div_left">
                            <SidebarLeft/>
                        </div>
                        <div id="header">
                            <div className="mainHeader">
                                <div>                                
                                    <label htmlFor="sidebar_toggel_checkbox_left" id="sidebar_toggel_checkbox_label_left">
                                        <Icon className='none_cross' name='align justify' size='big'/>
                                        <Icon className='cross'  name='close' size='big'/>
                                    </label>
                                </div>
                                <div className="headingOrLogo" style={{textAlign:'left'}}  onClick={() => this.props.redirectTo('/home')}>
                                    <h3 style={{fontWeight:'bold',fontSize:'30px'}}>CollegeBuzzer</h3>
                                </div>
                                <div onClick={() => this.props.redirectTo('/stupost')}>                                
                                    <Icon name='student' size='big'/>                             
                                </div>
                                { ro ? (<div onClick={() => this.props.redirectTo('/addpost')}>                                
                                    <Icon name='add' size='big'/>                             
                                </div>) : null}
                                {/* { ro ? (<div onClick={() => this.props.redirectTo('/confessions')}>                                
                                    <Icon name='copyright' size='big'/>                             
                                </div>) : null} */}
                                <div style={{backgroundColor: this.state.search.color}}>  
                                    <input type="checkbox" style={{display:'none'}} id="checkboxToggleForSearch"/>
                                    <label htmlFor='checkboxToggleForSearch'>  
                                        <Icon name='search' size='big' /*onClick={() => this.OpenDiv('search','notify')}*//>  
                                    </label>                                   
                                    <div className='searchDiv openOnClick' /*style={{display: this.state.search.display}}*/>
                                        <Search/>
                                    </div>                               
                                </div>
                                {/* <div style={{backgroundColor: this.state.notify.color}}>                                
                                <Icon name='bell outline' size='big' onClick={() => this.OpenDiv('notify','search')}/>                                     
                                <div className='notfyDiv openOnClick' style={{display: this.state.notify.display}}>
                                <Segment style={{padding: '10px 40px',}}>
                                    <Notify/>
                                </Segment>
                                </div>                               
                                </div> */}
                            </div>
                        </div>
                </div>
            </div>
            </Headroom>
            <Comp/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        device: state.device,
        user: state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

return connect(mapStateToProps, matchDispatchToProps)(Header);

}
export default headerHandler;