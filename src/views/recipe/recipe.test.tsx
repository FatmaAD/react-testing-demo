
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRecipeDetails from '../../actions/recipe';
import { mockedRecipe } from '../../mocks/recipe.mock';
import RecipeView from "./index";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    recipeName: '8246',
  }),
}));

jest.mock('../../actions/recipe', () => {
  return jest.fn();
});

describe('the recipe view loads the correct data', () => {
  test("display loader while loading data from server", async () => {
    (useRecipeDetails as jest.Mock).mockReturnValue({
      getRecipe: jest.fn(),
      isLoading: true,
      recipe: undefined,
    });
    render(<Router><RecipeView /></Router>);
    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
  });

  test('finished loading without data', async () => {
    (useRecipeDetails as jest.Mock).mockReturnValue({
      getRecipe: jest.fn(),
      isLoading: false,
      recipe: undefined,
    });
    render(<Router><RecipeView /></Router>);
    expect(await screen.findByRole('heading', {
      name: /sorry, no data to display/i
    })).toBeInTheDocument();
  });

  test('loads the video', async () => {
    (useRecipeDetails as jest.Mock).mockReturnValue({
      getRecipe: jest.fn(),
      isLoading: false,
      recipe: mockedRecipe,
    });
    render(<Router><RecipeView /></Router>);
    const video = await screen.findByTestId('recipe-video')
    expect(video).toBeInTheDocument();
  });

  test('displays the recipe preparations correctly', async () => {
    (useRecipeDetails as jest.Mock).mockReturnValue({
      getRecipe: jest.fn(),
      isLoading: false,
      recipe: mockedRecipe,
    });
    render(<Router><RecipeView /></Router>);
    const preparationStepOne = screen.getByRole('heading', { name: /\bMarinate the chicken/i })
    expect(preparationStepOne).toBeInTheDocument();
  });
})