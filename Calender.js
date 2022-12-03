import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Calender() {
  const expDetails = [
    {
      id: '01',
      month: 'January',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '02',
      month: 'February',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '03',
      month: 'March',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '04',
      month: 'April',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '05',
      month: 'May',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '06',
      month: 'June',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '07',
      month: 'July',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '08',
      month: 'August',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '09',
      month: 'September',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '10',
      month: 'October',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '11',
      month: 'November',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
    {
      id: '12',
      month: 'December',
      details: [
        {
          type: 'Rent',
          amount: '+500$',
        },
        {
          type: 'Food',
          amount: '+200$',
        },
        {
          type: 'Gas',
          amount: '+49$',
        },
        {
          type: 'Car',
          amount: '+29$',
        },
        {
          type: 'Savings',
          amount: '+870$',
        },
      ],
    },
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const exp = [
    {
      type: 'Rent',
      amount: '+500$',
    },
    {
      type: 'Food',
      amount: '+200$',
    },
    {
      type: 'Gas',
      amount: '+49$',
    },
    {
      type: 'Car',
      amount: '+29$',
    },
    {
      type: 'Savings',
      amount: '+870$',
    },
  ];

  const [isOpened, setIsOpened] = useState('');
  const [toEdited, setToEdited] = useState('');
  const [editedVal, setEditedVal] = useState([]);

  useEffect(() => {
    setEditedVal(exp);
  }, []);

  const changeVal = (newval, itm) => {
    const newArr = editedVal.map(obj => {
      if (obj.type === itm) {
        return {...obj, amount: newval};
      }
      return obj;
    });
    setEditedVal(newArr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Expenses</Text>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {months.map(val => {
            return (
              <View key={val}>
                <Pressable
                  onPress={() => {
                    isOpened === val ? setIsOpened('') : setIsOpened(val);
                  }}
                  style={styles.monthcontainer}
                  on>
                  <Text
                    // onPress={}
                    style={styles.month}>
                    {val}
                  </Text>
                  {isOpened === val ? (
                    <Icon
                      style={{marginLeft: 'auto'}}
                      name="md-chevron-up-circle"
                      size={30}
                      color="#F6483B"
                      onPress={() => setIsOpened('')}
                    />
                  ) : (
                    <Icon
                      style={{marginLeft: 'auto'}}
                      name="md-chevron-down-circle"
                      size={30}
                      color="black"
                      onPress={() => setIsOpened(val)}
                    />
                  )}
                </Pressable>
                {isOpened === val ? (
                  <View>
                    {editedVal.map(itm => {
                      return (
                        <View key={itm.type}>
                          <View style={styles.expContainer}>
                            <Text style={styles.type}>{itm.type}</Text>
                            {toEdited === val ? (
                              <TextInput
                                style={styles.inputBox}
                                onChangeText={newVal =>
                                  changeVal(newVal, itm.type)
                                }
                                defaultValue={itm.amount}
                              />
                            ) : (
                              <Text style={styles.amt}>{itm.amount}</Text>
                            )}
                          </View>
                          <View
                            style={{
                              backgroundColor: '#F2F2F7',
                              height: 0.5,
                              marginLeft: 18,
                              marginRight: 18,
                            }}
                          />
                        </View>
                      );
                    })}
                    <View style={styles.buttonCon}>
                      <TouchableOpacity
                        onPressIn={() => setToEdited(val)}
                        style={styles.editButton}>
                        <Text style={styles.editText}>Edit</Text>
                      </TouchableOpacity>

                      {toEdited === val ? (
                        <TouchableOpacity
                          onPressIn={() => setToEdited('')}
                          style={styles.saveButton}>
                          <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  </View>
                ) : null}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6483B',
    height: '100%',
    padding: 20,
    paddingBottom: 130,
    paddingTop: 120,
  },
  innerContainer: {
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    padding: 10,
  },
  heading: {
    color: '#9D9D9B',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 18,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  monthcontainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 18,
  },
  scrollContent: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  type: {
    color: '#9D9D9B',
    fontSize: 18,
    paddingLeft: 18,
    paddingBottom: 10,
  },
  expContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  amt: {
    color: '#6ED19F',
    fontWeight: 'bold',
    marginLeft: 'auto',
    paddingRight: 18,
  },
  editButton: {
    backgroundColor: 'red',
    padding: 5,
    width: 50,
    borderRadius: 10,
    marginLeft: 18,
    margin: 5,
  },
  editText: {
    textAlign: 'center',
    color: 'white',
  },
  saveButton: {
    backgroundColor: 'mediumseagreen',
    padding: 5,
    width: 50,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 18,
    margin: 5,
  },
  saveText: {
    textAlign: 'center',
    color: 'white',
  },
  buttonCon: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputBox: {
    borderWidth: 1,
    height: 30,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 18,
    borderRadius: 5,
    width: 100,
    textAlign: 'right',
    paddingRight: 20,
    borderColor: 'grey',
    color: 'red',
  },
});
