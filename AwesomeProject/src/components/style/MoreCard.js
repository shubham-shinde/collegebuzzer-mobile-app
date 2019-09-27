import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const MoreCard = ({ type, iconName, color, nav }) => (
    <TouchableOpacity onPress={nav} style={styles}>
        <Icon name={iconName} size={47} color={color} />
        <Text style={{ flex: 1, fontSize: 22, paddingLeft: 20 }}>{type}</Text>
    </TouchableOpacity>
);

const styles = {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 10
};

export { MoreCard };
