type Props = React.PropsWithChildren<{
  onClick?: () => void;
  className?: string;
  color?: string;
  src?: string;
}>;

export const LoginButton = ({
  children,
  onClick,
  className = "",
  color = "",
  src = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex flex-row items-center justify-center h-[45px] text-[1.125rem] leading-[1.05] rounded-md font-medium transition duration-150 ease-in-out p-[16px] ${className}`}
      style={{ backgroundColor: color }}
    >
      <img src={src} width={18} className="absolute left-[40px]" />
      <span className={`text-[15px] text-black`}>{children}</span>
    </button>
  );
};

export default LoginButton;
