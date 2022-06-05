import { useState } from "react";
import { http } from "..";

export interface Feed {
    item: {
        country?: string;
        description?: string;
        id: number;
        name: string;
        original_video_url?: string;
        thumbnail_alt_text?: string;
        thumbnail_url: string;
        tips_and_ratings_enabled?: boolean;
        topics?: any[];
        user_ratings?: { count_positive: number, score: number, count_negative: number };
        video_id?: number;
        video_url?: string;
    };
    type: "featured" | "item" | "shoppable_carousel" | "carousel";
}

export default function useRecipe() {
    const [feeds, setFeeds] = useState<Feed[]>([]);
    const [isLoading, seIsLoading] = useState(false);

    const getSimilarFeed = (searchWord?: string) => {
        seIsLoading(true);
        const res = http('GET', 'https://tasty.p.rapidapi.com/feeds/list', { size: '5', vegetarian: 'false', from: '5', search_terms: searchWord,  })
        res.then(data => {
            const similarities = data.data.results?.filter((f: Feed) => f.type === 'item')
            if (similarities.length > 0) {
               setFeeds(similarities);
            };

        }).finally(() => {
            seIsLoading(false);
        })
    }
    

    return { getSimilarFeed, feeds, isLoading }
}