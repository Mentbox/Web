import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../components/Header";
import getTheme from "../common/styles/theme";

const ProfileScreen: ActivityComponentType = () => {
  const theme = getTheme();

  return (
    <AppScreen backgroundColor={theme.gray[50]}>
      <Header.Arrow title="프로필" />
    </AppScreen>
  );
};

export default ProfileScreen;
