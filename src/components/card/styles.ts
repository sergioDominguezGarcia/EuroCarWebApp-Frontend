import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { Props } from "./types";
export const CardContent = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  height: 8rem;
  width: 7rem;
`;

export const CardHeader = styled.div`
  height: 8px;
`;

export const CardFooter = styled.div`
  border-top: 1px solid gray;
  margin-top: 16px;
`;

export const HeartIcon = styled(FaHeart)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? "red" : "gray")};
`;