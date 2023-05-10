import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  LocationDetailContext,
  LocationDetailContextResult,
} from "../context/location-detail-context"
import { render } from "@testing-library/react"

type WrappedRenderParams = {
  locationDetailContextValue: LocationDetailContextResult
  queryClient?: QueryClient
}

const defaultQueryClient = new QueryClient()

export const wrappedRender = (
  ui: React.ReactElement,
  options: WrappedRenderParams
) => {
  const { queryClient, locationDetailContextValue } = options

  return render(
    <ChakraProvider>
      <QueryClientProvider client={queryClient ?? defaultQueryClient}>
        <LocationDetailContext.Provider value={locationDetailContextValue}>
          {ui}
        </LocationDetailContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
