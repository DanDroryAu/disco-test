import styled, { css } from 'styled-components';

// Using $ before the variable name to see that it is a style prop.
export type StyledCardProps = {
  $size?: 'small' | 'medium'; // more sizes here. Showing on how to style these components.
  onClick?: () => void; // Check to see if it has onclick bound. If so we must allow hover states.
};

const sizeMap = {
  small: {
    padding: '16px',
    width: '200px',
  },
  medium: {
    padding: '32px',
    width: '400px',
  },
};

export const StyledCard = styled.div<StyledCardProps>`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: ${({ $size = 'small' }) => sizeMap[$size].padding};
  width: ${({ $size = 'small' }) => sizeMap[$size].width};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  transition: box-shadow 0.2s;
  ${({ onClick }) =>
    onClick &&
    css`
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    `}
`;
