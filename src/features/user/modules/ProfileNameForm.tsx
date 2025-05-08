import Input from "../../../components/Input";

const NAME_MAX_LENGTH = 15;

function ProfileNameForm() {
  return (
    <section className="flex flex-col gap-[8px]">
      <div className="flex items-center justify-between">
        <label htmlFor="name" className="b1">
          이름
        </label>

        <span className="label text-gray-500">0/{NAME_MAX_LENGTH}</span>
      </div>
      <Input id="name" placeholder="이름을 입력해주세요." theme="white" />
    </section>
  );
}

export default ProfileNameForm;
