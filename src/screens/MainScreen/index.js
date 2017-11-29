import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { add, remove } from "../../redux/actions/settings"

class MainScreen extends Component{
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Main Screen</Text>
      </View>
    )
  }
}

export default connect(
  state => ({ settings: state.settings }),
  { add, remove }
)(MainScreen)