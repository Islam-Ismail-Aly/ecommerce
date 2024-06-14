import React from 'react'
import styles from '../myStyles/NotFoundStyle.module.css';

   export function NotFound() {
      return (
        <div className={`${styles.container} ${styles.errorContainer}`}>
          <div className={styles.errorHeading}>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className={`${styles.errorHeading} ${styles.movingImage}`}>
            <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="404 Not Found" />
          </div>
          <span className={`${styles.errorMessage} bg-danger-subtle px-5 py-1 m-3 rounded-pill text-danger`}>
            Oops! Page not found. <i className="bi bi-exclamation-triangle text-danger fs-4"></i>
          </span>
        </div>
      );
    }
