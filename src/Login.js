import React from 'react'; 
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './src/styles.js'

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
				password: "",
				name: "",
				interests: [],
				accountCreationDate: 0
			}
		}
	}

	render(){
		return{
			<View style={styles.titlePnl}>
			<Text style={styles.title}>What is your email</Text>
			</View>
		}
	}
}