import ImageUpload from "@/features/image-upload/image-upload";

type ProcessImageUploadProps = {
  handleSelectImage: (file: File) => void;
};

export default function ProcessImageUpload({
  handleSelectImage,
}: ProcessImageUploadProps) {
  return <ImageUpload handleSelectImage={handleSelectImage} />;
}
