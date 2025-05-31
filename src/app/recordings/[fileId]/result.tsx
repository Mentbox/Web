import Header from "@/src/components/Header";
import AsyncBoundary from "@/src/features/core/modules/AsyncBoundary";
import RecordingDetailsInfo from "@/src/features/recordings/modules/RecordingDetailsInfo";
import RecordingDetailsPlayer from "@/src/features/recordings/modules/RecordingDetailsPlayer";
import RecordingFeedbackForm from "@/src/features/recordings/modules/RecordingFeedbackForm";
import RecordingSaveBtn from "@/src/features/recordings/modules/RecordingSaveBtn";
import RecordingScoresSelector from "@/src/features/recordings/modules/RecordingScoresSelector";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

type Params = {
  fileId: number;
};

const RecordingResultScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId } = params;

  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="연습 종료" />

        <AsyncBoundary>
          <main className="flex-1 flex flex-col gap-[24px] p-[16px] overflow-y-auto">
            <RecordingDetailsInfo fileId={fileId} />

            <RecordingDetailsPlayer />

            <RecordingFeedbackForm />

            <RecordingScoresSelector />
          </main>

          <div className="p-[16px] pt-0">
            <RecordingSaveBtn />
          </div>
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingResultScreen;
