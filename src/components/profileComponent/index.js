import React from 'react';
// import { Segment } from 'semantic-ui-react'
// import './profile.css'
import { View, Text, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const style = StyleSheet.create({
//     View: {
//         backgroundColor: '#fff',
//         position: 'relative',
//         // boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
//         margin: '1rem 0',
//         padding: '1em',
//         borderRadius: 0.28571429,
//         textAlign: 'center',
//     },
//     p: {
//         position: 'absolute',
//         left: '50%',
//         top: '50%',
//         // transform: 'translate(-50%,-50%)'
//     },
//     img: {
//         borderRadius: 50,
//         // backgroundColorPos#fffrSiz#fff   width: '140px',
//         // border: '10px solid white',
//         // imageOrientation: '0deg'
//     },
//     img2: {
//         borderRadius: 50,
//         // backgroundColorPos#fffrSiz#fff  width: '80px',
//         // border: '5px solid white',
//         // imageOrientation: '0deg'
//     }
// });


// const theme = StyleSheet.create({
//     sunset: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     kingYan: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     rainbowBlue: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     darkGray: {         
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     deepSpace: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     scooter: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     amin: {
//         backgroundColor: '#fff',
//         color: 'white',
//     },
//     delicate: {
//         backgroundColor: '#fff',
//         color: 'black'
//     },
//     dimigo: {
//         backgroundColor: '#fff',
//         color: 'white'
//     },
//     dayTripper: {
//         backgroundColor: '#fff',
//         color: 'white'
//     }
// });

class Profile extends React.Component {
    render() {
        const { _id, userIntro, bio, name, p_pic } = this.props;
        // let headsView = null;
        // if (heads) {
        //     headsView = (
        //         <View>
        //         <Text style={{ padding: '20px' }}>HEADS</Text>
        //             <View style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        //                 {heads.map(head => (<View>
        //                         <View 
        //                             style={
        //                                 // background: `url(${head.p_pic}) 
        //center center / cover`, 
        //                                 style.img2 
        //                             }
        //                         />
        //                         <Text>{head.name}</Text>
        //                         <View style={{ fontSize: '0.9rem' }}>{head.userIntro}</View>
        //                     </View>)
        //                 )}
        //             </View>
        //         </View>
        //     );
        // }
        return (
            <View key={_id}>
            <View>
                {/* <LinearGradient 
                colors={['#4c669f', '#3b5998', '#192f6a']} 
                style={{ flex: 1 }}
                > */}
                    <Image
                        source={{ uri: p_pic }}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Cool</Text>
                    <Text>{name}</Text>
                    <Text>{userIntro}</Text>
                    <View>
                        <Text>{bio}</Text> 
                    </View>
                    {/* {headsView} */}
                {/* </LinearGradient> */}
                </View>
            </View>
        );
    }
}

export default Profile;
