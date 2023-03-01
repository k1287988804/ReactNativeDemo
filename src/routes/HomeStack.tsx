import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/screens/Home'

const Stack = createStackNavigator()

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='HomeStack'
		// screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='HomeStack'
				component={Home}
				options={{
					title: '主页',
					headerTintColor: '#fff',
					headerStyle: {
						backgroundColor: '#00b38a',
						elevation: 0, // 消除安卓上的阴影分割
						shadowOpacity: 0 // 消除ios上的阴影分割
					},
					headerRight: () => (
						<TouchableOpacity onPress={() => alert('hello')}>
							<Text style={{ fontSize: 18, color: 'white', marginRight: 10 }}>拍照</Text>
						</TouchableOpacity>
					)
				}}
			/>
		</Stack.Navigator>
	)
}