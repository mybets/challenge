/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
