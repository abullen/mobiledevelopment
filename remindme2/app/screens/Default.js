import React, { Component } from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage,
  StyleSheet,
  Alert,
  View
} from "react-native";
import ActionButton from "react-native-action-button";

import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { ListItem } from "../components/List";
import { Defaults } from "../components/Defaults";

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this._fetchData = this._fetchData.bind(this);
  }
  _onPressButton() {
    this.props.navigation.navigate("AddReminder", {
      handleOnNavigateBack: this.handleOnNavigateBack
    })
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
      <Defaults  onPress={this._onPressButton} />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374046",
    justifyContent: "center"
  },

  topView: {
    backgroundColor: "#65799b",
    flex: 1,
    justifyContent: "flex-end"
  },

  bottomView: {
    flex: 2,
    justifyContent: "space-around"
  }
});


export default Default;
