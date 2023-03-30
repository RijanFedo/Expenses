import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Expenses() {
  const expDetails = [
    {
      id: "01",
      month: "January",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "SavingsSavings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "02",
      month: "February",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "03",
      month: "March",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "04",
      month: "April",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "05",
      month: "May",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "06",
      month: "June",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "07",
      month: "July",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "08",
      month: "August",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "09",
      month: "September",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "10",
      month: "October",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "11",
      month: "November",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
    {
      id: "12",
      month: "December",
      details: [
        {
          type: "Rent",
          amount: "+500$",
        },
        {
          type: "Food",
          amount: "+200$",
        },
        {
          type: "Gas",
          amount: "+49$",
        },
        {
          type: "Car",
          amount: "+29$",
        },
        {
          type: "Savings",
          amount: "+870$",
        },
      ],
    },
  ];

  const [isOpened, setIsOpened] = useState("");
  const [toEdited, setToEdited] = useState("");
  const [editedVal, setEditedVal] = useState(expDetails);
  const [errDet, setErrDet] = useState([]);
  const [errMon, setErrMon] = useState("");
  // const [errType, setErrType] = useState('');
  // const [errText, setErrText] = useState('');
  // const [typeErrMon, setTypeErrMon] = useState('');
  // const [typeErrDet, setTypeErrDet] = useState([]);

  const changeVal = (newval, val, itm) => {
    // errDet.remove(itm);
    // setErrDet(errDet.delete(itm));
    // if (/^[A-Za-z]+$/.test(newval)) {
    //   setTypeErrMon(val.month);
    //   setTypeErrDet([...typeErrDet, itm]);
    //   setErrText('invalid');
    //   // if (!newval) {
    //   //   console.log('reqqqq');
    //   //   setErrText('req');
    //   // } else if (/^[A-Za-z]+$/.test(newval)) {
    //   //   setErrText('invalid');
    //   // }
    //   // // setErrType('invalid');
    //   console.log(errText);
    // } else {
    //   setErrText('');
    // }
    // console.log(errText);
    // console.log(/^[0-9]+$/.test(newval));
    const newArr = editedVal.map((obj) => {
      if (obj.month === val.month) {
        // setErrMon(val.month);
        // setErrDet(itm);
        const innArr = obj.details.map((obj1) => {
          if (obj1.type === itm) {
            return { ...obj1, amount: newval };
          }
          return obj1;
        });
        return {
          ...obj,
          details: innArr,
        };
      }
      return obj;
    });
    setEditedVal(newArr);
    // }
  };

  const handleSubmit = (val) => {
    // setErrText('');
    // setToEdited('');
    editedVal.map((obj) => {
      if (obj.month === val.month) {
        const filtered = val.details
          .filter((obj1) => {
            // if (!/^[0-9]+$/.test(obj1.amount)) {
            //   setErrType('invalid');
            // }
            return !obj1.amount || /^[A-Za-z]+$/.test(obj1.amount);
          })
          .map((a) => {
            return a.type;
          });
        console.log(filtered);
        filtered.length == 0 && setToEdited("");
        // filtered.length == 0 && setErrType('');
        filtered.length !== 0 && setErrMon(obj.month);
        // filtered.length !== 0 && setErrType('required');
        setTimeout(() => {
          // console.log(errType);
        }, 500);
        // console.log(errType);
        setErrDet(filtered);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Expenses</Text>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {editedVal.map((val) => {
            return (
              <View key={val.id}>
                <Pressable
                  onPress={() => {
                    isOpened === val.month
                      ? setIsOpened("")
                      : setIsOpened(val.month);
                  }}
                  style={styles.monthcontainer}
                  on
                >
                  <Text
                    // onPress={}
                    style={styles.month}
                  >
                    {val.month}
                  </Text>
                  {isOpened === val.month ? (
                    <Icon
                      style={{ marginLeft: "auto" }}
                      name="md-chevron-up-circle"
                      size={30}
                      color="#F6483B"
                      onPress={() => setIsOpened("")}
                    />
                  ) : (
                    <Icon
                      style={{ marginLeft: "auto" }}
                      name="md-chevron-down-circle"
                      size={30}
                      color="black"
                      onPress={() => setIsOpened(val.month)}
                    />
                  )}
                </Pressable>
                {isOpened === val.month ? (
                  <View>
                    {val.details.map((itm) => {
                      return (
                        <View key={itm.type}>
                          <View style={styles.expContainer}>
                            <Text
                              style={
                                errDet.includes(itm.type) &&
                                errMon === val.month
                                  ? styles.errtype
                                  : styles.type
                              }
                            >
                              {itm.type}
                            </Text>
                            {toEdited === val.month ? (
                              <View style={{ marginLeft: "auto" }}>
                                <TextInput
                                  // keyboardType="numeric"
                                  style={
                                    errDet.includes(itm.type) &&
                                    errMon === val.month
                                      ? styles.errinputBox
                                      : styles.inputBox
                                  }
                                  onChangeText={(newVal) =>
                                    changeVal(newVal, val, itm.type)
                                  }
                                  defaultValue={itm.amount}
                                />
                                {/* {errText &&
                                typeErrMon === val.month &&
                                typeErrDet.includes(itm.type) ? (
                                  <Text
                                    style={{
                                      color: 'red',
                                      marginLeft: 'auto',
                                      marginRight: 18,
                                    }}>
                                    {errText}
                                  </Text>
                                ) : null} */}
                                {errDet.includes(itm.type) &&
                                errMon === val.month ? (
                                  <Text style={styles.errText}>
                                    {/* {errType} */}
                                    {/* {!itm.amount
                                      ? 'required'
                                      : /^[A-Za-z]+$/.test(itm.amount)
                                      ? 'invalid'
                                      : ''} */}
                                    {/^[A-Za-z]+$/.test(itm.amount)
                                      ? "invalid"
                                      : "required"}
                                  </Text>
                                ) : null}
                              </View>
                            ) : (
                              <Text style={styles.amt}>{itm.amount}</Text>
                            )}
                          </View>
                          <View
                            style={{
                              backgroundColor: "#F2F2F7",
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
                        onPressIn={() => setToEdited(val.month)}
                        style={styles.editButton}
                      >
                        <Text style={styles.editText}>Edit</Text>
                      </TouchableOpacity>

                      {toEdited === val.month ? (
                        <TouchableOpacity
                          onPressIn={() => handleSubmit(val)}
                          style={styles.saveButton}
                        >
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
    backgroundColor: "#F6483B",
    height: "100%",
    padding: 20,
    paddingBottom: 130,
    paddingTop: 120,
  },
  innerContainer: {
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    padding: 10,
  },
  heading: {
    color: "#9D9D9B",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 18,
  },
  month: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  monthcontainer: {
    display: "flex",
    flexDirection: "row",
    padding: 18,
  },
  scrollContent: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  type: {
    color: "#9D9D9B",
    fontSize: 18,
    paddingLeft: 18,
    paddingBottom: 10,
  },
  errtype: {
    color: "red",
    fontSize: 18,
    paddingLeft: 18,
    paddingBottom: 10,
  },
  expContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  amt: {
    color: "#6ED19F",
    fontWeight: "bold",
    marginLeft: "auto",
    paddingRight: 18,
  },
  editButton: {
    backgroundColor: "red",
    padding: 5,
    width: 50,
    borderRadius: 10,
    marginLeft: 18,
    margin: 5,
  },
  editText: {
    textAlign: "center",
    color: "white",
  },
  saveButton: {
    backgroundColor: "mediumseagreen",
    padding: 5,
    width: 50,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: 18,
    margin: 5,
  },
  saveText: {
    textAlign: "center",
    color: "white",
  },
  buttonCon: {
    display: "flex",
    flexDirection: "row",
  },
  inputBox: {
    borderWidth: 1,
    height: 30,
    padding: 0,
    marginLeft: "auto",
    marginRight: 18,
    borderRadius: 5,
    width: 100,
    textAlign: "right",
    paddingRight: 20,
    borderColor: "grey",
    color: "red",
  },
  errinputBox: {
    borderWidth: 2,
    height: 30,
    padding: 0,
    marginLeft: "auto",
    marginRight: 18,
    borderRadius: 5,
    width: 100,
    textAlign: "right",
    paddingRight: 20,
    borderColor: "red",
    color: "red",
  },
  errText: {
    color: "red",
    fontSize: 12,
    textAlign: "right",
    marginRight: 18,
  },
});
