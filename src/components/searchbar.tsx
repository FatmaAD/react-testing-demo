import React from 'react';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

interface Props {
  recipesOptions: string[];
  getSimilarFeed: (value: string) => void;
  autocompleteRecipe: (value: string) => void;
}

export default function SearchBar(props: Props) {

  const { recipesOptions, getSimilarFeed, autocompleteRecipe } = props;

  return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
    <Typography style={{marginBottom: '5px'}} variant="h4" color="secondary">What are you looking for ?</Typography>
    <Autocomplete
      style={{width: '50%'}}
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