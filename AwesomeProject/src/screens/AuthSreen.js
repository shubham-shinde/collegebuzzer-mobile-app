import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearGradient } from 'expo';
import { Icon } from 'react-native-elements';
import { 
    TextInput, 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Linking, 
    ActivityIndicator 
} from 'react-native';
import validator from 'validator';
// import validator from 'validator';

import * as action from '../actions/loginAction';
// import LS from '../services/ls-service';

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
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});

class Login extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            student: ['active', 'changeble active'],
            club: ['', 'changeble'],
            guest: ['', 'changeble'],
            type: 'password',
            icon: 'eye'
        };
    }
    componentWillUpdate = () => {
        if (this.props.login.success) {
            this.props.navigation.navigate('Main');
        }
    }
    // changeStateOfPass =() => {
    //     const newState = this.state;
    //     const isTextOrHide = (newState.type === 'password');
    //     newState.type = (isTextOrHide) ? 'text' : 'password';
    //     newState.icon = (isTextOrHide) ? 'eye slash' : 'eye';
    //     this.setState(newState);
    // }
    // changeAuthor = (author) => {
    //     const newState = {
    //         student: ['', 'changeble'],
    //         club: ['', 'changeble'],
    //         guest: ['', 'changeble']
    //     };
    //     newState[author] = ['active', 'changeble active'];
    //     this.setState(newState);
    // }
    formChange = (key, value) => {
        let val = value;
        if (key === 'mail') {
            val = val.toLowerCase();
            val = val.split(' ').join('');
        }
        this.props.changeLoginFrom({
            field: key,
            data: val
        });
    }
    submitLoginForm = (path) => {
        const login = this.props.login;
        const mail = login.mail ? validator.isEmail(login.mail) : 0;
        const _id = login._id ? validator.isMongoId(login._id) : 0;
        const password = validator.isLength(login.password, { min: 6, max: 15 });
        if ((mail || _id) && password) {
            this.props.thisGayIsCompletedForm(path);
        }
        else {
            this.setState({
                msg: 'incomplete form'
            });
        }
    }
    render() {
        const { mail, password, isFetching } = this.props.login;
        // console.log(LS().get());
        return (
            <LinearGradient
                style={{
                    flex: 1,
                    flexDirection: 'column',
                }}
                colors={['#004444', '#008081']}
            >
                <Text 
                    style={{ 
                        color: 'white', 
                        textAlign: 'center', 
                        marginTop: 50,
                        fontSize: 20
                    }}
                >Welcome to</Text>
                <Text
                    style={{
                        fontSize: 38,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        margin: 10,
                        marginBottom: 60
                    }}
                >
                    College Buzzer
                </Text>
                { isFetching && <ActivityIndicator size="large" style={{ padding: 20 }} /> }
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='mail-outline' size={40} style={{ marginRight: 20 }} />
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={(value) => this.formChange('mail', value)} 
                            value={mail}
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType='next' 
                            placeholder='Email address' 
                            placeholderTextColor='rgba(225,225,225,0.7)'
                        />
                    </View>
                    
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Icon name='vpn-key' size={40} style={{ marginRight: 20 }} />
                        <TextInput 
                            style={styles.input}   
                            returnKeyType='go' 
                            value={password}
                            onChangeText={(value) => this.formChange('password', value)} 
                            placeholder='Password' 
                            placeholderTextColor='rgba(225,225,225,0.7)' 
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={() => this.submitLoginForm('student')}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            padding: 0,
                            fontSize: 18,
                            marginVertical: 10
                        }}
                        onPress={() => Linking.openURL('http://collegebuzzer.com')}
                    >New User?</Text>
                </View>
            </LinearGradient>
        );
    }    
}

const mapStateToProps = (state) => ({
    login: state.login,
});

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Login);
