import React , { Component} from 'react';
import { Link , Route } from 'react-router-dom';
import routes from '../../constants/routes.json';
import Navigation from '../../components/Navigation';
import styles from '../../components/Home.scss';

export default function Tasks(): JSX.Element {
  return(
    <div className={styles.appWrapper}>
      <Navigation />
      <div className={styles.rightContent} data-tid="container">
        <h2>Test</h2>
      </div>
    </div>
  );
}
