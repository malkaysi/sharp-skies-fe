import ImageEditor from "@/features/image-editor/image-editor";

type ProcessPageProps = {
  selectedImage: File;
  handleClearImage: () => void;
  imagePreviewUrl: string;
};

export default function ProcessPage({
  selectedImage,
  handleClearImage,
  imagePreviewUrl,
}: ProcessPageProps) {
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
