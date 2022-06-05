import { useState } from "react";
import { http } from "..";

interface RecipeOptions {
    "display": string
    "search_value": string
    "type": string
}

const useSearch = () => {
    const [recipesOptions, setRecipesOptions] = useState<string[]>([]);

    function autocompleteRecipe(recipeName: string) {
        const res = http<Array<RecipeOptions>>('GET', 'https://tasty.p.rapidapi.com/recipes/auto-complete', { prefix: recipeName });
        res.then((data: any) => {
            const options = data.data.results.length > 0 ? data.data.results.map((o: RecipeOptions) => o.display) : []

            setRecipesOptions(options);
        });
    }

    return { recipesOptions, autocompleteRecipe }
}

export default useSearch;
