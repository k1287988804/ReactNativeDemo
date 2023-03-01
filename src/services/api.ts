import { request } from "@/utils/request"

const key = `19a4bc2649254bab92354f6d32e57856`

export const getSevenDays = async (coords: any) => {
	const url = `https://devapi.qweather.com/v7/weather/7d?location=${coords.longitude},${coords.latitude}&key=${key}`

	try {
		const response = (await request.get(url)).data
		if (response.code === '200') {
			// console.log(response.daily)
			return response.daily
		} else {
			return []
		}
	} catch (error) {
		console.error(error)
	}
}