import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "..";

export interface Recipe {
    instructions: Array<{
        display_text: string;
        end_time: number;
        id: number;
        position: number;
        start_time: number;
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
    const [isLoading, seIsLoading] = useState(true);
    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipe = useCallback(() => {
        if (!recipeName) {
            return
        }
        // seIsLoading(true);
        const res = http('GET', 'https://tasty.p.rapidapi.com/recipes/get-more-info', { id: recipeName })
        res.then(data => {
            setRecipe(data.data);
        }).catch(()=>{
            new Error('failed to load recipe')
        }).finally(() => {
            seIsLoading(false);
        })
    }, [recipeName]);

    useEffect(() => {
        getRecipe();
    }, [getRecipe])

    return {
        getRecipe,
        isLoading,
        recipe
    }
}

export default useRecipeDetails;
