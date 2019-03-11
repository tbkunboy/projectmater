/**
 * giữ logic và thông báo ng dùng ứng dụng đang tải
 */
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import SplashScreen from "react-native-splash-screen";

import { BottomTab } from "../navigation/BottomTab";
// BottomTab();
class Initializing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
    // BottomTab();
  }
  goToTab = () => {
    BottomTab();
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Initializing </Text>
        <Button onPress={this.goToTab} title="click to tab" />
      </View>
    );
  }
}

export default Initializing;
