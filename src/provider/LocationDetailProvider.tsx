import { LocationDetailContext } from "../context/location-detail-context"
import { useLocationDetailLogic } from "../hooks/useLocationDetailLogic"

export const LocationDetailProvider: React.FunctionComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  const contextValue = useLocationDetailLogic()
  return (
    <LocationDetailContext.Provider value={contextValue}>
      {children}
    </LocationDetailContext.Provider>
  )
}
