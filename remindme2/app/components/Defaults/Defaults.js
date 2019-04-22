import React from 'react';
import { Alert, View, TouchableOpacity, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const Defaults = (props) => {
  return(



  <View style={styles.container}>
  <Text
  style={{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign:'center',
    margin: 3,
  }}
  > Default Reminders</Text>

  <TouchableOpacity onPress={props.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Homework</Text>
          </View>
        </TouchableOpacity>

  <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button2}>
                  <Text style={styles.buttonText}>Groceries</Text>
                </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={props.onPress}>
          <View style={styles.button3}>
            <Text style={styles.buttonText}>Meeting</Text>
          </View>
        </TouchableOpacity>

  <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Work</Text>
                </View>
              </TouchableOpacity>

  <TouchableOpacity onPress={props.onPress}>
                      <View style={styles.button2}>
                        <Text style={styles.buttonText}>Pay Rent</Text>
                      </View>
                    </TouchableOpacity>


  </View>
)};

export default Defaults;
