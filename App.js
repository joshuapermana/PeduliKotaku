import React, { Component } from "react";
import { View, AppRegistry } from "react-native";
import { StyleProvider,Container, Content, Picker, Button, Text } from "native-base";
import getTheme from './src/Themes/components'
import PKTheme from './src/Themes/variables/PKTheme'
import MainRouter from "./src/Router/index.js";
export default class PeduliKotaku extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  render() {
  return( 
    <StyleProvider style={getTheme(PKTheme)}>
    <MainRouter/>
    </StyleProvider>
    );

  }
}