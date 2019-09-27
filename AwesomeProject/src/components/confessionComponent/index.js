import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { theme } from '../../../app-config';

// const style = {
//     div: {
//         background: 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',
//         position: 'relative',
//         boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
//         padding: '1em',
//         borderRadius: '.28571429rem',
//         fontSize: '1.5rem',
//         textAlign: 'center',
//         height: '350px',
//         letterSpacing: '1px',
//         wordSpacing: '10px',
//         lineHeight: '40px',
//         fontWeight: '800',
//     },
//     p: {
//         position: 'absolute',
//         left: '50%',
//         top: '50%',
//         maxWidth:'350px',
//         transform: 'translate(-50%,-50%)',
//         whiteSpace: 'pre-wrap'
//     }
// };

export default ({ data, key }) => (
    <View key={key} style={{ margin: 10, marginBottom: 0 }}>
        <LinearGradient 
            start={[0, 1]} 
            end={[1, 0]} 
            style={{ 
                height: 350, 
                borderRadius: 5, 
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }} 
            colors={theme[data.theme].colors}
        >
            <Text 
                style={{ 
                    color: theme[data.theme].color, 
                    textAlign: 'center', 
                    fontSize: data.text.length > 50 ? 23 : 30, 
                    fontFamily: 'space-mono',
                    // letterSpacing: '1px',
                    // wordSpacing: '10px',
                    // lineHeight: '40px',
                    // fontWeight: '800',
                }} 
            >
                {data.text}
            </Text>
        </LinearGradient>
    </View>
);
