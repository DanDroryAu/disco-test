import { useGetArtworksQuery } from '@/api/articApi/articApiSlice';
import { useCallback, useEffect, useRef, useState } from 'react';
import ArtworkGrid, {
  type Props as ArtworkProps,
} from '@/components/ArtworkGrid';

import { getImgPath } from '@/utils/imageUtils';

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const [artworks, setArtworks] = useState<ArtworkProps['artworks']>([]);
  const observer = useRef<IntersectionObserver>();

  const { data, isLoading } = useGetArtworksQuery({
    pagination: { limit: 20, page },
  });

  useEffect(() => {
    setArtworks((prevArtworks) => [
      ...prevArtworks,
      ...(data?.data
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
        : []),
    ]);
  }, [data]);

  const lastPostElementRef = useCallback(
    (node: Element) => {
      if (isLoading) return; // if loading, do nothing (prevent multiple calls to the api
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // trigger loading of new posts by chaging page no
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <ArtworkGrid
          artworks={artworks}
          observerCallback={lastPostElementRef}
        />
      )}
    </div>
  );
};
