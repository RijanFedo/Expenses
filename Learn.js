import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function Learn() {
  const Data = [
    {id: 0, partName: 'Head & Face', count: '11 diseases'},
    {id: 1, partName: 'Back & Neck', count: '9 diseases'},
    {id: 2, partName: 'Elbow & Shoulders', count: '12 diseases'},
    {id: 3, partName: 'Hand & Arm', count: '2 diseases'},
  ];

  return (
    <View style={{margin: 10}}>
      <Text style={styles.subheading}>Friday, 15 Dec</Text>
      <View>
        <View style={styles.headingcon}>
          <Text style={styles.heading}>Learn</Text>
          <Text style={styles.heading2}>Choose the part of the body</Text>
        </View>
        <FlatList
          data={Data}
          renderItem={({item, index}) => (
            <TouchableHighlight
              style={styles[item.partName]}
              key={index}
              onPress={() => {}}>
              <View style={styles[item.partName].viewcmp}>
                <Text style={styles[item.partName].heading}>
                  {item.partName}
                </Text>
                <Text style={styles[item.partName].subheading}>
                  {item.count}
                </Text>
              </View>
            </TouchableHighlight>
          )}
        />
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
    fontWeight: '400',
  },
  'Head & Face': {
    backgroundColor: '#EB7662',
    margin: 15,
    borderRadius: 15,
    viewcmp: {padding: 10, paddingLeft: 30},
    heading: {fontSize: 20, color: 'white', fontWeight: 'bold', margin: 5},
    subheading: {fontSize: 12, color: 'gainsboro', marginBottom: 10},
  },
  'Back & Neck': {
    backgroundColor: '#8DC4BB',
    margin: 15,
    borderRadius: 15,
    viewcmp: {padding: 10, paddingLeft: 30},
    heading: {fontSize: 20, color: 'white', fontWeight: 'bold', margin: 5},
    subheading: {fontSize: 12, color: 'gainsboro', marginBottom: 10},
  },
  'Elbow & Shoulders': {
    backgroundColor: '#F2982F',
    margin: 15,
    borderRadius: 15,
    viewcmp: {padding: 10, paddingLeft: 30},
    heading: {fontSize: 20, color: 'white', fontWeight: 'bold', margin: 5},
    subheading: {fontSize: 12, color: 'gainsboro', marginBottom: 10},
  },
  'Hand & Arm': {
    backgroundColor: '#327389',
    margin: 15,
    borderRadius: 15,
    viewcmp: {padding: 10, paddingLeft: 30},
    heading: {fontSize: 20, color: 'white', fontWeight: 'bold', margin: 5},
    subheading: {fontSize: 12, color: 'gainsboro', marginBottom: 10},
  },
});
