import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, ScrollView, View, Image, Dimention, Button} from 'react-native';

const { width, height } = Dimention.get("window");

const background = require("./download.jpeg");


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={background} style={styles.background} resizeMode="cover">
      <TextInput
      placeholder="Username"
      placeholderTextColor="#FFF"
      style={styles.input}
      />
      <TextInput
      placeholder="password"
      placeholderTextColor="#FFF"
      style={styles.input}
      />
      <View>
      <Text style={styles.forgotPasswordText}> Forgot Password? </Text>
      </View>
      <View style={styles.button}>
      <Text style={styles.buttonText}> Sign In </Text>
      </View>
            <View style={styles.container} />
            <View style={styles.signupWrap} />
            <Text style={styles.accountText}> Dont have an account? </Text>
                </View>
              </Image>
            </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
};
