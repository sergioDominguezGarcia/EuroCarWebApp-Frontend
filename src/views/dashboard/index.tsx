import { FC, memo } from "react";
import useLogic from "./logic";
import {
  DashboardContent,
  PostContainer,
  Cards,
  ButtonsContainer,
  
} from "./styles";
import Card from "../../components/card";
import Header from "../../components/header";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const { isLoading, posts } = useLogic();

  if (isLoading) {
    return <div>CARGANDO....</div>;
  }

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToNewPost = () => {
    navigate("/newpost");
  };

  return (
    <DashboardContent>
      <Header>
        {" "}
        <ButtonsContainer>
          {" "}
          <Button>Profile</Button>
          <Button onClick={goToNewPost}>New Post</Button>
        </ButtonsContainer>{" "}
      </Header>

      <PostContainer>        
        <Cards>
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </Cards>
      </PostContainer>

    </DashboardContent>
  );
};

export default memo(Dashboard);
