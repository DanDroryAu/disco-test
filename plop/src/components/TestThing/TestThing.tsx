import { StyledTestThing } from './styles';

export type Props = {
  foo?: string;
};

export const TestThing = ({ foo }: Props) => {
  return (
    <StyledTestThing>
      {foo}
    </StyledTestThing>
  );
};

