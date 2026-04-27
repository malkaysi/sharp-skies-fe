import { useState } from "react";
import DropZone from "../image-editor/features/drop-zone";
import WorkflowToggle, { type Workflow } from "./features/workflow-toggle";

type ImageUploadProps = {
  handleSelectImage: (file: File) => void;
};

export default function ImageUpload({ handleSelectImage }: ImageUploadProps) {
  const [workflow, setWorkflow] = useState<Workflow>("Process");

  const handleWorkflowChange = (newWorkflow: Workflow) => {
    setWorkflow(newWorkflow);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-9 p-10">
      <WorkflowToggle
        value={workflow}
        handleWorkflowChange={handleWorkflowChange}
      />
      <DropZone handleSelectImage={handleSelectImage} />
    </div>
  );
}
