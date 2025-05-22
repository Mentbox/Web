import { useMutation, useQueryClient } from "@tanstack/react-query";
import useLoading from "../../../core/hooks/useLoading";
import useToast from "../../../core/hooks/useToast";
import { updateFile } from "../../common/apis";

function useUpdateFileMutation() {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { showLoading, hideLoading } = useLoading();

  const { mutate } = useMutation({
    mutationFn: updateFile,
    onMutate: () => {
      showLoading();
    },
    onSettled: () => {
      hideLoading();
    },
    onSuccess: (file) => {
      queryClient.setQueryData(["file", file.id], file);
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
    onError: () => {
      showToast("잠시 후 다시 시도해주세요.");
    },
  });

  return mutate;
}

export default useUpdateFileMutation;
