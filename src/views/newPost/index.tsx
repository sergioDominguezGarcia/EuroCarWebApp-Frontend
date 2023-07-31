import { FC, memo } from "react";

import { Formik } from "formik";
import { initialValues, validationNewpostSchema } from "./constants";
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
  Link,
} from "./styles";
import useLogic from "./logic";
import Button from "../../components/button";

const NewPost: FC = () => {
  const { handleOnSubmit } = useLogic();


  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationNewpostSchema}
        onSubmit={handleOnSubmit}
        
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <InputController>
                <Label>Name</Label>
                <Input type="string" name="name" onChange={handleChange} />
              </InputController>

              <InputController>
                <Label>Type</Label>
                <Input type="string" name="type" onChange={handleChange} />
              </InputController>

              <InputController>
                <Label>PlateNumber</Label>
                <Input
                  type="string"
                  name="plateNumber"
                  onChange={handleChange}
                />
              </InputController>

              <Button type="button" >Create post</Button>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(NewPost);
