import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import { StyledMap } from '../style/Map.styled'

const center = {
	lat: 48.12,
	lng: 2.1
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
		<StyledMap>
			<GoogleMap
				center={center}
				zoom={10}
				mapContainerStyle={{ height: '100%', width: '100%' }}
			></GoogleMap>
		</StyledMap>
	)
}
