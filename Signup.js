import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function Signup() {
  return (
    <View>
      <Text style={styles.heading}>Hello !</Text>
      <View>
        <Text style={styles.subheading}>Welcome</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputBox}
          //   onChangeText={value => setEmail(value)}
          //   value={email}
        />
        <TextInput
          placeholder="Username"
          style={styles.inputBox}
          //   onChangeText={value => setEmail(value)}
          //   value={email}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputBox}
          //   onChangeText={value => setPassword(value)}
          //   value={password}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Re-enter Password"
          style={styles.inputBox}
          //   onChangeText={value => setPassword(value)}
          //   value={password}
          secureTextEntry={true}
        />
        <TouchableHighlight style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'gainsboro',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 60,
    marginTop: 60,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
