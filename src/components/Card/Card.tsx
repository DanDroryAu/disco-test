import { StyledCard, type StyledCardProps } from './styles';
import type { PropsWithChildren } from 'react';

export type Props = {
  size?: StyledCardProps['$size'];
  onClick?: () => void;
};

export const Card = ({ size, onClick, children }: PropsWithChildren<Props>) => {
  return (
    <StyledCard onClick={onClick} $size={size}>
      {children}
    </StyledCard>
  );
};
