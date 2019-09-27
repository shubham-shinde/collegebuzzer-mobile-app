import React from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { theme } from '../../../app-config';

class Profile extends React.Component {
    render() {
        const { _id, userIntro, bio, name, p_pic, themeshow, textEdit, setNewTheme } = this.props;
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
                <ScrollView>
                    <LinearGradient 
                    colors={themeshow 
                        ? theme[themeshow].colors 
                        : ['#4c669f', '#3b5998', '#192f6a']
                    } 
                    style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
                    start={[0, 1]} 
                    end={[1, 0]} 
                    >
                        <TouchableOpacity                            
                            style={{
                                position: 'absolute',
                                left: 10,
                                top: 10,
                                backgroundColor: 'black',
                                padding: 10,
                                borderRadius: 50
                            }}
                            onPress={setNewTheme}
                        >
                        <Icon
                            name='flip-to-back' 
                            color='white'
                            size={25}
                        />
                        </TouchableOpacity>
                        <Image
                            source={{ uri: p_pic.new ? p_pic.new : p_pic.old }}
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
                                borderRadius: 50,
                                padding: 20,
                                margin: 10
                            }}
                        >
                            <KeyboardAvoidingView>
                            <TextInput
                                style={{ color: 'white', textAlign: 'center', fontSize: 15 }}
                                value={bio}
                                multiline
                                onChangeText={textEdit}
                            />
                            </KeyboardAvoidingView>
                        </View>
                        {/* {headsView} */}
                    </LinearGradient>
                </ScrollView>
            </View>
        );
    }
}

export default Profile;
