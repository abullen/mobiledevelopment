import React from 'react';
import { Alert, View, TouchableOpacity, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const Defaults = () => (
  state = {
    placeholderText="Enter your text"
  }

  //_onPressButton() {
    // Alert.alert('You tapped the button!')
  //}


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
  <View style={styles.buttonContainer}>
          <Button style={styles.btn}
          onPress={() => {
            this.setState({
             textValue: 'Homework'
           })
  }}
            title="Homework"
            color="#000000"
          />
          <Button
          onPress={this._onPressButton}
            title="Groceries"
            color="#000000"
          />
          <Button
          onPress={this._onPressButton}
            title="Meeting"
            color="#000000"
          />
          </View>
<View style={styles.buttonContainer}>
          <Button
          onPress={this._onPressButton}
            title="Laundry"
            color="#000000"
          />
          <Button
          onPress={this._onPressButton}
            title="Work"
            color="#000000"
          />
          <Button
          onPress={this._onPressButton}
            title="Pay Rent"
            color="#000000"
          />

            </View>

  </View>
);

export default Defaults;
