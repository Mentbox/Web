import { useMutation } from "@tanstack/react-query";
import useToast from "../../core/hooks/useToast";
import useLoading from "../../core/hooks/useLoading";
import { updateProfile } from "../../user/common/apis";

function useSetProfileMutation() {
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
      showToast("프로필을 설정했어요!");
    },
    onError: (err) => {
      console.error(err);
      showToast("잠시 후 다시 시도해주세요.");
    },
  });

  return mutate;
}

export default useSetProfileMutation;