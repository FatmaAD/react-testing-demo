import axios from "axios";
import useRecipe from "../../actions/recipe";
import { renderHook } from "@testing-library/react-hooks";
import { mockedRecipe } from "../../mocks/recipe.mock";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    recipeName: '8246',
  }),
}));

//creates a block that groups together several related tests
describe("testing the useRecipe hook functionality", () => {
  test("should return the recipe", async () => {
    // given
    const spyAxiosRequest = jest.spyOn(axios, 'request').mockResolvedValue(mockedRecipe);
    const {waitForNextUpdate} = renderHook(() => useRecipe());
    
    // when
    await waitForNextUpdate();

    // then

    expect(spyAxiosRequest).toHaveBeenCalled();
  });

  test("fails with empty recipe", async () => {
    // given
    jest.spyOn(axios, 'request').mockRejectedValue(new Error());
    const {result, waitForNextUpdate} = renderHook(() => useRecipe());
    
    // when
    await waitForNextUpdate();

    // then
    expect(result.current.recipe).toBe(undefined);
  });
});