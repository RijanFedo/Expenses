import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {Rating} from 'react-native-ratings';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Expenses from './Expenses';
import Learn from './Learn';
import Progress from './Progress';

const Drawer = createDrawerNavigator();

export default function MyProfile() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      <Drawer.Screen name="Expenses" component={Expenses} />
      <Drawer.Screen name="MyProfile" component={Profile} />
      <Drawer.Screen name="Learn" component={Learn} />
      <Drawer.Screen name="Progress" component={Progress} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

function Profile() {
  const [rating, setRating] = useState('2.5');
  const emailid = useSelector(state => state.currentUser.email);

  return (
    <View style={styles.container}>
      <View style={styles.yoga}>
        <Image
          style={styles.yogaimg}
          source={require('./assets/women-doing-yoga.webp')}
        />
      </View>
      <View style={styles.textcontent}>
        <Text style={styles.heading}>{emailid}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Rating
            style={{padding: 5}}
            ratingCount={5}
            imageSize={20}
            startingValue={2.5}
            fractions={1}
            onFinishRating={value => {
              setRating(value);
            }}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gainsboro'}}>
            {rating}/5.0
          </Text>
        </View>
        <Text style={styles.subheading}>Beginner Excercise</Text>
        <Text style={styles.content}>
          Insures against stagination of blood in the hip joint and stretches
          the upper lumbar, forming a correct posture
        </Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => {}} style={styles.loginButton}>
          <Text style={styles.loginText}>Begin</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} style={styles.emailButton}>
          <Text style={styles.loginText2}>Instruction</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 12,
    color: 'gainsboro',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textcontent: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  content: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
    marginBottom: 8,
    // fontWeight: '500',
    color: 'black',
  },
  container: {height: '100%', margin: 10},
  yoga: {height: '50%', width: '100%'},
  yogaimg: {height: '100%', width: '100%'},
  loginButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  loginText2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  emailButton: {
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
});
