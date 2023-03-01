import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class FlexBox extends Component {
  render() {
	return (
	  <ScrollView>
		<Text>FlexBox</Text>
		<View>
			<Text>flexDirection: 'row'</Text>
			<View style={[styles.container]}>
				<Text style={[styles.text]}>刘备</Text>
				<Text style={[styles.text]}>关羽</Text>
				<Text style={[styles.text]}>张飞</Text>
			</View>
		</View>
		<View>
			<Text>flexDirection: 'column'</Text>
			<View style={[styles.container, {flexDirection: 'column'}]}>
				<Text style={[styles.text]}>刘备</Text>
				<Text style={[styles.text]}>关羽</Text>
				<Text style={[styles.text]}>张飞</Text>
			</View>
		</View>
		<View>
			<Text>justifyContent</Text>
			<View style={[styles.container, {justifyContent: 'center'}]}>
				<View style={[styles.text]}><Text>刘备</Text></View>
				<View style={[styles.text]}><Text>刘备</Text></View>
				<View style={[styles.text]}><Text>刘备</Text></View>
			</View>
		</View>
	  </ScrollView>
	)
  }
}

const styles = StyleSheet.create({
	container: {
		height: 120,
		margin: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		flexDirection: 'row',
		// justifyContent: 'center'
	},
	text: {
		color: 'black',
		flex: 1,
		height: 20,
		width: 80,
		backgroundColor: '#dfb',
		borderWidth: 1,
		borderColor: 'red',
		textAlign: 'center'
	}
})