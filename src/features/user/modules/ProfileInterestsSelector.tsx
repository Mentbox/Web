import ProfileInterestItem from "./ProfileInterestItem";
import { IInterest, interestOptions } from "../common/user";

type Props = {
  interests: IInterest[];
  setInterests: (interests: IInterest[]) => void;
};

function ProfileInterestsSelector({ interests, setInterests }: Props) {
  return (
    <section className="flex flex-col gap-[12px]">
      <h1 className="b1">관심사</h1>

      <div className="flex flex-wrap gap-[8px]">
        {interestOptions.map((interest) => {
          const isSelected = interests.includes(interest);

          const toggle = () => {
            if (isSelected)
              setInterests(interests.filter((i) => i !== interest));
            else {
              setInterests([...interests, interest]);
            }
          };

          return (
            <ProfileInterestItem
              label={interest}
              value={interest}
              onClick={toggle}
              isSelected={isSelected}
              key={`k_interest_${interest}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProfileInterestsSelector;
