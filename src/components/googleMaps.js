import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

export const CompanyMap = ({ latitude, longetude }) => {
	const Cordinates = { lat: latitude, lng: longetude }

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	})
	if (!isLoaded) {
		const errorMessage = 'faild to load'
		return errorMessage
	}
	console.log(Cordinates)
	return (
		<div className='MapStyle'>
			<GoogleMap
				center={Cordinates}
				zoom={15}
				mapContainerStyle={{ height: '100%', width: '100%' }}
				options={{
					zoomControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false
				}}
			>
				<Marker position={Cordinates} />
			</GoogleMap>
		</div>
	)
}
