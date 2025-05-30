import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import AsyncBoundary from "@/src/features/core/modules/AsyncBoundary";
import RecordingPracticeShuffleToggle from "@/src/features/recordings/modules/RecordingShuffleToggle";
import RecordingPracticePlayer from "@/src/features/recordings/modules/RecordingPracticePlayer";
import RecordingPracticeMaterialViewer from "@/src/features/recordings/modules/RecordingPracticeMaterialViewer";
import RecordingPracticeProgressBtn from "@/src/features/recordings/modules/RecordingPracticeProgressBtn";
import RecordingPracticeHeader from "@/src/features/recordings/modules/RecordingPracticeHeader";

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
          <main className="flex-1 flex flex-col gap-[24px] p-[16px]">
            <RecordingPracticeShuffleToggle />

            <RecordingPracticePlayer />

            <RecordingPracticeMaterialViewer fileId={fileId} />
          </main>

          <div className="p-[16px] pb-[40px]">
            <RecordingPracticeProgressBtn />
          </div>
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingPracticeScreen;
