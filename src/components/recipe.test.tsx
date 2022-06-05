import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipe from './recipe';
import { Feed } from '../actions/landing/recipe';

test('renders recipe empty state', () => {
  render(<Recipe isLoading={false} feeds={[]} />);
  const emptyCase = screen.getByText(/no result found/i);
  expect(emptyCase).toBeInTheDocument();
});

test('renders loader while loading api data', () => {
  render(<Recipe isLoading={true} feeds={[]} />);
  const loader = screen.getByRole('progressbar');
  expect(loader).toBeInTheDocument();
});


//React-testing-library promotes to test like a real user would : 
//check printed strings, number of elements, labels, placeholders, roles...
test('loads the recipe option correctly', async () => {
  const mockedFeed: Feed[] = [{
    item: {
      country: "US",
      description: 'just something abouth this mocked recipe',
      id: 123,
      name: 'mocked recipe 1',
      thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/364998.jpg",
    },
    type: "item"
  },
  {
    item: {
      country: "US",
      description: 'just something abouth this mocked recipe',
      id: 178,
      name: 'mocked recipe 2',
      thumbnail_url: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/364998.jpg",
    },
    type: "item"
  }]
  render(<Recipe isLoading={false} feeds={mockedFeed} />);
  const mockedRecipes = await screen.findAllByTestId('recipe');
  expect(mockedRecipes).toHaveLength(2);

});