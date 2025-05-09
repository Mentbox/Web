import { useMutation } from "@tanstack/react-query";
import { createFile } from "../../common/apis";
import useLoading from "../../../core/hooks/useLoading";
import useToast from "../../../core/hooks/useToast";

function useCreateFileMutation() {
  const { showToast } = useToast();
  const { showLoading, hideLoading } = useLoading();

  const { mutate } = useMutation({
    mutationFn: createFile,
    onMutate: () => {
      showLoading();
    },
    onSettled: () => {
      hideLoading();
    },
    onError: () => {
      showToast("잠시 후 다시 시도해주세요.");
    },
  });

  return mutate;
}

export default useCreateFileMutation;
