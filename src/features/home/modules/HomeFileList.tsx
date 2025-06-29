import useFilesSuspenseQuery from "../../files/hooks/queries/useFilesSuspenseQuery";
import HomeFileCard from "./HomeFileCard";

function HomeFileList() {
  const { files } = useFilesSuspenseQuery();

  return (
    <div className="grid grid-cols-2 gap-[8px] w-full">
      {files.slice(0, 4).map((file) => (
        <HomeFileCard file={file} key={file.id} />
      ))}
    </div>
  );
}

export default HomeFileList;
