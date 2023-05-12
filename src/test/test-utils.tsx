import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render } from "@testing-library/react"

type WrappedRenderOptionalParams = {
  /**
   * Pass a React Component as the wrapper option to have it rendered around the inner element.
   * This is most useful for creating reusable custom render functions for common data providers.
   */
  wrapper: React.FunctionComponent<{ children: React.ReactNode }>
  /**
   * Pass a custom queryClient when required
   */
  queryClient: QueryClient
}

const defaultQueryClient = new QueryClient()

export const wrappedRender = (
  ui: React.ReactElement,
  options?: WrappedRenderOptionalParams
) => {
  return render(
    <ChakraProvider>
      <QueryClientProvider client={options?.queryClient ?? defaultQueryClient}>
        {ui}
      </QueryClientProvider>
    </ChakraProvider>,
    { wrapper: options?.wrapper }
  )
}
