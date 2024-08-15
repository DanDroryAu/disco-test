import { useGetArtworkQuery } from '@/api/articApi/articApiSlice';
import { useParams, useNavigate } from 'react-router-dom';
import ArtDetails from '@/components/ArtDetails';
import { getImgPath } from '@/utils/imageUtils';

export const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetArtworkQuery({ id: params.id });

  const handleNavigateBack = () => {
    navigate('/');
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <ArtDetails
          onBackClick={handleNavigateBack}
          {...data.data}
          imagePath={getImgPath({
            imageId: data.data.image_id,
            root: data.config.iiif_url,
            size: 'full',
          })}
        />
      )}
    </div>
  );
};
