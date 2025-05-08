import * as Icons from "./icons";

export type IconName = keyof typeof Icons;

type Props = {
  name: IconName;
  color?: string;
  size?: number;
};

function Icon({ name, color = "#000000", size = 24 }: Props) {
  const Comp = Icons[name];

  return <Comp color={color} width={size} height={size} />;
}

export default Icon;
