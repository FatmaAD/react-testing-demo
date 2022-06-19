import { CircularProgress, Box, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import useRecipeDetails from '../../actions/recipe';
import Nav from '../../components/nav'

export default function Recipe() {
    const { isLoading, recipe } = useRecipeDetails();

    return <Box >
        <Nav />
        {isLoading && <CircularProgress role="progressbar" />}
        {!isLoading && !recipe && <Box width="100%" height="100vh" display="flex" justifyContent="center" >
            <Typography color="secondary" variant="h3">Sorry, No data to display</Typography>
        </Box>}
        {recipe && <Box mx={1} mt={2} display="flex" flexWrap="nowrap" flexDirection="row" alignItems="start" justifyContent="start">
            <Box width='33.3%'>
                <Typography variant="h5">Nutrition Info</Typography>
                <Box display="flex" flexWrap="nowrap" flexDirection="row">
                    <Box width="49%" display="flex" flexWrap="wrap">
                        {Object.keys(recipe.nutrition).map(key => <Typography key={key} style={{ width: '100%' }} component="div" variant="subtitle1">{key} </Typography>)}
                    </Box>
                    <Box width="48%" display="flex" flexWrap="wrap">
                        {Object.values(recipe.nutrition).map(value => <Typography key={value} lineHeight={1.75} style={{ width: '100%' }} component="div" variant="subtitle2">{value}</Typography>)}
                    </Box>
                </Box>
            </Box>

            <Box width='33.3%'>
                <Typography variant="h5">Preparation</Typography>
                <Box mr={2} style={{
                    height: 280,
                    overflow: 'auto',
                }}
                    display="flex" flexWrap="wrap" flexDirection="column">
                    <Box display="flex" flexWrap="wrap">
                        {recipe.instructions.sort(ing => ing.position).map(instruc => <Fragment key={instruc.id}>
                            <Typography mb={2} variant="subtitle1">
                                <span style={{ color: "#a5a5a5", fontWeight: 'bold', marginRight: 10 }}>
                                    {instruc.position}
                                </span>
                                {instruc.display_text}
                            </Typography>
                        </Fragment>
                        )}
                    </Box>

                </Box>
            </Box>

            <Box width='33.3%'>
                {recipe.original_video_url && (
                    <video data-testid='recipe-video' title={recipe.name} width="100%" src={recipe.original_video_url || recipe?.video_url} controls />
                )}

                {!recipe?.video_url && recipe?.thumbnail_url && (
                    <img
                        data-testid='recipe-img'
                        style={{
                            backgroundSize: 'cover',
                            width: '-webkit-fill-available'
                        }} src={recipe?.thumbnail_url} alt={recipe?.thumbnail_alt_text}
                    />)}
            </Box>
        </Box>}
    </Box>

}