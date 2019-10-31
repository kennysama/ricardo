import React from 'react';

import styles from './Home.module.scss';
import { ERouterPath } from '../../../types';

const Home: React.FC = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <div />
      <div className={styles.logo} />
    </div>
    <div className={styles.body}>
      <h2>Dr Ricardo Lezcano</h2>
      <p>Flebología / FleboEstetica</p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus enim
        id ipsum autem culpa cum, itaque ab nisi ad expedita, nemo, pariatur
        ipsam eos. Fuga cumque officia quis ut omnis.
      </p>
    </div>
  </div>
);

export default Home;
