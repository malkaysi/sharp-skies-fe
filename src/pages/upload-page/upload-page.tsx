import ImageUpload from "@/features/image-upload/image-upload";

type UploadPageProps = {
  handleSelectImage: (file: File) => void;
};

export default function UploadPage({ handleSelectImage }: UploadPageProps) {
  return <ImageUpload handleSelectImage={handleSelectImage} />;
}
