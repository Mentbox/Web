import Input from "../../../components/Input";

function WriteFileNameForm() {
  return (
    <section className="flex flex-col gap-[8px]">
      <label htmlFor="name" className="b1">
        파일 제목
      </label>

      <Input id="name" placeholder="파일 제목" theme="white" />
    </section>
  );
}

export default WriteFileNameForm;
