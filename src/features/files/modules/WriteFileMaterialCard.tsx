import TextareaAutosize from "react-textarea-autosize";
import Icon from "../../../components/Icon";
import getTheme from "../../../common/styles/theme";
import { IMaterial } from "../common/types";
import { PatternFormat } from "react-number-format";
import WriteFileKeywordForm from "./WriteFileKeywordForm";
import { useState } from "react";

type Props = {
  material: IMaterial;
  setMaterial: (by: Partial<IMaterial>) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onCopy: () => void;
  onRemove: () => void;
};

const CONTENT_MAX_LENGTH = 1000;

function WriteFileMaterialCard({
  material,
  setMaterial,
  onMoveUp,
  onMoveDown,
  onCopy,
  onRemove,
}: Props) {
  const { keywords, title, content, limitedTime } = material;
  const theme = getTheme();

  const [isHide, setHide] = useState(false);

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMaterial({ title: e.target.value });
  };

  const handleLimitedTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setMaterial({ limitedTime: e.target.value });
  };

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setMaterial({ content: e.target.value });
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <WriteFileKeywordForm
        keywords={keywords}
        setKeywords={(by) => setMaterial({ keywords: by })}
      />

      <div className="flex flex-col gap-[16px] p-[16px] bg-white rounded-[8px] shadow-white">
        <div className="flex items-center gap-[10px]">
          <input
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
            className="flex-1 py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none label  placeholder:text-gray-500"
          />

          <PatternFormat
            placeholder="00:00"
            format="## : ##"
            mask={"_"}
            inputMode="numeric"
            pattern="[0-9]*"
            value={limitedTime}
            onChange={handleLimitedTimeChange}
            className="w-[88px] py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none text-center b1 text-primary  placeholder:text-primary"
          />
        </div>

        <div>
          <TextareaAutosize
            placeholder="내용을 입력하세요. (1000자 이내)"
            value={content}
            onChange={handleContentChange}
            maxLength={CONTENT_MAX_LENGTH}
            className={`${
              isHide && "hidden"
            } min-h-[108px] w-full py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none  placeholder:text-gray-500 resize-none label`}
          />

          <div className="flex justify-end">
            <button
              onClick={() => setHide((prev) => !prev)}
              className="label underline text-primary"
            >
              {isHide ? "본문 보기" : "숨기기"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end gap-[8px]">
          <button onClick={onMoveUp}>
            <Icon name="chevronUp" color={theme.gray[500]} />
          </button>

          <button onClick={onMoveDown}>
            <Icon name="chevronDown" color={theme.gray[500]} />
          </button>

          <button onClick={onCopy}>
            <Icon name="copy" />
          </button>

          <button onClick={onRemove}>
            <Icon name="remove" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteFileMaterialCard;
