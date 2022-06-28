import { useState } from "react";
import { http } from "..";
import { Recipe } from "../../interfaces/Recipe";

export default function useRecipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, seIsLoading] = useState(false);

  const getSimilarFeed = (searchWord?: string) => {
    seIsLoading(true);
    const res = http("GET", "https://tasty.p.rapidapi.com/recipes/list", {
      size: "10",
      from: "0",
      q: searchWord,
    });
    res
      .then((data) => {
        const similarities = data.data.results;
        console.log(similarities);
        if (similarities.length > 0) {
            setRecipes(similarities);
        }
      })
      .finally(() => {
        seIsLoading(false);
      });
  };

  return { getSimilarFeed, recipes, isLoading };
}
