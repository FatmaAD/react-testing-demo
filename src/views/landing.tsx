import React from 'react';
import { Box } from '@mui/material';
import SearchBar from '../components/search-bar/searchbar';
import Recipe from '../components/recipes-list';
import Nav from '../components/nav/nav';
import useSearch from '../actions/landing/search';
import useRecipe from '../actions/landing/recipe';

export default function HomePage() {
    const { recipesOptions, autocompleteRecipe } = useSearch();
    const { getSimilarFeed, recipes, isLoading } = useRecipe();

    return (<Box height="100vh">
        <Nav />
        <SearchBar 
            getSimilarFeed={getSimilarFeed}
            recipesOptions={recipesOptions}
            autocompleteRecipe={autocompleteRecipe} 
        />
        <Recipe recipes={recipes} isLoading={isLoading} />
    </Box>)
}