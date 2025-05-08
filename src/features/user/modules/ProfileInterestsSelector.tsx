import { useState } from "react";
import ProfileInterestItem from "./ProfileInterestItem";

const interests = [
  { label: "취준", value: "취준" },
  { label: "팀플", value: "팀플" },
  { label: "프로젝트", value: "프로젝트" },
  { label: "직장인", value: "직장인" },
  { label: "대학생", value: "대학생" },
  { label: "동아리", value: "동아리" },
  { label: "면접", value: "면접" },
  { label: "공모전", value: "공모전" },
  { label: "이직러", value: "이직러" },
] as const;

function ProfileInterestsSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <section className="flex flex-col gap-[12px]">
      <h1 className="b1">관심사</h1>
      <div className="flex flex-wrap gap-[8px]">
        {interests.map(({ label, value }) => {
          const isSelected = selected.includes(value);

          const toggle = () => {
            if (isSelected)
              setSelected((prev) => prev.filter((i) => i !== value));
            else {
              setSelected((prev) => [...prev, value]);
            }
          };

          return (
            <ProfileInterestItem
              label={label}
              value={value}
              onClick={toggle}
              isSelected={isSelected}
              key={`k_interest_${value}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProfileInterestsSelector;
