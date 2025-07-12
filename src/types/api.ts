export interface Idea {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  small_image?: {
    id: number;
    url: string;
    mime: string;
  }[];
  medium_image?: {
    id: number;
    url: string;
    mime: string;
  }[];
}

export interface ApiResponse {
  data: Idea[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface ApiParams {
  'page[number]': number;
  'page[size]': number;
  'append[]': string[];
  sort: string;
}