import { StyledPageLayout, Content } from './styles';
import AppBar, { type Props as AppBarProps } from '@/components/AppBar';
import type { PropsWithChildren } from 'react';

export type Props = {
  onHomeClick?: AppBarProps['onClick'];
};

export const PageLayout = ({
  onHomeClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <StyledPageLayout>
      <AppBar onClick={onHomeClick} />
      <Content>{children}</Content>
    </StyledPageLayout>
  );
};
