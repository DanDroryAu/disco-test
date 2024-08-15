export type Color = {
  h: number; // Hue
  s: number; // Saturation
  l: number; // Lightness
};

export type DimensionsDetail = {
  height?: number; // Height in cm
  width?: number; // Width in cm
  depth?: number; // Depth in cm
  diameter?: number; // Diameter in cm
};

export type SuggestAutocomplete = {
  // Define the shape based on your internal requirements
};

export type SuggestAutocompleteAll = {
  // Define the shape based on your internal requirements
};

export type Artwork = {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string[];
  thumbnail: any[]; // Define more precisely if possible
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: number;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  dimensions: string;
  dimensions_detail: DimensionsDetail;
  medium_display: string;
  inscriptions: string;
  credit_line: string;
  catalogue_display: string;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  edition: string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: number;
  longitude: number;
  latlon: string;
  is_on_view: boolean;
  on_loan_display: string;
  gallery_title: string;
  gallery_id: number;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: number;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: number[];
  category_titles: string[];
  term_titles: string[];
  style_id: string;
  style_title: string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string; // UUID
  alt_image_ids: string[]; // UUIDs
  document_ids: string[]; // UUIDs
  sound_ids: string[]; // UUIDs
  video_ids: string[]; // UUIDs
  text_ids: string[]; // UUIDs
  section_ids: string[]; // UUIDs
  section_titles: string[];
  site_ids: string[]; // UUIDs
  suggest_autocomplete_boosted: SuggestAutocomplete;
  suggest_autocomplete_all: SuggestAutocompleteAll;
  source_updated_at: string; // ISO 8601 date and time
  updated_at: string; // ISO 8601 date and time
  timestamp: string; // ISO 8601 date and time
};