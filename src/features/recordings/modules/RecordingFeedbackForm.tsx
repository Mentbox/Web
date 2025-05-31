import TextAreaAutoSize from "react-textarea-autosize";

function RecordingFeedbackForm() {
  return (
    <section className="flex flex-col gap-[8px]">
      <h1 className="b1">피드백</h1>

      <div className="flex flex-col p-[16px] rounded-[8px] bg-white shadow-white">
        <TextAreaAutoSize
          placeholder="내용을 입력하세요. (500자 이내)"
          className="bg-gray-50 rounded-[8px] px-[16px] py-[12px] shadow-white label placeholder:text-gray-500 outline-none resize-none"
          minRows={4}
          maxLength={500}
        />
      </div>
    </section>
  );
}

export default RecordingFeedbackForm;
