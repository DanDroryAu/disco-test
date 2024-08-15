import type { Artwork } from '@/api/articApi/types/Artwork';
import Card from '@/components/Card';
import { Artist, ArtworkImage, ArtworkTileCardContent, Title } from './styles';
import { useNavigate } from 'react-router-dom';

export type Props = Pick<Artwork, 'title' | 'artist_title' | 'id'> & {
  imagePath: string;
};

export const ArtworkTile = ({ id, title, artist_title, imagePath }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/artwork/${id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <ArtworkTileCardContent>
        <ArtworkImage src={imagePath} alt={title} />
        <Title>{title}</Title>
        <Artist>{artist_title}</Artist>
      </ArtworkTileCardContent>
    </Card>
  );
};
