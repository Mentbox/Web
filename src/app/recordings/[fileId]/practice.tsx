import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import AsyncBoundary from "@/src/features/core/modules/AsyncBoundary";
import RecordingPracticeHeader from "@/src/features/recordings/modules/RecordingPracticeHeader";
import RecordingPracticeContainer from "@/src/features/recordings/modules/RecordingPracticeContainer";

type Params = {
  fileId: number;
};

const RecordingPracticeScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId } = params;

  return (
    <AppScreen>
      <div className="screen">
        <RecordingPracticeHeader />

        <AsyncBoundary>
          <main className="flex-1 flex flex-col overflow-y-auto">
            <RecordingPracticeContainer fileId={fileId} />
          </main>
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingPracticeScreen;
