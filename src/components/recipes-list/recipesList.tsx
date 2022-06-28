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
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../interfaces/Recipe";

interface Props {
  isLoading: boolean;
  recipes: Recipe[];
}

export default function RecipesList(props: Props) {
  const navigate = useNavigate();
  const { isLoading, recipes } = props;

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

      {!isLoading && recipes.length > 0 && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          {recipes.map((recipe) => (
            <Box m={3} display="flex" data-testid="recipe" key={recipe.id}>
              <Card
                sx={{ maxWidth: 345, height: "370px" }}
                onClick={() => {
                  navigate(`/${recipe.id}`);
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.thumbnail_url}
                    alt={recipe.thumbnail_alt_text}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {recipe.name}
                    </Typography>
                    <Typography
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {recipe.description}
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
