import React from "react";
import styles from "../styles/Global";
import Lottie from "react-lottie";
import download from "../assets/animations/downloadApp.json";
import scanCode from "../assets/animations/scanCode.json";
import login from "../assets/animations/login.json";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText} `}>
            Steps to run the App
          </h1>
          <button
            className={`${styles.pText} ${styles.blackText} `}
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/expo-go/id982107779",
                "_blank"
              )
            }
          >
            Download Expo go
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: download,
              }}
              height={200}
              width={200}
            />
          </button>

          <button
            className={`${styles.pText} ${styles.blackText} `}
            onClick={() =>
              window.open(
                "https://expo.dev/@aviattri/FoodDeliveryApp?serviceType=classic&distribution=expo-go",
                "_blank"
              )
            }
          >
            Scan the QR code
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: scanCode,
              }}
              height={200}
              width={200}
            />
          </button>

          <p className={`${styles.pText} ${styles.blackText} `}>
            Login to the app to order food ( use any username and password )
          </p>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: login,
            }}
            height={200}
            width={200}
          />
        </div>
        {/* <button className={styles.btnPrimary} href="www.google.com">
          Source Code
        </button> */}
        <div className={styles.flexCenter}>
          {/* <p className={`${styles.pText} ${styles.blackText} `}>
            Scan the qr code
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Download;
