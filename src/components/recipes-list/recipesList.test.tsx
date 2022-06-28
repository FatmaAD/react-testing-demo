import React from "react";
import { render, screen } from "@testing-library/react";
import RecipesList from ".";
import { Recipe } from "../../interfaces/Recipe";
import { BrowserRouter as Router } from "react-router-dom";

test("renders loader while loading api data", () => {
  render(<Router><RecipesList isLoading={true} recipes={[]} /></Router>);
  const loader = screen.getByRole("progressbar");
  expect(loader).toBeInTheDocument();
});

//React-testing-library promotes to test like a real user would :
//check printed strings, number of elements, labels, placeholders, roles...
test("loads the recipe option correctly", async () => {
  const mockedFeed: Recipe[] = [
    {
      country: "US",
      description: "just something abouth this mocked recipe",
      id: '123',
      name: "mocked recipe 1",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/364998.jpg",
    },
    {
      country: "US",
      description: "just something abouth this mocked recipe",
      id: '178',
      name: "mocked recipe 2",
      thumbnail_url:
        "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/364998.jpg",
    },
  ];
  render(<Router><RecipesList isLoading={false} recipes={mockedFeed} /></Router>);
  const mockedRecipes = await screen.findAllByTestId("recipe");
  expect(mockedRecipes).toHaveLength(2);
});
