type postResponse = {
  _id: string;
  name: string;
  type: "car" | "motorcycle" | "van";
  model: string;
  plateNumber: string;
  km: number;
  carSeats: number;
  fuelType: "gas" | "electric";
  gearBoxType: "manual" | "automatic";
  description: string;
  style: "4x4" | "coupé" | "sedan" | "compact";
  status: "oculto" | "activo";
  availableTimes:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
};

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
  _id: input?._id || "",
  name: input?.name || "",
  type: input?.type || "",
  model: input?.model || "",
  plateNumber: input?.plateNumber || "",
  km: input?.km || "",
  carSeats: input?.carSeats || "",
  fuelType: input?.fuelType || "",
  gearBoxType: input?.gearBoxType || "",
  description: input?.description || "",
  style: input?.style || "",
  status: input?.status || "",
  availableTimes: input?.availableTimes || "",
  isFav: false,
});

export type Post = ReturnType<typeof normalizePost>