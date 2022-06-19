import { CircularProgress } from '@mui/material';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Landing = React.lazy(() => /*landing*/ import('../views/landing'));
const Recipe = React.lazy(() => /*landing*/ import('../views/recipe'));
const baseRoute = 'react-testing-demo'
const AppRoutes = () => {
    return (
      <React.Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <Routes>
            <Route path={`${baseRoute}/`} element={<Landing />} />
            <Route path={`${baseRoute}/:recipeName`} element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    );
  };

  export default AppRoutes;