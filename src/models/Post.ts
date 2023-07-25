type postResponse = {
  name: string
  type: string
  model: string
  plateNumber: string
  km: number
  carSeats: number
  fuelType: string
  gearBoxType: string
  description: string
  style: string
  status: string
  availableTimes: string
}

export type PostInput = {
  name: string
  type: string
  model: string
  plateNumber: string
  km: number
  carSeats: number
  fuelType: string
  gearBoxType: string
  description: string
  style: string
  status: string
  availableTimes: string
}

export const normalizePost = (input: postResponse) => ({
  name: input?.name || '',
  type: input?.type || '',
  model: input?.model || '',
  plateNumber: input?.plateNumber || '',
  km: input?.km || '',
  carSeats: input?.carSeats || '',
  fuelType: input?.fuelType || '',
  gearBoxType: input?.gearBoxType || '',
  description: input?.description || '',
  style: input?.style || '',
  status: input?.status || '',
  availableTimes: input?.availableTimes || '',
})

export type Post = ReturnType<typeof normalizePost>