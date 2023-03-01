import React, { useState } from "react"
import { TextInput, StyleSheet, Dimensions, Button, View } from 'react-native'

const TestInput = () => {
	const [value, setValue] = useState('222')


	const handleLogin = () => {
		console.log(value)
	}


	return (
		<View style={{ flexDirection: 'column' }}>
			<TextInput
				style={styles.input}
				placeholder="请输入用户名"
				value={value}
				onChangeText={(val) => { setValue(val) }}
			/>
			<Button
				title="登录"
				onPress={handleLogin}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		width: Dimensions.get('window').width - 30,
		borderWidth: 1,
		borderColor: 'red',
		paddingHorizontal: 5,
		marginBottom: 20
	}
})

export default TestInput