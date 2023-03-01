import { Text, StyleSheet, View, Switch } from 'react-native'
import React, { Component } from 'react'

export default class AlertDemo extends Component {

	state = {
		switchValue: false
	}

	handleChangeValue = (val: Boolean) => {
		this.setState({
			switchValue: val
		})
	}

	render() {
		return (
			<View >
				<Text>测试</Text>
				<Switch
					value={this.state.switchValue}
					trackColor={{ false: 'red', true: 'green' }}
					thumbColor={'white'}
					onValueChange={(val) => {
						this.handleChangeValue(val)
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({})