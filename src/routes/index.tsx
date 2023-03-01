import React from 'react'
import { TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// https://github.com/oblador/react-native-vector-icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from './HomeStack'
import NewsStack from './NewsStack'


const Tab = createBottomTabNavigator()

export default function Index() {

	const navigation = useNavigation()

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName
					color = '#00b38a'

					if (route.name === 'MainPage') {
						iconName = focused ? 'home' : 'home-outline'
					} else if (route.name === 'NewsPage') {
						iconName = focused ? 'newspaper' : 'newspaper-outline'
					}

					return <TouchableOpacity onPress={() => navigation.navigate(route.name)}>
						<View style={[styles.touchArea]}>
							<Ionicons name={iconName} color={color} size={size} />
						</View>
					</TouchableOpacity>
				},
				tabBarActiveTintColor: '#00b38a'
			})}
		>
			<Tab.Screen name="MainPage" component={HomeStack} options={{ title: '主页' }} />
			<Tab.Screen name="NewsPage" component={NewsStack} options={{ title: '新闻' }} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	touchArea: {
		height: 60,
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative',
		top: 15
	}
})