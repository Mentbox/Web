import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../common/apis";
import useLoading from "../../../core/hooks/useLoading";
import useToast from "../../../core/hooks/useToast";

function useUpdateProfileMutation() {
  const { showToast } = useToast();
  const { showLoading, hideLoading } = useLoading();

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onMutate: () => {
      showLoading();
    },
    onSettled: () => {
      hideLoading();
    },
    onSuccess: () => {
      showToast("프로필을 수정했어요!");
    },
    onError: (err) => {
      console.error(err);
      showToast("잠시 후 다시 시도해주세요.");
    },
  });

  return mutate;
}

export default useUpdateProfileMutation;
