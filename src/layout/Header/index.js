import React from 'react';
import styles from './styles.module.css';

export default function Header() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.logoCtn}`}>
        <div className={`${styles.logoWrapper}`}></div>
        <div className={`${styles.logoName}`}>Logo</div>
      </div>
      <div className={`${styles.blog}`}>Blogs</div>
      <div className={`${styles.nameCtn}`}>
        <img
          src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          className={`${styles.avatarCtn}`}
        />
        <div className={`${styles.name}`}>Adam Levine</div>
      </div>
    </div>
  );
}
