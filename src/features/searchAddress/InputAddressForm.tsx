import * as React from "react"
import { Button, FormControl, Input } from "@chakra-ui/react"
import { useLocationDetailContext } from "../../context/location-detail-context"

export const InputAddressForm: React.FunctionComponent = () => {
  const { address, setAddress } = useLocationDetailContext()

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  return (
    <FormControl isRequired>
      <Input type="text" value={address} onChange={onInputChange} />
      <Button>Check crime stats</Button>
    </FormControl>
  )
}
