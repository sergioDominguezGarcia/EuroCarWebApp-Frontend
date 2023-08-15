import { FC, memo } from "react";

import { Formik } from "formik";
import { InitialValues, ValidationSchema } from "./constants";
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  Label,
} from "./styles";
import useLogic from "./logic";
import Button from "../../components/button";

const NewPost: FC = () => {
  const { handleCreate } = useLogic();

  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleCreate}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <InputController>
                <Label>Name</Label>
                <Input type="string" name="name" onChange={handleChange} />
              </InputController>
              <InputController>
                <Label>Type</Label>
                <Input as="select" name="type" onChange={handleChange}>
                  <option value="">Seleccione un tipo</option>
                  <option value="car">car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="van">Van</option>
                </Input>
              </InputController>
              <InputController>
                <Label>Model</Label>
                <Input type="string" name="model" onChange={handleChange} />
              </InputController>
              <InputController>
                <Label>PlateNumber</Label>
                <Input
                  type="string"
                  name="plateNumber"
                  onChange={handleChange}
                />
              </InputController>
              <InputController>
                <Label>Km</Label>
                <Input type="number" name="km" onChange={handleChange} />
              </InputController>
              <InputController>
                <Label>Car Seats</Label>
                <Input type="number" name="carSeats" onChange={handleChange} />
              </InputController>
              <InputController>
                <Label>Fuel type</Label>
                <Input as="select" name="fuelType" onChange={handleChange}>
                  <option value="">Seleccione un tipo</option>
                  <option value="gas">Gas</option>
                  <option value="electric">Electric</option>
                </Input>
              </InputController>
              <InputController>
                <Label>Gearbox</Label>
                <Input as="select" name="gearBoxType" onChange={handleChange}>
                  <option value="">Seleccione un tipo</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </Input>
              </InputController>
              <InputController>
                <Label>Description</Label>
                <Input
                  type="string"
                  name="description"
                  onChange={handleChange}
                />
              </InputController>
              <InputController>
                <Label>Style</Label>
                <Input as="select" name="style" onChange={handleChange}>
                  <option value="">Seleccione un tipo</option>
                  <option value="4x4">4x4</option>
                  <option value="coupé">coupé</option>
                  <option value="sedan">sedan</option>
                  <option value="compact">compact</option>
                </Input>
              </InputController>

              <InputController>
                <Label>Status</Label>
                <Input as="select" name="status" onChange={handleChange}>
                  <option value="">Seleccione un tipo</option>
                  <option value="oculto">oculto</option>
                  <option value="activo">activo</option>
                </Input>
              </InputController>

              <InputController>
                <Label>Available days</Label>
                <Input
                  as="select"
                  name="availableTimes"
                  onChange={handleChange}
                  multiple
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Input>
              </InputController>
              <Button type="button" onClick={() => handleCreate(values)}>
                Create post
              </Button>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(NewPost);
