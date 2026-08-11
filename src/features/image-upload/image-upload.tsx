import DropZone from "./features/drop-zone";

type ImageUploadProps = {
  handleSelectImage: (file: File) => void;
};

export default function ImageUpload({ handleSelectImage }: ImageUploadProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-9 p-10">
      <DropZone handleSelectImage={handleSelectImage} />
    </div>
  );
}
