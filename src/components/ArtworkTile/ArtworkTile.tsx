import type { Artwork } from '@/api/articApi/types/Artwork';
import Card from '@/components/Card';
import { Artist, ArtworkImage, ArtworkTileCardContent, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';

export type Props = Pick<Artwork, 'title' | 'artist_title' | 'id'> & {
  imagePath: string;
};

export const ArtworkTile = forwardRef(
  ({ id, title, artist_title, imagePath }: Props, ref) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(`/artwork/${id}`);
    };

    return (
      <div ref={ref as React.LegacyRef<HTMLDivElement>}>
        <Card onClick={handleNavigate}>
          <ArtworkTileCardContent>
            <ArtworkImage src={imagePath} alt={title} />
            <Title>{title}</Title>
            <Artist>{artist_title}</Artist>
          </ArtworkTileCardContent>
        </Card>
      </div>
    );
  }
);
