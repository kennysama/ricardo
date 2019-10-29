import React from 'react';
import { Route } from 'react-router-dom';

import ClientHeader from '../../organisms/client-header/ClientHeader';
import ClientFooter from '../../organisms/client-footer/ClientFooter';
import Home from '../../pages/home/Home';

const ClientTemplate: React.FC = () => (
  <React.Fragment>
    <div>
      <ClientHeader />
    </div>
    <div />

    <Route path="/" component={Home} />

    <div>
      <ClientFooter />
    </div>
  </React.Fragment>
);

export default ClientTemplate;
