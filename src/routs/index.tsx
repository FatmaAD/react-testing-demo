import { CircularProgress } from '@mui/material';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Landing = React.lazy(() => /*landing*/ import('../views/landing'));
const Recipe = React.lazy(() => /*landing*/ import('../views/recipe'));

const AppRoutes = () => {
    return (
      <React.Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:recipeName" element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    );
  };

  export default AppRoutes;