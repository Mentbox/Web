import DateUtil from "../../../utils/DateUtils";
import useFileSuspenseQuery from "../hooks/queries/useFileSuspenseQuery";

type Props = {
  fileId: number;
};

function FileDetails({ fileId }: Props) {
  const {
    file: { title, targetDate },
  } = useFileSuspenseQuery(fileId);

  return (
    <div className="flex flex-col gap-[12px]">
      <section className="px-[16px] py-[12px] rounded-[8px] bg-white shadow-white">
        <h1 className="label">{title}</h1>
      </section>

      <section className="px-[16px] py-[12px] rounded-[8px] bg-white shadow-white">
        <div className="label">{DateUtil.formatDot(targetDate)}</div>
      </section>
    </div>
  );
}

export default FileDetails;
