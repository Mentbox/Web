import Icon, { IconName } from "../../../components/Icon";

type Props = {
  label: string;
  value: IconName;
  onClick: (value: string) => void;
  isSelected: boolean;
};

function ProfileInterestItem({ label, value, onClick, isSelected }: Props) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`${
        isSelected ? "bg-blue-50 border-blue-300" : "bg-white border-gray-200"
      } h-[40px] flex items-center gap-[4px] pr-[20px] pl-[18px] py-[10px] rounded-[20px] border`}
    >
      <Icon name={value} size={18} />
      <span className="label">{label}</span>
    </button>
  );
}

export default ProfileInterestItem;
