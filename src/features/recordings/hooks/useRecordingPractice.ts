import { useState } from "react";

function useRecordingPractice(materialLength: number) {
  const [isShuffle, setShuffle] = useState(true);
  const toggleShuffle = () => setShuffle((prev) => !prev);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [doneIndexes, setDoneIndexes] = useState<number[]>([]);
  const isLast = doneIndexes.length === materialLength - 1;

  const next = () => {
    if (isLast) return;

    const _doneIndexes = [...doneIndexes, currentIndex];
    const ableIndexes = Array.from(
      { length: materialLength },
      (_, i) => i
    ).filter((i) => !_doneIndexes.includes(i));

    const nextIndex = isShuffle
      ? ableIndexes[Math.floor(Math.random() * ableIndexes.length)]
      : ableIndexes[0];

    setCurrentIndex(nextIndex);
    setDoneIndexes(_doneIndexes);
  };

  return { isShuffle, toggleShuffle, currentIndex, isLast, next };
}

export default useRecordingPractice;
