import Input from "../../../components/Input";

type Props = {
  name: string;
  setName: (name: string) => void;
};

const NAME_MAX_LENGTH = 15;

function ProfileNameForm({ name, setName }: Props) {
  const validateName = (input: string) => {
    const regex = /^[ᄀ-ᄒᆨ-ᇂㄱ-ㅣ가-힣ᅡ-ᅵa-zA-Z]{1,15}$/;
    return regex.test(input);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="flex flex-col gap-[8px]">
      <div className="flex items-center justify-between">
        <label htmlFor="name" className="b1">
          이름x
        </label>

        <span className="label text-gray-500">
          {name.length}/{NAME_MAX_LENGTH}
        </span>
      </div>
      <Input
        id="name"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={handleChange}
        success={{
          condition: validateName(name),
        }}
        error={{
          condition: !validateName(name) && name.length > 0,
          message: "15자 이내 한글, 영문만 입력 가능합니다.",
        }}
        maxLength={NAME_MAX_LENGTH}
        theme="white"
      />
    </section>
  );
}

export default ProfileNameForm;
