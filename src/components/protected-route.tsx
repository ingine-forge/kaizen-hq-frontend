import { Outlet, Navigate } from "react-router";
import { useAuthStore } from "@/stores/auth-store";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthStore();

  // If not logged in, redirect to login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
