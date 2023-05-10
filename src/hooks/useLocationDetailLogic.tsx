import { useState } from "react"
import {
  ApplicationStep,
  LocationDetailContextResult,
} from "../context/location-detail-context"

export function useLocationDetailLogic(): LocationDetailContextResult {
  const [address, setAddress] = useState("")
  const [step, setStep] = useState<ApplicationStep>("ENTER_ADDRESS")

  return {
    address,
    setAddress,
    step,
    setStep,
  }
}
