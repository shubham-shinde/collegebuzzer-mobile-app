import React from 'react';
import { View } from 'react-native';

const Section = (props) => (
    <View style={style}>
      {props.children}
    </View>
);

const style = {
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
};

export { Section };
