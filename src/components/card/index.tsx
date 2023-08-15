import { FC, memo, useState } from "react";
import { Props } from "./types";
import {
  CardContent,
  CardHeader,
  CardFooter,
  HeartIcon,
  ButtonsContainer,
} from "./styles";
import Button from "../button";
import { togglePostFavByUser, deletePostById } from "../../services/api/post";
import { FiTrash2 } from "react-icons/fi";

const Card: FC<Props> = ({ post }) => {
  const [isFav, setIsFav] = useState(post.isFav);

  const handleFav = async () => {
    try {
      await togglePostFavByUser(post._id);
      setIsFav((prevIsFav) => !prevIsFav);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePostById(post._id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CardContent>
      <ButtonsContainer>      <Button onClick={handleFav}>
        {" "}
        <HeartIcon isFav={isFav} />{" "}
      </Button>
      <FiTrash2 onClick={handleDelete} /></ButtonsContainer>

      <CardHeader>{post.name}</CardHeader>
      <CardFooter>
        {post.type}
        {post.model}
        {post.plateNumber}

        <Button>Details</Button>
      </CardFooter>
    </CardContent>
  );
};

export default memo(Card);
