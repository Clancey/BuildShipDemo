import { FunctionComponent } from "react";
import styles from "./RecommendationCard.module.css";

export type RecommendationCardType = {
  rating?: string;
  price?: string;
  address?: string;
  title?: string;
  fav?: string;
  claritystarSolid?: string;
};

const RecommendationCard: FunctionComponent<RecommendationCardType> = ({
  rating,
  price,
  address,
  title,
  fav,
  claritystarSolid,
}) => {
  return (
    <div className={styles.recommendationcard}>
      <div className={styles.logoContainerParent}>
        <div className={styles.logoContainer}>
          <div className={styles.searchBar}>
            <div className={styles.actionsContainer}>
              <img
                className={styles.claritystarSolidIcon}
                loading="lazy"
                alt=""
                src={claritystarSolid}
              />
              <div className={styles.whereAreWe}>{rating}</div>
            </div>
          </div>
          <div className={styles.destinationFilter}>
            <div className={styles.distance}>
              <div className={styles.div}>{price}</div>
            </div>
          </div>
        </div>
        <div className={styles.recommendedPlaces}>
          <div className={styles.mainStAnytown}>{address}</div>
          <div className={styles.sortBy}>
            <div className={styles.joesDiner}>{title}</div>
            <img className={styles.favIcon} alt="" src={fav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
