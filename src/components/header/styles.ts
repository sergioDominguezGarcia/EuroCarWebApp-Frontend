import styled from "styled-components";


export const DashboardContent = styled.div`
display: flex;

`



export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height:3rem ;
  width: 100%;
  position: fixed;
`;

export const PostContainer = styled.div`

`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 16px;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding-right: 16px;
`;
