import Header from "@/src/components/Header";
import AsyncBoundary from "@/src/features/core/modules/AsyncBoundary";
import RecordingDetailsInfo from "@/src/features/recordings/modules/RecordingDetailsInfo";
import RecordingDetailsPlayer from "@/src/features/recordings/modules/RecordingDetailsPlayer";
import RecordingFeedbackForm from "@/src/features/recordings/modules/RecordingFeedbackForm";
import RecordingSaveBtn from "@/src/features/recordings/modules/RecordingSaveBtn";
import RecordingScoresSelector from "@/src/features/recordings/modules/RecordingScoresSelector";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createRecording } from "@/src/features/recordings/common/apis";
import useToast from "@/src/features/core/hooks/useToast";
import { useRouter } from "@/src/app/_root";

type Params = {
  fileId: number;
  voiceFile: File;
};

const INITIAL_SCORE = 50;

const RecordingResultScreen: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  const { fileId, voiceFile } = params;
  const { showToast } = useToast();
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationFn: createRecording,
    onSuccess: () => {
      showToast("연습 결과가 저장되었습니다.");
      push("RecordingsScreen", { fileId });
    },
    onError: (err) => {
      console.log(err);
      showToast("연습 결과 저장에 실패했습니다.");
    },
  });

  const [form, setForm] = useState<{
    content: string;
    memoryScore: number;
    pronunciationScore: number;
    toneScore: number;
  }>({
    content: "",
    memoryScore: INITIAL_SCORE,
    pronunciationScore: INITIAL_SCORE,
    toneScore: INITIAL_SCORE,
  });

  const handleChangeForm = <T extends keyof typeof form>(
    key: T,
    value: (typeof form)[T]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    mutate({
      fileId,
      voiceFile,
      feedback: form.content,
      score: form.memoryScore,
      isRandom: false,
    });
  };

  return (
    <AppScreen>
      <div className="screen">
        <Header.Arrow title="연습 종료" />

        <AsyncBoundary>
          <main className="flex-1 flex flex-col gap-[24px] p-[16px] overflow-y-auto">
            <RecordingDetailsInfo fileId={fileId} />

            <RecordingDetailsPlayer voiceFile={voiceFile} />

            <RecordingFeedbackForm
              content={form.content}
              onChange={(content) => handleChangeForm("content", content)}
            />

            <RecordingScoresSelector
              memoryScore={form.memoryScore}
              pronunciationScore={form.pronunciationScore}
              toneScore={form.toneScore}
              onChangeMemoryScore={(memoryScore) =>
                handleChangeForm("memoryScore", memoryScore)
              }
              onChangePronunciationScore={(pronunciationScore) =>
                handleChangeForm("pronunciationScore", pronunciationScore)
              }
              onChangeToneScore={(toneScore) =>
                handleChangeForm("toneScore", toneScore)
              }
            />
          </main>

          <div className="p-[16px] pt-0">
            <RecordingSaveBtn onClick={handleSave} />
          </div>
        </AsyncBoundary>
      </div>
    </AppScreen>
  );
};

export default RecordingResultScreen;
