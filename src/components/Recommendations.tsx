import { FunctionComponent } from "react";
import RecommendationCard from "./RecommendationCard";
import styles from "./Recommendations.module.css";

const Recommendations: FunctionComponent = () => {
  return (
    <div className={styles.recommendations}>
      <div className={styles.birchBlvdHarmonyville}>
        <h3 className={styles.recommendedPlaces}>Recommended Places</h3>
        <div className={styles.steakHouse}>
          <div className={styles.pastaPerleSaladStation}>
            <div className={styles.all}>All</div>
            <div className={styles.restaurants}>Restaurants</div>
            <div className={styles.artsCulture}>{`Arts & Culture`}</div>
            <div className={styles.shopping}>Shopping</div>
            <div className={styles.nature}>Nature</div>
            <div className={styles.activities}>Activities</div>
          </div>
          <div className={styles.filter}>
            <div className={styles.sortBy}>Sort by</div>
            <div className={styles.mostPopularParent}>
              <div className={styles.mostPopular}>Most popular</div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.mainNav}>
        <RecommendationCard
          rating="4.5"
          price="$"
          address="123 Main St, Anytown"
          title="Joe’s Diner"
          fav="/fav-1.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
        <RecommendationCard
          rating="4.8"
          price="$$$"
          address="789 Pine Dr, Pleasantville"
          title="Steak House"
          fav="/fav-2.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
        <RecommendationCard
          rating="4.6"
          price="$$"
          address="101 Oak Lane, Sunnyvale"
          title="Pasta Perle"
          fav="/fav-1.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
        <RecommendationCard
          rating="4.9"
          price="$$$"
          address="456 Elm St, Smallville"
          title="The Bridle Path"
          fav="/fav-2.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
        <RecommendationCard
          rating="4.7"
          price="$$"
          address="216 Cedar Ave, Rivertown"
          title="Salad Station"
          fav="/fav-2.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
        <RecommendationCard
          rating="4.9"
          price="$"
          address="3 Birch Blvd, Harmonyville"
          title="Fry 'n' Fly"
          fav="/fav-1.svg"
          claritystarSolid="/claritystarsolid.svg"
        />
      </footer>
    </div>
  );
};

export default Recommendations;
