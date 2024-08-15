import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ArtworkApiRequest,
  ArtworkApiResponse,
  ArtworksApiRequest,
  ArtworksApiResponse,
} from '@/api/articApi/types/requests';

const defaultFields = ['id', 'title', 'artist_title', 'image_id'];
const defaultPagination = { limit: 20, page: 1 };

const API_PREFIX = '/api/v1';

export const articApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ARTWORK_API_URL }),
  reducerPath: 'articAPI',
  tagTypes: ['Artworks', 'Artwork'],
  endpoints: (build) => ({
    getArtworks: build.query<ArtworksApiResponse, ArtworksApiRequest>({
      query: ({ pagination = defaultPagination, fields = defaultFields }) => {
        return {
          url: `${API_PREFIX}/artworks/`,
          params: {
            fields,
            limit: pagination?.limit,
            page: pagination?.page,
          },
        };
      },
      providesTags: (result, error, { pagination }) => [
        { type: 'Artworks', id: pagination?.page || 0 },
      ],
    }),
    getArtwork: build.query<ArtworkApiResponse, ArtworkApiRequest>({
      query: ({ id }) => `${API_PREFIX}/artworks/${id}`,
      providesTags: (result, error, { id }) => [{ type: 'Artwork', id }],
    }),
    // Other endpoints here. If this list grows I would try to split this file into folders. This does require the EndpointBuilder type to be used in the split files.
  }),
});

export const { useGetArtworksQuery, useGetArtworkQuery } = articApiSlice;
