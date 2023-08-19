import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

const colors = {
  primary: "#007bff",
  secondary: "#0056b3",
  gray: "#ccc",
};

const media = {
  tablet: `@media (max-width: 768px)`,
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: ${colors.secondary};
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 80%;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  font-size: 14px;
`;

export const Textarea = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: auto; 
  vertical-align: top;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  background-color: ${colors.primary};
  ${media.tablet} {
    padding: 0 10px;
  }
`;