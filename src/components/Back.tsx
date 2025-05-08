import { useFlow } from "@stackflow/react/future";
import getTheme from "../common/styles/theme";
import Icon from "./Icon";

function Back() {
  const theme = getTheme();
  const { pop } = useFlow();

  const handleClick = () => {
    pop();
  };

  return (
    <button onClick={handleClick}>
      <Icon name="chevronLeft" color={theme.gray[500]} />
    </button>
  );
}

export default Back;
