import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function BurgerAnim() {
  const [imsSrc, setImgSrc] = useState(
    require('./assets/burger/bun1-removebg-preview.png'),
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 500);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, []);
  const [tomatoAddded, setTomatoAdded] = useState(false);
  const [onionAddded, setOnionAdded] = useState(false);
  const [cucumberAddded, setCucumberAdded] = useState(false);

  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.imageContent,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Image source={imsSrc} />
      </Animated.View>
      <View style={{alignItems: 'flex-start', paddingLeft: 100}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BouncyCheckbox
            text="Tomato"
            onPressIn={async () => {
              setTomatoAdded(!tomatoAddded);
              fadeIn();
              setTimeout(() => {
                tomatoAddded
                  ? setImgSrc(
                      require('./assets/burger/bun2-removebg-preview.png'),
                    )
                  : setImgSrc(
                      require('./assets/burger/bun1-removebg-preview.png'),
                    );
              }, 400);
            }}
            isChecked={tomatoAddded}
            // onPress={() => {
            //   setTomatoAdded(true);
            //   console.log(tomatoAddded);
            //   fadeIn();
            //   setTimeout(() => {
            //     tomatoAddded
            //       ? setImgSrc(
            //           require('./assets/burger/bun2-removebg-preview.png'),
            //         )
            //       : setImgSrc(
            //           require('./assets/burger/bun1-removebg-preview.png'),
            //         );
            //   }, 400);
            // }}
          />
          <Text
            style={(styles.item, styles.clr)}
            onPress={() => {
              // setImgSrc(require('./assets/burger/bun2-removebg-preview.png'));
              // fadeOut();
              fadeIn();
              setTimeout(() => {
                tomatoAddded
                  ? setImgSrc(
                      require('./assets/burger/bun2-removebg-preview.png'),
                    )
                  : setImgSrc(
                      require('./assets/burger/bun1-removebg-preview.png'),
                    );
              }, 400);
            }}>
            Tomato
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BouncyCheckbox
            onPress={isChecked => {
              setOnionAdded(!onionAddded);
            }}
          />
          <Text
            style={(styles.item, styles.clr)}
            onPress={() => {
              //   setImgSrc(require('./assets/burger/bun2-removebg-preview.png'));

              //   fadeOut();
              fadeIn();
              setTimeout(() => {
                setImgSrc(require('./assets/burger/bun2-removebg-preview.png'));
              }, 400);
            }}>
            Onion
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BouncyCheckbox
            onPress={isChecked => {
              setCucumberAdded(!cucumberAddded);
            }}
          />
          <Text
            style={(styles.item, styles.clr)}
            onPress={() => {
              //   setImgSrc(require('./assets/burger/bun2-removebg-preview.png'));

              //   fadeOut();
              fadeIn();
              setTimeout(() => {
                setImgSrc(require('./assets/burger/bun2-removebg-preview.png'));
              }, 400);
            }}>
            Cucumber
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 23,
    // paddingBottom: 5,
    margin: 10,
  },
  itemContainer: {
    marginTop: 10,
  },
  clr: {
    color: 'orange',
    fontSize: 23,
    textAlign: 'center',
    padding: 10,
  },
  imageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 30,
    // height: '70%',
  },
});
