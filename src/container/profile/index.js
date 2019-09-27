import React from 'react';
import { Segment , Icon, TextArea} from 'semantic-ui-react'
import './profile.css'

const style = {
    div:{
        background: 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',
        position: 'relative',
        boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
        margin: '1rem 0',
        padding: '1em',
        borderRadius: '.28571429rem',
        textAlign: 'center',
    },
    p: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    },
    img: {
        borderRadius:"50%",
        // backgroundPosition:'center',
        // backgroundSize:'cover',
        height: '140px',
        width:'140px',
        border:"10px solid white"
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

export default ({_id, themeshow, p_pic, onBioChange, name, userIntro, bio, set_new_theme}) => {
    return(
        <div className='profileComp' key={_id} style={{...style.div, ...theme[themeshow]}}>
            <div style={{left: '10px', top: '10px',position:'absolute'}}><Icon onClick={set_new_theme} name='clone' circular inverted color='white' size="large"/> Theme</div>
            <center>
            <label htmlFor="profile_update_bt" style={{width:'100%'}}><div style={{background: `url(${p_pic}) center center / cover`,...style.img}}/></label>Click on Pic
                <h2 style={{margin:'10px'}}>{name}</h2>
                <div>{userIntro}</div>
                <div className="his_qoute" style={{marginTop: '20px'}}>
                    <i className="fas fa-quote-left"></i>
                    <TextArea fluid autoHeight data-id='text' onChange={onBioChange} value={bio} style={{textAlign: 'center',background:'transparent',border:'0px', width:'100%'}}/>
                    <i className="fas fa-quote-right"></i>
                </div>
                Edit bio
            </center>
        </div>
    )
}