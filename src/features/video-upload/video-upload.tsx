import VideoDropZone from "./features/video-drop-zone";

type VideoUploadProps = {
  handleSelectVideo: (file: File) => void;
};

export default function VideoUpload({ handleSelectVideo }: VideoUploadProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-9 p-10">
      <VideoDropZone handleSelectVideo={handleSelectVideo} />
    </div>
  );
}
