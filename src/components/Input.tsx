type InputTheme = "gray" | "white";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  theme?: InputTheme;
  error?: { condition: boolean; message: string };
  success?: { condition: boolean; message: string };
};

const themeClassNameMap: Record<InputTheme, string> = {
  gray: "bg-gray-50 border-transparent b1",
  white: "bg-white border-transparent shadow-white label",
};

const statusClassNameMap: Record<
  "error" | "success",
  { input: string; caption: string }
> = {
  error: { input: "border-negative!", caption: "text-negative" },
  success: { input: "border-green-300!", caption: "text-green-300" },
};

function Input({ theme = "gray", error, success, ...rest }: Props) {
  const status = (() => {
    if (error?.condition) return "error";
    if (success?.condition) return "success";
    return null;
  })();
  const caption = error?.message ?? success?.message;

  return (
    <div className="flex flex-col gap-[4px]">
      <input
        {...rest}
        className={`${themeClassNameMap[theme]} ${
          status && statusClassNameMap[status].input
        } h-[50px] py-[10px] px-[16px] rounded-[8px] outline-none placeholder:text-gray-500 border`}
      />
      {status && (
        <div className={`${statusClassNameMap[status].caption} label`}>
          {caption}
        </div>
      )}
    </div>
  );
}

export default Input;
