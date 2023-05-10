import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query"
import { z } from "zod"
import { GEOCODING_API_URL } from ".."

const AddressDetailResultSchema = z.object({
  boundingbox: z.array(z.number()),
  lat: z.number(),
  lon: z.number(),
  type: z.string(),
  display_name: z.string(),
})

type AddressDetailResult = z.infer<typeof AddressDetailResultSchema>

async function getAddressDetail(address: string) {
  const data = await fetch(`${GEOCODING_API_URL}?q=${address}`).then((res) =>
    res.json()
  )

  const parsedData = AddressDetailResultSchema.parse(data)

  return parsedData
}

const GET_ADDRESS_DETAIL_KEY = "get-address-detail-key"

export function useGetAddressDetail(
  address: string,
  options?: UseQueryOptions<AddressDetailResult>
): UseQueryResult<AddressDetailResult> {
  return useQuery({
    queryFn: () => getAddressDetail(address),
    queryKey: [GET_ADDRESS_DETAIL_KEY, address],
    ...options,
  })
}
