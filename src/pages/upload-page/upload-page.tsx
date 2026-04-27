import DropZone from "@/features/image-editor/features/drop-zone";

type UploadPageProps = {
  handleSelectImage: (file: File) => void;
};

export default function UploadPage({ handleSelectImage }: UploadPageProps) {
  return <DropZone handleSelectImage={handleSelectImage} />;
}
