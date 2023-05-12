import { SearchAddress } from "./features/searchAddress/SearchAddress"
import { AppProvider } from "./provider/AppProvider"

function App() {
  return (
    <AppProvider>
      <SearchAddress />
    </AppProvider>
  )
}

export default App
