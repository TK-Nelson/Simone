import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.leftNav} data-tid="leftNav">
        <p>test</p>
      </div>

      <div className={styles.rightContent} data-tid="container">
      <div>
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>

        <button onClick="" >Test</button>
      </div>

    </div>
  );
}
