import { useSuspenseQuery } from "@tanstack/react-query";
import { getFiles } from "../../common/apis";

function useFilesSuspenseQuery() {
  const { data: files, refetch } = useSuspenseQuery({
    queryKey: ["files"],
    queryFn: getFiles,
  });

  return { files, refetch };
}

export default useFilesSuspenseQuery;
