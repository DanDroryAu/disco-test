import { StyledArtworkGrid } from './styles';
import ArtworkTile, {
  type Props as ArtworkTileProps,
} from '@/components/ArtworkTile';

export type Props = {
  artworks: ArtworkTileProps[];
  observerCallback?: (node: Element) => void;
};

export const ArtworkGrid = ({ artworks, observerCallback }: Props) => {
  return (
    <StyledArtworkGrid>
      {artworks.map((artwork, index) => (
        <ArtworkTile
          key={artwork.id}
          {...artwork}
          ref={artworks.length === index + 1 ? observerCallback : null}
        />
      ))}
    </StyledArtworkGrid>
  );
};
