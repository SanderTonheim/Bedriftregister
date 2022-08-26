import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

const center = {
	lat: 48,
	lng: 2
}
export const CompanyMap = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	})

	if (!isLoaded) {
		const errorMessage = 'faild to load'
		return errorMessage
	}
	return (
		<GoogleMap
			center={center}
			zoom={10}
			mapcointainerstyle={{ width: '900px', height: '900px	' }}
		></GoogleMap>
	)
}
