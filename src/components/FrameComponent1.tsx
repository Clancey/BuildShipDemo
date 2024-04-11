import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.theBridlePathParent}>
          <h2 className={styles.theBridlePath}>The Bridle Path</h2>
          <div className={styles.frameContainer}>
            <div className={styles.tablerstarFilledParent}>
              <img
                className={styles.tablerstarFilledIcon}
                loading="lazy"
                alt=""
                src="/tablerstarfilled.svg"
              />
              <img
                className={styles.tablerstarFilledIcon1}
                loading="lazy"
                alt=""
                src="/tablerstarfilled.svg"
              />
              <img
                className={styles.tablerstarFilledIcon2}
                alt=""
                src="/tablerstarfilled.svg"
              />
              <img
                className={styles.tablerstarFilledIcon3}
                alt=""
                src="/tablerstarfilled.svg"
              />
              <img
                className={styles.tablerstarFilledIcon4}
                alt=""
                src="/tablerstarfilled-4.svg"
              />
            </div>
            <div className={styles.reviews}>2106 reviews</div>
          </div>
        </div>
        <div className={styles.sushiRiceHealthyTab}>
          <div className={styles.birchBlvdHarmonyville}>
            397 Birch Blvd, Harmonyville
          </div>
          <div className={styles.viewInGoogle}>View in Google Maps</div>
        </div>
      </div>
      <div className={styles.petFriendlyTab}>
        <div className={styles.restaurantInfo}>
          <div className={styles.icbaselineShareWrapper}>
            <img
              className={styles.icbaselineShareIcon}
              loading="lazy"
              alt=""
              src="/icbaselineshare.svg"
            />
          </div>
          <div className={styles.share}>Share</div>
        </div>
        <div className={styles.restaurantInfo1}>
          <div className={styles.mdiheartWrapper}>
            <img
              className={styles.mdiheartIcon}
              loading="lazy"
              alt=""
              src="/mdiheart.svg"
            />
          </div>
          <div className={styles.addToFavourites}>Add to Favourites</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
