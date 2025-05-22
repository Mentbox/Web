import dayjs, { Dayjs } from "dayjs";

class _DateUtil {
  now = () => dayjs();
  nowFormat = () => this.format(this.now());
  format = (d: Date | string | Dayjs) => dayjs(d).format("YYYY-MM-DD");
  formatDot = (d: Date | string | Dayjs) => dayjs(d).format("YYYY.MM.DD");
  formatYYYYMM = (d: Date | string | Dayjs) => dayjs(d).format("YYYY.MM");
}

const DateUtil = new _DateUtil();

export default DateUtil;
