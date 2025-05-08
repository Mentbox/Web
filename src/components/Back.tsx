import { useFlow } from "@stackflow/react/future";
import getTheme from "../common/styles/theme";
import Icon from "./Icon";

type Props = {
  onClick?: () => void;
};

function Back({ onClick }: Props) {
  const theme = getTheme();
  const { pop } = useFlow();

  const handleClick = () => {
    if (onClick) return onClick();

    pop();
  };

  return (
    <button onClick={handleClick}>
      <Icon name="chevronLeft" color={theme.gray[500]} />
    </button>
  );
}

export default Back;
