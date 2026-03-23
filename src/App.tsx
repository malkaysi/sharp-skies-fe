import "./App.css";
import Header from "./components/ui/header/header";
import EditorPage from "./pages/editor-page/editor-page";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/60 md:min-h-min">
          <EditorPage />
        </div>
      </div>
    </>
  );
}

export default App;
