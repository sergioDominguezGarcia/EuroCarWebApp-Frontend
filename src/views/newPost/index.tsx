import { FC, memo } from "react";

import { Formik } from "formik";
import { initialValues, validationSignupSchema } from "./constants";
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
        validationSchema={validationSignupSchema}
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
                <Input type="string" name="Type" onChange={handleChange} />
              </InputController>

              <InputController>
                <Label>PlateNumber</Label>
                <Input
                  type="string"
                  name="plateNumber"
                  onChange={handleChange}
                />
              </InputController>

              <Button type="submit" >Create post</Button>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default memo(NewPost);
