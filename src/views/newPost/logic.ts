import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/api/post";
import { PostInput } from "../../models/Post";


const useLogic = () => {
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values:{id: string , input: PostInput}) => {
      try {
        await createPost(values.id, values.input);
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
