import { FunctionComponent, useCallback } from "react";
import Start from "../components/Start";
import SearchResults from "../components/SearchRestults";
import RecommendationCard from "../components/RecommendationCard";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const onHourMinsClick = useCallback(() => {
    //TODO: TODO: Call the amazing BuildShip API
  }, []);

  return (
    <div className={styles.homepage}>
      <section className={styles.travelAB}>
        <header className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.logo1Icon}
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
          <div className={styles.logo1}>
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
              <div className={styles.travelerEnthusiast}>
                Traveler Enthusiast
              </div>
            </div>
            <img
              className={styles.iconamoonarrowUp2Light}
              alt=""
              src="/iconamoonarrowup2light@2x.png"
            />
          </div>
        </header>
        <div className={styles.whereAreWeGoingLily}>
          <div className={styles.frameParent}>
            <div className={styles.whereAreWeGoingLilyWrapper}>
              <h2 className={styles.whereAreWe}>Where are we going, Lily?</h2>
            </div>
            <div className={styles.actions}>
              <div className={styles.searchbar}>
                <Start start="Start" />
                <Start
                  start="Destination"
                  sanIgnacioPlaceholder="Belmopan"
                  propWidth="107px"
                  propMinWidth="68px"
                  propMinWidth1="43px"
                />
                <button className={styles.hourMins} onClick={onHourMinsClick}>
                  <img
                    className={styles.subtractIcon}
                    loading="lazy"
                    alt=""
                    src="/subtract@2x.png"
                  />
                  <div className={styles.letsGo}>Let’s go!</div>
                </button>
              </div>
              <SearchResults
                distance="115 km"
                duration="1 hour 49 mins"
                cost="$114.048"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.elmStSmallville}>
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
        <div className={styles.mainStreets}>
          <div className={styles.viewMoreWith}>View more with</div>
          <div className={styles.mapViewSwitcher}>
            <div className={styles.icbaselineMapParent}>
              <img
                className={styles.icbaselineMapIcon}
                loading="lazy"
                alt=""
                src="/icbaselinemap.svg"
              />
              <div className={styles.mapView}>Map view</div>
            </div>
            <div className={styles.materialSymbolslistParent}>
              <img
                className={styles.materialSymbolslistIcon}
                loading="lazy"
                alt=""
                src="/materialsymbolslist.svg"
              />
              <div className={styles.listView}>List view</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
