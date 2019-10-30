import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import { ERouterPath } from '../../../types';

const ClientTemplate: React.FC = () => (
  <React.Fragment>
    <Route id={ERouterPath.home} path="/" component={Home} />
  </React.Fragment>
);

export default ClientTemplate;
