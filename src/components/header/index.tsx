import { FC, memo } from "react";
import { HeaderContainer, Logo, SearchBar, ButtonsContainer } from "./styles";
import { Props } from "./types";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const Header: FC<Props> = () => {
  const navigate = useNavigate();
  const goToNewPost = () => {
    navigate("/newpost");
  };
  const goToProfile = () => {
    navigate("/profile");
  };
  return (
    <HeaderContainer>
      <Logo>OpenRoad</Logo>

      <ButtonsContainer>
        <SearchBar type="text" placeholder="Search..." />{" "}
        <Button onClick={goToProfile}>Profile</Button>
        <Button onClick={goToNewPost}>New Post</Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default memo(Header);
