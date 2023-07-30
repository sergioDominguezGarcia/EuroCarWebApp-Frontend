import * as Yup from "yup";

export const initialValues = {
  id: "",
  input: {
    name: " ",
    type: " ",
    model: " ",
    plateNumber: " ",
    km: 0,
    carSeats: 0,
    fuelType: " ",
    gearBoxType: " ",
    description: " ",
    style: " ",
    status: " ",
    availableTimes: " ",
  },
};

export const validationNewpostSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "too short characters")
    .max(20, "too long characters")
    .required("Please enter a valid name"),
  type: Yup.string().required("Please enter a valid type"),
  model: Yup.string()
    .min(4, "too short characters")
    .max(20, "too long characters")
    .required("Please enter a valid model"),
  plateNumber: Yup.string()
    .min(4, "too short characters")
    .max(20, "too long characters")
    .required("Please enter a valid plateNumber"),
  // km: Yup.string().required("Please enter a valid km"),
  // carSeats: Yup.string().required("Please enter a valid carSeats"),
  fuelType: Yup.string().required("Please enter a valid fuelType"),
  gearBoxType: Yup.string().required("Please enter a valid gearBoxType"),
  description: Yup.string().required("Please enter a valid description"),
  status: Yup.string().required("Please enter a valid style"),
  style: Yup.string().required("Please enter a valid status"),
  availableTimes: Yup.string().required("Please enter a valid availableTimes"),
});
