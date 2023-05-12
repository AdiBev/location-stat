import { describe, it, vi } from "vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { wrappedRender } from "~/test/test-utils"
import { InputAddressForm, InputAddressFormProps } from "../InputAddressForm"

const MOCK_PROPS: InputAddressFormProps = {
  value: "",
  setValue: vi.fn(),
  submitButtonTitle: "Submit",
}

describe("InputAddressForm", () => {
  it("should render input field and button", () => {
    wrappedRender(<InputAddressForm {...MOCK_PROPS} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent(
      MOCK_PROPS.submitButtonTitle
    )
  })

  it("should trigger onChange event when input value is updated", async () => {
    wrappedRender(<InputAddressForm {...MOCK_PROPS} />)
    const inputElement = screen.getByRole("textbox")
    const inputValue = "Hello"
    await userEvent.type(inputElement, inputValue)
    expect(MOCK_PROPS.setValue).toBeCalledTimes(5)
  })
})
