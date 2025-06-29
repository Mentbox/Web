import { useRouter } from "@/src/app/_root";
import Header from "@/src/components/Header";
import useDialog from "../../core/hooks/useDialog";

function RecordingPracticeHeader() {
  const { pop } = useRouter();
  const { showDialog } = useDialog();

  const handleBackPress = () => {
    showDialog({
      title: "연습을 중단할까요?",
      desc: "지금 연습을 중단하면 기록이 저장되지 않아요.",
      confirmLabel: "중단",
      onConfirm: () => {
        pop();
      },
    });
  };

  return <Header.Arrow title="연습" onBack={handleBackPress} />;
}

export default RecordingPracticeHeader;
