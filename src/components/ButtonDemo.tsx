import { Text, StyleSheet, View, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class ButtonDemo extends Component {
  render() {
	return (
	  <View>
		<Button 
			title='alert'
			onPress={() => {
				Alert.alert('我是一个按钮')
			}}
		/>
	  </View>
	)
  }
}

const styles = StyleSheet.create({})