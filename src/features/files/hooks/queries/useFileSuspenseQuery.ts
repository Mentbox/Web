import { useSuspenseQuery } from "@tanstack/react-query";
import { getFile } from "../../common/apis";

function useFileSuspenseQuery(fileId: number) {
  const { data: file, refetch } = useSuspenseQuery({
    queryKey: ["file", fileId],
    queryFn: () => getFile(fileId),
  });

  return { file, refetch };
}

export default useFileSuspenseQuery;
