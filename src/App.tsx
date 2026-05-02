import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/ui/layout/header/header";
import Shell from "./components/ui/layout/shell";
import { TooltipProvider } from "./components/ui/tooltip";
import UploadPage from "./pages/upload-page/upload-page";
import EditorPage from "./pages/editor-page/editor-page";

function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const imagePreviewUrl = useMemo(() => {
    return selectedImage ? URL.createObjectURL(selectedImage) : null;
  }, [selectedImage]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  function handleSelectImage(file: File) {
    setSelectedImage(file);
  }

  function handleClearImage() {
    setSelectedImage(null);
  }

  return (
    <>
      <TooltipProvider>
        <Shell>
          {!selectedImage ? (
            <>
              <Header />
              <UploadPage handleSelectImage={handleSelectImage} />
            </>
          ) : (
            <EditorPage
              handleClearImage={handleClearImage}
              imagePreviewUrl={imagePreviewUrl}
              selectedImage={selectedImage}
            />
          )}
        </Shell>
      </TooltipProvider>
    </>
  );
}

export default App;
