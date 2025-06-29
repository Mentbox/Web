import { ActivityComponentType } from "@stackflow/react";
import { Button } from "../../components/Button";
import getTheme from "../../common/styles/theme";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { IInterest } from "../../features/user/common/unit";
import { useState } from "react";
import ProfileInterestsSelector from "../../features/user/modules/ProfileInterestsSelector";
import { useFlow } from "@stackflow/react/future";
import SignInNameForm from "../../features/login/modules/SignInNameForm";
import useSetProfileMutation from "../../features/login/hooks/useSetProfileMutation";

const SignInScreen: ActivityComponentType = () => {
  const theme = getTheme();
  const [step, setStep] = useState<"name" | "hobby">("name");
  const { replace } = useFlow();

  const updateProfile = useSetProfileMutation();

  const [form, setForm] = useState<{
    image: File | null;
    name: string;
    interests: IInterest[];
  }>({
    image: null,
    name: "",
    interests: [],
  });

  const validateName = (input: string) => {
    const regex = /^[ᄀ-ᄒᆨ-ᇂㄱ-ㅣ가-힣ᅡ-ᅵa-zA-Z]{1,15}$/;
    return regex.test(input);
  };

  const isNameValid = form.name && validateName(form.name);
  const isInterestValid = form.interests.length >= 1;

  const disabled = step === "name" ? !isNameValid : !isInterestValid;

  const updateForm = <T extends keyof typeof form>(
    key: T,
    value: (typeof form)[T]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirm = () => {
    updateProfile(form);
  };

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      {/* 이름 입력 페이지 */}
      <div className="flex flex-col h-full p-[16px] justify-center">
        {step === "name" && (
          <div className="flex flex-col gap-[40px]">
            <h1 className="text-[32px] font-bold leading-[150%]">
              <div>이름을</div>
              <div>입력해주세요.</div>
            </h1>
            <SignInNameForm
              name={form.name}
              setName={(name) => updateForm("name", name)}
              validateName={validateName}
            />
            <Button disabled={disabled} onClick={() => setStep("hobby")}>
              다음
            </Button>
          </div>
        )}

        {/* 관심사 선택 페이지 */}
        {step === "hobby" && (
          <div className="flex flex-col gap-[40px]">
            <h1 className="text-[32px] font-bold leading-[150%]">
              <div>관심있는 주제를</div>
              <div className="flex items-baseline gap-2">
                <span>선택해주세요.</span>
                <span className="font-[400] text-sm text-gray-800">
                  (최대 3개)
                </span>
              </div>
            </h1>
            <ProfileInterestsSelector
              interests={form.interests}
              setInterests={(interests) => updateForm("interests", interests)}
            />
            <Button
              disabled={disabled}
              onClick={() => {
                handleConfirm();
                replace("HomeScreen", {});
              }}
            >
              다음
            </Button>
          </div>
        )}
      </div>
    </AppScreen>
  );
};

export default SignInScreen;
