import { createContext, useContext } from "react"

export type ApplicationStep = "ENTER_ADDRESS" | "DISPLAY_MAP"

export type LocationDetailContextResult = {
  address: string
  setAddress: (address: string) => void
  step: ApplicationStep
  setStep: (step: ApplicationStep) => void
}

export const LocationDetailContext =
  createContext<LocationDetailContextResult | null>(null)

export function useLocationDetailContext() {
  const context = useContext(LocationDetailContext)

  if (!context) {
    throw new Error(
      "useLocationDetailContext should be used within LocationDetailContext"
    )
  }

  return context
}
