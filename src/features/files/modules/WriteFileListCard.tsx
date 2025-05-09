import TextareaAutosize from "react-textarea-autosize";
import Icon from "../../../components/Icon";
import getTheme from "../../../common/styles/theme";

function WriteFileListCard() {
  const theme = getTheme();

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col p-[16px] bg-white rounded-[8px] shadow-white">
        <TextareaAutosize
          placeholder={`기억해야 할 핵심 키워드를 입력하세요.\n(최대 10개, 각 15자 이내)\nex) #광고 #마케팅 #긍정적인_마인드`}
          className="py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-[16px] p-[16px] bg-white rounded-[8px] shadow-white">
        <div className="flex items-center gap-[10px]">
          <input
            placeholder="제목을 입력하세요"
            className="flex-1 py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none  placeholder:text-gray-500"
          />

          <input
            placeholder="HH:mm"
            className="w-[88px] py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none text-center text-primary  placeholder:text-primary"
          />
        </div>

        <TextareaAutosize
          placeholder="내용을 입력하세요. (1000자 이내)"
          className="min-h-[108px] py-[12px] px-[16px] rounded-[8px] bg-gray-50 shadow-white outline-none  placeholder:text-gray-500"
        />

        <div className="flex items-center justify-end gap-[8px]">
          <Icon name="chevronUp" color={theme.gray[500]} />
          <Icon name="chevronDown" color={theme.gray[500]} />
          <Icon name="copy" />
          <Icon name="remove" />
        </div>
      </div>
    </div>
  );
}

export default WriteFileListCard;
