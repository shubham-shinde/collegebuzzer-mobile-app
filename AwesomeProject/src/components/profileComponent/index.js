import React from 'react';
// import { Segment } from 'semantic-ui-react'
// import './profile.css'
import { View, Text, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { theme } from '../../../app-config';

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

class Profile extends React.Component {
    render() {
        const { _id, userIntro, bio, name, p_pic, themeshow } = this.props;
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
        // console.log(themeshow);
        return (
            <View key={_id}>
                <ScrollView>
                    <LinearGradient 
                    colors={themeshow && themeshow !== undefined && themeshow !== null
                        ? theme[themeshow].colors 
                        : ['#4c669f', '#3b5998', '#192f6a']
                    } 
                    style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
                    start={[0, 1]} 
                    end={[1, 0]} 
                    >
                        <Image
                            source={{ uri: p_pic }}
                            style={{ 
                                width: 160, 
                                height: 160, 
                                borderRadius: 100, 
                                borderWidth: 8,
                                borderColor: 'white',
                                margin: 10
                            }}
                        />
                        <Text 
                            style={{ 
                                color: themeshow && theme[themeshow].color, 
                                fontSize: 24,
                                margin: 10
                            }}
                        >
                            {name}
                        </Text>
                        {userIntro && <Text 
                            style={{ 
                                color: themeshow && theme[themeshow].color, 
                                fontSize: 17,
                            }}
                        >
                            {userIntro}
                        </Text>}
                        <View 
                            style={{
                                backgroundColor: '#24292e7d',
                                borderRadius: 30,
                                padding: 20,
                                margin: 10
                            }}
                        >
                            <Text 
                                style={{ color: 'white', textAlign: 'center', fontSize: 15 }}
                            >
                                {bio}
                            </Text> 
                        </View>
                        {/* {headsView} */}
                    </LinearGradient>
                </ScrollView>
            </View>
        );
    }
}

export default Profile;
