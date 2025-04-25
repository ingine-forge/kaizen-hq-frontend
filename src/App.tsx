import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Login from "@/pages/login-page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ProtectedRoute } from "@/components/protected-route";
import { useAuthStore } from "@/stores/auth-store";
import { useEffect } from "react";
import { Loading } from "./pages/loading";
import { Home } from "lucide-react";

function App() {
  const { isLoggedIn, loading } = useAuthStore();

  useEffect(() => {
    useAuthStore.getState().checkAuth();
  }, []);

  if (loading) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="kaizen-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />}></Route>
          </Route>

          {/* Public Routes */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-6 right-6">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
