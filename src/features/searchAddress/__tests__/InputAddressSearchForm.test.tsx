import { describe, it, vi } from "vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { wrappedRender } from "../../test/test-utils"
import { InputAddressForm } from "./InputAddressForm"
import { LocationDetailContextResult } from "../../context/location-detail-context"

const mockSetAddress = vi.fn()

const locationDetailContext: LocationDetailContextResult = {
  address: "",
  setAddress: mockSetAddress,
  step: "ENTER_ADDRESS",
  setStep: vi.fn(),
}

describe("InputAddressForm", () => {
  it("should render input field and button", () => {
    wrappedRender(<InputAddressForm />, {
      locationDetailContextValue: locationDetailContext,
    })
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("Check crime stats")
  })

  it("should trigger onChange event when input value is updated", async () => {
    wrappedRender(<InputAddressForm />, {
      locationDetailContextValue: locationDetailContext,
    })
    const inputElement = screen.getByRole("textbox")
    const inputValue = "Hello"
    userEvent.clear(inputElement)
    await userEvent.type(inputElement, inputValue)
    expect(locationDetailContext.setAddress).toBeCalledTimes(5)
  })
})
