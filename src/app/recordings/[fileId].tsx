import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Header from "../../components/Header";
import AsyncBoundary from "../../features/core/modules/AsyncBoundary";

type Params = {
  fileId: number;
};

const RecordingDetailsScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId } = params;

  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="연습" />

        <AsyncBoundary></AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingDetailsScreen;
