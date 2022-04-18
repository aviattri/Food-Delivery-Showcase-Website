import React from "react";
import styles from "../styles/Global";
import Button from "./Button";
import assets from "../assets";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockImg,
  mockImg2,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen my-0 ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner} `}
    >
      <div
        className={`flex items-center my-0
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
         w-11/12 sm:w-full mindmd-3/4`}
      >
        <div
          className={`${styles.descDiv}
           ${reverse ? "fadeRightMini" : "fadeLeftMini"} 
           ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} 
            ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} 
            ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@aviattri/FoodDeliveryApp?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div
          className={`${reverse ? "fadeRightMini" : "fadeLeftMini"} 
          ${styles.flexCenter} flex-1 p-0 sm:px-0`}
        >
          <img src={mockImg} alt="mockupImg" className={styles.sectionImg} />
          {mockImg2 && (
            <img src={mockImg2} alt="mockupImg" className={styles.sectionImg} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
