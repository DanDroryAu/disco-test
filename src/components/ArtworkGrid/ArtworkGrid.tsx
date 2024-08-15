import { StyledArtworkGrid } from './styles';
import ArtworkTile, {
  type Props as ArtworkTileProps,
} from '@/components/ArtworkTile';

export type Props = {
  artworks: ArtworkTileProps[];
};

export const ArtworkGrid = ({ artworks }: Props) => (
  <StyledArtworkGrid>
    {artworks.map((artwork) => (
      <ArtworkTile key={artwork.id} {...artwork} />
    ))}
  </StyledArtworkGrid>
);
