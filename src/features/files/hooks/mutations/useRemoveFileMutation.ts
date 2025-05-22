import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFile } from "../../common/apis";
import useLoading from "../../../core/hooks/useLoading";
import useToast from "../../../core/hooks/useToast";

function useRemoveFileMutation() {
  const { showToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: removeFile,
    onMutate: () => {
      showLoading();
    },
    onSettled: () => {
      hideLoading();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
    onError: () => {
      showToast("잠시 후 다시 시도해주세요.");
    },
  });

  return mutate;
}

export default useRemoveFileMutation;
