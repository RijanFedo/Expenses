import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Progress() {
  return (
    <View style={{margin: 10}}>
      <Text style={styles.subheading}>Friday, 15 Dec</Text>
      <View style={styles.headingcon}>
        <Text style={styles.heading}>Hi, Arthur!</Text>
        <Text style={styles.heading2}>Hope you are all well today</Text>
      </View>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 10}}>
          Time Tracker
        </Text>
        <View
          style={{
            backgroundColor: '#FDF0E0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 20,
          }}>
          <View
            style={{
              backgroundColor: '#F2982D',
              padding: 8,
              width: 35,
              borderRadius: 10,
              margin: 10,
            }}>
            <Icon
              style={{color: 'white'}}
              name="music"
              size={20}
              color="#900"
            />
          </View>
          <Text style={{fontSize: 15, fontWeight: '500', padding: 8}}>
            Playing...
          </Text>
          <Text
            style={{
              color: '#F2982D',
              fontWeight: '500',
              padding: 8,
              marginLeft: 'auto',
            }}>
            01:00:01
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 15, fontWeight: 'bold', margin: 15}}>
        Tips of the day
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', padding: 15}}>
        <View
          style={{
            backgroundColor: '#327388',
            width: '45%',
            borderRadius: 20,
            marginRight: 20,
          }}>
          {/* <View style={{height: '60%'}}>
            
          </View> */}
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              paddingTop: 40,
              paddingBottom: 40,
              padding: 10,
            }}>
            Straighten your back
          </Text>
          <Text style={{color: 'gainsboro', padding: 10, paddingBottom: 20}}>
            Read More
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#8DC3BA',
            width: '45%',
            borderRadius: 20,
            marginRight: 20,
          }}>
          {/* <View style={{height: '60%'}}>
            
          </View> */}
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              paddingTop: 40,
              paddingBottom: 40,
              padding: 10,
            }}>
            Straighten your back
          </Text>
          <Text style={{color: 'gainsboro', padding: 10, paddingBottom: 20}}>
            Read More
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subheading: {
    fontSize: 20,
    color: 'gainsboro',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 40,
  },
  headingcon: {
    margin: 15,
  },
  heading: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 18,
    fontWeight: '500',
  },
});
