import { MapContainer } from "react-leaflet"

type MapWrapperProps = {
  children: React.ReactNode
  center: [number, number]
  zoom?: number
}

export const MapWrapper: React.FunctionComponent<MapWrapperProps> = ({
  center,
  children,
  zoom,
}) => {
  return (
    <MapContainer center={center} zoom={zoom}>
      {children}
    </MapContainer>
  )
}
