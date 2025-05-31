class _TimeUtil {
  /** @param time mm:ss */
  parse = (time: string) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return { minutes, seconds };
  };
  format = (minutes: number, seconds: number) => {
    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  };
  add = (time: string, second: number) => {
    const { minutes, seconds } = this.parse(time);
    const totals = minutes * 60 + seconds + second;
    const _minutes = Math.floor(totals / 60);
    const _seconds = totals % 60;

    return this.format(_minutes, _seconds);
  };
  subtract = (time: string, second: number) => {
    const { minutes, seconds } = this.parse(time);
    const totals = minutes * 60 + seconds - second;
    const _minutes = Math.floor(totals / 60);
    const _seconds = totals % 60;

    return this.format(_minutes, _seconds);
  };
}

const TimeUtil = new _TimeUtil();

export default TimeUtil;
