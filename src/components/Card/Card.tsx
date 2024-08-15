import { StyledCard, type StyledCardProps } from './styles';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

export type Props = {
  size?: StyledCardProps['$size'];
  onClick?: () => void;
};

export const Card = forwardRef(
  ({ size, onClick, children }: PropsWithChildren<Props>, ref) => {
    return (
      <StyledCard
        onClick={onClick}
        $size={size}
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        {children}
      </StyledCard>
    );
  }
);
