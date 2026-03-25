type ImagePreviewProps = {
  imageSrc: string;
  fileName?: string;
};
export default function ImagePreview({
  imageSrc,
  fileName,
}: ImagePreviewProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-full">
        <p className="text-sm font-medium">Preview</p>
        {fileName ? (
          <p className="text-sm text-muted-foreground">{fileName}</p>
        ) : null}

        <div className="flex items-center justify-center py-4">
          <img
            src={imageSrc}
            alt={fileName ?? "Image Preview"}
            className="max-h-[70vh] w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
