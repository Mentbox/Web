import Input from "../../../components/Input";

type Props = {
  title: string;
  setTitle: (title: string) => void;
};

function WriteFileTitleForm({ title, setTitle }: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  return (
    <section className="flex flex-col gap-[8px]">
      <label htmlFor="name" className="b1">
        파일 제목
      </label>

      <Input
        id="name"
        placeholder="파일 제목"
        value={title}
        onChange={handleChange}
        theme="white"
      />
    </section>
  );
}

export default WriteFileTitleForm;
