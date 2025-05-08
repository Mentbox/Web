import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../components/Header";
import getTheme from "../common/styles/theme";
import ProfileImageUploader from "../features/user/modules/ProfileImageUploader";
import ProfileNameForm from "../features/user/modules/ProfileNameForm";
import ProfileInterestsSelector from "../features/user/modules/ProfileInterestsSelector";

const ProfileScreen: ActivityComponentType = () => {
  const theme = getTheme();

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <Header.Arrow title="프로필" />

      <main className="flex flex-col gap-[24px] p-[16px]">
        <ProfileImageUploader />

        <ProfileNameForm />

        <ProfileInterestsSelector />
      </main>
    </AppScreen>
  );
};

export default ProfileScreen;
