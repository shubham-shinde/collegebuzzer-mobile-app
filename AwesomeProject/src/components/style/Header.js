import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    console.log(props);
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>{props.children}</Text>
        </View>
    );
};

const styles = {
    View: {   
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 20
        },
        elevation: 2,
        position: 'relative',
        shadowOpacity: 1,
    },
    Text: {
        fontSize: 20,
    }
};
 
export { Header };
