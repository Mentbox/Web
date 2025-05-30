import { useState } from "react";
import Icon from "../../../components/Icon";
import getTheme from "../../../common/styles/theme";
import useFileSuspenseQuery from "../../files/hooks/queries/useFileSuspenseQuery";

type Props = {
  fileId: number;
};

function RecordingPracticeMaterialViewer({ fileId }: Props) {
  const theme = getTheme();
  const { file } = useFileSuspenseQuery(fileId);

  const { keywords, title, content } = file.materials[0];

  const [isVisibleKeywords, setVisibleKeywords] = useState(false);
  const toggleKeywords = () => setVisibleKeywords((prev) => !prev);
  const [isVisibleContent, setVisibleContent] = useState(false);
  const toggleContent = () => setVisibleContent((prev) => !prev);

  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="h1">{file.title}</h1>

      <div className="flex flex-col p-[16px] gap-[12px] bg-white rounded-[8px] shadow-white">
        <div className="flex items-center justify-between">
          <span className="w-[61px]" />

          <h2 className="b1">키워드 힌트</h2>

          <button
            onClick={toggleKeywords}
            className="w-[61px] py-[6px] px-[12px] bg-gray-100 rounded-[8px] text-center label text-gray-500"
          >
            {isVisibleKeywords ? "숨기기" : "보기"}
          </button>
        </div>

        {isVisibleKeywords ? (
          <div className="flex flex-wrap gap-[10px] px-[16px] py-[12px] rounded-[8px] bg-gray-50 shadow-white">
            {keywords.map((keyword, index) => (
              <span
                className="bg-blue-50 px-[4px] py-[2px] rounded-[4px] label"
                key={`k_${keyword}_${index}`}
              >
                {keyword}
              </span>
            ))}
          </div>
        ) : (
          <div className="h-[108px] flex items-center justify-center rounded-[8px] bg-gray-50 shadow-white">
            <Icon name="invisible" size={20} color={theme.gray[300]} />
          </div>
        )}
      </div>

      <div className="flex flex-col p-[16px] gap-[12px] bg-white rounded-[8px] shadow-white">
        <div className="flex items-center justify-between">
          <span className="w-[61px]" />

          <h2 className="b1">{title}</h2>

          <button
            onClick={toggleContent}
            className="w-[61px] py-[6px] px-[12px] bg-gray-100 rounded-[8px] text-center label text-gray-500"
          >
            {isVisibleContent ? "숨기기" : "보기"}
          </button>
        </div>

        {isVisibleContent ? (
          <div className="flex flex-wrap gap-[10px] px-[16px] py-[12px] rounded-[8px] bg-gray-50 shadow-white">
            <p className="label">{content}</p>
          </div>
        ) : (
          <div className="h-[108px] flex items-center justify-center rounded-[8px] bg-gray-50 shadow-white">
            <Icon name="invisible" size={20} color={theme.gray[300]} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RecordingPracticeMaterialViewer;
