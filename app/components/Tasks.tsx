import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';
import Navigation from './Navigation';
import TasksRows from './reusable/TasksRows';

export default function Tasks(): JSX.Element {
  return (
    <div className={styles.appWrapper}>
    <Navigation />
      <div className={styles.rightContent} data-tid="container">
        <div>
          <h2>Tasks</h2>
          <TasksRows title="Testing" content="testing2"/>
        </div>
      </div>
    </div>
  );
}
