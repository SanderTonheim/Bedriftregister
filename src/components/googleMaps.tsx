import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '../modules/key'

interface Props {
	latitude: number
	longetude: number
}

export const CompanyMap = ({ latitude, longetude }: Props): Props | any => {
	const cord = { lat: latitude, lng: longetude }
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
	})
	if (!isLoaded) {
		const errorMessage = 'Somethin went wrong'
		return console.log(errorMessage)
	}
	console.log('Sucssess')

	return (
		<>
			<GoogleMap
				center={cord}
				zoom={15}
				mapContainerStyle={{ height: '100%', width: '100%' }}
				options={{
					zoomControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
				}}
			>
				<Marker position={cord} />
			</GoogleMap>
		</>
	)
}
