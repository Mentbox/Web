import useFilesSuspenseQuery from "../../files/hooks/queries/useFilesSuspenseQuery";
import RecordingFileCard from "./RecordingFileCard";

function RecordingFileList() {
  const { files } = useFilesSuspenseQuery();

  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      {files.map((file) => (
        <RecordingFileCard file={file} key={file.id} />
      ))}
    </div>
  );
}

export default RecordingFileList;
