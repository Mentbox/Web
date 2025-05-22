import useFilesSuspenseQuery from "../hooks/queries/useFilesSuspenseQuery";
import FileCard from "./FileCard";

function FileList() {
  const { files } = useFilesSuspenseQuery();

  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      {files.map((file) => (
        <FileCard file={file} key={file.id} />
      ))}
    </div>
  );
}

export default FileList;
