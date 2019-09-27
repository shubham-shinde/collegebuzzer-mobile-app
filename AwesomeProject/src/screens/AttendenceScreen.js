import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../components/style/index';

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'transparent',
        fontSize: 20,
        padding: 10,
        flex: 1,
        color: 'black'
    },
    inputText: {
        height: 40,
        fontSize: 20,
        padding: 5,
        color: 'black'
    },
    output: {
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        color: 'black'
    },
    buttonContainer: {
        backgroundColor: 'teal',
        paddingVertical: 10,
        margin: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});

class Attendance extends React.Component {
    static navigationOptions = {
        title: 'Attendence Calculator',
    }
    constructor(props) {
        super(props);
        this.state = {
            value: {
                att: '__',
                toAtt: '__',
                toBu: '__',
                text: ''
            },
            input: {
                Tc: '',
                Ac: '',
                P: '75'
            }
        };
    }
    onChange = (path, val) => {
        const newState = { ...this.state };
        newState.input[path] = val;
        this.setState(newState);
    }
    calculate = () => {
        const newState = { ...this.state };
        const input = newState.input;
        // if(typeof(input.Tc) != Number && typeof(input.Ac) != Number) {
        //     this.state.value.text = 'Provide numeric figure.'
        //     return this.setState(newState)
        // }
        if (Number(input.Tc) < Number(input.Ac)) {
            this.state.value.text = 'How can you attend class more than total classes?';
            return this.setState(newState);
        }
        const p = (100 * input.Ac) / input.Tc;
        newState.value.att = Math.round(p);
        if (p > input.P) {
            newState.value.toBu = Math.ceil((input.Tc * (p - input.P)) / input.P);
            newState.value.toAtt = 0;
            newState.value.text = `
                To maintain 
                ${Math.round(input.P)}% you have to attend 
                ${Math.ceil(input.P / (100 - input.P))} for 1 bunk.
            `;
        }
        else {
            newState.value.toBu = 0;
            newState.value.toAtt = Math.floor((input.Tc * (input.P - p)) / p);
        }
        return this.setState(newState);
    }
    render() {
        const state = this.state.value;
        const value = this.state.input;
        return (
            <View>
                <View>
                <Card>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={styles.inputText}>
                            Total Classes :
                        </Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={(val) => this.onChange('Tc', val)}
                            value={value.Tc}
                            autoCorrect={false} 
                            // keyboardType='email-address' 
                            returnKeyType='next'
                            keyboardType='numeric' 
                            // placeholder='Email address' 
                            placeholderTextColor='rgba(225,225,225,0.7)'
                        />
                    </View>
                    
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={styles.inputText}>
                            Attended Classes :
                        </Text>
                        <TextInput 
                            style={styles.input}   
                            returnKeyType='go' 
                            value={value.Ac}
                            keyboardType='numeric' 
                            onChangeText={(val) => this.onChange('Ac', val)}
                            placeholderTextColor='rgba(225,225,225,0.7)' 
                        />
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={styles.inputText}>
                            Percentage to Maintain :
                        </Text>
                        <TextInput 
                            style={styles.input} 
                            value={value.P}
                            keyboardType='numeric' 
                            onChangeText={(val) => this.onChange('P', val)}
                            placeholderTextColor='rgba(225,225,225,0.7)' 
                        />
                    </View>
                    </Card>

                    <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={this.calculate}
                    >
                        <Text style={styles.buttonText}>Calculate</Text>
                    </TouchableOpacity>

                    <Text style={styles.output}>
                        Attendance : {state.att} %
                    </Text>
                    <Text style={styles.output}>
                        Classes to Attend : {state.toAtt}
                    </Text>
                    <Text style={styles.output}>
                        Classes to Bunk : {state.toBu}
                    </Text>
                    <Text style={styles.output}>
                        {state.text}
                    </Text>
                </View>
            </View>
        );
    }
}

export default Attendance;
