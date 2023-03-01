import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const window = Dimensions.get('window')
const screen = Dimensions.get('screen')

export default function Dimensions_() {

	const [dimensions, setDimensions] = useState({ window, screen })

	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			flexWrap: 'wrap'
		},
		itemBase: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#00b38a',
			width: dimensions.window.width / 3,
			height: 50,
		},
		h3: {
			fontSize: 24,
			color: 'black'
		}
	})

	return (
		<View style={[styles.container]}>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>扫一扫</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>付款码</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>卡包</Text></View>
			<View style={[styles.itemBase]}><Text style={[styles.h3]}>信息</Text></View>
		</View>
	)
}