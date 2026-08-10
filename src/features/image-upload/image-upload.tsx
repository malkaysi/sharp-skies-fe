import { useState } from "react";
import DropZone from "./features/drop-zone";
import WorkflowToggle from "../workflow-toggle/workflow-toggle";
import type { Workflow } from "../workflow-toggle/types";

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
