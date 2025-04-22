import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Login from "@/pages/login-page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Login />
      <div className="fixed bottom-6 right-6">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
