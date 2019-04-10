import React, { Component } from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import ActionButton from "react-native-action-button";

import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { ListItem } from "../components/List";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this._fetchData = this._fetchData.bind(this);
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = () => {
    AsyncStorage.getAllKeys().then(keys => {
      console.log(keys);
      keys.forEach(element => {
        if (element.includes("^notifications")) {
        } else {
          AsyncStorage.getItem(element)
            .then(JSON.parse)
            .then(response => {
              console.log(response);
              this.setState({
                data: this.state.data.filter(b => b.key !== element).concat({
                  key: element,
                  title: response.inputText,
                  date: `${response.date} ${response.time}`,
                  duration: `Every ${response.repeatInterval} ${response.selectRepeatType}`,
                  notify: response.notify,
                  avatar: "avatar"
                })
              });
            });
        }
      });
    });
  };

  handleOnNavigateBack = () => {
    this._fetchData();
  };

  handleOnGetData = () => {
    AsyncStorage.getAllKeys().then(keys => {
      this.setState(prevState => ({
        data: prevState.data.filter(b => {
          return keys.includes(b.key);
        })
      }));
    });
  };

  render() {
    //darkcyan
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
              <Button
              onPress={() =>
                this.props.navigation.navigate("AddReminder", {
                  handleOnNavigateBack: this.handleOnNavigateBack
                })
              }
                title="Homework"
              />
              <Button
                onPress={this._onPressButton}
                title="Laundry"
              />
              <Button
                onPress={this._onPressButton}
                title="Groceries"
              />
              <Button
                onPress={this._onPressButton}
                title="Work"
              />
            </View>
      </View>
    );
  }
}

export default Home;
