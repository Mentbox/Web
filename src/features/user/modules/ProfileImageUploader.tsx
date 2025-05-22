import { useEffect, useRef, useState } from "react";
import DefaultProfileImg from "@images/profile.png";
import Icon from "../../../components/Icon";
import { overlay } from "overlay-kit";
import ProfileImageUploadBottomSheet from "./ProfileImageUploadBottomSheet";

type Props = {
  image: File | null;
  setImage: (image: File | null) => void;
};

function ProfileImageUploader({ image, setImage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    // load preview image by change file
    if (!image) return setPreview("");

    const reader = new FileReader();

    reader.onload = () => {
      const { result } = reader;
      if (typeof result === "string") {
        setPreview(result);
      }
    };

    reader.readAsDataURL(image);

    return () => reader.abort();
  }, [image]);

  const handleClick = () => {
    overlay.open(({ isOpen, close, unmount }) => (
      <ProfileImageUploadBottomSheet
        isOpen={isOpen}
        close={close}
        onExit={unmount}
        inputRef={inputRef}
        clear={() => setImage(null)}
      />
    ));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <input
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
        type="file"
        accept="image/*"
      />

      <button onClick={handleClick} className="relative">
        <img
          src={image ? preview : DefaultProfileImg}
          alt="profile image"
          className="aspect-square w-[80px] object-cover rounded-full shadow-white"
        />
        <span className="absolute bottom-0 right-0 bg-gray-200 rounded-full">
          <Icon name="edit" size={28} color={"#fff"} />
        </span>
      </button>
    </section>
  );
}

export default ProfileImageUploader;
