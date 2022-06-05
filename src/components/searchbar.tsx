import React from 'react';
import { Autocomplete, Box, Button, TextField } from '@mui/material';

interface Props {
  recipesOptions: string[];
  getSimilarFeed: (value: string) => void;
  autocompleteRecipe: (value: string) => void;
}

export default function SearchBar(props: Props) {

  const { recipesOptions, getSimilarFeed, autocompleteRecipe } = props;

  return <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
    <Autocomplete
      fullWidth
      autoComplete={false}
      options={recipesOptions}
      onChange={(event: any, value: any) => {
        getSimilarFeed(value);   
      }}
      onInputChange={(event: any, value: any) => {
        if (value) {
          autocompleteRecipe(value);
        }

      }}
      renderInput={params => (
        <TextField {...params} />
      )}
    />
  </Box>
}