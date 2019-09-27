import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={style}>
      {props.children}
    </View>
);

const style = {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10  
};

export { Card };
