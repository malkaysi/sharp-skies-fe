import ImageEditor from "@/features/image-editor/image-editor";

type EditorPageProps = {
  handleClearImage: () => void;
  imagePreviewUrl: string | null;
  selectedImage: File;
};

export default function EditorPage({
  handleClearImage,
  imagePreviewUrl,
  selectedImage,
}: EditorPageProps) {
  return (
    <>
      <ImageEditor
        handleClearImage={handleClearImage}
        imagePreviewUrl={imagePreviewUrl}
        selectedImage={selectedImage}
      />
    </>
  );
}
