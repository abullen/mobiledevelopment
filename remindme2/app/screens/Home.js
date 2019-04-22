import React, { Component } from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  AsyncStorage
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from "react-native-action-button";

import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { ListItem } from "../components/List";
import { Defaults } from "../components/Defaults";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#374046" }}>
        <StatusBar barStyle="light-content" />
        <Header />
        <TouchableOpacity onPress={() =>
          this.props.navigation.navigate("Default", {
            handleOnNavigateBack: this.handleOnNavigateBack
          })
        } style={{margin: 15, alignItems: 'center'}}>

        <View style={{ backgroundColor:"rgba(231,76,60,1)",marginBottom: 30,
        width: 260, alignItems: 'center'}}>
          <Text style={{ color: 'white', fontSize: 28}}>Use a Default Reminder</Text>
        </View>
       </TouchableOpacity>

        {this.state.data.length > 0 ? (
          <ListItem
            renderData={this.state.data}
            navigation={this.props.navigation}
            handleOnGetData={this.handleOnGetData}
            handleOnNavigateBack={this.handleOnNavigateBack}
          />
        ) : (
          <Info InfoText="Press on plus button to create reminders" />
        )}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() =>
            this.props.navigation.navigate("AddReminder", {
              handleOnNavigateBack: this.handleOnNavigateBack
            })
          }
        />
      </SafeAreaView>
    );
  }
}

export default Home;
