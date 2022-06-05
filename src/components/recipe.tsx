import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, LinearProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Feed } from '../actions/landing/recipe';

interface Props {
    isLoading: boolean;
    feeds: Feed[];
}

export default function Recipe(props: Props) {
    const { isLoading, feeds, } = props;
    console.log('Recipe feeds', isLoading, feeds);

    return <Box width="100vw">
        {isLoading && <LinearProgress  />}
        {!isLoading && feeds.length === 0 && <Box style={{ border: '1px solid #ccc' }}>
            <Typography>no result found</Typography>
        </Box>}
        {!isLoading && feeds.length > 0 && <Box
            marginY={3}
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="flex-start">
            {feeds.map(feed => (
                <Box
                    m={3}
                    display="flex"
                    data-testid='recipe'
                    key={feed.item.id}
                >
                    <Card sx={{ maxWidth: 345, height: '370px' }} onClick={()=>{window.location.assign(`/${feed.item.id}`)}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={feed.item.thumbnail_url}
                                alt={feed.item.thumbnail_alt_text}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {feed.item.name}
                                </Typography>
                                <Typography style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {feed.item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

            ))}
        </Box>

        }
    </Box>
}