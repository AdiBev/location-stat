import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../api"
import { ChakraProvider } from "@chakra-ui/react"
import { LocationDetailProvider } from "./LocationDetailProvider"

export const AppProvider: React.FunctionComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <LocationDetailProvider>{children}</LocationDetailProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
