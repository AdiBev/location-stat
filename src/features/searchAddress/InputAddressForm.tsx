import * as React from "react"
import { Button, FormControl, Input } from "@chakra-ui/react"

export type InputAddressFormProps = {
  value: string
  setValue: (value: string) => void
  submitButtonTitle: string
  onSubmit: React.FormEventHandler
}

export const InputAddressForm: React.FunctionComponent<
  InputAddressFormProps
> = ({ setValue, submitButtonTitle, value, onSubmit }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(`${e.target.value.toUpperCase()}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <FormControl isRequired>
        <Input type="text" value={value} onChange={onInputChange} />
        <Button type="submit">{submitButtonTitle}</Button>
      </FormControl>
    </form>
  )
}
