import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed bottom-6 right-6">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
