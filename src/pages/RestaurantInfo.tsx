import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./RestaurantInfo.module.css";

const RestaurantInfo: FunctionComponent = () => {
  return (
    <div className={styles.restaurantInfo}>
      <header className={styles.logoParent}>
        <div className={styles.logo}>
          <img
            className={styles.logo2Icon}
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <div className={styles.homeParent}>
          <img
            className={styles.homeIcon}
            loading="lazy"
            alt=""
            src="/home@2x.png"
          />
          <img
            className={styles.discoverIcon}
            loading="lazy"
            alt=""
            src="/discover.svg"
          />
          <img
            className={styles.favIcon}
            loading="lazy"
            alt=""
            src="/fav.svg"
          />
          <img
            className={styles.historyIcon}
            loading="lazy"
            alt=""
            src="/history.svg"
          />
        </div>
        <div className={styles.profile}>
          <img
            className={styles.profileChild}
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div className={styles.lilyWhitmoreParent}>
            <div className={styles.lilyWhitmore}>Lily Whitmore</div>
            <div className={styles.travelerEnthusiast}>Traveler Enthusiast</div>
          </div>
          <img
            className={styles.iconamoonarrowUp2Light}
            alt=""
            src="/iconamoonarrowup2light@2x.png"
          />
        </div>
      </header>
      <main className={styles.priceRangeComponent}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default RestaurantInfo;
