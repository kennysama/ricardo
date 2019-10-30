import React from 'react';

import styles from './Home.module.scss';
import { ERouterPath } from '../../../types';

const Home: React.FC = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <div>options</div>

      <div className={styles.logo} />
    </div>
    <h2>Title</h2>
    <p>body</p>
  </div>
);

export default Home;
