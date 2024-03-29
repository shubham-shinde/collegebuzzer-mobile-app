import React, { Component } from 'react';
// import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { 
		email: '',
		password: '' 
	};

	onButtonPress() {
		// const { email, password } = this.state;
		console.log('button pressed');
		// firebase.auth().signInWithEmailAndPassword(email, password); 
	}

  render() {
    return (
			// <ScrollView>
      <Card>
        <CardSection>
					<Input 
						placeholder="user@gmail.com"
						label='Email'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
        <CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						label='Password'
						value={this.state.password} 
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
        <CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						login
					</Button>
        </CardSection>    
      </Card>
			// {/* <Card>
      //   <CardSection>
			// 		<Input 
			// 			placeholder="user@gmail.com"
			// 			label='Email'
			// 			value={this.state.email}
			// 			onChangeText={email => this.setState({ email })}
			// 		/>
			// 	</CardSection>
      //   <CardSection>
			// 		<Input 
			// 			secureTextEntry
			// 			placeholder="password"
			// 			label='Password'
			// 			value={this.state.password}
			// 			onChangeText={password => this.setState({ password })}
			// 		/>
			// 	</CardSection>
      //   <CardSection>
			// 		<Button onPress={this.onButtonPress.bind(this)}>
			// 			login
			// 		</Button>
      //   </CardSection>    
      // </Card> */}
			// {/* </ScrollView> */}
    );
  }
}

export default LoginForm;
