import React from 'react';
import { Box } from '@mui/material';
import SearchBar from '../components/searchbar';
import Recipe from '../components/recipe';
import Nav from '../components/nav';
import useSearch from '../actions/landing/search';
import useRecipe from '../actions/landing/recipe';

export default function HomePage() {
    const { recipesOptions, autocompleteRecipe } = useSearch();
    const { getSimilarFeed, feeds, isLoading } = useRecipe();

    return (<Box height="100vh">
        <Nav />
        <SearchBar 
            getSimilarFeed={getSimilarFeed}
            recipesOptions={recipesOptions}
            autocompleteRecipe={autocompleteRecipe} 
        />
        <Recipe feeds={feeds} isLoading={isLoading} />
    </Box>)
}