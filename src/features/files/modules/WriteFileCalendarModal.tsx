import Calendar from "react-calendar";
import Modal from "../../../components/Modal";
import DateUtil from "../../../utils/DateUtils";
import dayjs from "dayjs";
import Icon from "../../../components/Icon";
import getTheme from "../../../common/styles/theme";

type Props = {
  isOpen: boolean;
  close: () => void;
  onExit: () => void;
  value?: Date;
  onChange: (value: Date) => void;
};

function WriteFileCalendarModal({
  isOpen,
  close,
  onExit,
  value,
  onChange,
}: Props) {
  const theme = getTheme();

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      onExit={onExit}
      className="bg-white p-[16px] rounded-[12px] max-w-lg mx-auto"
    >
      <Calendar
        value={value}
        onChange={(v) => {
          onChange(new Date(v as unknown as string));
          close();
        }}
        calendarType="gregory"
        view="month"
        prevLabel={
          <Icon name="chevronLeft" size={18} color={theme.gray[500]} />
        }
        nextLabel={
          <Icon name="chevronRight" size={18} color={theme.gray[500]} />
        }
        prev2Label={null}
        next2Label={null}
        showFixedNumberOfWeeks
        tileClassName={({ date }) => {
          const formatted = DateUtil.format(date);
          const isSelected = value && formatted === DateUtil.format(value);
          const isToday = formatted === DateUtil.nowFormat();
          if (isSelected) return "bg-primary text-white!";
          if (isToday) return "border border-primary";
        }}
        formatMonthYear={(_, date) => DateUtil.formatYYYYMM(date)}
        formatShortWeekday={(_, date) => dayjs(date).format("dd")[0]}
        formatDay={(_, date) => date.getDate().toString()}
      />
    </Modal>
  );
}

export default WriteFileCalendarModal;
