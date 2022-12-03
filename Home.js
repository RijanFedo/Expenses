import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to Myomus!</Text>
        <Text style={styles.subheading}>Hope you are well today</Text>
      </View>
      <View style={styles.guitar}>
        <Image
          style={styles.guitarImg}
          source={require('./assets/person-with-guitar.jpg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={() => {}} style={styles.loginButton}>
          <Text style={styles.loginText}>Listen To Music ♪</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} style={styles.emailButton}>
          <Text style={styles.loginText}>Start Excercising</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  headingContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    marginTop: 40,
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 20,
    color: 'gainsboro',
    fontWeight: '400',
  },
  guitar: {
    width: '100%',
    height: '50%',
  },
  guitarImg: {
    width: '100%',
    height: '100%',
  },
  loginButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  emailButton: {
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
});
