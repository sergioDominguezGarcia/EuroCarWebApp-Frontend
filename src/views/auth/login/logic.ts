import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/api/auth";

const useLogic = () => {
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login (values.email, values.password);
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
