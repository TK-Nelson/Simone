import React from 'react';
import styles from '../Home.scss';

import '../Home.scss';

function TasksRows(props) {
  return (
    <div className={styles.TasksRows}>
      <div className={styles.TasksRows__header}>
        <span>
          <i class="fas fa-caret-down"></i>
        </span>
        <h3>{props.title}</h3>
      </div>

      <div className={styles.TasksRows__body}>
        <p>{props.content}</p>
      </div>

    </div>
  );
}

export default TasksRows;
