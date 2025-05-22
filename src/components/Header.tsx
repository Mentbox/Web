import Back from "./Back";

type Props = {
  title?: string;
  onBack?: () => void;
};

function HeaderArrow({ onBack, title }: Props) {
  return (
    <header className="z-50 relative h-[62px] flex items px-[16px]">
      <Back onClick={onBack} />

      {title && (
        <div className="-z-10 absolute inset-0 flex items-center justify-center">
          <h1 className="h1">{title}</h1>
        </div>
      )}
    </header>
  );
}

const Header = {
  Arrow: HeaderArrow,
};

export default Header;
