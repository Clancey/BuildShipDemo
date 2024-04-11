import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.bxsushiIconWrapper}>
          <div className={styles.bxsushiIcon}>
            <div className={styles.phbowlfoodlightIcon}>
              <div className={styles.typeOfRestaurant}>TYPE OF RESTAURANT</div>
              <div className={styles.carbonpedestrianfamilyIcon}>
                <div className={styles.phdogIcon}>
                  <img
                    className={styles.bxsushiIcon1}
                    loading="lazy"
                    alt=""
                    src="/bxsushi.svg"
                  />
                  <div className={styles.sushi}>Sushi</div>
                </div>
                <div className={styles.phdogIcon1}>
                  <img
                    className={styles.phbowlFoodLightIcon}
                    loading="lazy"
                    alt=""
                    src="/phbowlfoodlight.svg"
                  />
                  <div className={styles.rice}>Rice</div>
                </div>
                <div className={styles.phdogIcon2}>
                  <img
                    className={styles.fluentbowlSalad20RegularIcon}
                    loading="lazy"
                    alt=""
                    src="/fluentbowlsalad20regular.svg"
                  />
                  <div className={styles.healthy}>Healthy</div>
                </div>
                <div className={styles.phdogIcon3}>
                  <img
                    className={styles.carbonpedestrianFamilyIcon}
                    loading="lazy"
                    alt=""
                    src="/carbonpedestrianfamily.svg"
                  />
                  <div className={styles.familyFriendly}>Family Friendly</div>
                </div>
                <div className={styles.phdogIcon4}>
                  <img
                    className={styles.phdogIcon5}
                    loading="lazy"
                    alt=""
                    src="/phdog.svg"
                  />
                  <div className={styles.petFriendly}>Pet Friendly</div>
                </div>
              </div>
            </div>
            <div className={styles.priceRangeLabel}>
              <div className={styles.priceRange}>PRICE RANGE</div>
              <div className={styles.iconForPriceTag}>
                <img
                  className={styles.icons8priceTag}
                  loading="lazy"
                  alt=""
                  src="/icons8pricetag.svg"
                />
                <div className={styles.div}>$$$</div>
              </div>
            </div>
            <div className={styles.aboutParent}>
              <div className={styles.about}>ABOUT</div>
              <div className={styles.discoverTheEssence}>
                Discover the essence of Japanese culinary excellence with The
                Bridle Path. Elevating traditional flavors with modern
                innovation, each dish promises a symphony of taste. From
                meticulously rolled sushi rolls bursting with fresh ingredients
                to delicate sashimi slices that melt in your mouth, their menu
                offers an unforgettable journey through the rich tapestry of
                Japanese cuisine.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.whereToFindParent}>
          <div className={styles.whereToFind}>Where to find</div>
          <img
            className={styles.contentContainerForFinding}
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <i className={styles.tipLookFor}>Tip: Look for the intersection</i>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
