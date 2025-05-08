import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../components/Header";
import getTheme from "../common/styles/theme";
import ProfileImageUploader from "../features/user/modules/ProfileImageUploader";
import ProfileNameForm from "../features/user/modules/ProfileNameForm";
import ProfileInterestsSelector from "../features/user/modules/ProfileInterestsSelector";
import { useState } from "react";
import { IInterest } from "../features/user/common/user";

const ProfileScreen: ActivityComponentType = () => {
  const theme = getTheme();

  const [form, setForm] = useState<{
    image: File | null;
    name: string;
    interests: IInterest[];
  }>({
    image: null,
    name: "",
    interests: [],
  });

  const updateForm = <T extends keyof typeof form>(
    key: T,
    value: (typeof form)[T]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <Header.Arrow title="프로필" />

      <div className="flex flex-col gap-[48px] p-[16px]">
        <main className="flex flex-col gap-[24px]">
          <ProfileImageUploader
            image={form.image}
            setImage={(image) => updateForm("image", image)}
          />

          <ProfileNameForm
            name={form.name}
            setName={(name) => updateForm("name", name)}
          />

          <ProfileInterestsSelector
            interests={form.interests}
            setInterests={(interests) => updateForm("interests", interests)}
          />
        </main>

        <button className="bg-blue-75">저장</button>
      </div>
    </AppScreen>
  );
};

export default ProfileScreen;
