import React, { Component } from "react";
import { Navigation } from "react-native-navigation";

import Provider from "../untils/MobxRnnProvider";
import stores from "../stores";
import * as screenRegister from "./";
import _ from "lodash";

const addStore = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={stores}>
          <Component {...{ ...this.props, ...props }} />
        </Provider>
      );
    }
  };
};
export const registerScreens = async () => {
  _.map(screenRegister, (v, k) => {
    Navigation.registerComponent(k, () => addStore(v));
  });
};
