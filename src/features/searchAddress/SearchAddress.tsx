import { Center } from "@chakra-ui/react"
import { InputAddressForm } from "./InputAddressForm"
import { useLocationDetailContext } from "~/context/location-detail-context"

export const SearchAddress: React.FunctionComponent = () => {
  const { address, setAddress, handleAddressSubmit } =
    useLocationDetailContext()
  return (
    <Center>
      <InputAddressForm
        value={address}
        setValue={setAddress}
        submitButtonTitle="Show results"
        onSubmit={handleAddressSubmit}
      />
    </Center>
  )
}
