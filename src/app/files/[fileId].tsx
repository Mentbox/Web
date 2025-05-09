import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";

const FileDetailsScreen: ActivityComponentType<{ fileId: number }> = () => {
  return (
    <AppScreen>
      <Header.Arrow />
    </AppScreen>
  );
};

export default FileDetailsScreen;
