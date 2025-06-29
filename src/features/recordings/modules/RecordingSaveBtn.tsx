import { Button } from "@/src/components/Button";

type Props = {
  onClick: () => void;
};

function RecordingSaveBtn({ onClick }: Props) {
  return (
    <section className="flex flex-col gap-[4px]">
      <Button onClick={onClick}>저장</Button>
    </section>
  );
}

export default RecordingSaveBtn;
