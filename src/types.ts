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
