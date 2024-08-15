import type { Artwork } from './Artwork';

export type Pagination = {
  total: number;
  current_page: number;
  limit: number;
  next_url: string;
  offset: number;
  total_pages: number;
};

export type Info = {
  license_links: string[];
  version: string;
  license_text: string;
};

export type Config = {
  iiif_url: string;
  website_url: string;
};

export type ApiResponse<T = unknown> = {
  data: T;
  pagination: Pagination;
  info: Info;
  config: Config;
};

export type ArtworkApiResponse = ApiResponse<Artwork>;
export type ArtworksApiResponse = ApiResponse<Artwork[]>;

export type ArtworkApiRequest = {
  id?: string;
};

export type ArtworksApiRequest = {
  fields?: string[];
  pagination?: {
    page?: number;
    limit?: number;
  };
};
