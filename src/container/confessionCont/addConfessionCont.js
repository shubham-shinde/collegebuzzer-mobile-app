import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../../actions/actions';
import Confession from '../../components/confessionsComponent/';
import { Segment, Button, Icon , TextArea} from 'semantic-ui-react'

const style = {
    div:{
        position: 'relative',
        boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
        padding: '1em',
        borderRadius: '.28571429rem',
        fontSize: '2rem',
        textAlign: 'center',
        height: '350px',
        width: '100%',
        letterSpacing: '1px',
        wordSpacing: '10px',
        lineHeight: '40px',
        fontWeight: '800',
        verticalAlign: 'middle',
        overflow: 'hidden'
    },
    p: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    }
}
const theme = {
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

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'sunset',
            index: 1
        }
        this.props.setNewthemeInAddConf('sunset')
    }
    setNewTheme = () => {
        const themeArr = [
            "sunset",
            "kingYan",
            "rainbowBlue",
            "darkGray",
            "deepSpace",
            "scooter",
            "amin",
            "delicate",
            "dimigo",
            "dayTripper"
        ]
        this.props.setNewthemeInAddConf(themeArr[this.state.index]);
        console.log(this.state.index);
        this.state.index < 9
        ? this.setState({index :this.state.index + 1})
        : this.setState({index: 0})
    }
    onFormChange = (e, obj) => {
        this.props.addTextToAddConf(obj.value)
    }
    render() {
        return (
            <Segment>
                <TextArea fluid value={this.props.text ? this.props.text: null} onChange={this.onFormChange} style={{...style.div,...theme[this.props.addconf.theme]}}>

                </TextArea>
                <center>
                    <Icon onClick={this.setNewTheme} name='clone' circular inverted color='white' style={{margin:'1rem'}}/> Theme
                </center>
                <Button  style={{margin: '0 20px 0px 20px', width:'calc( 100% - 40px )'}} color='blue' onClick={() => this.props.addThisConfession(this.props.addconf)}>UPLOAD CONFESSION</Button>
                <Segment inverted fluid color='black'>Confession will be added within 12 hour. Before adding confession Admin will verify your confession so that it cannot hurt anyone.</Segment>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addconf : state.addconf
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

