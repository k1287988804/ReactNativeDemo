import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
	setStorage: (key: string, value: any) => {
		return AsyncStorage.setItem(key, JSON.stringify(value))
	},
	getStorage: (key: string) => {
		return AsyncStorage.getItem(key).then(value => {
			if(value && value !== '') {
				const jsonValue = JSON.parse(value)
				return jsonValue
			}
		}).catch(() => null)
	},
	updateStorage: (key: string, newValue: any) => {
		return AsyncStorage.getItem(key).then(oldValue => {
			newValue = typeof newValue === 'string' ? newValue : Object.assign({}, oldValue, newValue)
			return AsyncStorage.setItem(key, JSON.stringify(newValue))
		})
	},
	deleteStorage: (key: string) => {
		return AsyncStorage.removeItem(key)
	},
	clearStorage: () => {
		return AsyncStorage.clear()
	}
}