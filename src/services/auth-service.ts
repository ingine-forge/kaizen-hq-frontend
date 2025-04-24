import axios from "axios";
import { LoginResponse } from "@/models/auth";
import { User } from "@/models/user";

const API_URL = "http://localhost:8080";

export const AuthService = {
  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { username, password },
        { withCredentials: true }
      );
      return response.data; // Returns { status:'success' }
    } catch (error) {
      console.log(error);
      throw new Error("Login failed"); // Basic error handling
    }
  },

  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await axios.get(`${API_URL}/user/me`, {
        withCredentials: true,
      });
      console.log(response);
      return response.data.user;
    } catch {
      throw new Error("user not found");
    }
  },

  // Logout
  logout: async (): Promise<void> => {
    await axios.post(
      "/api/logout",
      {},
      {
        withCredentials: true,
      }
    );
  },
};
