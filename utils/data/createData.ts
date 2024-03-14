import { User } from "./models";

const API_BASE = "http://localhost:5000/";

export const createUser = async (user: User) => {
  const { fullName, email } = user;
  const result = await fetch(`${API_BASE}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, email }),
  });
  return result.json();
};
