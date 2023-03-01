import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
// https://github.com/michalchudziak/react-native-geolocation
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';
import { Alert } from 'react-native';
import { getSevenDays } from '@/services/api'

export default function Home() {

	const [data, setData] = useState([])

	const getPosition = () => {
		Geolocation.getCurrentPosition(
			async info => {
				const { coords } = info
				const res = await getSevenDays(coords)
				// console.log(res)
				setData(res)
			},
			error => Alert.alert('报错', JSON.stringify(error)),
			{ timeout: 20000 }
		)
	}

	useEffect(() => {
		getPosition()
	}, [])

	return (
		<View>
			<ScrollView>
				<View style={[styles.container]}>
					<TouchableOpacity>
						<View style={[styles.itemBase]}>
							<Ionicons name='scan-outline' size={40} color='white' />
							<Text style={{ color: '#fff' }}>扫一扫</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={[styles.itemBase]}>
							<Ionicons name='qr-code-outline' size={40} color='white' />
							<Text style={{ color: '#fff' }}>付款码</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={[styles.itemBase]}>
							<Ionicons name='trail-sign-outline' size={40} color='white' />
							<Text style={{ color: '#fff' }}>出行</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={[styles.itemBase]}>
							<Ionicons name='card-outline' size={40} color='white' />
							<Text style={{ color: '#fff' }}>卡包</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Swiper
					style={[styles.wrapper]}
					showsButtons={false}
					autoplay={true}
					autoplayTimeout={5}
				>
					<Image
						style={[styles.image]}
						source={require('@/assets/images/1.png')}
					/>
					<Image
						style={[styles.image]}
						source={require('@/assets/images/2.jpg')}
					/>
					<Image
						style={[styles.image]}
						source={require('@/assets/images/3.jpg')}
					/>
				</Swiper>
				{!!data.length && data.map((item, index) => {
					return <LinearGradient
						key={index}
						start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
						colors={['#fff', '#666']}
						style={[styles.cardView]}
					>
						<View style={[styles.cardViewTop]}>
							<Text style={[styles.text, { fontSize: 20 }]}>{item?.fxDate}</Text>
						</View>
						<View style={[styles.cardViewBottom]}>
							<Text style={[styles.text, { fontSize: 16 }]}>{`${item?.textDay} ${item?.tempMax}℃`}</Text>
							<Text style={[styles.text, { fontSize: 16 }]}>{`${item?.textNight} ${item?.tempMin}℃`}</Text>
						</View>
					</LinearGradient>
				})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	itemBase: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 90,
		width: Dimensions.get('window').width / 4,
		backgroundColor: '#00b38a'
	},
	wrapper: {
		height: 200
	},
	image: {
		height: 200,
		width: Dimensions.get('window').width,
	},
	cardView: {
		width: Dimensions.get('window').width - 20,
		height: 120,
		marginVertical: 10,
		marginHorizontal: 10,
		flex: 1,
		borderRadius: 12,
		paddingLeft: 15,
		paddingRight: 15
	},
	cardViewTop: {
		height: 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardViewBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	text: {
		color: '#fff'
	}
})