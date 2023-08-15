import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { Props } from "./types";
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 250px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const CardHeader = styled.div`
  color: #333;
  font-size: 18px;
  margin: 10px 0;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;



export const HeartIcon = styled(FaHeart)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? "red" : "#ccc")};
  font-size: 20px;
  margin-right: 5px;
`;