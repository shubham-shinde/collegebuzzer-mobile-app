import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearGradient } from 'expo';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import * as action from '../actions/actions';
import { theme, themeList } from '../../app-config';

class AddConf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'sunset',
            index: 1
        };
        this.props.setNewthemeInAddConf('sunset');
    }
    onFormChange = (value) => {
        this.props.addTextToAddConf(value);
    }
    setNewTheme = () => {
        const themeArr = themeList;
        this.props.setNewthemeInAddConf(themeArr[this.state.index]);
        this.state.index < (themeList.length - 1)
            ? this.setState({ index: this.state.index + 1 })
            : this.setState({ index: 0 });
    }
    render() {
        return (
            <View>
                <LinearGradient 
                    start={[0, 1]} 
                    end={[1, 0]} 
                    style={{ 
                        height: 350, 
                        borderRadius: 5, 
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }} 
                    colors={theme[this.props.addconf.theme].colors}
                >
                    <TextInput 
                        value={this.props.text ? this.props.text : null} 
                        onChange={this.onFormChange} 
                        style={{ 
                            textAlign: 'center', 
                            height: 400, 
                            fontSize: this.props.text &&
                                this.props.text.length > 50 ? 23 : 30, 
                            fontFamily: 'space-mono',
                            color: theme[this.props.addconf.theme].color
                        }} 
                    />
                </LinearGradient>                
                <TouchableOpacity                            
                    style={{
                        backgroundColor: 'black',
                        padding: 10,
                        borderRadius: 50
                    }}
                    onPress={this.setNewTheme}
                >
                    <Icon
                        name='flip-to-back' 
                        color='white'
                        size={25}
                    />
                </TouchableOpacity>
                <View style={{ padding: 15 }}>
                    <Button 
                        color='teal' 
                        title='Add' 
                        onPress={
                            () => this.props.addThisConfession(this.props.addconf)
                        }                                 
                    />
                </View>
                <Text>Confession will be added within 12 hour. 
                    Before adding confession Admin will verify 
                    your confession so that it cannot hurt anyone.
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ addconf: state.addConf });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AddConf);
