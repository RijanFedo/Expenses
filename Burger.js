import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Burger() {
  const ingredients = [
    {
      id: 1,
      name: 'tomato',
    },
    {
      id: 2,
      name: 'onion',
    },
    {
      id: 3,
      name: 'cucumber',
    },
    {
      id: 4,
      name: 'sauce',
    },
    {
      id: 5,
      name: 'cheese',
    },
  ];

  const burgerContentList = [
    {
      id: 0,
      contents: ['bun'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun1-removebg-preview.png',
    },
    {
      id: 1,
      contents: ['bun', 'tomato'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun2-removebg-preview.png',
    },
    {
      id: 2,
      contents: ['bun', 'tomato', 'onion'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun3-removebg-preview.png',
    },
    {
      id: 3,
      contents: ['bun', 'tomato', 'onion', 'cucumber'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun4-removebg-preview.png',
    },
    {
      id: 4,
      contents: ['bun', 'tomato', 'onion', 'cucumber', 'sauce'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun5-removebg-preview.png',
    },
    {
      id: 5,
      contents: ['bun', 'tomato', 'onion', 'cucumber', 'sauce', 'cheese'],
      path: 'file:///C:/Users/thosiba/Documents/Rijan/Projects/Myapp/assets/burger/bun7-removebg-preview.png',
    },
  ];

  const img = require('./assets/burger/bun1-removebg-preview.png');

  const [burgerIn, setBurgerIn] = useState(['bun']);

  const [currentBur, setCurrentBur] = useState('');

  //   const [currentImg, setCurrentImg] = useState('');
  //   let imgee = '';
  //   useEffect(() => {
  //     // console.log('ggerf', burgerContentList);
  //     const filtered = burgerContentList.filter(data => {
  //       console.log('gg', data.contents);
  //       console.log('vgg', burgerIn);
  //       console.log(data.contents === burgerIn);
  //       return data.contents == burgerIn;
  //     });
  //     setCurrentBur(filtered);
  //     console.log('fil', currentBur);
  //   }, [burgerIn]);

  useEffect(() => {
    const filtered = burgerContentList.filter(val => {
      console.log(val.contents, burgerIn);
      return val.contents.join() == burgerIn.join();
    });
    // burgerIn.length > 1 &&
    filtered && setCurrentBur(filtered[0].path);
    // currentBur && (srce = currentBur.path);
  }, [burgerIn]);

  //   setTimeout(() => {
  console.log('tec', currentBur);
  //   }, 500);
  //   let imge = currentBur.path;

  //   useEffect(() => {
  //     // setCurrentImg(currentBur[0].path);
  //     imgee = currentBur.path;
  //   }, [currentBur]);

  return (
    <View>
      <Image source={{uri: {currentBur}}} />

      {/* {burgerIn.includes('Bun') ? <View style={styles.bunTop}></View> : null}
      {burgerIn.includes('Cucumber') ? (
        <View style={styles.cucumContent}>
          <View style={styles.cucum}></View>
          <View style={styles.cucum}></View>
        </View>
      ) : null}
      {burgerIn.includes('Onion') ? (
        <View style={styles.onionContent}>
          <View style={styles.onion}></View>
          <View style={styles.onion}></View>
        </View>
      ) : null}
      {burgerIn.includes('Tomato') ? <View style={styles.tomato}></View> : null}
      {burgerIn.includes('Cheese') ? <View style={styles.cheese}></View> : null}
      {burgerIn.includes('Cutlet') ? <View style={styles.cutlet}></View> : null}
      {burgerIn.includes('Salad') ? <View style={styles.salad}></View> : null}
      {burgerIn.includes('Bun') ? <View style={styles.bunBottom}></View> : null} */}

      <View style={styles.itemContainer}>
        {ingredients.map(item => {
          return (
            <View key={item.id}>
              <Text
                onPress={() => setBurgerIn([...burgerIn, item.name])}
                style={styles.item}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bunTop: {
    backgroundColor: 'yellow',
    height: 90,
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  bunBottom: {
    backgroundColor: 'yellow',
    height: 90,
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  salad: {
    height: 15,
    margin: 2,
    backgroundColor: 'forestgreen',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  cutlet: {
    height: 40,
    backgroundColor: 'indianred',
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  cheese: {
    height: 10,
    backgroundColor: 'gold',
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    // borderRadius: 10,
  },
  tomato: {
    height: 20,
    backgroundColor: 'red',
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  onion: {
    height: 12,
    backgroundColor: 'powderblue',
    margin: 2,
    width: '50%',
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 10,
  },
  onionContent: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  cucumContent: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  cucum: {
    height: 15,
    backgroundColor: 'limegreen',
    margin: 2,
    width: '50%',
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 10,
  },
  item: {
    fontSize: 23,
    // paddingBottom: 5,
    margin: 10,
  },
  itemContainer: {
    marginTop: 10,
  },
});
