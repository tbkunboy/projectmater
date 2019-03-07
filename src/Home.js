/**
 * Hiển thị khi user đăng nhập
 */
import React, { Component } from "react";
import { View, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
