export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
  };
  likes: number;
  created_at: string;
  width: number;
  height: number;
  description?: string;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}

export interface FetchImagesProps {
  searchQuery: string;
  pageNum: number;
}
