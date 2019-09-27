import React from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo';
import { LinearGradient } from 'expo';
import { theme } from '../../../app-config';

const styles = StyleSheet.create({
    section: {
        // borderWidth: 1,
        borderRadius: 5,
        // borderColor: '#ddd',
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { widht: 0, height: 0 },    
        shadowOpacity: 0.5,
        shadowRadius: 20,
        // shadowBlur: 20,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        marginTop: 10  
    }
});

export default ({ name, pic, _id, bio, themeshow }) => (
    <LinearGradient 
        colors={themeshow && themeshow !== undefined && themeshow !== null
            ? theme[themeshow].colors 
            : ['#4c669f', '#3b5998', '#192f6a']
        } 
        style={styles.section}
        start={[0, 1]} 
        end={[1, 0]} 
        key={_id}
    >
        <View 
            style={{ 
                paddingLeft: 10, 
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
        <Image
            source={{ uri: pic }}
            style={{ 
                width: 120, 
                height: 120, 
                borderRadius: 100, 
                borderWidth: 8,
                borderColor: 'white',
                margin: 10
            }}
        />
        <Text 
            style={{ 
                fontSize: 22, 
                padding: 2, 
                flex: 1, 
                textAlign: 'center', 
                color: themeshow && theme[themeshow].color, 
            }}
        >{name}</Text>
        </View>
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
    </LinearGradient>
);
