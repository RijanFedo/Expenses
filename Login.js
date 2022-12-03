import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login, logout} from './redux/userSlice';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email && !password) {
      console.log('fill all the fields');
    } else if (!email) {
      console.log('enter email');
    } else if (!password) {
      console.log('enter pass');
    } else if (reg.test(email) === false) {
      console.log('enter a valid email');
    } else if (password.length < 8) {
      console.log('enter a strong pass');
    } else if (reg.test(email) === true && password.length >= 8) {
      navigation.navigate('HomePage');
      console.log(email, password);
      dispatch(login({email, password}));
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Hello!</Text>
      <View>
        <Text style={styles.subheading}>Welcome</Text>
        <TextInput
          placeholder="Email or username"
          style={styles.inputBox}
          onChangeText={value => setEmail(value)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputBox}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={handleSubmit} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch(logout())}
          style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.signupContent}>
        <Text>Don't have an account?</Text>
        <Pressable onPressIn={() => navigation.navigate('Signup')}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
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
  loginButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  forgotButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  forgotText: {
    textAlign: 'center',
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signupContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: 'orange',
    fontWeight: 'bold',
  },
});
