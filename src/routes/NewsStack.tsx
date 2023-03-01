import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import News from '@/screens/News'

const Stack = createStackNavigator()

export default function NewsStack() {
	return (
		<Stack.Navigator
			initialRouteName='NewsStack'
		// screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='NewsStack'
				component={News}
				options={{
					title: '新闻',
					headerTintColor: '#fff',
					headerStyle: {
						backgroundColor: '#00b38a'
					}
				}}
			/>
		</Stack.Navigator>
	)
}