import { LoginResponse } from "@/models/auth";
import { User } from "@/models/user";
import { AuthService } from "@/services/auth-service";
import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean; // Add loading state
  checkAuth: () => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    password: string,
    torn_id: number,
    api_key: string
  ) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  loading: true, // Initially loading

  // Check if the user is authenticated (using the cookie)
  checkAuth: async () => {
    set({ loading: true }); // Set loading to true while checking auth
    try {
      const user = await AuthService.getCurrentUser();
      set({ isLoggedIn: true, user });
    } catch (error) {
      console.log(error);
      set({ isLoggedIn: false, user: null });
    } finally {
      set({ loading: false }); // Set loading to false after the check
    }
  },

  // Login action
  login: async (username, password: string) => {
    try {
      const response: LoginResponse = await AuthService.login(
        username,
        password
      );

      // If API returns 'success', update Zustand state
      if (response.status === "success") {
        set({ isLoggedIn: true });
      }
    } catch (error) {
      console.error("Login error", error);
      set({ isLoggedIn: false });
    }
  },

  // Login action
  register: async (
    username: string,
    password: string,
    torn_id: number,
    api_key: string
  ) => {
    try {
      await AuthService.register(username, password, torn_id, api_key);
    } catch (error) {
      console.error("Login error", error);
    }
  },

  // Logout action
  logout: () => set({ isLoggedIn: false }),
}));
