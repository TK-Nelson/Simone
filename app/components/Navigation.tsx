import React, { Component } from "react";
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

export default function Navigation() :JSX.Element {
  return(
    <nav className={styles.leftNav} data-tid="leftNav">
      <div>
        <Link to={routes.TASKS}>
          <i className={styles.icon +' '+ styles.icon_Tasklis} />
        </Link>
      </div>
      <div>
        <Link to={routes.COUNTER}>
          <i className={styles.icon +' '+ styles.icon_profit} />
        </Link>
      </div>
    </nav>
  );
}
