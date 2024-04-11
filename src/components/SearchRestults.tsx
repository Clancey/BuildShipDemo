import { FunctionComponent } from "react";
import styles from "./SearchRestults.module.css";

export type SearchRestultsType = {
  distance?: string;
  duration?: string;
  cost?: string;
};

const SearchRestults: FunctionComponent<SearchRestultsType> = ({
  distance,
  duration,
  cost,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.mainStAnytown}>
          <div className={styles.distance}>Distance</div>
          <div className={styles.km}>{distance}</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <div className={styles.durationParent}>
            <div className={styles.duration}>Duration</div>
            <div className={styles.hour49Mins}>{duration}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
          <div className={styles.estCostParent}>
            <div className={styles.estCost}>Est. cost</div>
            <div className={styles.div}>{cost}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRestults;
