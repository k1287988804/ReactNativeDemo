import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { default as TabNavigatorScreen } from './src'

export default class App extends Component {

	render() {
		return (
			<NavigationContainer >
				<TabNavigatorScreen />
			</NavigationContainer>
		)
	}
}