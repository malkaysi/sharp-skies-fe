import "./App.css";
import Header from "./components/ui/layout/header/header";
import Shell from "./components/ui/layout/shell";
import { TooltipProvider } from "./components/ui/tooltip";
import EditorPage from "./pages/editor-page/editor-page";

function App() {
  return (
    <>
      <TooltipProvider>
        <Header />
        <Shell>
          <EditorPage />
        </Shell>
      </TooltipProvider>
    </>
  );
}

export default App;
