import { useState } from "react"
import {
  ApplicationStep,
  LocationDetailContextResult,
} from "../context/location-detail-context"
import { useGetAddressDetail } from "~/api/queries/useGetAddressDetail"

export function useLocationDetailLogic(): LocationDetailContextResult {
  const [address, setAddress] = useState("")
  const [step, setStep] = useState<ApplicationStep>("ENTER_ADDRESS")

  const { data, refetch } = useGetAddressDetail(address, { enabled: false })

  const handleAddressSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    setTimeout(() => {
      refetch()
    }, 1000)
  }

  return {
    address,
    setAddress,
    step,
    setStep,
    handleAddressSubmit,
  }
}
