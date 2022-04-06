import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
const FeatureCard = ({ iconUrl, iconText }) => {
  return (
    <div className={styles.featureCard}>
      <img src={iconUrl} alt="icon" styles={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};
const Features = ({}) => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            NFT Shocase has been developed using React-Native
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText={"react native"} />
          <FeatureCard iconUrl={assets.javascript} iconText={"javascript"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
