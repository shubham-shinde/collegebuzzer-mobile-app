import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = {
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		alignSelf: 'center',
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
