import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

export default class App extends Component {

    state = {
      email: '',
      password: '',
    };


  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/IMG_2197.jpg")}/>
      <Text style={styles.textBox}>Email:</Text>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='example@ucsd.edu'
          placeholderTextColor = 'grey'
          style={styles.input1}
        />
        <Text style={styles.textBox}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'example'}
          secureTextEntry={true}
          placeholderTextColor = 'grey'
          style={styles.input2}
        />


        <TouchableOpacity
          style={styles.button1}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText1}>Sign Up / Login</Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button2}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText2}>Forget Password</Text>
       </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
  	height: 300
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textBox: {
    fontFamily: 'Roboto',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Roboto',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText1:{
    fontFamily: 'Roboto',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2:{
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: {
    width: 200,
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'left',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    marginVertical: 20,
  },
  input2: {
    width: 200,
    fontFamily: 'Roboto',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    marginVertical: 20,
  },
});
