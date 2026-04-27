import DropZone from "../image-editor/features/drop-zone";

type ImageUploadProps = {
  handleSelectImage: (file: File) => void;
};

export default function ImageUpload({ handleSelectImage }: ImageUploadProps) {
  return <DropZone handleSelectImage={handleSelectImage} />;
}
