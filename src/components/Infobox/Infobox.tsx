import React from "react";
import styles from "../../styles/Scss/Infobox.module.scss";

type Props = {};

const Infobox = (props: Props) => {
  return (
    <div className={styles.infobox}>
      <svg className={styles.icon} width="18" viewBox="0 0 448 512">
        <path d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
      </svg>
      <div className={styles.contents}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.text}>
          To see all the supported cities, please click on the link below.
        </p>
        <a
          className={styles.link}
          href="https://www.metaweather.com/"
          target="_blank"
          rel="noreferrer"
        >
          More info
        </a>
      </div>
    </div>
  );
};

export default Infobox;
