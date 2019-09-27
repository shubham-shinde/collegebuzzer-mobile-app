import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
// import { LinearGradient } from 'expo';
import { CardSection } from '../style/';

export default ({ name, pic, userIntro, _id, profile }) => (
    <TouchableHighlight 
        key={_id} 
        style={{ margin: 10, marginBottom: 0 }} 
        onPress={() => profile(_id)}
    >
        <CardSection>
            <Image 
                source={{ uri: pic }}
                style={{ height: 70, width: 70, borderRadius: 50 }}
                // resizeMode=''
            />
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 22, padding: 2 }}>{name}</Text>
                <Text style={{ fontSize: 18, padding: 2 }}>{userIntro}</Text>
            </View>
        </CardSection>
    </TouchableHighlight>
);