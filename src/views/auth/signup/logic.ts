import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/api/auth";

const useLogic = () => {
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string ; rol: string}) => {
      try {
        await signup(values.email, values.password, values.rol);
        navigate("/dashboard");
      } catch (e) {
        console.log(e);
      }
    },
    [navigate]
  );

  return {
    handleOnSubmit,
  };
};

export default useLogic;
