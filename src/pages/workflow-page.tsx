import Header from "@/components/ui/layout/header/header";
import type { Workflow } from "@/features/workflow-toggle/types";
import WorkflowToggle from "@/features/workflow-toggle/workflow-toggle";
import ImageUpload from "@/features/image-upload/image-upload";
import VideoUpload from "@/features/video-upload/video-upload";

type WorkflowPageProps = {
  workflow: Workflow;
  onWorkflowChange: (workflow: Workflow) => void;
  onSelectFile: (file: File) => void;
};
export default function WorkflowPage({
  workflow,
  onWorkflowChange,
  onSelectFile,
}: WorkflowPageProps) {
  return (
    <>
      <Header />

      <WorkflowToggle
        value={workflow}
        handleWorkflowChange={onWorkflowChange}
      />

      {workflow === "Stack" ? (
        <VideoUpload handleSelectVideo={onSelectFile} />
      ) : (
        <ImageUpload handleSelectImage={onSelectFile} />
      )}
    </>
  );
}
