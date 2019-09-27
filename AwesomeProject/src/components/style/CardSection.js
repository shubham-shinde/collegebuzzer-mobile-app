import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles}>
      {props.children}
    </View>
);

const styles = {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
};

export { CardSection };
