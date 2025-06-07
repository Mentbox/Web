import moveIcon from "@icons/바로가기.svg";

type Props = React.PropsWithChildren<{
  onClick?: () => void;
}>;

const HomeSubTitle = ({ children, onClick }: Props) => {
  return (
    <button className="flex flex-row gap-[13px]" onClick={onClick}>
      <span className="h1">{children}</span>
      <img src={moveIcon} />
    </button>
  );
};

export default HomeSubTitle;
