import React from 'react';
import { Button } from 'semantic-ui-react';

const style = {
    div:{
        background: 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',
        position: 'relative',
        boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
        padding: '1em',
        borderRadius: '.28571429rem',
        fontSize: '1.5rem',
        textAlign: 'center',
        height: '350px',
        letterSpacing: '1px',
        wordSpacing: '10px',
        lineHeight: '40px',
        fontWeight: '800',
    },
    p: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        maxWidth:'350px',
        transform: 'translate(-50%,-50%)',
        whiteSpace: 'pre-wrap'
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
    }
}

export default ({data, index, click}) => {
    let but
    if(click && data.is_auth === false) {
        but = (
            <Button color="green" fluid onClick={() => click(data._id, index)}>Add Conf</Button>
        )
    }
    return(
        <div key={data._id} style={{margin: '1rem 0'}}>
            <div style={{...style.div, ...theme[data.theme]}}>
                <div style={style.p}>
                    {data.text}
                </div>
            </div>
            {click ? but: null}
        </div>
    )
}