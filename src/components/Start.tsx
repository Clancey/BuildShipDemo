import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Start.module.css";

export type StartType = {
  start?: string;
  sanIgnacioPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Start: FunctionComponent<StartType> = ({
  start,
  sanIgnacioPlaceholder,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const startStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const sanIgnacioStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.start}>
      <div className={styles.rimapPin4LineParent} style={frameDivStyle}>
        <img
          className={styles.rimapPin4LineIcon}
          alt=""
          src="/rimappin4line.svg"
        />
        <div className={styles.startParent}>
          <div className={styles.start1} style={startStyle}>
            {start}
          </div>
          <input
            className={styles.sanIgnacio}
            type="text"
            style={sanIgnacioStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
