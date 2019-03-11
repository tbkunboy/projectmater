/**
 * Hiển thị khi user đăng nhập
 */
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { observer, inject } from "mobx-react";

@inject("Counter")
@observer
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
        <Text>{this.props.Counter.count}</Text>
        <Button title="Trừ" onPress={() => this.props.Counter.onMinus()} />
        <Button title="Cộng" onPress={() => this.props.Counter.onPlus()} />
      </View>
    );
  }
}

export default Home;
