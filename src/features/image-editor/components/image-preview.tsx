type ImagePreviewProps = {
  imageSrc: string;
  fileName?: string;
};
export default function ImagePreview({ imageSrc }: ImagePreviewProps) {
  return (
    <div className="flex items-center justify-centerd">
      <div className="w-full max-w-full">
        <div className="flex items-center justify-center py-4">
          <img
            src={imageSrc}
            className="max-h-[70vh] w-full max-w-[96%] rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
