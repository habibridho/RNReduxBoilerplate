import React, { Component } from "react"
import {
  StackNavigator,
} from "react-navigation"
import MainScreen from "./screens/MainScreen"

const Navigator = StackNavigator({
  Main: { screen: MainScreen }
})

export default Navigator