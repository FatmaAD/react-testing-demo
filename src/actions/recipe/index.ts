import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "..";

interface Recipe {
    instructions: Array<{
        display_text: string;
        end_time: number;
        id: number;
        position: number;
        start_time: 0
    }>;
    cook_time_minutes: number;
    original_video_url?: string;
    video_url?: string;
    thumbnail_alt_text?: string;
    thumbnail_url?: string;
    name: string;
    nutrition: {
        calories: number;
        carbohydrates: number;
        fat: number;
        fiber: number;
        protein: number;
        sugar: number;
    }
}

const useRecipeDetails = () => {
    const { recipeName } = useParams<'recipeName'>();
    const [isLoading, seIsLoading] = useState(false);
    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipe = useCallback(() => {
        if (!recipeName) {
            return
        }
        seIsLoading(true);
        const res = http('GET', 'https://tasty.p.rapidapi.com/recipes/get-more-info', { id: recipeName })
        res.then(data => {
            console.log('<<<< data >>>>', data.data)
            setRecipe(data.data);
        }).finally(() => {
            seIsLoading(false);
        })
    }, [recipeName]);

    useEffect(() => {
        getRecipe();
    }, [getRecipe])

    return {
        isLoading,
        recipe
    }
}

export default useRecipeDetails;
