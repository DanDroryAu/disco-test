import { Logo, StyledAppBar } from './styles';

export type Props = {
  onClick?: () => void;
};

export const AppBar = ({ onClick }: Props) => (
  <StyledAppBar>
    <Logo
      src={'https://api.artic.edu/docs/assets/logo.svg'}
      onClick={onClick}
      alt="Art Institute of Chicago"
    />
    Art Institute of Chicago
  </StyledAppBar>
);
