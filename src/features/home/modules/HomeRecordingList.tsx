import HomeRecordingCard from "./HomeRecordingCard";

function HomeRecordingList() {
  const recordings = [
    {
      id: 0,
      title: "광고와 사회 발표",
      memoryScore: 80,
      accentScore: 50,
      toneScore: 78,
      type: "blue",
      time: 54,
      date: "25-06-06",
    },
    {
      id: 1,
      title: "토스 면접",
      memoryScore: 80,
      accentScore: 50,
      toneScore: 78,
      type: "green",
      time: 54,
      date: "25-06-01",
    },
  ];

  return (
    <div className="flex flex-col gap-[8px] w-full">
      {recordings.slice(0, 2).map((recording) => (
        <HomeRecordingCard recording={recording} key={recording.id} />
      ))}
    </div>
  );
}

export default HomeRecordingList;
