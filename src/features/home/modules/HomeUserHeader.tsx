import DefaultProfileImg from "@images/profile.png";
import { useFlow } from "@stackflow/react/future";

const HomeUserHeader = () => {
  const interestOptions = ["취준", "동아리", "운동"];
  const preview = "";
  const image = "";
  const { push } = useFlow();

  return (
    <div className="flex flex-wrap gap-[10px] ">
      <button className="relative" onClick={() => push("ProfileScreen", {})}>
        <img
          src={image ? preview : DefaultProfileImg}
          alt="profile image"
          className="aspect-square w-[48px] object-cover rounded-full shadow-white"
        />
      </button>
      <div>
        <span>홍길동</span>
        <div className="flex flex-wrap gap-[4px]">
          {interestOptions.map((interest) => {
            return (
              <div
                className={
                  "bg-gray-100 h-[22px] flex items-center px-[8px] py-[4px] rounded-[20px]"
                }
              >
                <span className="label text-gray-500">{interest}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeUserHeader;
