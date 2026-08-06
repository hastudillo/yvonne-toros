export type SearchResponse = {
  orderedItems: Array<{
    id: string;
    type?: string;
  }>;
};

export type LinkedArtObject = {
  shows?: Array<{
    id: string;
  }>;
};

export type VisualItem = {
  digitally_shown_by?: Array<{
    id: string;
  }>;
};

export type DigitalObject = {
  access_point?: Array<{
    id: string;
  }>;
};
