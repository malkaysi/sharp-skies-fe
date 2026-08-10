import EditorPage from "./features/editor/editor-page";

type ProcessPageProps = {
  selectedImage: File;
  onClear: () => void;
  imagePreviewUrl: string;
};

export default function ProcessPage({
  selectedImage,
  onClear,
  imagePreviewUrl,
}: ProcessPageProps) {
  return (
    <>
      <EditorPage
        handleClearImage={onClear}
        imagePreviewUrl={imagePreviewUrl ?? ""}
        selectedImage={selectedImage}
      />
    </>
  );
}
