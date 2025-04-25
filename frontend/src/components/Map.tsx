import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps"

const Map = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <GoogleMap
        defaultCenter={{ lat: 7.8731, lng: 80.7718 }}
        defaultZoom={7}
        gestureHandling={"greedy"}
      />
    </APIProvider>
  )
}
export default Map
