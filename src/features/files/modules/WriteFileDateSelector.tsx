import { overlay } from "overlay-kit";
import WriteFileCalendarModal from "./WriteFileCalendarModal";
import DateUtil from "../../../utils/DateUtils";

type Props = {
  date: Date | null;
  setDate: (date: Date) => void;
};

function WriteFileDateSelector({ date, setDate }: Props) {
  const handleClick = () => {
    overlay.open(({ isOpen, close, unmount }) => (
      <WriteFileCalendarModal
        isOpen={isOpen}
        close={close}
        onExit={unmount}
        value={date!}
        onChange={setDate}
      />
    ));
  };

  return (
    <section className="flex flex-col gap-[8px]">
      <label className="b1">목표 날짜</label>

      <button
        onClick={handleClick}
        className={`${
          date ? "text-black" : "text-gray-500"
        } h-[50px] flex items-center py-[10px] px-[16px] rounded-[8px] bg-white shadow-white label`}
      >
        {date ? DateUtil.formatDot(date) : "0000.00.00"}
      </button>
    </section>
  );
}

export default WriteFileDateSelector;
