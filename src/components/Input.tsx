type InputTheme = "gray" | "white";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  theme?: InputTheme;
  error?: { condition: boolean; message: string };
  success?: { condition: boolean; message: string };
};

function Input({ theme = "gray", error, success, ...rest }: Props) {
  const themeClassNameMap: Record<InputTheme, string> = {
    gray: "bg-gray-50 border-transparent",
    white: "bg-white border-transparent shadow-white",
  };

  const statusClassNameMap: Record<
    "error" | "success",
    { input: string; caption: string }
  > = {
    error: { input: "border-negative!", caption: "text-negative" },
    success: { input: "border-green-300!", caption: "text-green-300" },
  };

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
        } h-[50px] py-[10px] px-[16px] rounded-[8px] outline-none b1 placeholder:text-gray-500 border`}
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
