import { getToken, setToken, } from "../storage/token";

const BASE_URL = "http://localhost:8080/auth";
const token = getToken();

export const login = async (email: string, password: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/login`, {
    body: JSON.stringify({ email, password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const token = await response.json();
  if (token) {
    setToken(token);
  }
};

export const signup = async (
  email: string,
  password: string
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    body: JSON.stringify({ email, password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const token = await response.json();

  if (token) {
    setToken(token);
  }
};
