import axios from "axios";

// login
export const authenticate = async (email: string, password: string) => {
  try {
    const resp = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", {
      email,
      password,
    });
    if (resp.status === 200) {
      const { user, accessToken } = resp.data;
      return { ...user, ...accessToken };
    }
    return null;
  } catch (err) {
    return null;
  }
};
