import logo from '@icons/logo.svg';
import logoText from '@icons/logo-text-korean.svg'

type Props = {
  long?: boolean;
};

const Logo = ({ long = false }: Props) => {
  return long ? (
    <img src={logoText} width={110} />
  ) : (
    <img src={logo} width={32} />
  );
}

export default Logo;