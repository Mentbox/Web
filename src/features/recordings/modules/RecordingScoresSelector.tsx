function RecordingScoresSelector() {
  return (
    <section className="flex flex-col gap-[8px]">
      <h1 className="b1">점수</h1>

      <div className="flex flex-col gap-[4px]">
        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300">암기</label>
            <span className="text-blue-300">78%</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <div className="h-[6px] rounded-[2px] bg-blue-75" />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300">암기</label>
            <span className="text-blue-300">78%</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <div className="h-[6px] rounded-[2px] bg-blue-75" />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-white rounded-[8px] shadow-white">
          <div className="flex items-center gap-[8px] b1">
            <label className="text-gray-300">암기</label>
            <span className="text-blue-300">78%</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            <div className="h-[6px] rounded-[2px] bg-blue-75" />

            <div className="flex items-center justify-between caption text-gray-300">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecordingScoresSelector;
