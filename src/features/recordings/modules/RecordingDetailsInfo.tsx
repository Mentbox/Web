import useFileSuspenseQuery from "../../files/hooks/queries/useFileSuspenseQuery";

type Props = {
  fileId: number;
};

function RecordingDetailsInfo({ fileId }: Props) {
  const { file } = useFileSuspenseQuery(fileId);

  return (
    <section className="flex flex-col gap-[12px]">
      <div className="px-[16px] py-[12px] rounded-[8px] bg-white shadow-white">
        <h1 className="label">{file.title}</h1>
      </div>

      <div className="flex items-center px-[16px] py-[12px] rounded-[8px] bg-white shadow-white">
        <div className="flex-1 flex flex-col gap-[4px]">
          <div className="b1">2025년 3월 24일 월요일</div>
          <div className="label text-gray-500">오후 1:07</div>
        </div>

        <div className="aspect-square w-[48px] flex items-center justify-center rounded-full bg-blue-50 border border-blue-75 b1 text-blue-300">
          54분
        </div>
      </div>
    </section>
  );
}

export default RecordingDetailsInfo;
