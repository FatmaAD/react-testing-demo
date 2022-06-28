import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "..";
import { Recipe } from "../../interfaces/Recipe";

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
