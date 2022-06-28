export interface Recipe {
  country?: string;
  name: string;
  id: string;
  cook_time_minutes?: number;
  description?: string;
  instructions?: Array<{
    display_text: string;
    end_time: number;
    id: number;
    position: number;
    start_time: number;
  }>;
  original_video_url?: string;
  video_url?: string;
  thumbnail_alt_text?: string;
  thumbnail_url?: string;
  nutrition?: {
    calories: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    protein: number;
    sugar: number;
  };
  user_ratings?: {
    count_positive: number;
    score: number;
    count_negative: number;
  };
  tags?: Array<{
    id: number;
    display_name: string;
    type: string;
    name: string;
  }>;
}
