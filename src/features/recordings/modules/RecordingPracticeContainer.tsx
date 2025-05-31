import useFileSuspenseQuery from "../../files/hooks/queries/useFileSuspenseQuery";
import RecordingPracticeMaterialViewer from "./RecordingPracticeMaterialViewer";
import RecordingPracticePlayer from "./RecordingPracticePlayer";
import { Button } from "@/src/components/Button";
import RecordingPracticeShuffleToggle from "./RecordingShuffleToggle";
import useRecordingPractice from "../hooks/useRecordingPractice";
import useDialog from "../../core/hooks/useDialog";
import { useState } from "react";
import { useRouter } from "@/src/app/_root";
import useToast from "../../core/hooks/useToast";

type Props = {
  fileId: number;
};

function RecordingPracticeContainer({ fileId }: Props) {
  const { replace } = useRouter();
  const { showDialog } = useDialog();
  const { showToast } = useToast();

  const {
    file: { title, materials },
  } = useFileSuspenseQuery(fileId);

  const [isRecording, setRecording] = useState(false);
  const { isShuffle, toggleShuffle, currentIndex, isLast, next } =
    useRecordingPractice(materials.length);
  const material = materials[currentIndex];

  const handlePlay = () => {
    setRecording(true);
  };

  const handleTimeOut = () => {
    next();
  };

  const handleNext = () => {
    if (!isRecording) return showToast("재생 버튼을 눌러주세요!");
    if (!isLast) return next();

    showDialog({
      title: "연습을 마칠까요?",
      confirmLabel: "종료",
      onConfirm: () => {
        replace("RecordingResultScreen", { fileId });
      },
    });
  };

  return (
    <section className="flex-1 flex flex-col overflow-y-auto">
      <div className="flex-1 flex flex-col gap-[24px] p-[16px] overflow-y-auto">
        <RecordingPracticeShuffleToggle
          isShuffle={isShuffle}
          toggleShuffle={toggleShuffle}
          disabled={isRecording}
        />

        <RecordingPracticePlayer
          material={material}
          onPlay={handlePlay}
          onTimeOut={handleTimeOut}
        />

        <RecordingPracticeMaterialViewer title={title} material={material} />
      </div>

      <div className="p-[16px] pt-0">
        <Button
          onClick={handleNext}
          variant={isLast ? "primary" : "outline"}
          className="w-full"
        >
          {isLast ? "종료" : "다음"}
        </Button>
      </div>
    </section>
  );
}

export default RecordingPracticeContainer;
