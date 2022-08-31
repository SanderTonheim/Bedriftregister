import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
const center = {
	lat: 60.3881,
	lng: 5.3318
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
		<div className='MapStyle'>
			<GoogleMap
				center={center}
				zoom={15}
				mapContainerStyle={{ height: '100%', width: '100%' }}
			>
				<Marker position={center} />
			</GoogleMap>
		</div>
	)
}
