import React from 'react';
import ClientHeader from '../../organisms/client-header/ClientHeader';

const ClientTemplate: React.FC = () => (
  <React.Fragment>
    <div>
      <ClientHeader />
    </div>
    <div />
    <div>Body</div>
    <div>Footer</div>
  </React.Fragment>
);

export default ClientTemplate;
