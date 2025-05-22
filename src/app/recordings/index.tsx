import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import AsyncBoundary from "../../features/core/modules/AsyncBoundary";
import RecordingFileList from "../../features/recordings/modules/RecordingFileList";

const RecordingsScreen: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="연습" />

        <AsyncBoundary>
          <RecordingFileList />
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingsScreen;
