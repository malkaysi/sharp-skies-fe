import { useState } from "react";
import "./App.css";
import Shell from "./components/ui/layout/shell";
import { TooltipProvider } from "./components/ui/tooltip";
import type { Workflow } from "./features/workflow-toggle/types";
import ProcessPage from "./pages/process-page";
import WorkflowPage from "./pages/workflow-page";
import StackPage from "./pages/stack-page";

function App() {
  const [workflow, setWorkflow] = useState<Workflow>("Process");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  function handleSelectFile(file: File) {
    setSelectedFile(file);
    if (workflow === "Process") {
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleClearFile() {
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImagePreviewUrl(null);
    setSelectedFile(null);
  }

  return (
    <>
      <TooltipProvider>
        <Shell>
          {!selectedFile ? (
            <WorkflowPage
              workflow={workflow}
              onWorkflowChange={setWorkflow}
              onSelectFile={handleSelectFile}
            />
          ) : workflow === "Stack" ? (
            <StackPage selectedVideo={selectedFile} onClear={handleClearFile} />
          ) : (
            <ProcessPage
              selectedImage={selectedFile}
              handleClearImage={handleClearFile}
              imagePreviewUrl={imagePreviewUrl ?? ""}
            />
          )}
        </Shell>
      </TooltipProvider>
    </>
  );
}

export default App;
