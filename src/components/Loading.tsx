import React from "react";
import styles from "../styles/Scss/Loading.module.scss";

type Props = {};

const Loading = (props: Props) => {
  return (
    <>
      <p>Loading weather..</p>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Loading;
