import styled from 'styled-components';

export const ArtworkTileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: auto;
  font-size: 1em;
`;

export const Artist = styled.h3`
  font-size: 0.875em;
  margin: 0;
  color: #666;
  font-weight: 300;
`;
