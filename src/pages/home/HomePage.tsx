import { useGetArtworksQuery } from '@/api/articApi/articApiSlice';
import { useMemo } from 'react';
import ArtworkGrid from '@/components/ArtworkGrid';

import { getImgPath } from '@/utils/imageUtils';

export const HomePage = () => {
  const { data, isError, isLoading, isSuccess } = useGetArtworksQuery({});

  const artworks = useMemo(
    () =>
      data?.data
        ? data.data.map((artwork) => ({
            id: artwork.id,
            title: artwork.title,
            artist_title: artwork.artist_title,
            imagePath: getImgPath({
              imageId: artwork.image_id,
              root: data.config.iiif_url,
              size: 'thumb',
            }),
          }))
        : [],
    [data]
  );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && <ArtworkGrid artworks={artworks} />}
    </div>
  );
};
