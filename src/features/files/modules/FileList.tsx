import FileCard from "./FileCard";

function FileList() {
  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      <FileCard />
      <FileCard />
      <FileCard />
      <FileCard />
    </div>
  );
}

export default FileList;
