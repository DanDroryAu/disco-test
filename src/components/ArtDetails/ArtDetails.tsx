import {
  ArtContainer,
  Description,
  Detail,
  DetailsContainer,
  StyledArtDetails,
  Type,
} from './styles';
import type { Artwork } from '@/api/articApi/types/Artwork';

export type Props = Pick<
  Artwork,
  'title' | 'place_of_origin' | 'artist_display'
> & {
  onBackClick?: () => void;
  imagePath: string;
};

// TODO: would add more details here. Unsure about which field is what in the api. Spending a lot of time reading the docs for relevant info.
export const ArtDetails = ({
  title,
  onBackClick,
  imagePath,
  place_of_origin,
  artist_display,
}: Props) => {
  return (
    <StyledArtDetails>
      <div onClick={onBackClick}>back to all artworks</div>
      <ArtContainer>
        <img src={imagePath} alt={title} />
        <DetailsContainer>
          <Detail>
            <Type>Title</Type>
            <Description>{title}</Description>
          </Detail>
          <Detail>
            <Type>Artist</Type>
            <Description>{artist_display}</Description>
          </Detail>
          <Detail>
            <Type>From</Type>
            <Description>{place_of_origin}</Description>
          </Detail>
        </DetailsContainer>
      </ArtContainer>
    </StyledArtDetails>
  );
};
