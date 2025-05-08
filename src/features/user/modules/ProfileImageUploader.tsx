import { useEffect, useRef, useState } from "react";
import DefaultProfileImg from "@images/profile.png";
import Icon from "../../../components/Icon";
import { overlay } from "overlay-kit";
import ProfileImageUploadBottomSheet from "./ProfileImageUploadBottomSheet";

function ProfileImageUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    // load preview image by change file
    if (!file) return setPreview("");

    const reader = new FileReader();

    reader.onload = () => {
      const { result } = reader;
      if (typeof result === "string") {
        setPreview(result);
      }
    };

    reader.readAsDataURL(file);

    return () => reader.abort();
  }, [file]);

  const handleClick = () => {
    overlay.open(({ isOpen, close, unmount }) => (
      <ProfileImageUploadBottomSheet
        isOpen={isOpen}
        close={close}
        onExit={unmount}
        inputRef={inputRef}
        clear={() => setFile(undefined)}
      />
    ));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    setFile(file);
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
          src={file ? preview : DefaultProfileImg}
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
