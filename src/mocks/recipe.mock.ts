import { Recipe } from "../actions/recipe";

export const mockedRecipe: Recipe = {
  cook_time_minutes: 70,
  instructions: [{
    start_time: 98000,
    end_time: 114000,
    id: 71703,
    display_text: "Marinate the chicken: In a large bowl, whisk together the yogurt",
    position: 1
  }],
  name: "How To Make The Best Bombay Biryani",
  nutrition: { calories: 689, carbohydrates: 92, fat: 20, fiber: 47, protein: 37, sugar: 17 },
  original_video_url: "https://s3.amazonaws.com/video-api-prod/assets/c984bf49a2514f6da4b505712348dff9/BFV90467_Biryani101_JW_051722_V04_16x9_YT.mp4",
  thumbnail_alt_text: "101",
  thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/379626.jpg",
  video_url: "https://vid.tasty.co/output/240726/hls24_1653438285.m3u8",
};