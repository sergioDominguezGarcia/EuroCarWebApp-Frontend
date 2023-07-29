import { FC, memo } from "react";
import useLogic from "./logic";
import { Formik } from "formik";
import { initialValues,validationSignupSchema } from "./constants";
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
import Button from "../../../components/button";

const Login: FC = () =>{
  const { handleOnSubmit } = useLogic();

return (
  <Container>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSignupSchema}
      onSubmit={handleOnSubmit}
    >
      {({ errors, handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <InputController>
              <Label>Email</Label>
              <Input type="email" name="email" onChange={handleChange} />
              {errors?.email && <InputError>{errors.email}</InputError>}
            </InputController>

            <InputController>
              <Label>Password</Label>
              <Input type="password" name="password" onChange={handleChange} />
              {errors?.password && <InputError>{errors.password}</InputError>}
            </InputController>
            <Button type="submit">Login</Button>


                <Link to="/signup">Create account</Link>
          </FormContent>
        </Form>
      )}
    </Formik>
  </Container>
);

}

export default memo(Login);