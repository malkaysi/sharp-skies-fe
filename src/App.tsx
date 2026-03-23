import "./App.css";
import Header from "./components/ui/layout/header/header";
import Shell from "./components/ui/layout/shell";
import EditorPage from "./pages/editor-page/editor-page";

function App() {
  return (
    <>
      <Header />
      <Shell>
        <EditorPage />
      </Shell>
    </>
  );
}

export default App;
