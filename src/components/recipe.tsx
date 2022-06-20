import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Feed } from "../actions/landing/recipe";
import { useNavigate } from "react-router-dom";
import ThinkingImoji from '../assets/thinking.jpeg';

interface Props {
  isLoading: boolean;
  feeds: Feed[];
}

export default function Recipe(props: Props) {
  const navigate = useNavigate();
  const { isLoading, feeds } = props;

  return (
    <Box>
      {isLoading && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
        >
          <LinearProgress style={{ width: "50%" }} />
        </Box>
      )}
      {!isLoading && feeds.length === 0 && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <img height="420" src={ThinkingImoji} alt="thinking imoji" />
        </Box>
      )}
      {!isLoading && feeds.length > 0 && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          {feeds.map((feed) => (
            <Box m={3} display="flex" data-testid="recipe" key={feed.item.id}>
              <Card
                sx={{ maxWidth: 345, height: "370px" }}
                onClick={() => {
                  navigate(`/${feed.item.id}`);
                }}
              >
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
                    <Typography
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
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
      )}
    </Box>
  );
}
