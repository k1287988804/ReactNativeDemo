import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Test extends Component {
  render() {
	return (
	  <View>
		<Text style={[{color: 'red', fontSize: 30}]}>Test</Text>
		<Text style={styles.h1}>Hello RN</Text>
		<Text style={styles.h2}>Hello RN2</Text>
	  </View>
	)
  }
}


const styles = StyleSheet.create({
	h1: {
		fontSize: 40,
		fontWeight: 'bold'
	},
	h2: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'orange'
	}
})


