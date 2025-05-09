import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import useToast from "../../core/hooks/useToast";

const KEYWORDS_MAX_LENGTH = 10;

type Props = {
  keywords: string[];
  setKeywords: (by: string[]) => void;
};

function WriteFileKeywordForm({ keywords, setKeywords }: Props) {
  const { showToast } = useToast();

  const [isActive, setActive] = useState(keywords.length === 0);
  const [input, setInput] = useState("");

  useEffect(() => {
    // init input by keywords
    setInput(keywords.length ? "#" + keywords.join(" #") : "");
  }, [keywords]);

  const applyKeywords = () => {
    setKeywords(
      input
        .trim()
        .split("#")
        .map((k) => k.trim().replace(" ", ""))
        .filter((k) => k !== "")
        .slice(0, KEYWORDS_MAX_LENGTH)
    );
  };

  const checkLimit = () => {
    return input.split(" #").length >= KEYWORDS_MAX_LENGTH;
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    let value = e.target.value;
    if (!value.startsWith("#")) value = "#" + value;

    setInput(value);
  };

  const handleKeydown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.key === " ") {
      e.preventDefault();

      if (checkLimit())
        return showToast("최대 10개의 키워드만 등록 할 수 있어요.");

      setInput((prev) => (prev.endsWith(" ") ? prev : prev + " #"));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="flex flex-col p-[16px] bg-white rounded-[8px] shadow-white">
      {isActive || keywords.length === 0 ? (
        <TextareaAutosize
          placeholder={`기억해야 할 핵심 키워드를 입력하세요.\n(최대 10개, 각 15자 이내)\nex) #광고 #마케팅 #긍정적인_마인드`}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onBlur={() => {
            setActive(false);
            applyKeywords();
          }}
          className="py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none placeholder:text-gray-500 resize-none label"
        />
      ) : (
        <div
          onClick={() => setActive(true)}
          className="flex flex-wrap gap-[4px] py-[12px] rounded-[8px] px-[16px] bg-gray-50 shadow-white"
        >
          {keywords.map((keyword) => (
            <span className="px-[4px] py-[2px] rounded-[4px] bg-blue-50 label">
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default WriteFileKeywordForm;
